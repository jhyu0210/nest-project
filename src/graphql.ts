
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Cat {
    id?: number;
    name?: string;
    age?: number;
    breed?: string;
}

export interface IQuery {
    cats(): Cat[] | Promise<Cat[]>;
    cat(id: string): Cat | Promise<Cat>;
    hello(): string | Promise<string>;
}
