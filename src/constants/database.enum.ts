export enum DATABASE_TABLES {
  ROLES = 'roles',
  USERS = 'users',
  CASE = 'case',
  USERCASERELATION = 'userCaseRelation',
  NOTIFICATION_TOKEN = 'notification_token',
  NOTIFICATION = 'notification',
}

export enum DATABASE_FK {
  FK_CASE_RELATION_USER = 'fk_case_user',
  FK_CASE_RELATION_CASE = 'fk_case_case',

  FK_MANUFACTURER_ROLE = 'fk_manufacturer_role',
  FK_ROLE_USER = 'fk_user_role',
  FK_MANUFACTURER_USER = 'fk_manufacturer_user',
  FK_CREATOR_USER = 'fk_creator_user',
  FK_USER_MANUFACTURER = 'fk_user_manufacturer',
  FK_MANUFACTURER_WAREHOUSE = 'fk_manufacturer_warehouse',
  FK_MANUFACTURER_SUBCONTRACTOR = 'fk_manufacturer_subcontractor',
  FK_MANUFACTURER_TRANSPORTERS = 'fk_manufacturer_transporters',
  FK_MANUFACTURER_BRAND = 'fk_manufacturer_brand',
  FK_MANUFACTURER_ACCOUNT_TYPE = 'fk_manufacturer_account_type',
  FK_MANUFACTURER_ACCOUNT = 'fk_manufacturer_account',
  FK_BASE_ACCOUNT_TYPE = 'fk_base_account_type',
  FK_MANUFACTURE_ACCOUNT_PARENT = 'fk_manufacturer_account_parent',
  //

  FK_MANUFACTURER_INVENTORYITEM = 'fk_manufacturer_inventoryItem',
  FK_SELLINGACCOUNT_IVENTORYITEM = 'fk_sellingAccount_inventoryItem',
  FK_PURCHASEACCOUNT_INVENTORYITEM = 'fk_purchaseAccount_inventoryItem',
  FK_BRAND_INVENTORYITEM = 'fk_brand_inventoryItem',
  FK_MANUFACTURER_REASON = 'fk_manufacturer_reason',
  //
  FK_MANUFACTURER_STOCK = 'fk_manufacturer_stock',
  FK_INVENTORYITEM_STOCK = 'fk_inventoryItem_stock',
  FK_WAREHOUSE_STOCK = 'fk_warehouse_stock',
  FK_SUBCONTRACTOR_STOCK = 'fk_subcontractor_stock',
  // Inventory stock adjustment keys
  FK_MANUFACTURER_ADJUSTMENT = 'fk_manufacturer_stockAdjustment',
  FK_WAREHOUSE_ADJUSTMENT = 'fk_warehouse_stockAdjustment',
  FK_OLDWAREHOUSE_ADJUSTMENT = 'fk_oldwarehouse_stockAdjustment',
  FK_SUBCONTRACTOR_ADJUSTMENT = 'fk_subcontractor_stockAdjustment',
  FK_OLDSUBCONTRACTOR_ADJUSTMENT = 'fk_oldSubcontractor_stockAdjustment',
  FK_STOCK_ADJUSTMENT = 'fk_itemStock_stockAdjustment',
  FK_REASON_ADJUSTMENT = 'fk_reason_stockAdjustment',
  FK_OPERATOR_ADJUSTMENT = 'fk_user_stockAdjustment',

  //
  FK_MANUFACTURE_VENDOR = 'fk_manufacture_vendor',
  FK_COUNTRY_VENDORS = 'fk_country_vendors',

  Fk_MANUFACTURE_CUSTOMERS = 'fk_manufacture_customers',

  FK_COUNTRY_CUSTOMER = 'fk_country_customers',

  // Convention
  FK_ITEM_JOIN_SALES_PIVOT = 'fk_pivot_join_sales',
  FK_SALES_JOIN_SALES_PIVOT = 'fk_pivot_join_items',
  FK_SALES_CUSTOMER = 'fk_sales_customer',
  FK_SALES_WAREHOUSE = 'fk_sales_warehouse',
  Fk_SALES_MANUFACTURER = 'fk_sales_manufacturer',
  Fk_SALES_CREATEDBY = 'fk_sales_createdby',
  FK_SALES_ACCOUNT_TYPE = 'fk_sales_account_type',
  FK_SALES_DELIVERY_METHOD = 'fk_sales_delivery_method',

