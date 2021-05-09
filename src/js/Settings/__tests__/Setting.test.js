import { Settings } from '../Settings';

const defaultMap = new Map([
  ['theme', 'dark'],
  ['music', 'trance'],
  ['difficulty', 'easy'],
]);

const customizeMap = new Map([
  ['theme', 'dark'],
  ['music', 'pop'],
  ['difficulty', 'easy'],
]);

test('применение настроек по умолчанию', () => {
  const defaultSettung = new Settings();

  expect(defaultSettung.settings).toEqual(defaultMap);
});

test('применение пользовательских настроек', () => {
  const defaultSettung = new Settings([['music', 'pop']]);

  expect(defaultSettung.settings).toEqual(customizeMap);
});
