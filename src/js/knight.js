import Unit from './unit';
import WarriorModule from './warrior';

const KnightModule = (function () {
    class Knight extends Unit.Unit{
        constructor(health, damage, distance) {
            super("Knight", health || 200, damage || 300, distance || 500);
        }
    }
    return{
        Knight
    }
}());

export default KnightModule;