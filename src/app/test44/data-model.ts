export class Hero {
  id = 0;
  name = 'lalal';
  addresses: Address[];
}

export class Address {
  street = '';
  city   = '';
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Whirlwind',
    addresses: [
      {street: '123 Main',  city: 'Anywhere'},
      {street: '456 Maple', city: 'Somewhere'},
    ]
  },
  {
    id: 2,
    name: 'Bombastic',
    addresses: [
      {street: '789 Elm',  city: 'Smallville'},
    ]
  },
  {
    id: 3,
    name: 'Magneta',
    addresses: [ ]
  },
];

// export const states = ['CA', 'MD', 'OH', 'VA'];

