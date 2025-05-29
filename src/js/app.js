// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));


function getHealthOfHeroes(obj) {
  if (obj.health >= 50) {
    return healthy;
  } else if (obj.health < 50 && obj.health > 15 ) {
    return wounded;
  } else if (obj.health <= 15) {
    return critical;
  }
}