namespace Types {
  export interface Cart {
    id: string;
    email: string | null;
    billing_address_id: string | null;
    billing_address: BillingAddress;
    shipping_address_id: string | null;
    shipping_address: ShippingAddress;
    items: LineItem[];
    region: Types.Region;
    discounts: Discount;
    customer_id: string | null;
    customer: Customer;
    payment_sessions: PaymentSession[];
    payment_id: string;
    payment: Payment;
    shipping_methods: ShippingMethod[];
    is_swap: boolean;
    completed_at: Date | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    metadata: JSON | null;
  }

  export interface CartCreateResource {
    region_id?: string;
    items?: LineItem[];
  }

  export interface CartUpdateResource {
    region_id?: string;
    email?: string;
    billing_address?: string;
    shipping_addres?: ShippingAddress;
  }

  export interface Country {}

  export interface Currency {}

  export interface Customer {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    billing_address_id: string | null;
    billing_address: BillingAddress;
    shipping_addresses: ShippingAddress[];
    password_hash: string | null;
    phone: string | null;
    has_account: boolean;
    orders: Order[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    metadata: JSON | null;
  }

  export interface CustomerCreateResource {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    phone_number?: string;
  }

  export interface CustomerUpdateResource {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: string;
  }

  export interface Discount {
    id: string;
    code: string;
    is_dynamic?: boolean;
    discount_rule_id?: string | null;
    discount_rule: DiscountRule;
    is_disabled: boolean;
    parent_discount_id: string | null;
    starts_at: Date;
    ends_at: Date | null;
    regions: Region[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    metadata: JSON | null;
  }

  export enum DiscountRuleType {
    FIXED = 'fixed',
    PERCENTAGE = 'percentage',
    FREE_SHIPPING = 'free_shipping',
  }

  export enum AllocationType {
    TOTAL = 'total',
    ITEM = 'item',
  }

  export interface DiscountRule {
    id: string;
    description: string;
    type?: DiscountRuleType;
    value?: number;
    allocation?: AllocationType | null;
    valid_for?: Product[];
    usage_limit?: number | null;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    metadata?: object | null;
  }

  export interface Fulfillment {}

  export interface GiftCard {
    id: string;
    code: string;
    value: number;
    balance: number;
    region_id: string;
    is_disabled: boolean;
    ends_at: Date | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    metadata: JSON | null;
  }

  export interface LineItem {
    id: string;
    cart_id?: string | null;
    order_id?: string | null;
    swap_id?: string | null;
    title?: string;
    description?: string | null;
    thumbnail?: string | null;
    is_giftcard?: boolean;
    should_merge?: boolean;
    allow_discounts?: boolean;
    unit_price?: number;
    variant_id?: string;
    quantity?: number;
    fulfilled_quantity?: number | null;
    returned_quantity?: number | null;
    shipped_quantity?: number | null;
    created_at?: Date;
    updated_at?: Date;
    metadata?: object | null;

    has_shipping?: boolean;
    returned?: boolean;
    fulfilled?: boolean;
  }

  export interface LineItemCreatePayload {
    variant_id: string;
    quanitity: number;
    metadata?: JSON | null;
  }

  export interface LineItemUpdatePayload {
    line_id: string;
    quantity?: number;
  }

  export enum OrderStatus {
    PENDING = 'pending',
    COMPLETED = 'completed',
    ARCHIVED = 'archived',
    CANCELED = 'canceled',
    REQUIRES_ACTION = 'requires_action',
  }

  export enum FulfillmentStatus {
    NOT_FULFILLED = 'not_fulfilled',
    PARTIALLY_FULFILLED = 'partially_fulfilled',
    FULFILLED = 'fulfilled',
    PARTIALLY_SHIPPED = 'partially_shipped',
    SHIPPED = 'shipped',
    PARTIALLY_RETURNED = 'partially_returned',
    RETURNED = 'returned',
    CANCELED = 'canceled',
    REQUIRES_ACTION = 'requires_action',
  }

  export enum PaymentStatus {
    NOT_PAID = 'not_paid',
    AWAITING = 'awaiting',
    CAPTURED = 'captured',
    PARTIALLY_REFUNDED = 'partially_refunded',
    REFUNDED = 'refunded',
    CANCELED = 'canceled',
    REQUIRES_ACTION = 'requires_action',
  }

  export interface Order {
    id: string;
    status: OrderStatus;
    fulfillment_status: FulfillmentStatus;
    payment_status: PaymentStatus;
    display_id: number;
    cart_id: string;
    customer_id: string;
    email: string;
    billing_address_id: string;
    billing_address: BillingAddress;
    shipping_address_id: string | null;
    shipping_address: ShippingAddress;
    region_id: string;
    currency_code: string;
    tax_rate: number;
    discounts: Discount[];
    gift_cards: GiftCard;
    shipping_methods: ShippingMethod[];
    payments: Payment[];
    fulfillments: Fulfillment[];
    returns: Return[];
    refunds: Refund[];
    swaps: Swap[];
    items: LineItem[];
    canceled_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    metadata: JSON | null;
  }

