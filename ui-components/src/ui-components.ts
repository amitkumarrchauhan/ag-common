import { Button } from './components/button/Button';
import {
  Behavior,
  Color,
  Modifier,
  Size,
  StyleTo,
} from './components/button/Button.enum';
import { Demo } from './components/demo/Demo';
import { checkStyle } from './utils/style/style.util';
import { Theme } from './utils/theme/Theme';

// normal Object
export { Theme };

// components
export { Button as AgButton, Demo as AgDemo };

// functions
export { checkStyle };

// enums
export { Behavior, Color, Modifier, Size, StyleTo };

export * from './components/base';
export * from './components/button';
