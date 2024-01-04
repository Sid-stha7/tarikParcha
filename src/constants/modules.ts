import { MODULES } from "./module.enum";

//
interface IModuleItem {
  key: MODULES;
  value: bigint;
}

//
export const MODULE_LIST: IModuleItem[] = [
  {
    key: MODULES.USERS,
    value: 1n << 0n,
  },
  {
    key: MODULES.ROLES,
    value: 1n << 1n,
  },
  {
    key: MODULES.SUBCONTRACTORS,
    value: 1n << 2n,
  },
  {
    key: MODULES.WAREHOUSES,
    value: 1n << 3n,
  },
  {
    key: MODULES.BRANDS,
    value: 1n << 4n,
  },
  {
    key: MODULES.TRANSPORT_MASTERS,
    value: 1n << 5n,
  },
  {
    key: MODULES.MATERIAL_MASTERS,
    value: 1n << 6n,
  },
  {
    key: MODULES.OPERATIONS_MASTERS,
    value: 1n << 7n,
  },
  {
    key: MODULES.PURCHASE_ORDERS,
    value: 1n << 8n,
  },
  {
    key: MODULES.PURCHASE_ORDER_RECEIVABLES,
    value: 1n << 9n,
  },
  {
    key: MODULES.BILLS,
    value: 1n << 10n,
  },
  {
    key: MODULES.PAYMENTS,
    value: 1n << 11n,
  },
  {
    key: MODULES.PURCHASE_RETURNS,
    value: 1n << 12n,
  },
  {
    key: MODULES.VENDORS,
    value: 1n << 13n,
  },
  {
    key: MODULES.ITEMS,
    value: 1n << 14n,
  },
  {
    key: MODULES.ADJUSTMENTS,
    value: 1n << 15n,
  },
  {
    key: MODULES.CUSTOMERS,
    value: 1n << 16n,
  },
  {
    key: MODULES.SALES_ORDERS,
    value: 1n << 17n,
  },
  {
    key: MODULES.STOCK_TRANSFER_ORDERS,
    value: 1n << 18n,
  },
  {
    key: MODULES.DELIVERY_CHALLANS,
    value: 1n << 19n,
  },
  {
    key: MODULES.INVOICES,
    value: 1n << 20n,
  },
  {
    key: MODULES.PAYMENTS_RECEIVED,
    value: 1n << 21n,
  },
  {
    key: MODULES.SALES_RETURNS,
    value: 1n << 22n,
  },
  {
    key: MODULES.PRODUCTION_OPERATIONS,
    value: 1n << 23n,
  },
  {
    key: MODULES.ROUTINGS,
    value: 1n << 24n,
  },
  {
    key: MODULES.BILLS_OF_MATERIALS,
    value: 1n << 25n,
  },
  {
    key: MODULES.PRODUCTION_ORDERS,
    value: 1n << 26n,
  },
  {
    key: MODULES.PROCESS_TRACKINGS,
    value: 1n << 27n,
  },
  {
    key: MODULES.CHART_OF_ACCOUNTS,
    value: 1n << 28n,
  },
  {
    key: MODULES.REPORTS,
    value: 1n << 29n,
  },

  {
    key: MODULES.SHIPMENTS,
    value: 1n << 30n,
  },

  {
    key: MODULES.INVENTORY_LOG,
    value: 1n << 31n,
  },

  {
    key: MODULES.OPERATIONS,
    value: 1n << 32n,
  },

  {
    key: MODULES.PRODUCTION_PROCESS,
    value: 1n << 33n,
  },
];

/**
 * Warning::
 * This is just a temporary workaround until modules are implemented in Manufacturer
 */
export const ALL_MODULES = MODULE_LIST.map((permModule) => permModule.key);
