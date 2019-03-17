import Knight from './knight/knight';
import Enemy from './enemy/enemy';

const initialEntities = () => ({
  knight: new Knight,
  // enemies: Enemy.enemySpawn()
});

export default initialEntities;
