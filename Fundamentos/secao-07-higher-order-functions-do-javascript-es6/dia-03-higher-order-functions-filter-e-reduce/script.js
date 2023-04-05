const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
const splitingArray = names.join('').toLocaleLowerCase().split('');
const countA = () => splitingArray.reduce((acc, letter) => letter === 'a' ? acc += 1 : acc, 0);
