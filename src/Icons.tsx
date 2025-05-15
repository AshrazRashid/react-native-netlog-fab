import React from 'react';
import { Text } from 'react-native';

export enum Icons {
  MaterialIcons = 'MaterialIcons',
}

interface IconProps {
  type: Icons;
  name: string;
  size: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size, color = '#000' }) => {
  return (
    <Text style={{ fontSize: size, color }}>
      {name === 'expand-less' ? '▲' : name}
    </Text>
  );
};

export default Icon;
