export enum PERMISSIONS {
  // Platform roles
  PLATFORM_ROLE_READ = "platform_role::read",
  PLATFORM_ROLE_CREATE = "platform_role::create",
  PLATFORM_ROLE_UPDATE = "platform_role::update",
  PLATFORM_ROLE_DELETE = "platform_role::delete",

  // Platform users
  PLATFORM_USER_READ = "platform_user::read",
  PLATFORM_USER_CREATE = "platform_user::create",
  PLATFORM_USER_UPDATE = "platform_user::update",
  PLATFORM_USER_DELETE = "platform_user::delete",

  // Manufacturers
  MANUFACTURER_READ = "manufacturer::read",
  MANUFACTURER_CREATE = "manufacturer::create",
  MANUFACTURER_UPDATE = "manufacturer::update",
  MANUFACTURER_DELETE = "manufacturer::delete",

  // Users
  USER_READ = "user::read",
  USER_CREATE = "user::create",
  USER_UPDATE = "user::update",
  USER_DELETE = "user::delete",

  // Subcontractors
  SUBCONTRACTOR_READ = "subcontractor::read",
  SUBCONTRACTOR_CREATE = "subcontractor::create",
  SUBCONTRACTOR_UPDATE = "subcontractor::update",
  SUBCONTRACTOR_DELETE = "subcontractor::delete",

  // Warehouses
  WAREHOUSE_READ = "warehouse::read",
  WAREHOUSE_CREATE = "warehouse::create",
  WAREHOUSE_UPDATE = "warehouse::update",
  WAREHOUSE_DELETE = "warehouse::delete",

  // Brands
  BRAND_READ = "brand::read",
  BRAND_CREATE = "brand::create",
  BRAND_UPDATE = "brand::update",
  BRAND_DELETE = "brand::delete",

  // Transport Masters
  TRANSPORT_MASTER_READ = "transport_master::read",
  TRANSPORT_MASTER_CREATE = "transport_master::create",
  TRANSPORT_MASTER_UPDATE = "transport_master::update",
  TRANSPORT_MASTER_DELETE = "transport_master::delete",

  // Material Masters
  MATERIAL_MASTER_READ = "material_master::read",
  MATERIAL_MASTER_CREATE = "material_master::create",
  MATERIAL_MASTER_UPDATE = "material_master::update",
  MATERIAL_MASTER_DELETE = "material_master::delete",

  // Operations Masters
  OPERATIONS_MASTER_READ = "operations_master::read",
  OPERATIONS_MASTER_CREATE = "operations_master::create",
  OPERATIONS_MASTER_UPDATE = "operations_master::update",
  OPERATIONS_MASTER_DELETE = "operations_master::delete",

  // Purchase Orders
  PURCHASE_ORDER_READ = "purchase_order::read",
  PURCHASE_ORDER_CREATE = "purchase_order::create",
  PURCHASE_ORDER_UPDATE = "purchase_order::update",
  PURCHASE_ORDER_DELETE = "purchase_order::delete",

  // Purchase Order Receivables
  PURCHASE_ORDER_RECEIVABLE_READ = "purchase_order_receivable::read",
  PURCHASE_ORDER_RECEIVABLE_CREATE = "purchase_order_receivable::create",
  PURCHASE_ORDER_RECEIVABLE_UPDATE = "purchase_order_receivable::update",
  PURCHASE_ORDER_RECEIVABLE_DELETE = "purchase_order_receivable::delete",

  // Bills
  BILL_READ = "bill::read",
  BILL_CREATE = "bill::create",
  BILL_UPDATE = "bill::update",
  BILL_DELETE = "bill::delete",

  // Payments
  PAYMENT_READ = "payment::read",
  PAYMENT_CREATE = "payment::create",
  PAYMENT_UPDATE = "payment::update",
  PAYMENT_DELETE = "payment::delete",

  // Purchase Returns
  PURCHASE_RETURN_READ = "purchase_return::read",
  PURCHASE_RETURN_CREATE = "purchase_return::create",
  PURCHASE_RETURN_UPDATE = "purchase_return::update",
  PURCHASE_RETURN_DELETE = "purchase_return::delete",

  // Vendors
  VENDOR_READ = "vendor::read",
  VENDOR_CREATE = "vendor::create",
  VENDOR_UPDATE = "vendor::update",
  VENDOR_DELETE = "vendor::delete",

  // Items
  ITEM_READ = "item::read",
  ITEM_CREATE = "item::create",
  ITEM_UPDATE = "item::update",
  ITEM_DELETE = "item::delete",

  // Adjustments
  ADJUSTMENT_READ = "adjustment::read",
  ADJUSTMENT_CREATE = "adjustment::create",
  ADJUSTMENT_UPDATE = "adjustment::update",
  ADJUSTMENT_DELETE = "adjustment::delete",

  // Customers
  CUSTOMER_READ = "customer::read",
  CUSTOMER_CREATE = "customer::create",
  CUSTOMER_UPDATE = "customer::update",
  CUSTOMER_DELETE = "customer::delete",

