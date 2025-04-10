import { Cats } from 'src/app/core/models/cats.model';

export type TraitKey =
  | 'intelligence'
  | 'adaptability'
  | 'affection_level'
  | 'child_friendly'
  | 'dog_friendly'
  | 'energy_level'
  | 'grooming'
  | 'health_issues'
  | 'shedding_level'
  | 'social_needs'
  | 'stranger_friendly'
  | 'vocalisation';

export const traits: { label: string; key: TraitKey }[] = [
  { label: 'Intelligence', key: 'intelligence' },
  { label: 'Adaptability', key: 'adaptability' },
  { label: 'Affection Level', key: 'affection_level' },
  { label: 'Child Friendly', key: 'child_friendly' },
  { label: 'Dog Friendly', key: 'dog_friendly' },
  { label: 'Energy Level', key: 'energy_level' },
  { label: 'Grooming', key: 'grooming' },
  { label: 'Health Issues', key: 'health_issues' },
  { label: 'Shedding Level', key: 'shedding_level' },
  { label: 'Social Needs', key: 'social_needs' },
  { label: 'Stranger Friendly', key: 'stranger_friendly' },
  { label: 'Vocalisation', key: 'vocalisation' },
];

export type TextDetail = {
  label: string;
  value: (cat: Cats) => string;
};

export const textDetails: TextDetail[] = [
  { label: 'Weight', value: (cat) => `${cat.weight.imperial} lb` },
  { label: 'Life Span', value: (cat) => `${cat.life_span} years` },
  { label: 'Temperament', value: (cat) => cat.temperament },
  { label: 'Short Legs', value: (cat) => (cat.short_legs ? 'Yes' : 'No') },
  { label: 'Hypoallergenic', value: (cat) => (cat.hypoallergenic ? 'Yes' : 'No') },
];

export type LinkDetail = {
  label: string;
  key: keyof Pick<
    Cats,
    'wikipedia_url' | 'cfa_url' | 'vetstreet_url' | 'vcahospitals_url'
  >;
};

export const linkDetails: LinkDetail[] = [
  { label: 'Wikipedia', key: 'wikipedia_url' },
  { label: 'CFA Profile', key: 'cfa_url' },
  { label: 'Vetstreet', key: 'vetstreet_url' },
  { label: 'VCA Hospitals', key: 'vcahospitals_url' },
];
