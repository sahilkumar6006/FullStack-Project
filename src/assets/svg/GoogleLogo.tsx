import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="M8.361.79a11.865 11.865 0 0 0 .812 22.668c1.987.513 4.07.536 6.067.066A10.712 10.712 0 0 0 20.097 21a10.77 10.77 0 0 0 3-4.924c.58-2.048.683-4.202.301-6.296h-11.16v4.63h6.464a5.573 5.573 0 0 1-2.374 3.66 6.779 6.779 0 0 1-2.612 1.03 7.743 7.743 0 0 1-2.831 0 6.967 6.967 0 0 1-2.635-1.149 7.369 7.369 0 0 1-2.718-3.64 7.183 7.183 0 0 1 0-4.62 7.36 7.36 0 0 1 1.72-2.795 6.97 6.97 0 0 1 7.023-1.833 6.428 6.428 0 0 1 2.557 1.5c.729-.725 1.456-1.452 2.183-2.181.375-.392.784-.765 1.153-1.166A11.478 11.478 0 0 0 16.35.86 12 12 0 0 0 8.361.789Z"
      />
      <Path
        fill="#E33629"
        d="M8.36.79a12 12 0 0 1 7.99.069 11.479 11.479 0 0 1 3.816 2.366c-.375.401-.77.776-1.153 1.166-.728.726-1.455 1.45-2.181 2.171a6.428 6.428 0 0 0-2.558-1.5A6.97 6.97 0 0 0 7.252 6.89a7.36 7.36 0 0 0-1.722 2.795L1.643 6.675A11.912 11.912 0 0 1 8.36.789Z"
      />
      <Path
        fill="#F8BD00"
        d="M.611 9.656a11.8 11.8 0 0 1 1.032-2.981L5.53 9.692a7.183 7.183 0 0 0 0 4.618c-1.295 1-2.591 2.005-3.887 3.015A11.874 11.874 0 0 1 .61 9.656Z"
      />
      <Path
        fill="#587DBD"
        d="M12.238 9.778h11.16a13.937 13.937 0 0 1-.302 6.296 10.77 10.77 0 0 1-3 4.924c-1.254-.979-2.514-1.95-3.768-2.929a5.573 5.573 0 0 0 2.373-3.663h-6.463c-.002-1.542 0-3.085 0-4.628Z"
      />
      <Path
        fill="#319F43"
        d="M1.64 17.325c1.297-1 2.592-2.005 3.887-3.015a7.369 7.369 0 0 0 2.723 3.641c.791.56 1.69.948 2.64 1.14a7.744 7.744 0 0 0 2.831 0 6.78 6.78 0 0 0 2.612-1.03c1.255.978 2.515 1.95 3.769 2.928a10.712 10.712 0 0 1-4.856 2.525c-1.998.47-4.08.448-6.068-.065a11.813 11.813 0 0 1-4.312-2.173 11.95 11.95 0 0 1-3.225-3.95Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;