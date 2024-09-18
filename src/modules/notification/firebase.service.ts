import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import * as process from 'node:process';

@Injectable()
export class FirebaseService {
  private readonly storage: admin.storage.Storage;

  constructor() {
    const credentials: ServiceAccount = {
      projectId: process.env.PROJECT_ID,
      clientEmail: process.env.CLIENT_EMAIL,
      privateKey: process.env.PRIVATE_KEY,
    };

    admin.initializeApp({
      credential: admin.credential.cert(credentials),
      storageBucket: process.env.STORAGE_BUCKET,
    });
    this.storage = admin.storage();
  }

  getStorageInstance(): admin.storage.Storage {
    return this.storage;
  }
}
