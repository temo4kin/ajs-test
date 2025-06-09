import { getHealthOfHeroes } from '../app.js';

test('Состояние здоровья при уровне больше 50', () => {
    expect(getHealthOfHeroes({name: 'Маг', health: 90})).toBe('healthy');
});

test('Состояние здоровья при уровне равном 50', () => {
    expect(getHealthOfHeroes({name: 'Маг', health: 50})).toBe('healthy');
});

test('Состояние здоровья при уровне больше 15', () => {
    expect(getHealthOfHeroes({name: 'Лучник', health: 40})).toBe('wounded');
});

test('Состояние здоровья при уровне равном 15', () => {
    expect(getHealthOfHeroes({name: 'Мечник', health: 15})).toBe('wounded');
})

test('Состояние здоровья при уровне меньше 15', () => {
    expect(getHealthOfHeroes({name: 'Мечник', health: 10})).toBe('critical');
})