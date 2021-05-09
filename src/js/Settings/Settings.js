export class Settings {
  constructor(data = []) {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.customerSettings = new Map(data);
  }

  get settings() {
    const currentSettings = new Map();
    for (const i of this.defaultSettings.keys()) {
      if (this.customerSettings.has(i)) {
        currentSettings.set(i, this.customerSettings.get(i));
      } else {
        currentSettings.set(i, this.defaultSettings.get(i));
      }
    }
    return currentSettings;
  }
}
