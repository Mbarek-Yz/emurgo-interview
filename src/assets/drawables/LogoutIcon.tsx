import * as React from 'react';
import Svg, {Path, type SvgProps} from 'react-native-svg';

export const LogoutIcon: React.FC<SvgProps> = (props): React.JSX.Element => {
  const {width = 28, height = 28, stroke = '#fff', strokeWidth = 2} = props;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M16 17v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <Path
        d="M7 12h10M13 8l4 4-4 4"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
};
