import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { OpaqueColorValue, StyleProp, TextStyle } from 'react-native';

const MAPPING = {
  'house.fill': 'home',
  'suporte.fill': 'help',
  'adote.fill': 'card-giftcard',
  'apoie.fill': 'attach-money',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
} as const;

export type IconSymbolName = keyof typeof MAPPING;

type IconSymbolProps = {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
};

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: IconSymbolProps): JSX.Element {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}
