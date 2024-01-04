export enum MODULES {
  // These modules are available for platform user only
  PLATFORM_ROLES = "platform_roles",
  PLATFORM_USERS = "platform_users",
  MANUFACTURERS = "manufacturers",
  // These modules are available for all the users under any manufacturer
  // Masters
  USERS = "users",
  ROLES = "roles",
  SUBCONTRACTORS = "subcontractors",
  WAREHOUSES = "warehouses",
  BRANDS = "brands",
  TRANSPORT_MASTERS = "transport_masters",
  MATERIAL_MASTERS = "material_masters",
  OPERATIONS_MASTERS = "operations_masters",
  // Purchases
  PURCHASE_ORDERS = "purchase_orders",
  PURCHASE_ORDER_RECEIVABLES = "purchase_order_receivables",
  BILLS = "bills",
  PAYMENTS = "payments",
  PURCHASE_RETURNS = "purchase_returns",
  VENDORS = "vendors",
  // Inventory
  ITEMS = "items",
  ADJUSTMENTS = "adjustments",
  // Sales
  CUSTOMERS = "customers",
  SALES_ORDERS = "sales_orders",
  STOCK_TRANSFER_ORDERS = "stock_transfer_orders",
  DELIVERY_CHALLANS = "delivery_challans",
  INVOICES = "invoices",
  PAYMENTS_RECEIVED = "payments_received",
  SALES_RETURNS = "sales_returns",
  // Production
  PRODUCTION_OPERATIONS = "production_operations",
  ROUTINGS = "routings",
  BILLS_OF_MATERIALS = "bills_of_materials",
  PRODUCTION_ORDERS = "production_orders",
  PROCESS_TRACKINGS = "process_trackings",
  // IDK
  CHART_OF_ACCOUNTS = "chart_of_accounts",
  REPORTS = "reports",
  //Shipments
  SHIPMENTS = "shipments",
  INVENTORY_LOG = "inventory_log",

  // Operations
  OPERATIONS = "operation",
  PRODUCTION_PROCESS = "production_process",
}
