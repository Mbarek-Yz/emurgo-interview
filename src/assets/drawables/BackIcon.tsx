import * as React from 'react';
import Svg, {Path, type SvgProps} from 'react-native-svg';

export const BackIcon: React.FC<SvgProps> = (props): React.JSX.Element => {
  const {width = 24, height = 24} = props;
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        fill="#2E2E2E"
        fillRule="evenodd"
        d="M16.003 21 6.5 12l9.503-9L17.5 4.418l-8.006 7.581 8.006 7.583L16.003 21Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
