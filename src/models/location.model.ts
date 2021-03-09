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
            'Bogotá',
            'Medellín',
            'Cartagena'
        ]
    },
    {
        id: 'CO',
        name: 'Chile',
        flag: '',
        cities: [
            'Santiago',
            'Pucon',
            'Temuco',
            'Villarrica'
        ]
    },
    {
        id: 'CO',
        name: 'Mexico',
        flag: '',
        cities: [
            'Cancun',
            'Playa del Carmen'
        ]
    },
    {
        id: 'CO',
        name: 'Bolivia',
        flag: '',
        cities: [
            'La Paz',
            'Santa Cruz'
        ]
    },
    {
        id: 'CO',
        name: 'Spain',
        flag: '',
        cities: [
            'Madrid'
        ]
    },
    {
        id: 'CO',
        name: 'Germany',
        flag: '',
        cities: [
            'Frankfurt',
            'Berlin',
            'Hamburg'
        ]
    },
    {
        id: 'CO',
        name: 'USA',
        flag: '',
        cities: [
            'Boston',
            'New Hamsphire',
            'San Francisco',
            'New York'
        ]
    },
    {
        id: 'CO',
        name: 'Japan',
        flag: '',
        cities: [
            'Tokyo'
        ]
    },
    {
        id: 'CO',
        name: 'Italy',
        flag: '',
        cities: [
            'Rome'
        ]
    },
    {
        id: 'CO',
        name: 'France',
        flag: '',
        cities: [
            'Lourdes'
        ]
    },
]