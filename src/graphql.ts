
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateProductInput {
    sku?: Nullable<string>;
    price?: Nullable<number>;
    description?: Nullable<string>;
    title?: Nullable<string>;
    imageUrl?: Nullable<string>;
    category?: Nullable<string>;
    tags?: Nullable<Nullable<string>[]>;
}

export class Product {
    id?: Nullable<string>;
    sku?: Nullable<string>;
    price?: Nullable<number>;
    description?: Nullable<string>;
    title?: Nullable<string>;
    imageUrl?: Nullable<string>;
    category?: Nullable<string>;
    tags?: Nullable<Nullable<string>[]>;
    createdAt?: Nullable<Date>;
}

export abstract class IQuery {
    abstract allProducts(): Nullable<Product[]> | Promise<Nullable<Product[]>>;
}

export abstract class IMutation {
    abstract createProduct(input: CreateProductInput): Nullable<Product> | Promise<Nullable<Product>>;
}

type Nullable<T> = T | null;
