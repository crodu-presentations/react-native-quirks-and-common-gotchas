/* eslint-env detox/detox, jest */

describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have container element', async () => {
    await expect(element(by.id('container'))).toBeVisible();
  });

  it('should show [Spam JS thread] button', async () => {
    await expect(element(by.id('button.spam_js_thread'))).toBeVisible();
  });
});
