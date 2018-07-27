import ArcherModule from './archer';
import WarriorModule from './warrior';
import MageModule from './mage';
import KnightModule from './knight';
import SquadModule from './squad';
import BattleModule from './battleground';
import Grid from './grid';

const archer1 = new ArcherModule.Archer(500, 350, 400);
const archer2 = new ArcherModule.Archer(550, 320, 420);
const archer3 = new ArcherModule.Archer(520, 300, 450);
const warrior = new WarriorModule.Warrior(650, 350, 250);
const warrior2 = new WarriorModule.Warrior(750, 350, 250);
const mage = new MageModule.Mage(450, 500, 150);
const mage2 = new MageModule.Mage(450, 450, 150);
const knight = new KnightModule.Knight(800, 400, 200);

const team1 = new SquadModule.Squad('Bobby');
team1.addUnit(archer1);
team1.addUnit(warrior);
team1.addUnit(archer3);
team1.addUnit(mage2);


const team2 = new SquadModule.Squad('Johny');
team2.addUnit(mage);
team2.addUnit(knight);
team2.addUnit(archer2);
team2.addUnit(warrior2);


const battle = new BattleModule.Battleground();
battle.addSquad(team1);
battle.addSquad(team2);

battle.addRestoreAllButton(bodyWrap);
battle.renderAll(warZone);

const cards = new Grid.Card(210, 'unit', 'warZone');


cards.generateGrid();

setTimeout(() => {
    cards.moveFromTo(1,2);
},500);

setTimeout(() => {
    cards.moveFromTo(1,5);
},1500);

setTimeout(() => {
    cards.moveFromTo(4,0);
},2500);

setTimeout(() => {
    cards.moveFromTo(6,3);
},3500);