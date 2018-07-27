import Unit from './unit';

const SquadModule = ((() => {
    class Squad {
        constructor(name) {
            this.name = name;
            this.team = [];
        }

        addUnit(item) {
            if(!(item instanceof Unit.Unit))throw new Error("Not a unit");
            this.team.push(item);
        }

        getUnit(index) {
            if(isNaN(index) || index < 0) {throw new Error('Index not a number or less than 0');}
            else if(!(index < this.team.length)){throw new Error(`In this squad ${this.team.length} units`);}
            else{return this.team[index];}
        }

        removeUnit(index) {
            if(isNaN(index) || index < 0) {throw new Error('Index not a number or less than 0');}
            else if(!(index < this.team.length)){throw new Error(`In this squad ${this.team.length} units`);}
            else{this.team.splice(index,1);}
        }

        shuffle() {
            for(var counter = this.team.length, array = this.team; counter > 0;){
                const random = Math.floor(Math.random() * counter);
                const temp = array[--counter];
                array[counter]=array[random];
                array[random] = temp;
            }
            return array;
        }
    }

    return {
        Squad
    }
})());

export default SquadModule;