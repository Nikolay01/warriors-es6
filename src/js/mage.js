import Unit from './unit';

const MageModule = (function () {
    class Mage extends Unit.Unit{
        constructor(health, damage, distance) {
            super("Mage", health || 200, damage || 300, distance || 500);
        }
    }
    return{
        Mage
    }
}());

export default MageModule;