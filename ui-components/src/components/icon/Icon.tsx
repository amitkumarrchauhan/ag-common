import { X as Close, Icon as PhosporIcon } from '@phosphor-icons/react';
import React from 'react';

export type IconProps = PhosporIcon & {
  name: string;
  alt?: string;
  size?: number;
  color?: string;
};

const iconMap: Map<string, PhosporIcon> = new Map();
iconMap.set('Close', Close);

//
const Icon: React.FC<IconProps> = ({
  name,
  alt,
  size = 24,
  color = 'black',
}: IconProps) => {
  const IconEl = iconMap.get(name);

  if (IconEl) {
    return <IconEl size={size} alt={alt} color={color} />;
  }

  return <div style={{ color: color || 'red' }}>{name}Icon not found !!!</div>;
};

export default Icon;
