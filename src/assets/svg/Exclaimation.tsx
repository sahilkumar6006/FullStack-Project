import themeColor from '@tandem/theme/themeColor';
import * as React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {scale} from 'react-native-size-matters';
import Svg, {Path} from 'react-native-svg';

function SvgComponent({style}: {style?: StyleProp<ViewStyle>}) {
  return (
    <Svg
      style={style}
      height={`${scale(230)}px`}
      width={`${scale(230)}px`}
      viewBox="0 -960 960 960"
      fill={themeColor.gold}>
      <Path d="M479.98-280q14.02 0 23.52-9.48t9.5-23.5q0-14.02-9.48-23.52t-23.5-9.5q-14.02 0-23.52 9.48t-9.5 23.5q0 14.02 9.48 23.52t23.5 9.5zM453-433h60v-253h-60v253zm27.27 353q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34Q80-397.68 80-480.5t31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880t155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80zm.23-60Q622-140 721-239.5t99-241Q820-622 721.19-721T480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5zm-.5-340z" />
    </Svg>
  );
}

export default SvgComponent;