// Just the directions of ordering
export enum SORT_DIRECTION {
  ASC = "ASC",
  DESC = "DESC",
}

// Possible columns to order by for warehouse entity
export enum WAREHOUSE_COLUMNS {
  name = "name",
  email = "email",
  phone = "phone",
  city = "city",
  state = "state",
  country = "country",
  CreatedAt = "created_at",
}

// Inventory Log
export enum INVENTORY_LOG_COLUMNS {
  created_at = "created_at",
}

// Possible columns to order by for inventory item entity
export enum INVENTORY_ITEM_COLUMNS {
  name = "name",
  sku = "sku",
  uom = "uom",
  updated_at = "updated_at",
  sellingPrice = "sellingPrice",
  purchasePrice = "purchasePrice",
  CreatedAt = "created_at",
}

// Possible columns to order by for inventory item stock entity
export enum INVENTORY_ITEM_STOCK_COLUMNS {
  count = "count",
  name = "item.name",
  uom = "item.uom",
  sku = "item.sku",
  warehouse = "w.name",
  sellingPrice = "item.sellingPrice",
  CreatedAt = "created_at",
  subContractorName = "subcontractors.name",
  stockOnHand = "inventoryLog_quantity",
}

// Possible columns to order by for inventory item stock adjustment entity
export enum INVENTORY_ITEM_STOCK_ADJUSTMENT_COLUMNS {
  adjustedAt = "adjustedAt",
  type = "type",
  description = "description",
  quantity = "quantity",
  value = "value",
  status = "status",
  referenceNumber = "referenceNumber",
  warehouse = "warehouse.name",
  reason = "reason.name",
  CreatedAt = "created_at",
}

// Possible columns to order by for users entity
export enum USERS_COLUMNS {
  username = "username",
  email = "email",
  phone = "phone",
  CreatedAt = "created_at",
}

// Possible colum to order by for Chart Of account
export enum ACCOUNT_COLUMNS {
  accountName = "accountName",
  accountCode = "accountCode",
  CreatedAt = "created_at",
}
// Possible colum to order by for vendors
export enum VENDORS_COLUMNS {
  vendorName = "vendorName",
  companyName = "companyName",
  vendorEmail = "vendorEmail",
  orders = "",
  created_at = "created_at",
}

// customer columens
export enum CUSTOMERS_COLUMNS {
  customerName = "customerName",
  companyName = "companyName",
  vendorEmail = "vendorEmail",
  order = "",
  created_at = "created_at",
}

//  sales item colume

export enum SALES_COLUMN {
  ordereDate = "orderDate",
  SalesOrder = "salesNumber",
  OrderStatus = "orderStatus",
  Invoiced = "invoiced",
  Payment = "payment",
  Packed = "packed",
  Shipped = "shipped",
  DeliveryMethod = "deliveryMethod",
  Total = "total",
  CreatedAt = "created_at",
  Delivered = "delivered",
}

export enum DeliveryMethod_COLUMN {
  CreatedAt = "created_at",
}

/* purchase item column */
export enum PURCHASE_COLUMN {
  OrderDate = "orderDate",
  PurchaseOrder = "purchaseNumber",
  Vendor = "vendor",
  ReceiveStatus = "received",
  BillStatus = "billed",
  ExpectedDeliveryDate = "expectedDeliveryDate",
  OrderStatus = "orderStatus",
  Total = "total",
  CreatedAt = "created_at",
}

/* Bill Column */
export enum BILL_COLUMN {
  DueDate = "dueDate",
  BillNumber = "billNumber",
  BillDate = "billedDate",
  Vendor = "vendorId",
  Warehouse = "warehouseId",
  Total = "total",
  PaidAmount = "paidAmount",
  DueAmount = "dueAmount",
  Status = "status",
  CreatedAt = "created_at",
}

/* Bill Column */
export enum BILL_PAYMENT_COLUMN {
  referenceNumber = "referenceNumber",
  PaymentNumber = "paymentNumber",
  Vendor = "vendorId",
  paymentMode = "paymentMode",
  CreatedAt = "created_at",
  PaymentDate = "paymentDate",
  Total = "total",
}

/* Invoice Column */
export enum INVOICE_PAYMENT_COLUMN {
  ReferenceNumber = "referenceNumber",
  PaymentNumber = "paymentNumber",
  Total = "total",
  CreatedAt = "created_at",
  PaymentDate = "paymentDate",
}

// Shipment Item Columns
export enum SHIPMENTS_COLUMN {
  CreatedAt = "created_at",
  shipmentNumber = "shipmentNumber",
  ShipmentDate = "shipmentDate",
  Status = "status",
  ShippingDate = "shippingDate",
  TrackingNumber = "trackingNumber",
  ShippingRate = "shippingRate",
}

// invoice item column
export enum INVOICE_COLUMN {
  DueDate = "dueDate",
  InvoiceNumber = "invoiceNumber",
  InvoiceDate = "invoicedDate",
  Customer = "customerId",
  Warehouse = "warehouseId",
  Total = "total",
  PaidAmount = "paidAmount",
  DueAmount = "dueAmount",
  Status = "status",
  CreatedAt = "created_at",
}

// challan item column
export enum CHALLAN_COLUMN {
  Status = "challanStatus",
  ReferenceNumber = "referenceNo",
  ChallanNumber = "challanNumber",
  ChallanType = "challanType",
  ChallanDate = "challanDate",
  TotalQuantity = "totalQuantity",
  Total = "total",
  InvoiceStatus = "invoiced",
  CreatedAt = "created_at",
}

// Purchase Received
export enum PURCHASERECEIVED_COLUMN {
  ReceivedNumber = "receivedNumber",
  CreatedAt = "created_at",
  receivedDate = "receivedDate",
  warehouse = "warehouse",
}

// Operation
export enum OPERATIONS_COLUMN {
  ReceivedNumber = "receivedNumber",
  CreatedAt = "created_at",
  PurchaseNumber = "purchaseNumber",
}

// Production Porcess
export enum PRODUCTION_PROCESS_COLUMN {
  CreatedAt = "created_at",
}

export enum SERVICE_ORDER {
  CreatedAt = "created_at",
}

// Routing
export enum ROUTING_COLUMN {
  sn = "sn",
  CreatedAt = "created_at",
}

// Purchase Received
export enum BILLOFMATERIAL_COLUMN {
  CreatedAt = "created_at",
}

export enum PRODUCTION_ORDER_COLUMN {
  created_at = "created_at",
}

export enum RAW_ITEM_COLUMN {
  CreatedAt = "created_at",
}
