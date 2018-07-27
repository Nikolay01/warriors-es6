import SquadModule from './squad';

const BattleModule = ((() => {
    class Battleground {
        constructor() {
            this.onField = [];
        }

        addSquad(item) {
            if(!(item instanceof SquadModule.Squad))throw new Error("Not a squad");
            (this.onField.length < 2) ? this.onField.push(item) :
                console.warn('You can\'t add more than 2 squads on field');
        }

        fight() {
            const arr = this.onField;
            function innerFight(){
                const arrIn1 = arr[0].team;
                const arrIn2 = arr[1].team;

                arrIn1.forEach((unit1, i, unitArray1) => {
                    arrIn2.forEach((unit2, j, unitArray2) => {
                        if(unit1.health > 0){
                            unit2.attackedBy(unit1);
                            console.log(`${unit1.type}(1) attacked ${unit2.type}(2)`);
                            console.log(`${unit2.type}(2) health ${unit2.health}`);
                            console.log(`${unit1.type}(1) health ${unit1.health}`);
                        }else if(unit1.health <= 0 && unitArray2.length>0){
                            unitArray1.splice(i, 1);
                        }
                        if(unit2.health > 0 && unit1.length>0){
                            unit1.attackedBy(unit2);
                            console.log(`${unit2.type}(2) attacked ${unit1.type}(1)`);
                            console.log(`${unit1.type}(1) health ${unit1.health}`);
                            console.log(`${unit2.type}(2) health ${unit2.health}`);
                        }else if(unit2.health <= 0 && unitArray1.length>0){
                            unitArray2.splice(j, 1);
                        }
                        if(unitArray1.length>=1 && unitArray2.length>=1){
                            innerFight();
                        }else{
                            if(unitArray1.length>=1){
                                console.log(`${arr[0].name} wins`);
                            }else{
                                console.log(`${arr[1].name} wins`);
                            }
                        }
                    });
                });
            }
            innerFight();
        }

        removeSquad(index) {
            if(isNaN(index) || index < 0) {throw new Error('Index not a number or less than 0');}
            else if(!(index < this.onField.length)){throw new Error(`There are ${this.onField.length} squads on battleground`);}
            else{this.onField.splice(index,1);}
        }

       addRestoreAllButton(destination) {
            const btnAll = document.createElement('button');
            btnAll.id = "restoreAll";
            btnAll.innerHTML = "Restore all";
            destination.appendChild(btnAll);
        }

        renderAll(destination) {
            const arr = this.onField;
            arr.forEach(element => {
                element.team.forEach( el => {
                    destination.appendChild(el.render());
                });
            });


        }
    }

    return {
        Battleground
    }
})());

export default BattleModule;