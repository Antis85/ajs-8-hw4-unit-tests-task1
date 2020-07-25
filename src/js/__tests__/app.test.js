import characterHealthStatus from '../app';

test('тест индикации статуса здоровья персонажа при HP=999', () => {
  const character = { name: 'Маг', health: 999 };
  const received = characterHealthStatus(character);
  const expected = 'healthy';
  expect(received).toBe(expected);
});

test('тест индикации статуса здоровья персонажа при HP=51', () => {
  const character = { name: 'Маг', health: 51 };
  const received = characterHealthStatus(character);
  const expected = 'healthy';
  expect(received).toBe(expected);
});

test('тест индикации статуса здоровья персонажа при HP=50', () => {
  const character = { name: 'Маг', health: 50 };
  const received = characterHealthStatus(character);
  const expected = 'wounded';
  expect(received).toBe(expected);
});

test('тест индикации статуса здоровья персонажа при HP=16', () => {
  const character = { name: 'Маг', health: 16 };
  const received = characterHealthStatus(character);
  const expected = 'wounded';
  expect(received).toBe(expected);
});

test('тест индикации статуса здоровья персонажа при HP=15', () => {
  const character = { name: 'Маг', health: 15 };
  const received = characterHealthStatus(character);
  const expected = 'wounded';
  expect(received).toBe(expected);
});

test('тест индикации статуса здоровья персонажа при HP=14', () => {
  const character = { name: 'Маг', health: 14 };
  const received = characterHealthStatus(character);
  const expected = 'critical';
  expect(received).toBe(expected);
});

test('тест индикации статуса здоровья персонажа при HP=0', () => {
  const character = { name: 'Маг', health: 0 };
  const received = characterHealthStatus(character);
  const expected = 'critical';
  expect(received).toBe(expected);
});

test('тест индикации статуса здоровья персонажа при HP<0', () => {
  const character = { name: 'Маг', health: -1 };
  const received = characterHealthStatus(character);
  const expected = 0;
  expect(received).toBe(expected);
});
