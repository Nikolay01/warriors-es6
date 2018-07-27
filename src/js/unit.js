const Unit = ((() => {
    class Unit {
        constructor(type, health, damage, distance) {
            this.type = type;
            this.health = this.defaultHealth = health;
            this.damage = damage;
            this.distance = distance;
            this.level = 0;
        }

        isReadyToFight() {
            return this.health > 0;
        }

        restore() {
            this.health = this.defaultHealth;
        }

        prepareForAttack() {
            return this.damage;
        }

        attackedBy(target) {
            this.health -= target.prepareForAttack();
        }

        render() {
            const div = document.createElement('div');
            div.classList.add('unit');
            const header = document.createElement('header');
            const body = document.createElement('section');
            const span1 = document.createElement('span');
            const span2 = document.createElement('span');
            const span3 = document.createElement('span');
            const span4 = document.createElement('span');
            const footer = document.createElement('footer');
            const btn = document.createElement('button');

            header.innerHTML = this.type;
            span1.innerHTML = `Health: ${this.health}`;
            span2.innerHTML = `Damage: ${this.damage}`;
            span3.innerHTML = `Distance: ${this.distance}`;
            footer.innerHTML = `Level: ${this.level}`;
            btn.innerHTML = "Restore health";

            const warZone = document.getElementById('warZone');
            div.appendChild(header);
            body.appendChild(span1);
            body.appendChild(span2);
            body.appendChild(span3);
            body.appendChild(span4);
            div.appendChild(body);
            div.appendChild(footer);
            footer.appendChild(btn);
            warZone.appendChild(div);

            const self = this;

            function reduceHealth() {
                self.health -= 100;
                span1.innerHTML = `Health: ${self.health -= 100}`;
            }

            function restoreHealth() {
                self.health = self.defaultHealth;
                span1.innerHTML = `Health: ${self.health}`;
            }

            div.addEventListener('click', reduceHealth);
            div.addEventListener('click', () => {
                if (self.health <= 0) {
                    div.removeEventListener('click', reduceHealth);
                }
            });
            btn.addEventListener('click', e => {
                e.stopPropagation();
                restoreHealth();
                div.addEventListener('click', reduceHealth);
            });
            const btnAll = document.getElementById('restoreAll');
            if (btnAll) {
                btnAll.addEventListener('click', () => {
                    restoreHealth();
                    div.addEventListener('click', reduceHealth);
                });
            }
            return div;
        }
    }

    return {
        Unit
    }
}))();

export default Unit;