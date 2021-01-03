/* eslint-env detox/detox, jest */

describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have container element', async () => {
    await expect(element(by.id('container'))).toBeVisible();
  });

  it('should show "Hello dev.js" text', async () => {
    await expect(element(by.text('Hello dev.js'))).toBeVisible();
  });
});
