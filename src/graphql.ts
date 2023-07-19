
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Product {
    id?: Nullable<string>;
    sku?: Nullable<string>;
    title?: Nullable<string>;
    price?: Nullable<number>;
    description?: Nullable<string>;
}

export abstract class IQuery {
    abstract allProducts(): Nullable<Product[]> | Promise<Nullable<Product[]>>;
}

type Nullable<T> = T | null;
