import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={props.isTablet ? 112 : 112 / 2}
      height={props.isTablet ? 115 : 115 / 2}
      viewBox="0 0 112 115"
      fill="none"
      rotation={props.rotation}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_1233_49406)">
        <Path
          d="M37.866 87.927c2.367-1.336 4.183-2.49 6.06-3.504 1.113-.569 2.363-1.2 3.513.746-3.503 2.516-6.674 5.248-10.493 7.139-1.599.822-2.602.375-3.632-1.159-.387-.558-.635-1.18-.886-1.733-1.309-3.108-2.618-6.216-3.856-9.39-.436-1.035-.8-2.205.519-2.833 1.18-.567 2.176.083 2.819 1.06.705 1.114 1.204 2.288 1.771 3.465.377.83.75 1.728 1.54 2.438l.047-1.222c.178-4.546 1.33-6.132 5.614-7.734 3.452-1.226 6.947-1.77 10.605-1.29.881.102 1.763.203 2.576.303 3.599.274 4.878-1.104 4.061-4.6-.407-1.783-1.225-3.513-1.839-5.235-1.977-5.173-.838-8.187 4.163-10.712 3.752-1.894 7.743-2.964 11.97-3.073 1.294-.018 2.656-.034 3.891-.258 2.058-.396 2.642-1.393 1.761-3.261-.875-2.005-2.098-3.819-3.25-5.697-.766-1.321-1.741-2.514-2.436-3.9-1.388-2.839-1.478-5.764.597-8.334 1.573-1.91 3.347-3.745 5.184-5.44 1.2-1.11 2.788-1.66 4.856-.561-.567.59-1.062 1.046-1.559 1.57-1.842 1.832-3.684 3.664-5.395 5.637-1.64 1.907-1.45 4.02-.168 6.04 1.158 1.744 2.457 3.357 3.547 5.098.96 1.6 1.986 3.202 2.532 4.921 1.285 3.72-.54 6.843-4.45 7.575-1.783.34-3.692.402-5.53.4-3.68.061-7.125 1.084-10.322 2.728-2.642 1.393-3.027 2.533-2.045 5.289.797 2.273 1.8 4.486 2.254 6.814.35 1.508.145 3.267-.324 4.812-.785 2.687-2.881 4.034-5.672 3.994-1.495-.057-3.057-.185-4.542-.514-3.447-.677-6.745.08-9.92 1.18-1.52.554-2.509 1.467-2.58 3.299-.072 1.832-.549 3.58-.981 5.942z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1233_49406">
          <Path
            fill="#fff"
            transform="rotate(118.189 44.422 51.963)"
            d="M0 0H87.8661V79.0795H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;