import { Injectable, UnauthorizedException } from '@nestjs/common';

//
import { Request as RequestType } from 'express';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

//
import { userRepository } from '../../users/entities/user.repository';

//
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.extractJWT,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async validate(payload: any): Promise<IAuthUser> {
    const user = await userRepository.findOne({
      where: { id: payload.sub },
      withDeleted: false,
    });
    if (user.deleted_at !== null) {
      throw new UnauthorizedException('Unauthorize User.');
    }

    return {
      id: user.id,
      email: user.email,
      username: user.username,
    };
  }

  private static extractJWT(req: RequestType): string | null {
    if (req.cookies && 'access-token' in req.cookies) {
      return req.cookies['access-token'];
    }
    return null;
  }
}
