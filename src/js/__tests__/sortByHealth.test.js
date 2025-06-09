import { sortByHealth } from '../sortByHealth.js';

const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
];

test('Проверка сортировки массива', () => {
    const sortedHeroes = sortByHealth(heroes);
    expect(sortedHeroes).toEqual([
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ])
});

test('Проверка заполнения массива', () => {
    expect(sortByHealth([])).toEqual([]);
});