  //billing
  FK_BILLING_SALES_ITEMS = 'fk_billing_sales_items',
  FK_BILLING_SALES = 'fk_billing_sales',
  FK_BILLING_ADDRESS = 'fk_billing_address',

  FK_SALES_SHIPPING_ADDRESS = 'fk_sales_shipping_address',
  /* THIS IS REFERENCE TO THE BILLIND ADDRESS OF SALES ORDER */
  FK_SALES_BILLING_ADDRESS = 'fk_sales_billing_address',

  // billing items
  FK_BILLING_SALES_ACCOUNT_TYPE = 'fk_billing_sales_account_type',
  FK_MANUFACTURE_DELIVERY_METHOD = 'fk_manufacturer_delivery_method',
  // manufacturer
  FK_MANUFACTURER_PREFIXES = 'fk_manufacturer_prefixes',

  /* vendor address */
  FK_VENDOR_ADDRESS = 'fk_vendor_address',

  // customer address
  FK_ADDRESS_JOIN_CUSTOMER = 'fk_address_join_customer',

  // FK_CUSTOMER_JOIN_ADDRESS_PIVOT = "fk_customer_address_pivot",
  // FK_ADDRESS_JOIN_CUSTOMER_PIVOT = "fk_address_customer_pivot",
  // // Invoice
  FK_INVOICE_CHALLAN = 'fk_invoice_challan',
  FK_INVOICE_SALES = 'fk_invoice_sales',
  FK_INVOICE_CUSTOMER = 'fk_invoice_customer',
  FK_INVOICE_ORDER_TYPE = 'fk_invoice_order_type',
  FK_INVOICE_WAREHOUSE = 'fk_invoice_warehouse',
  FK_INVOICE_MANUFACTURER = 'fk_invoice_manufacturer',
  FK_INVOICE_BILLING_ADDRESS = 'fk_invoice_billing_address',
  FK_INVOICE_SHIPPING_ADDRESS = 'fk_invoice_shipping_address',
  FK_INVOICE_PAYEMENT_MANUFACTURER = 'fk_invoice_payment_manufacturer',
  FK_INVOICE_PAYMENT_INVOICE = 'fk_invoice_payment_invoice',
  FK_INVOICE_PAYMENT_CUSTOMER = 'fk_invoice_payment_customer',
  FK_INVOICE_PAYMENT_TERM = 'fk_invoice_payment-term',

  //Invoice Item
  FK_INVOICEITEM_ITEM = 'fk_invoiceitem_item',
  FK_INVOICEITEM_ACCOUNT_TYPE = 'fk_invoceitem_account_type',
  FK_INVOICEITEM_INVOICE = 'fk_invoiceitem_invoice',
  FK_INVOICEITEM_SALES = 'fk_invoiceitem_sales',
  FK_INVOICEITEM_CHALLAN = 'fk_invoiceitem_challan',

  //challan
  FK_CHALLAN_CUSTOMER = 'fk_challan_customer',
  FK_CHALLAN_WAREHOUSE = 'fk_challan_warehouse',
  FK_CHALLAN_BILLING_ADDRESS = 'fk_challan_billing_address',
  FK_CHALLAN_SHIPPING_AddRESS = 'fk_challan_shipping_address',
  FK_CHALLAN_MANUFACTURER = 'fk_challan_manufacturer',

  //challan item
  FK_CHALLANITEM_ITEM = 'fk_challanitem_item',
  FK_CHALLANITEM_CHALLAN = 'fk_challanitem_challan',

  //Purchase FK
  Fk_PURCHASE_CREATEDBY = 'fk_purchase_createdBy',
  FK_PURCHASE_DELIVERY_METHOD = 'fk_purchase_delivery_method',
  FK_PURCHASE_VENDOR = 'fk_purchase_vendor',
  FK_PURCHASE_WAREHOUSE = 'fk_purchase_warehouse',
  // FK_PURCHASE_SUPPLIER = "fk_purchase_supplier",
  FK_MANUFACTURER_PURCHASE = 'fk_manufacturer_purchase',
  FK_PURCHASE_BILLING_ADDRESS = 'fk_purchase_billing_address',
  FK_PURCHASE_SHIPPING_ADDRESS = 'fk_purchase_shipping_address',

