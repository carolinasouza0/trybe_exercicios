const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const min = 15;
  const max = Math.floor(Math.random() * dragon.strength);
  const dragonDmg = max > min ? max : min;
  return dragonDmg;
};

const warriorDamage = () => {
  const min = warrior.strength;
  const max = Math.floor(Math.random() * (min * warrior.weaponDmg));
  const warriorDmg = max > min ? max : min;
  return warriorDmg;
}

const mageDamage = () => {
  const mana = mage.mana;
  const min = mage.intelligence;
  const max = min * 2;
  const objMage = {
    manaSpent: 0,
    damageDealt: "Não possui mana suficiente",
  };

  if (mana > 15) {
    const mageDmg = min < max ? max : min;
    objMage.manaSpent = 15;
    objMage.damageDealt = mageDmg
    return objMage;
  }
  return objMage;
}

const warriorTurn = () => {
  
}

const gameActions = {
  // Crie as HOFs neste objeto.
};