  export interface PaymentOption {
    option_id: string;
    data?: object; //TODO: add correct format
  }

  // TODO: FILL OUT
  export interface Payment {}

  export interface ProductVariant {
    _id: string;
    barcode?: string;
    image?: string;
    published?: boolean;
    inventory_quanitity?: number;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    title?: string;
    sku?: string;
    ean?: string;
    options?: VariantOption[];
    prices?: VariantPrice[];
    metadata?: VariantMetadata;
    product?: Product;
  }
  export interface VariantOption {
    _id: string;
    value: string;
    option_id: string;
  }

  export interface VariantPrice {
    _id: string;
    currency_code: string;
    amount: number;
  }

  export interface VariantMetadata {
    origin_country: string;
  }

  export interface Product {
    _id: string;
    description: string;
    tags: string;
    is_giftcard: boolean;
    images: Image[];
    thumbnail: string;
    variants: string[];
    published: boolean;
    title: string;
    options: ProductOption[];
  }

  interface ProductOption {
    id: string;
    title: string;
    values: ProductOptionValue[];
  }

  interface ProductOptionValue {
    id?: string;
    value?: string;
    option_id?: string;
    option?: ProductOption;
    variant_id?: string;
    variant?: ProductVariant;
  }

  export interface Refund {}

  export interface Region {
    id: string;
    name: string;
    currency_code: string;
    currency: Currency;
    tax_rate: number;
    tax_code: string | null;
    countries: Country[];
    payment_providers: PaymentProvider[];
    fulfillment_providers: FulfillmentProvider[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    metadata: JSON | null;
  }

  export interface ReturnItem {
    return_id: string;
    item_id: string;
    return_order: Return;
    item: LineItem;
    quantity: number;
    requested_quantity: number | null;
    received_quantity: number | null;
  }

  export enum ReturnStatus {
    REQUESTED = 'requested',
    RECEIVED = 'received',
    REQUIRES_ACTION = ' requires_action',
  }

  export interface Return {
    id: string;
    status: ReturnStatus;
    items: ReturnItem[];
    swap_id: string | null;
    swap: Swap;
    order_id: string | null;
    order: Order;
    shipping_method: ShippingMethod;
    shipping_data: ShippingData | null;
    refund_amount: number;
    received_at: Date | null;
    created_at: Date;
    updated_at: Date;
    metadata: JSON | null;
  }

  export interface ShippingMethod {
    id: string;
    shipping_option_id: string;
    order_id: string;
    cart_id: null | string;
    swap_id: null | string;
    return_id: null | string;
    price: number;
    data: ShippingData;
  }

  export interface ShippingData {
    id: string;
    city: string;
    postal: string;
  }

  export interface ShippingOption {
    option_id: string;
    data?: object; //TODO: find correct format
  }

  export interface Swap {
    id: string;
    fulfillment_status: FulfillmentStatus;
    payment_status: PaymentStatus;
    order: Order;
    additional_items: LineItem;
    return_order: Return;
    fulfillments: Fulfillment;
    payment: Payment;
    shipping_address_id: string | null;
    shipping_address: ShippingAddress;
    shipping_methods: ShippingMethod[];
    cart_id: string | null;
    cart: Cart;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    metadata: JSON | null;
  }

  export interface RequestOptions {
    apiKey?: string;
    timeout?: number;
    numberOfRetries?: number;
  }
  export type Response<T> = T & {
    headers: {
      [key: string]: string;
    };
  };

  export type AsyncResult<T> = Promise<Response<T>>;

  export enum PaymentProvidersEnum {
    'stripe',
    'klarna',
  }
  export enum FulfilmentProvidersEnum {
    'shiphero',
  }
  export enum ShippingMethodsEnum {
    'A',
    'b',
  }

  export type RequestMethod = 'DELETE' | 'POST' | 'GET';

  export interface PaymentProvider {
    id: string;
    is_installed: boolean;
  }

  export interface FulfillmentProvider {
    id: string;
    is_installed: boolean;
  }

  export interface Address {
    id: string;
    customer_id: string;
    company: string;
    first_name: string;
    last_name: string;
    address_1: string;
    address_2: string;
    city: string;
    country_code: string;
    province: string;
    postal_code: number;
    phone: string;
    created_at: string;
    updated_at: string;
    deleted_at: null | string;
    metadata: null | string;
  }

  export interface ShippingAddress extends Address {}
  export interface BillingAddress extends Address {}

  // TODO: FILL OUT
  export interface Image {
    id?: string;
    url?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    metedata?: object;
  }

  // TODO: FILL OUT
  export interface PaymentSession {
    id: string;
  }
}
