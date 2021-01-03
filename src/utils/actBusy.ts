/**
 * source:
 * https://medium.com/@rotemmiz/react-native-internals-a-wider-picture-part-1-messagequeue-js-thread-7894a7cba868
 */

export function actBusy() {
  setTimeout(() => {
    actBusyFor(8000);
  }, 0);
}

export function actBusyFor(milliseconds: number) {
  const start = new Date().getTime();
  let i;
  for (i = 0; i < 1e8; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
  return i;
}
