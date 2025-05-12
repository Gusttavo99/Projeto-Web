

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, TextStyle } from 'react-native';

const MAPPING = {
  'house.fill': 'home',
  'suporte.fill': 'help',
  'adote.fill': 'card-giftcard',
  'apoie.fill': 'attach-money',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof MaterialIcons>['name']
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>; // <-- aqui
  weight?: SymbolWeight;
}) {
  const mappedName = MAPPING[name];
  if (!mappedName) {
    console.warn(`IconSymbol: ícone não encontrado para o nome "${name}"`);
    return null;
  }
  return <MaterialIcons color={color} size={size} name={mappedName} style={style} />;
}
