import { MODULES } from "./module.enum";
import { PERMISSIONS } from "./permission.enum";

interface IPermissionItem {
  key: PERMISSIONS;
  module: MODULES;
  permission: bigint;
}

export const MODULE_PERMISSIONS: IPermissionItem[] = [
  // Platform roles
  {
    key: PERMISSIONS.PLATFORM_ROLE_CREATE,
    module: MODULES.PLATFORM_ROLES,
    permission: 1n << 0n,
  },
  {
    key: PERMISSIONS.PLATFORM_ROLE_READ,
    module: MODULES.PLATFORM_ROLES,
    permission: 1n << 1n,
  },
  {
    key: PERMISSIONS.PLATFORM_ROLE_UPDATE,
    module: MODULES.PLATFORM_ROLES,
    permission: 1n << 2n,
  },
  {
    key: PERMISSIONS.PLATFORM_ROLE_DELETE,
    module: MODULES.PLATFORM_ROLES,
    permission: 1n << 3n,
  },

  // Platform users
  {
    key: PERMISSIONS.PLATFORM_USER_CREATE,
    module: MODULES.PLATFORM_USERS,
    permission: 1n << 4n,
  },
  {
    key: PERMISSIONS.PLATFORM_USER_READ,
    module: MODULES.PLATFORM_USERS,
    permission: 1n << 5n,
  },
  {
    key: PERMISSIONS.PLATFORM_USER_UPDATE,
    module: MODULES.PLATFORM_USERS,
    permission: 1n << 6n,
  },
  {
    key: PERMISSIONS.PLATFORM_USER_DELETE,
    module: MODULES.PLATFORM_USERS,
    permission: 1n << 7n,
  },

  // Manufacturers
  {
    key: PERMISSIONS.MANUFACTURER_CREATE,
    module: MODULES.MANUFACTURERS,
    permission: 1n << 8n,
  },
  {
    key: PERMISSIONS.MANUFACTURER_READ,
    module: MODULES.MANUFACTURERS,
    permission: 1n << 9n,
  },
  {
    key: PERMISSIONS.MANUFACTURER_UPDATE,
    module: MODULES.MANUFACTURERS,
    permission: 1n << 10n,
  },
  {
    key: PERMISSIONS.MANUFACTURER_DELETE,
    module: MODULES.MANUFACTURERS,
    permission: 1n << 11n,
  },

  // Users
  {
    key: PERMISSIONS.USER_CREATE,
    module: MODULES.USERS,
    permission: 1n << 12n,
  },
  {
    key: PERMISSIONS.USER_READ,
    module: MODULES.USERS,
    permission: 1n << 13n,
  },
  {
    key: PERMISSIONS.USER_UPDATE,
    module: MODULES.USERS,
    permission: 1n << 14n,
  },
  {
    key: PERMISSIONS.USER_DELETE,
    module: MODULES.USERS,
    permission: 1n << 15n,
  },

  // Subcontractors
  {
    key: PERMISSIONS.SUBCONTRACTOR_CREATE,
    module: MODULES.SUBCONTRACTORS,
    permission: 1n << 16n,
  },
  {
    key: PERMISSIONS.SUBCONTRACTOR_READ,
    module: MODULES.SUBCONTRACTORS,
    permission: 1n << 17n,
  },
  {
    key: PERMISSIONS.SUBCONTRACTOR_UPDATE,
    module: MODULES.SUBCONTRACTORS,
    permission: 1n << 18n,
  },
  {
    key: PERMISSIONS.SUBCONTRACTOR_DELETE,
    module: MODULES.SUBCONTRACTORS,
    permission: 1n << 19n,
  },

  // Warehouses
  {
    key: PERMISSIONS.WAREHOUSE_CREATE,
    module: MODULES.WAREHOUSES,
    permission: 1n << 20n,
  },
  {
    key: PERMISSIONS.WAREHOUSE_READ,
    module: MODULES.WAREHOUSES,
    permission: 1n << 21n,
  },
  {
    key: PERMISSIONS.WAREHOUSE_UPDATE,
    module: MODULES.WAREHOUSES,
    permission: 1n << 22n,
  },
  {
    key: PERMISSIONS.WAREHOUSE_DELETE,
    module: MODULES.WAREHOUSES,
    permission: 1n << 23n,
  },

  // Brands
  {
    key: PERMISSIONS.BRAND_CREATE,
    module: MODULES.BRANDS,
    permission: 1n << 24n,
  },
  {
    key: PERMISSIONS.BRAND_READ,
    module: MODULES.BRANDS,
    permission: 1n << 25n,
  },
  {
    key: PERMISSIONS.BRAND_UPDATE,
    module: MODULES.BRANDS,
    permission: 1n << 26n,
  },
  {
    key: PERMISSIONS.BRAND_DELETE,
    module: MODULES.BRANDS,
    permission: 1n << 27n,
  },

  // Transport Masters
  {
    key: PERMISSIONS.TRANSPORT_MASTER_CREATE,
    module: MODULES.TRANSPORT_MASTERS,
    permission: 1n << 28n,
  },
  {
    key: PERMISSIONS.TRANSPORT_MASTER_READ,
    module: MODULES.TRANSPORT_MASTERS,
    permission: 1n << 29n,
  },
  {
    key: PERMISSIONS.TRANSPORT_MASTER_UPDATE,
    module: MODULES.TRANSPORT_MASTERS,
    permission: 1n << 30n,
  },
  {
    key: PERMISSIONS.TRANSPORT_MASTER_DELETE,
    module: MODULES.TRANSPORT_MASTERS,
    permission: 1n << 31n,
  },

  // Material Masters
  {
    key: PERMISSIONS.MATERIAL_MASTER_CREATE,
    module: MODULES.MATERIAL_MASTERS,
    permission: 1n << 32n,
  },
  {
    key: PERMISSIONS.MATERIAL_MASTER_READ,
    module: MODULES.MATERIAL_MASTERS,
    permission: 1n << 33n,
  },
  {
    key: PERMISSIONS.MATERIAL_MASTER_UPDATE,
    module: MODULES.MATERIAL_MASTERS,
    permission: 1n << 34n,
  },
  {
    key: PERMISSIONS.MATERIAL_MASTER_DELETE,
    module: MODULES.MATERIAL_MASTERS,
    permission: 1n << 35n,
  },

  // Operations Masters
  {
    key: PERMISSIONS.OPERATIONS_MASTER_CREATE,
    module: MODULES.OPERATIONS_MASTERS,
    permission: 1n << 36n,
  },
  {
    key: PERMISSIONS.OPERATIONS_MASTER_READ,
    module: MODULES.OPERATIONS_MASTERS,
    permission: 1n << 37n,
  },
  {
    key: PERMISSIONS.OPERATIONS_MASTER_UPDATE,
    module: MODULES.OPERATIONS_MASTERS,
    permission: 1n << 38n,
  },
  {
    key: PERMISSIONS.OPERATIONS_MASTER_DELETE,
    module: MODULES.OPERATIONS_MASTERS,
    permission: 1n << 39n,
  },

  // Purchase Orders
  {
    key: PERMISSIONS.PURCHASE_ORDER_CREATE,
    module: MODULES.PURCHASE_ORDERS,
    permission: 1n << 40n,
  },
  {
    key: PERMISSIONS.PURCHASE_ORDER_READ,
    module: MODULES.PURCHASE_ORDERS,
    permission: 1n << 41n,
  },
  {
    key: PERMISSIONS.PURCHASE_ORDER_UPDATE,
    module: MODULES.PURCHASE_ORDERS,
    permission: 1n << 42n,
  },
  {
    key: PERMISSIONS.PURCHASE_ORDER_DELETE,
    module: MODULES.PURCHASE_ORDERS,
    permission: 1n << 43n,
  },

  // Purchase Order Receivables
  {
    key: PERMISSIONS.PURCHASE_ORDER_RECEIVABLE_CREATE,
    module: MODULES.PURCHASE_ORDER_RECEIVABLES,
    permission: 1n << 44n,
  },
  {
    key: PERMISSIONS.PURCHASE_ORDER_RECEIVABLE_READ,
    module: MODULES.PURCHASE_ORDER_RECEIVABLES,
    permission: 1n << 45n,
  },
  {
    key: PERMISSIONS.PURCHASE_ORDER_RECEIVABLE_UPDATE,
    module: MODULES.PURCHASE_ORDER_RECEIVABLES,
    permission: 1n << 46n,
  },
  {
    key: PERMISSIONS.PURCHASE_ORDER_RECEIVABLE_DELETE,
    module: MODULES.PURCHASE_ORDER_RECEIVABLES,
    permission: 1n << 47n,
  },

  // Bills
  {
    key: PERMISSIONS.BILL_CREATE,
    module: MODULES.BILLS,
    permission: 1n << 48n,
  },
  {
    key: PERMISSIONS.BILL_READ,
    module: MODULES.BILLS,
    permission: 1n << 49n,
  },
  {
    key: PERMISSIONS.BILL_UPDATE,
    module: MODULES.BILLS,
    permission: 1n << 50n,
  },
  {
    key: PERMISSIONS.BILL_DELETE,
    module: MODULES.BILLS,
    permission: 1n << 51n,
  },

  // Payments
  {
    key: PERMISSIONS.PAYMENT_CREATE,
    module: MODULES.PAYMENTS,
    permission: 1n << 52n,
  },
  {
    key: PERMISSIONS.PAYMENT_READ,
    module: MODULES.PAYMENTS,
    permission: 1n << 53n,
  },
  {
    key: PERMISSIONS.PAYMENT_UPDATE,
    module: MODULES.PAYMENTS,
    permission: 1n << 54n,
  },
  {
    key: PERMISSIONS.PAYMENT_DELETE,
    module: MODULES.PAYMENTS,
    permission: 1n << 55n,
  },

  // Purchase Returns
  {
    key: PERMISSIONS.PURCHASE_RETURN_CREATE,
    module: MODULES.PURCHASE_RETURNS,
    permission: 1n << 56n,
  },
  {
    key: PERMISSIONS.PURCHASE_RETURN_READ,
    module: MODULES.PURCHASE_RETURNS,
    permission: 1n << 57n,
  },
  {
    key: PERMISSIONS.PURCHASE_RETURN_UPDATE,
    module: MODULES.PURCHASE_RETURNS,
    permission: 1n << 58n,
  },
  {
    key: PERMISSIONS.PURCHASE_RETURN_DELETE,
    module: MODULES.PURCHASE_RETURNS,
    permission: 1n << 59n,
  },

  // Vendors
  {
    key: PERMISSIONS.VENDOR_CREATE,
    module: MODULES.VENDORS,
    permission: 1n << 60n,
  },
  {
    key: PERMISSIONS.VENDOR_READ,
    module: MODULES.VENDORS,
    permission: 1n << 61n,
  },
  {
    key: PERMISSIONS.VENDOR_UPDATE,
    module: MODULES.VENDORS,
    permission: 1n << 62n,
  },
  {
    key: PERMISSIONS.VENDOR_DELETE,
    module: MODULES.VENDORS,
    permission: 1n << 63n,
  },

  // Items
  {
    key: PERMISSIONS.ITEM_CREATE,
    module: MODULES.ITEMS,
    permission: 1n << 64n,
  },
  {
    key: PERMISSIONS.ITEM_READ,
    module: MODULES.ITEMS,
    permission: 1n << 65n,
  },
  {
    key: PERMISSIONS.ITEM_UPDATE,
    module: MODULES.ITEMS,
    permission: 1n << 66n,
  },
  {
    key: PERMISSIONS.ITEM_DELETE,
    module: MODULES.ITEMS,
    permission: 1n << 67n,
  },

  // Adjustments
  {
    key: PERMISSIONS.ADJUSTMENT_CREATE,
    module: MODULES.ADJUSTMENTS,
    permission: 1n << 68n,
  },
  {
    key: PERMISSIONS.ADJUSTMENT_READ,
    module: MODULES.ADJUSTMENTS,
    permission: 1n << 69n,
  },
  {
    key: PERMISSIONS.ADJUSTMENT_UPDATE,
    module: MODULES.ADJUSTMENTS,
    permission: 1n << 70n,
  },
  {
    key: PERMISSIONS.ADJUSTMENT_DELETE,
    module: MODULES.ADJUSTMENTS,
    permission: 1n << 71n,
  },

  // Customers
  {
    key: PERMISSIONS.CUSTOMER_CREATE,
    module: MODULES.CUSTOMERS,
    permission: 1n << 72n,
  },
  {
    key: PERMISSIONS.CUSTOMER_READ,
    module: MODULES.CUSTOMERS,
    permission: 1n << 73n,
  },
  {
    key: PERMISSIONS.CUSTOMER_UPDATE,
    module: MODULES.CUSTOMERS,
    permission: 1n << 74n,
  },
  {
    key: PERMISSIONS.CUSTOMER_DELETE,
    module: MODULES.CUSTOMERS,
    permission: 1n << 75n,
  },

  // Sales Orders
  {
    key: PERMISSIONS.SALES_ORDER_CREATE,
    module: MODULES.SALES_ORDERS,
    permission: 1n << 76n,
  },
  {
    key: PERMISSIONS.SALES_ORDER_READ,
    module: MODULES.SALES_ORDERS,
    permission: 1n << 77n,
  },
  {
    key: PERMISSIONS.SALES_ORDER_UPDATE,
    module: MODULES.SALES_ORDERS,
    permission: 1n << 78n,
  },
  {
    key: PERMISSIONS.SALES_ORDER_DELETE,
    module: MODULES.SALES_ORDERS,
    permission: 1n << 79n,
  },

  // Stock Transfer Orders
  {
    key: PERMISSIONS.STOCK_TRANSFER_ORDER_CREATE,
    module: MODULES.STOCK_TRANSFER_ORDERS,
    permission: 1n << 80n,
  },
  {
    key: PERMISSIONS.STOCK_TRANSFER_ORDER_READ,
    module: MODULES.STOCK_TRANSFER_ORDERS,
    permission: 1n << 81n,
  },
  {
    key: PERMISSIONS.STOCK_TRANSFER_ORDER_UPDATE,
    module: MODULES.STOCK_TRANSFER_ORDERS,
    permission: 1n << 82n,
  },
  {
    key: PERMISSIONS.STOCK_TRANSFER_ORDER_DELETE,
    module: MODULES.STOCK_TRANSFER_ORDERS,
    permission: 1n << 83n,
  },

  // Delivery Challans
  {
    key: PERMISSIONS.DELIVERY_CHALLAN_CREATE,
    module: MODULES.DELIVERY_CHALLANS,
    permission: 1n << 84n,
  },
  {
    key: PERMISSIONS.DELIVERY_CHALLAN_READ,
    module: MODULES.DELIVERY_CHALLANS,
    permission: 1n << 85n,
  },
  {
    key: PERMISSIONS.DELIVERY_CHALLAN_UPDATE,
    module: MODULES.DELIVERY_CHALLANS,
    permission: 1n << 86n,
  },
  {
    key: PERMISSIONS.DELIVERY_CHALLAN_DELETE,
    module: MODULES.DELIVERY_CHALLANS,
    permission: 1n << 87n,
  },

  // Invoices
  {
    key: PERMISSIONS.INVOICE_CREATE,
    module: MODULES.INVOICES,
    permission: 1n << 88n,
  },
  {
    key: PERMISSIONS.INVOICE_READ,
    module: MODULES.INVOICES,
    permission: 1n << 89n,
  },
  {
    key: PERMISSIONS.INVOICE_UPDATE,
    module: MODULES.INVOICES,
    permission: 1n << 90n,
  },
  {
    key: PERMISSIONS.INVOICE_DELETE,
    module: MODULES.INVOICES,
    permission: 1n << 91n,
  },

  // Payments Received
  {
    key: PERMISSIONS.PAYMENT_RECEIVED_CREATE,
    module: MODULES.PAYMENTS_RECEIVED,
    permission: 1n << 92n,
  },
  {
    key: PERMISSIONS.PAYMENT_RECEIVED_READ,
    module: MODULES.PAYMENTS_RECEIVED,
    permission: 1n << 93n,
  },
  {
    key: PERMISSIONS.PAYMENT_RECEIVED_UPDATE,
    module: MODULES.PAYMENTS_RECEIVED,
    permission: 1n << 94n,
  },
  {
    key: PERMISSIONS.PAYMENT_RECEIVED_DELETE,
    module: MODULES.PAYMENTS_RECEIVED,
    permission: 1n << 95n,
  },

  // Sales return
  {
    key: PERMISSIONS.SALES_RETURN_CREATE,
    module: MODULES.SALES_RETURNS,
    permission: 1n << 96n,
  },
  {
    key: PERMISSIONS.SALES_RETURN_READ,
    module: MODULES.SALES_RETURNS,
    permission: 1n << 97n,
  },
  {
    key: PERMISSIONS.SALES_RETURN_UPDATE,
    module: MODULES.SALES_RETURNS,
    permission: 1n << 98n,
  },
  {
    key: PERMISSIONS.SALES_RETURN_DELETE,
    module: MODULES.SALES_RETURNS,
    permission: 1n << 99n,
  },

  // Production Operations
  {
    key: PERMISSIONS.PRODUCTION_OPERATION_CREATE,
    module: MODULES.PRODUCTION_OPERATIONS,
    permission: 1n << 100n,
  },
  {
    key: PERMISSIONS.PRODUCTION_OPERATION_READ,
    module: MODULES.PRODUCTION_OPERATIONS,
    permission: 1n << 101n,
  },
  {
    key: PERMISSIONS.PRODUCTION_OPERATION_UPDATE,
    module: MODULES.PRODUCTION_OPERATIONS,
    permission: 1n << 102n,
  },
  {
    key: PERMISSIONS.PRODUCTION_OPERATION_DELETE,
    module: MODULES.PRODUCTION_OPERATIONS,
    permission: 1n << 103n,
  },

  // Routings
  {
    key: PERMISSIONS.ROUTING_CREATE,
    module: MODULES.ROUTINGS,
    permission: 1n << 104n,
  },
  {
    key: PERMISSIONS.ROUTING_READ,
    module: MODULES.ROUTINGS,
    permission: 1n << 105n,
  },
  {
    key: PERMISSIONS.ROUTING_UPDATE,
    module: MODULES.ROUTINGS,
    permission: 1n << 106n,
  },
  {
    key: PERMISSIONS.ROUTING_DELETE,
    module: MODULES.ROUTINGS,
    permission: 1n << 107n,
  },

  // Bills of Materials
  {
    key: PERMISSIONS.BILL_OF_MATERIAL_CREATE,
    module: MODULES.BILLS_OF_MATERIALS,
    permission: 1n << 108n,
  },
  {
    key: PERMISSIONS.BILL_OF_MATERIAL_READ,
    module: MODULES.BILLS_OF_MATERIALS,
    permission: 1n << 109n,
  },
  {
    key: PERMISSIONS.BILL_OF_MATERIAL_UPDATE,
    module: MODULES.BILLS_OF_MATERIALS,
    permission: 1n << 110n,
  },
  {
    key: PERMISSIONS.BILL_OF_MATERIAL_DELETE,
    module: MODULES.BILLS_OF_MATERIALS,
    permission: 1n << 111n,
  },

  // Production Orders
  {
    key: PERMISSIONS.PRODUCTION_ORDER_CREATE,
    module: MODULES.PRODUCTION_ORDERS,
    permission: 1n << 112n,
  },
  {
    key: PERMISSIONS.PRODUCTION_ORDER_READ,
    module: MODULES.PRODUCTION_ORDERS,
    permission: 1n << 113n,
  },
  {
    key: PERMISSIONS.PRODUCTION_ORDER_UPDATE,
    module: MODULES.PRODUCTION_ORDERS,
    permission: 1n << 114n,
  },
  {
    key: PERMISSIONS.PRODUCTION_ORDER_DELETE,
    module: MODULES.PRODUCTION_ORDERS,
    permission: 1n << 115n,
  },

  // Process Trackings
  {
    key: PERMISSIONS.PROCESS_TRACKING_CREATE,
    module: MODULES.PROCESS_TRACKINGS,
    permission: 1n << 116n,
  },
  {
    key: PERMISSIONS.PROCESS_TRACKING_READ,
    module: MODULES.PROCESS_TRACKINGS,
    permission: 1n << 117n,
  },
  {
    key: PERMISSIONS.PROCESS_TRACKING_UPDATE,
    module: MODULES.PROCESS_TRACKINGS,
    permission: 1n << 118n,
  },
  {
    key: PERMISSIONS.PROCESS_TRACKING_DELETE,
    module: MODULES.PROCESS_TRACKINGS,
    permission: 1n << 119n,
  },

  // Chart of Accounts
  {
    key: PERMISSIONS.CHART_OF_ACCOUNTS_CREATE,
    module: MODULES.CHART_OF_ACCOUNTS,
    permission: 1n << 120n,
  },
  {
    key: PERMISSIONS.CHART_OF_ACCOUNTS_READ,
    module: MODULES.CHART_OF_ACCOUNTS,
    permission: 1n << 121n,
  },
  {
    key: PERMISSIONS.CHART_OF_ACCOUNTS_UPDATE,
    module: MODULES.CHART_OF_ACCOUNTS,
    permission: 1n << 122n,
  },
  {
    key: PERMISSIONS.CHART_OF_ACCOUNTS_DELETE,
    module: MODULES.CHART_OF_ACCOUNTS,
    permission: 1n << 123n,
  },

  // Reports
  {
    key: PERMISSIONS.REPORTS_CREATE,
    module: MODULES.REPORTS,
    permission: 1n << 124n,
  },
  {
    key: PERMISSIONS.REPORTS_READ,
    module: MODULES.REPORTS,
    permission: 1n << 125n,
  },
  {
    key: PERMISSIONS.REPORTS_UPDATE,
    module: MODULES.REPORTS,
    permission: 1n << 126n,
  },
  {
    key: PERMISSIONS.REPORTS_DELETE,
    module: MODULES.REPORTS,
    permission: 1n << 127n,
  },

  // Roles for manufacturer
  {
    key: PERMISSIONS.ROLES_CREATE,
    module: MODULES.ROLES,
    permission: 1n << 128n,
  },
  {
    key: PERMISSIONS.ROLES_READ,
    module: MODULES.ROLES,
    permission: 1n << 129n,
  },
  {
    key: PERMISSIONS.ROLES_UPDATE,
    module: MODULES.ROLES,
    permission: 1n << 130n,
  },
  {
    key: PERMISSIONS.ROLES_DELETE,
    module: MODULES.ROLES,
    permission: 1n << 131n,
  },

  // Shipments

  {
    key: PERMISSIONS.SHIPMENTS_CREATE,
    module: MODULES.SHIPMENTS,
    permission: 1n << 132n,
  },
  {
    key: PERMISSIONS.SHIPMENTS_READ,
    module: MODULES.SHIPMENTS,
    permission: 1n << 133n,
  },
  {
    key: PERMISSIONS.SHIPMENTS_UPDATE,
    module: MODULES.SHIPMENTS,
    permission: 1n << 134n,
  },
  {
    key: PERMISSIONS.SHIPMENTS_DELETE,
    module: MODULES.SHIPMENTS,
    permission: 1n << 135n,
  },

  // Inventory Log

  {
    key: PERMISSIONS.INVENTORY_LOG_CREATE,
    module: MODULES.INVENTORY_LOG,
    permission: 1n << 136n,
  },
  {
    key: PERMISSIONS.INVENTORY_LOG_READ,
    module: MODULES.INVENTORY_LOG,
    permission: 1n << 137n,
  },
  {
    key: PERMISSIONS.INVENTORY_LOG_UPDATE,
    module: MODULES.INVENTORY_LOG,
    permission: 1n << 138n,
  },
  {
    key: PERMISSIONS.INVENTORY_LOG_DELETE,
    module: MODULES.INVENTORY_LOG,
    permission: 1n << 139n,
  },

  // Operations

  {
    key: PERMISSIONS.OPERATION_CREATE,
    module: MODULES.OPERATIONS,
    permission: 1n << 140n,
  },
  {
    key: PERMISSIONS.OPERATION_READ,
    module: MODULES.OPERATIONS,
    permission: 1n << 141n,
  },
  {
    key: PERMISSIONS.OPERATION_UPDATE,
    module: MODULES.OPERATIONS,
    permission: 1n << 142n,
  },
  {
    key: PERMISSIONS.OPERATION_DELETE,
    module: MODULES.OPERATIONS,
    permission: 1n << 143n,
  },

  {
    key: PERMISSIONS.PRODUCTION_PROCESS_READ,
    module: MODULES.PRODUCTION_PROCESS,
    permission: 1n << 144n,
  },

  {
    key: PERMISSIONS.PRODUCTION_PROCESS_CREATE,
    module: MODULES.PRODUCTION_PROCESS,
    permission: 1n << 145n,
  },

  {
    key: PERMISSIONS.PRODUCTION_PROCESS_UPDATE,
    module: MODULES.PRODUCTION_PROCESS,
    permission: 1n << 146n,
  },
  {
    key: PERMISSIONS.PRODUCTION_PROCESS_DELETE,
    module: MODULES.PRODUCTION_PROCESS,
    permission: 1n << 147n,
  },
];

/**
 * Warning::
 * This is just a temporary workaround until modules are implemented in Manufacturer
 */
export const ALL_PERMISSIONS = MODULE_PERMISSIONS.slice(12).map(
  (permModule) => permModule.key,
);

/**
 * WARNING ::
 * Do not use in the codebase at all
 * It is used for seeding once only
 */
export const COMPLETE_PERMISSIONS = MODULE_PERMISSIONS.map(
  (permModule) => permModule.key,
);