  // Purchase Item Fk
  FK_PURCHASEITEMS_ITEM = 'fk_purchaseitem_item',
  FK_PURCHASEITEMS_ACCOUNT_TYPE = 'fk_purchaseitem_account_fk',
  FK_PURCHASEITEMS_PURCHASE = 'fk_purchaseitem_purchase',

  // Purchase Received
  FK_PURCHASEORDER_PURCHASE_RECEIVED = 'fk_purchaseorder_purchase_received',
  FK_CREATEDBY_PURCHASE_RECEIVED = 'fk_createdBy_purchase_received',

  FK_MANUFACTURER_PURCHASE_RECEIVED = 'fk_manufacturer_purchase_received',
  FK_WAREHOUSE_PURCHASE_RECEIVED = 'fk_warehouse_purchase_received',
  FK_VENDOR_PURCHASE_RECEIVED = 'fk_vendor_purchase_received',

  // Purchase Received Items
  FK_PITEMS_ITEMS = 'fk_pitem_items',
  FK_PITEMS_PURCHASERECEIVED = 'fk_pitems_purchasereceived',
  FK_PITEMS_PURCHASEORDER = 'fk_pitems_purchaseorder',

  // Shipments Fk
  FK_SALESORDER_SHIPMENTS = 'fk_salesorder_shipment',
  FK_MANUFACTURE_SHIPMENTS = 'fk_manufacturer_shipment',
  FK_USER_SHIPMENTS = 'fk_createdby_shipment',
  FK_CUSTOMER_SHIPMENTS = 'fk_customer_shipment',
  FK_CARRIER_SHIPMENTS = 'fk_carrier_shipment',

  //Shipments Items
  FK_SITEMS_ITEMS = 'foreignKey_sitem_items',
  FK_SITEMS_SHIPMENT = 'foreignKey_sitems_shipment',
  FK_SITEMS_CREATEDBY = 'foreignKey_sitems_createdBy',
  FK_SITEMS_SALESORDER = 'foreignKey_sitems_salesorder',

  //Carrier FK
  FK_MANUFACTURE_CARRIER = 'fk_manufature_carrier',
  FK_CREATEDBY_CARRIER = 'fk_createdBy_carrier',

  /* Bill Foreign keys */
  FK_BILL_PURCHASE = 'fk_bill_purchase',
  FK_BILL_VENDOR = 'fk_bill_vendor',
  FK_BILL_WAREHOUSE = 'fk_bill_warehouse',
  FK_BILL_BILLINGADDRESS = 'fk_bill_billingaddress',
  FK_BILL_SHIPPINGADDRESS = 'fk_bill_shippingaddress',
  FK_BILL_MANUFACTURER = 'fk_bill_manufacturer',
  FK_BILL_PAYMENT_TERM = 'fk_bill_payment_term',

  /* Bill Payment Foreign Keys*/
  FK_BILL_PAYMENT_MANUFACTURER = 'fk_bill_payment_manufacturer',
  FK_BILL_PAYMENT_BILL = 'fk_bill_payment_bill',
  FK_BILL_PAYMENT_VENDOR = 'fk_bill_payment_vendor',

  /* bill item foreign keys */
  FK_BILLITEM_ITEM = 'fk_billitem_item',
  FK_BILLITEM_ACCOUNT_TYPE = 'fk_billitem_account_type',
  FK_BILLITEM_BILL = 'fk_billitem_bill',
  FK_BILLITEM_PURCHASE = 'fk_billitem_purchase',

  /* Payment Term foreign keys */
  FK_PAYMENT_TERM_MANUFACTURER = 'fk_payment_term_manufacturer',

  /* delivery challan foreign key */
  FK_DELIVERY_CHALLAN_SHIPPING_ADDRESS = 'fk_delivery_challan_shipping_address',

  // ....................................................Production Module Starts.............................................//
  // OPERATIONS Fk
  FK_MANUFACTURE_OPERATIONS = 'fk_manufacturer_operations',
  FK_USER_OPERATIONS = 'fk_createdby_operations',

  // Routing Fk
  FK_MANUFACTURE_ROUTING = 'fk_manufacturer_routing',
  FK_USER_ROUTING = 'fk_createdby_routing',

  // Routing Operations Fk
  FK_OPERATIONS_ROUTINGOPERATIONS = 'fk_operation_routingOperations',
  FK_ROUTING_ROUTINGOPERATIONS = 'fk_routing_routingOperations',

