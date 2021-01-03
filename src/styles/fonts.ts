import { Platform, TextStyle } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

type FontType = 'h1' | 'h2' | 'body' | 'bodyStrong';

export const Typography = EStyleSheet.create({
  h1: {
    fontFamily: 'JosefinSans-Light',
    fontSize: '2rem',
  },
  h2: {
    fontFamily: 'JosefinSans-SemiBold',
    fontSize: '1.5rem',
  },
  body: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    fontWeight: 'normal',
    fontSize: '1rem',
  },
  bodyStrong: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
}) as Record<FontType, TextStyle>;