  // Sales Orders
  SALES_ORDER_READ = "sales_order::read",
  SALES_ORDER_CREATE = "sales_order::create",
  SALES_ORDER_UPDATE = "sales_order::update",
  SALES_ORDER_DELETE = "sales_order::delete",

  // Stock Transfer Orders
  STOCK_TRANSFER_ORDER_READ = "stock_transfer_order::read",
  STOCK_TRANSFER_ORDER_CREATE = "stock_transfer_order::create",
  STOCK_TRANSFER_ORDER_UPDATE = "stock_transfer_order::update",
  STOCK_TRANSFER_ORDER_DELETE = "stock_transfer_order::delete",

  // Delivery Challans
  DELIVERY_CHALLAN_READ = "delivery_challan::read",
  DELIVERY_CHALLAN_CREATE = "delivery_challan::create",
  DELIVERY_CHALLAN_UPDATE = "delivery_challan::update",
  DELIVERY_CHALLAN_DELETE = "delivery_challan::delete",

  // Invoices
  INVOICE_READ = "invoice::read",
  INVOICE_CREATE = "invoice::create",
  INVOICE_UPDATE = "invoice::update",
  INVOICE_DELETE = "invoice::delete",

  // Payments Received
  PAYMENT_RECEIVED_READ = "payment_received::read",
  PAYMENT_RECEIVED_CREATE = "payment_received::create",
  PAYMENT_RECEIVED_UPDATE = "payment_received::update",
  PAYMENT_RECEIVED_DELETE = "payment_received::delete",

  // Sales Returns
  SALES_RETURN_READ = "sales_return::read",
  SALES_RETURN_CREATE = "sales_return::create",
  SALES_RETURN_UPDATE = "sales_return::update",
  SALES_RETURN_DELETE = "sales_return::delete",

  // Production Operations
  PRODUCTION_OPERATION_READ = "production_operation::read",
  PRODUCTION_OPERATION_CREATE = "production_operation::create",
  PRODUCTION_OPERATION_UPDATE = "production_operation::update",
  PRODUCTION_OPERATION_DELETE = "production_operation::delete",

  // Routings
  ROUTING_READ = "routing::read",
  ROUTING_CREATE = "routing::create",
  ROUTING_UPDATE = "routing::update",
  ROUTING_DELETE = "routing::delete",

  // Bills of Materials
  BILL_OF_MATERIAL_READ = "bill_of_material::read",
  BILL_OF_MATERIAL_CREATE = "bill_of_material::create",
  BILL_OF_MATERIAL_UPDATE = "bill_of_material::update",
  BILL_OF_MATERIAL_DELETE = "bill_of_material::delete",

  // Production Orders
  PRODUCTION_ORDER_READ = "production_order::read",
  PRODUCTION_ORDER_CREATE = "production_order::create",
  PRODUCTION_ORDER_UPDATE = "production_order::update",
  PRODUCTION_ORDER_DELETE = "production_order::delete",

  // Process Trackings
  PROCESS_TRACKING_READ = "process_tracking::read",
  PROCESS_TRACKING_CREATE = "process_tracking::create",
  PROCESS_TRACKING_UPDATE = "process_tracking::update",
  PROCESS_TRACKING_DELETE = "process_tracking::delete",

  // Chart of Accounts
  CHART_OF_ACCOUNTS_READ = "chart_of_accounts::read",
  CHART_OF_ACCOUNTS_CREATE = "chart_of_accounts::create",
  CHART_OF_ACCOUNTS_UPDATE = "chart_of_accounts::update",
  CHART_OF_ACCOUNTS_DELETE = "chart_of_accounts::delete",

  // Reports
  REPORTS_READ = "reports::read",
  REPORTS_CREATE = "reports::create",
  REPORTS_UPDATE = "reports::update",
  REPORTS_DELETE = "reports::delete",

  // Roles
  ROLES_READ = "roles::read",
  ROLES_CREATE = "roles::create",
  ROLES_UPDATE = "roles::update",
  ROLES_DELETE = "roles::delete",

  // Shipments
  SHIPMENTS_READ = "shipments::read",
  SHIPMENTS_CREATE = "shipments::create",
  SHIPMENTS_UPDATE = "shipments::update",
  SHIPMENTS_DELETE = "shipments::delete",

  // Shipments
  INVENTORY_LOG_READ = "inventory_log::read",
  INVENTORY_LOG_CREATE = "inventory_log::create",
  INVENTORY_LOG_UPDATE = "inventory_log::update",
  INVENTORY_LOG_DELETE = "inventory_log::delete",

  OPERATION_READ = "operation::read",
  OPERATION_CREATE = "operation::create",
  OPERATION_UPDATE = "operation::update",
  OPERATION_DELETE = "operation::delete",

  PRODUCTION_PROCESS_READ = "production_process::read",
  PRODUCTION_PROCESS_CREATE = "production_process::create",
  PRODUCTION_PROCESS_UPDATE = "production_process::update",
  PRODUCTION_PROCESS_DELETE = "production_process::delete",
}
