

function fight(){

    let monsterName = prompt("Enter your monsters name");
    let heroName = prompt("Enter your hero's name");
    let heroHealth = 50;
    let monsterHealth = 50;

    function hero(){
      //let heroHealth = 50;
      let heroDice = Math.floor((Math.random() * 20) +1) ;
      if (heroDice === 1 || heroDice === 2) {
          alert(`Critical failure! ${heroName} accidentally stabs self!`);
          heroHealth = heroHealth - 5;
          //console.log(`${heroName} health is ` + heroHealth);
          } else if(heroDice > 2 && heroDice < 11 ){
            alert(`${heroName} misses!`);
            heroHealth = heroHealth - 0;
            //console.log(`${heroName} health is ` + heroHealth);
          } else if(heroDice > 10 && heroDice < 19 ){
            alert(`Hit! ${heroName} strikes ${monsterName}.`);
            heroHealth = heroHealth - 10;
            //console.log(`${heroName} health is ` + heroHealth);
          } else if(heroDice > 18 && heroDice < 21 ){
            alert(`Critical Hit! ${heroName} does double damage to ${monsterName}.`);
            heroHealth = heroHealth - 20;
            //console.log(`${heroName} health is ` + heroHealth);
          }
      }
      
    function monster(){
          let monsterDice = Math.floor((Math.random() * 20) +1);
          if (monsterDice === 1 || monsterDice === 2) {
            alert(`Critical failure! ${monsterName} accidentally stabs self!`);
            monsterHealth = monsterHealth - 5;
            //console.log(`${monsterName} health is ` + monsterHealth);
            } else if(monsterDice > 2 && monsterDice < 11 ){
              alert(`${monsterName} misses!`);
              monsterHealth = monsterHealth - 0;
             // console.log(`${monsterName} health is ` + monsterHealth);
            } else if(monsterDice > 10 && monsterDice < 19 ){
              alert(`Hit! ${monsterName} strikes ${heroName}.`);
              monsterHealth = monsterHealth - 10;
             // console.log(`${monsterName} health is ` + monsterHealth);
            } else if(monsterDice > 18 && monsterDice < 21 ){
              alert(`Critical Hit! ${monsterName} does double damage to ${heroName}.`);
              monsterHealth = monsterHealth - 20;
             // console.log(`${monsterName} health is ` + monsterHealth);
            }
    }

    while (heroHealth > 0 && monsterHealth > 0){
        if (heroHealth > 0 && monsterHealth > 0){
            hero();
            monster();
        } else if (heroHealth > 0 && monsterHealth < 0 ){
            hero();
        } else if (monsterHealth > 0 && heroHealth < 0 ){
            hero();
        }
        alert(`${monsterName} health is ` + monsterHealth + `, ${heroName} health is ` + heroHealth);
    }

    if (heroHealth <= 0){
        alert(`${monsterName} has killed ${heroName}. We can say bye bye to the world.`);
    } else if (monsterHealth <= 0){
        alert(`${heroName} has killed ${monsterName}. The world is safe.`);
    } else{
        alert("both of them died");
    }
}

fight();
