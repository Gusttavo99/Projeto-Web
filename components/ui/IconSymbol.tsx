<<<<<<< HEAD


import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
=======
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
>>>>>>> d98b749c64d2d05fe79fd77e580c16583add024b
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

<<<<<<< HEAD
=======
type IconSymbolProps = {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
};

>>>>>>> d98b749c64d2d05fe79fd77e580c16583add024b
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
<<<<<<< HEAD
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
=======
}: IconSymbolProps): JSX.Element {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
>>>>>>> d98b749c64d2d05fe79fd77e580c16583add024b
}
