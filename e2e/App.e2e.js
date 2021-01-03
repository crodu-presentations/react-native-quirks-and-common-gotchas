/* eslint-env detox/detox, jest */

describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have container element', async () => {
    await expect(element(by.id('container'))).toBeVisible();
  });

  it('should show Home Screen', async () => {
    await expect(element(by.text('Home Screen'))).toBeVisible();
  });
});
