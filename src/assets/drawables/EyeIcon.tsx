import * as React from 'react';
import Svg, {Path, type SvgProps} from 'react-native-svg';

export const EyeIcon: React.FC<SvgProps> = (props): React.JSX.Element => {
  const {width = 24, height = 20, stroke = '#fff', strokeWidth = 1} = props;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none" // No fill for the entire SVG
      {...props}>
      <Path
        d="M12 4.5C6.5 4.5 2 9 2 12s4.5 7.5 10 7.5 10-4.5 10-7.5S17.5 4.5 12 4.5zM12 17c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-9c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
        stroke={stroke} // Default stroke color set to white (#fff)
        strokeWidth={strokeWidth} // Customizable stroke thickness
        fill="none" // No fill for the path (interior)
      />
    </Svg>
  );
};
