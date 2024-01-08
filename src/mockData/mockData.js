const minim = 10;
const maxim = 1000;

const numar = () => {
  return Math.floor(Math.random() * (maxim - minim + 1)) + minim
}

export const dateTramvai41 = [
  {
    name: 'Ora 6',
    autobuze: numar(),
    Dintre_care_au_intarziat: numar(),
  },
  {
    name: 'Ora 8',
    autobuze: numar(),
    Dintre_care_au_intarziat: numar(),
  },
  {
    name: 'Ora 12',
    autobuze: numar(),
    Dintre_care_au_intarziat: numar(),
  },
  {
    name: 'Ora 69',
    autobuze: numar(),
    Dintre_care_au_intarziat: numar(),
  },
  {
    name: 'Ora de chimie',
    autobuze: numar(),
    Dintre_care_au_intarziat: numar(),
  },
  {
    name: 'Ora 543',
    autobuze: numar(),
    Dintre_care_au_intarziat: numar(),
  },
];
export const datepie = [
  {
    "name": "Group A",
    "value": numar(),
  },
  {
    "name": "Group B",
    "value": numar(),
  },
  {
    "name": "Group C",
    "value": numar(),
  },
  {
    "name": "Group D",
    "value": numar(),
  },
  {
    "name": "Group E",
    "value": numar(),
  },
  {
    "name": "Group F",
    "value": numar(),
  }
];
const createData = (name, ora, timp, ceva, ivan) => {
  return { name, ora, timp, ceva, ivan };
}

export const rows = [
  createData('Noaptea', numar(), numar(), numar(), numar()),
  createData('Ora de varf dimineata', numar(), numar(), numar(), numar()),
  createData('Dupa pranz', numar(), numar(), numar(), numar()),
  createData('Ora de varf seara', numar(), numar(), numar(), numar()),
  createData('Cand trec eu', numar(), numar(), numar(), numar()),
];
