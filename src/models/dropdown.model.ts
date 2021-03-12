export interface DropdownConfig {
    title: string;
    options: Array<string>;
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