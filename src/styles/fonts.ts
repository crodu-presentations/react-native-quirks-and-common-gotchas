import { Platform, TextStyle } from 'react-native';

type FontType = 'h1' | 'h2' | 'body' | 'bodyStrong';

export const Typography: Record<FontType, TextStyle> = {
  h1: {
    fontFamily: 'JosefinSans-Light',
    fontSize: 36,
  },
  h2: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: 24,
  },
  body: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    fontWeight: 'normal',
    fontSize: 16,
  },
  bodyStrong: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    fontWeight: 'bold',
    fontSize: 16,
  },
};
