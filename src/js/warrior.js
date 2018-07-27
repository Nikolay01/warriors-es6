import Unit from './unit';

const WarriorModule = ((() => {
    class Warrior extends Unit.Unit{
        constructor(health, damage, distance) {
            super("Warrior", health || 200, damage || 300, distance || 500);
        }
    }
    return{
        Warrior
    }
})());

export default WarriorModule;