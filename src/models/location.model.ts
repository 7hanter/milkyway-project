export interface Country {
    id: string;
    name: string,
    flag: string,
    cities: Array<string>
}

export interface TripLocation {
    countryId: string,
    city: string,
    lat: number;
    lng: number;
}

export const MOCK_COUNTRIES: Array<Country> = [
    {
        id: 'CO',
        name: 'Colombia',
        flag: 'assets/img/flags/colombia.svg',
        cities: [
            'Bogota',
            'Medellin',
            'Cartagena'
        ]
    },
    {
        id: 'CL',
        name: 'Chile',
        flag: 'assets/img/flags/chile.svg',
        cities: [
            'Santiago',
            'Pucon',
            'Temuco',
            'Villarrica'
        ]
    },
    {
        id: 'MX',
        name: 'Mexico',
        flag: 'assets/img/flags/mexico.svg',
        cities: [
            'Cancun',
            'Playa del Carmen'
        ]
    },
    {
        id: 'BO',
        name: 'Bolivia',
        flag: 'assets/img/flags/bolivia.svg',
        cities: [
            'La Paz',
            'Santa Cruz'
        ]
    },
    {
        id: 'ES',
        name: 'Spain',
        flag: 'assets/img/flags/spain.svg',
        cities: [
            'Madrid'
        ]
    },
    {
        id: 'DE',
        name: 'Germany',
        flag: 'assets/img/flags/germany.svg',
        cities: [
            'Frankfurt',
            'Berlin',
            'Hamburg'
        ]
    },
    {
        id: 'US',
        name: 'USA',
        flag: 'assets/img/flags/usa.svg',
        cities: [
            'Boston',
            'New Hampshire',
            'San Francisco',
            'New York'
        ]
    },
    {
        id: 'JP',
        name: 'Japan',
        flag: 'assets/img/flags/japan.svg',
        cities: [
            'Tokyo'
        ]
    },
    {
        id: 'IT',
        name: 'Italy',
        flag: 'assets/img/flags/italy.svg',
        cities: [
            'Rome'
        ]
    },
    {
        id: 'FR',
        name: 'France',
        flag: 'assets/img/flags/france.svg',
        cities: [
            'Lourdes'
        ]
    },
]