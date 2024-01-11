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
  { name: "unu", value: numar(), fill: 'red' },
  { name: "doi", value: numar(), fill: "green" },
  { name: "trei", value: numar(), fill: "blue" },
  { name: "pstru", value: numar(), fill: "purple" }
];
const createData = (name, ora, timp, ceva, ivan) => {
  const result = { name, ora, timp, ceva, ivan }
  console.log(result)
  return { name, ora, timp, ceva, ivan };
}

const firstRow = {
  name: "Ciocea",
  ora: "20",
  timp: "4567",
  ceva: "933",
  ivan: '68'
}

export const masiniPeOra = [
  {
    "NR_MASINI": 225,
    "AJUNGE": "06"
  },
  {
    "NR_MASINI": 335,
    "AJUNGE": "07"
  },
  {
    "NR_MASINI": 464,
    "AJUNGE": "08"
  },
  {
    "NR_MASINI": 498,
    "AJUNGE": "09"
  },
  {
    "NR_MASINI": 212,
    "AJUNGE": "10"
  },
  {
    "NR_MASINI": 232,
    "AJUNGE": "11"
  },
  {
    "NR_MASINI": 221,
    "AJUNGE": "12"
  },
  {
    "NR_MASINI": 209,
    "AJUNGE": "13"
  },
  {
    "NR_MASINI": 212,
    "AJUNGE": "14"
  },
  {
    "NR_MASINI": 223,
    "AJUNGE": "15"
  },
  {
    "NR_MASINI": 289,
    "AJUNGE": "16"
  },
  {
    "NR_MASINI": 297,
    "AJUNGE": "17"
  },
  {
    "NR_MASINI": 346,
    "AJUNGE": "18"
  },
  {
    "NR_MASINI": 436,
    "AJUNGE": "19"
  },
  {
    "NR_MASINI": 440,
    "AJUNGE": "20"
  },
  {
    "NR_MASINI": 110,
    "AJUNGE": "21"
  },
  {
    "NR_MASINI": 95,
    "AJUNGE": "22"
  },
  {
    "NR_MASINI": 93,
    "AJUNGE": "23"
  }
]

export const rows = [
  firstRow,
  createData('Ora de varf dimineata', numar(), numar(), numar(), numar()),
  createData('Dupa pranz', numar(), numar(), numar(), numar()),
  createData('Ora de varf seara', numar(), numar(), numar(), numar()),
  createData('Cand trec eu', numar(), numar(), numar(), numar()),
];
