declare module 'react-native';

declare module 'react-native-vector-icons/MaterialIcons' {
  import { Component } from 'react';
  import { TextProps } from 'react-native';

  interface IconProps extends TextProps {
    name: string;
    size?: number;
    color?: string;
  }

  export default class MaterialIcons extends Component<IconProps> {}
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg';
