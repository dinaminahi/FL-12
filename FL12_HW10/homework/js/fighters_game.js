function Fighter(obj) {
      obj.wins = 0;
      obj.loses = 0;
      obj.totalHP = obj.HP;
      return {
            getName: () => obj.name,
            getDamage: () => obj.damage,
            getStrength: () => obj.strength,
            getAgility: () => obj.agility,
            getHealth: () => obj.HP,
            heal: (points) => points + obj.HP > obj.totalHP ? obj.HP = obj.totalHP : obj.HP += points,
            dealDamage: (points) => obj.HP - points <= 0 ? obj.HP = 0 : obj.HP -= points,
            attack: (fighter) => {
                 const probabilityOfSuccess = 1 - (fighter.getDamage() + fighter.getAgility()) / 100;
                 if (Math.random() <= probabilityOfSuccess) {
                    fighter.dealDamage(obj.damage;
                    console.log(`${obj.name} makes ${obj.damage} damage to ${fighter.getName()}`);
                 } else {
                   console.log(`${fighter.getName()} attack missed`);
                 }
            },
            logCombatHistory: () => console.log(`Name: ${obj.name}, Wins: ${obj.wins}, Loses: ${obj.loses}`),
            addWin: () => obj.wins++,
            addLose: () => obj.loses++
      }
}
