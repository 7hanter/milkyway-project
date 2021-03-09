export interface DropdownConfig {
    title: string;
    options: Array<string>;
}

export const FILTER_BY: DropdownConfig = {
    title: 'Filter by',
    options: [
        'Country',
        'City',
        'Type',
        'Date'
    ]
}

export const ORDER_BY: DropdownConfig = {
    title: 'Order by',
    options: [
        'Country',
        'City',
        'Type',
        'Date'
    ]
}