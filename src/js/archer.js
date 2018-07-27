import Unit from './unit';

const ArcherModule = ((() => {
    class Archer extends Unit.Unit{
        constructor(health, damage, distance) {
            super("Archer", health || 200, damage || 300, distance || 500);
            this.arrows = 10;
        }

        prepareForAttack() {
            this.reload();
            return Unit.Unit.prototype.prepareForAttack.call(this);
        }

        reload() {
            if(!this.arrows) throw 'There are no arrow!';
            this.arrows--;
        }
    }
    return {
        Archer
    }
})());

export default ArcherModule;