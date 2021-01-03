/* eslint-env detox/detox, jest */

describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have container element', async () => {
    await expect(element(by.id('container'))).toBeVisible();
  });

  it('should show "Go to Chart" button', async () => {
    await expect(element(by.id('btn.go_to_chart.100'))).toBeVisible();
  });
});