  // Bill_Of_Material Fk
  FK_ROUTING_BILL_OF_MATERIAL = 'fk_routing_bill_Of_material',
  FK_MANUFACTURE_BILL_OF_MATERIAL = 'fk_manufacturer_bill_Of_material',
  FK_USER_BILL_OF_MATERIAL = 'fk_createdby_bill_Of_material',
  FK_FINISHEDITEM_BILL_OF_MATERIAL = 'fk_finisheditem_bill_Of_material',

  // BOM_OPERATION
  FK_BOM_MATOPERATION = 'fk_bom_matoperation',
  FK_OPERATION_MATOPERATION = 'fk_operation_matoperation',
  FK_FINISHEDITEM_MATOPERATION = 'fk_finisheditem_matoperation',
  FK_RAWITEM_MATOPERATION = 'fk_rawitem_matoperation',
  FK_ROUTING_MATOPERATION = 'fk_routing_matoperation',

  // BOM_OPERATION_ITEMS
  FK_BOPERATION_BOMITEMS = 'fk_boperation_bomitems',
  FK_ITEM_BOMITEM = 'fk_item_bomitems',

  //BOM COST
  FK_BOM_MATOPERATION_COST = 'fk_bom_matoperation_cost',
  FK_OPERATION_MATOPERATION_COST = 'fk_operation_matoperation_cost',

  // StateList
  FK_COUNTRY_STATE = 'fk_country_state',

  // Production Order
  FK_PRODUCTION_ORDER_MATERIAL_WH = 'fk_production_order_material_wh',
  FK_PRODUCTION_ORDER_PRODUCT_WH = 'fk_production_order_product_wh',
  FK_PRODUCTION_ORDER_BOM = 'fk_production_order_bom',
  FK_PRODUCTION_ORDER_FINISHED_ITEM = 'fk_production_order_finished_item',
  FK_PRODUCTION_ORDER_MANUFACTURER = 'fk_production_order_manufactuerer',
  FK_PRODUCTION_ORDER = 'fk_production_order',
  FK_PRODUCTION_ORDER_USER = 'fk_production_order_user',

  // Production Process
  FK_PRODUCTION_PROCESS_OPERATION = 'fk_production_process_operation',
  FK_PRODUCTION_PROCESS_PRODUCTION_ORDER = 'fk_production_process_production_order',
  FK_PRODUCTION_PROCESS_MANUFACTUTER = 'fk_production_process_manufactuter',
  FK_PRODUCTION_PROCESS_USER = 'fk_production_process_user',

  // ServiceOrder
  FK_SERVICE_ORDER_SUBCONTACTOR = 'subcontactor_fk_service_order',
  FK_SERVICE_ORDER_PRODUCTION_ORDER = 'production_order_fk_service_order',
  FK_SERVICE_ORDER_PRODUCTION_PROCESS = 'production_process_fk_service_order',
  FK_SERVICE_ORDER_MANUFACTURER = 'manufacturer_fk_service_order',
  FK_SERVICE_ORDER_USER = 'user_fk_service_order',

  //  Service Order Items
  USER_FK_SERVICE_ORDER_ITEM = 'USER_FK_SERVICE_ORDER_ITEM',
  ITEM_FK_SERVICE_ORDER_ITEM = 'ITEM_FK_SERVICE_ORDER_ITEM',
  MANUFACTURER_FK_SERVICE_ORDER_ITEM = 'MANUFACTURER_FK_SERVICE_ORDER_ITEM',
  SERVICE_ORDER_FK_SERVICE_ORDER_ITEM = 'SERVICE_ORDER_FK_SERVICE_ORDER_ITEM',

  // Inward Document
  INWARD_DOCUMENT_SERVICE_ORDER = 'inward_document_service_order',
  INWARD_DOCUMENT_SUBCONTRACTOR = 'inward_document_subcontractor',
  INWARD_DOCUMENT_WAREHOUSE = 'inward_document_warehouse',
  INWARD_DOCUMENT_PRODUCTION_ORDER = 'inward_document_production_order',
  INWARD_DOCUMENT_PRODUCTION_PROCESS = 'inward_document_production_process',
  INWARD_DOCUMENT_USER = 'inward_document_user',
  INWARD_DOCUMENT_MANUFACTURER = 'inward_document_manufacturer',
}
