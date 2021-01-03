module.exports = {
  'testRunner': 'jest',
  'runnerConfig': 'e2e/config.json',
  'artifacts': {
    'rootDir': '.artifacts',
    'plugins': {
      'instruments': { 'enabled': false },
      'log': { 'enabled': true },
      'uiHierarchy': 'enabled',
      'screenshot': {
        'shouldTakeAutomaticSnapshots': true,
        'keepOnlyFailedTestsArtifacts': true,
        'takeWhen': {
          'testStart': false,
          'testDone': true,
        },
      },
    },
  },
  'configurations': {
    'android.emu.debug': {
      'binaryPath': 'android/app/build/outputs/apk/debug/app-debug.apk',
      'build':
        'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..',
      'type': 'android.emulator',
      'device': {
        'avdName': 'nexus_one_28',
      },
    },
    'ios.sim.debug': {
      'binaryPath': 'ios/build/Build/Products/Debug-iphonesimulator/devjsdemo.app',
      'build': 'xcodebuild -workspace ios/devjsdemo.xcworkspace -scheme devjsdemo -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
      'type': 'ios.simulator',
      'device': {
        'type': 'iPhone 11',
      },
    },
  },
};
