import themeColor from '@tandem/theme/themeColor';
import * as React from 'react';
import {verticalScale} from 'react-native-size-matters';
import Svg, {SvgProps, G, Mask, Path, Defs, ClipPath} from 'react-native-svg';
const SvgComponent = ({props, color}: {props?: SvgProps; color?: string}) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72 72"
    width={verticalScale(54)}
    height={verticalScale(54)}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Mask id="b" fill="#fff">
        <Path d="M.697 39.62c-.344-.209-.385-.542-.415-.912-.047-.615-.15-1.229-.226-1.843-.026-.22-.097-.465-.03-.662.368-1.08.404-2.267 1.014-3.275.712-1.169 1.373-2.367 2.05-3.554.128-.227.246-.477.302-.734.451-2.04 1.456-3.823 2.64-5.463 1.517-2.105 3.162-4.115 4.786-6.137a5.695 5.695 0 0 1 1.789-1.497c-.144.238-.292.477-.6.996.395-.227.544-.28.656-.376 1.4-1.193 2.752-2.434 4.192-3.573 1.917-1.52 3.885-2.964 5.843-4.431.164-.125.466-.28.574-.215.533.34.897-.018 1.291-.256.523-.316 1.061-.609 1.553-.966.385-.28.78-.59 1.035-.985a3.397 3.397 0 0 1 1.236-1.139c.994-.536 1.983-1.085 2.977-1.616.19-.101.42-.233.61-.203.84.137 1.594-.226 2.363-.465.046.131.082.209.102.292.062.245.261.293.354.12.164-.299.23-.656.358-1.068.2-.101.492-.209.733-.388a2.111 2.111 0 0 1 1.722-.375c.58.119 1.123.011 1.645-.203 1.056-.442 2.173-.609 3.29-.656 1.769-.072 3.547-.108 5.269.453.446.15.887.328 1.327.495.241.095.472.209.718.286.969.31 2.05.322 2.793 1.223.164.197.661.125.784.322.323.513.764.817 1.24 1.127.513.328.713.871.748 1.48.026.53.062 1.067.082 1.598.031.71.426 1.139 1.015 1.413.16.072.328.12.492.161 1.45.376 2.722 1.122 3.916 2.016.235.18.528.394.61.65.138.43.353.668.753.83.169.065.318.298.384.489.318.87.64 1.747.897 2.636.128.453.272.876.728 1.014.594.178.784.656.922 1.18.072.257.103.525.144.788.087.602.328 1.073.886 1.383 1.04.579 1.507 1.61 1.646 2.726.112.895.404 1.646.989 2.255 1.701 1.77 1.932 3.918 1.45 6.196-.354 1.694-.856 3.352-1.291 5.028-.067.257-.139.513-.2.776-.082.37-.057.745.22.996.42.375.564.882.764 1.371.102.245.215.495.379.692 1.558 1.85 1.804 4.074 1.748 6.388-.006.22-.077.453-.041.662.184 1.097-.057 2.075-.498 3.09-.42.96-.558 2.051-.891 3.059-.277.835-.549 1.706-1.005 2.445-1.091 1.76-2.142 3.567-3.695 4.957-.63.56-1.091 1.246-1.522 1.974-1.425 2.41-3.147 4.562-5.381 6.232-.625.466-1.328.83-2.004 1.223-.482.28-1.03.435-1.379.954-.128.197-.425.293-.66.388-1.144.465-2.327.68-3.557.549-1-.376-2.014-.09-3.024-.018h3.039c-.38.077-.753.185-1.133.22-.984.096-1.973.215-2.962.227-.681.012-1.368-.137-2.055-.209-.856-.09-1.712-.16-2.568-.256-.384-.042-.768-.084-1.137-.191-2.286-.65-4.567-1.294-6.919-1.664a13.731 13.731 0 0 1-4.633-1.628c-1.44-.817-2.941-1.21-4.571-1.116-.128.006-.272.036-.385-.011-.845-.364-1.64-.442-2.419.208-.133.114-.476.012-.445-.292.03-.304-.108-.423-.329-.465-1.06-.18-2.121-.334-3.182-.501-.123-.018-.272.018-.369-.042-1.456-.835-3.147-1.282-4.27-2.684-.296-.37-.706-.572-1.147-.34-.374.197-.682.09-.974-.09-1.225-.745-2.5-1.425-3.638-2.29-1.277-.972-2.189-2.266-2.281-4.002-.01-.22-.092-.435-.097-.655-.036-1.128-.467-2.07-1.271-2.816-.344-.316-.503-.703-.6-1.145-.277-1.264-.487-2.517-.159-3.817.103-.411.046-.883-.01-1.312-.092-.71-.185-1.407-.005-2.117.112-.436-.036-.77-.395-1.032-.559-.412-1.102-.853-1.655-1.282-.533-.418-.943-.913-.994-1.635l.01.03c.184.048.364.09.625.155l-.62-1.115-.051-.036Zm66.121-16.735c.293-.728.313-.806.129-1.146-.231-.423-.503-.799-1.067-.793-.348 1.038.472 1.354.938 1.939ZM7.482 58.306c-.056.113-.128.209-.138.316-.005.042.107.108.169.161.066-.095.143-.179.184-.28.01-.03-.112-.113-.215-.197Zm60.53-26.988c-.056-.024-.112-.054-.174-.066-.01 0-.061.072-.051.09.03.053.082.101.123.149.03-.06.067-.113.102-.173Zm-.287 1.026c-.03.012-.066.03-.097.042.02.047.041.09.067.137.025-.03.061-.054.066-.084.005-.024-.02-.06-.036-.095ZM39.287 1.813l.057-.077h-.108l.051.077Zm23.36 14.32-.082.018.05.078.032-.096Zm1.122.698-.082-.054c-.01.03-.041.066-.03.084.01.024.05.035.076.053.01-.023.02-.053.036-.083Z" />
      </Mask>
      <Path
        fill={color ? color : themeColor.lightGray}
        strokeWidth={4}
        d="M.697 39.62c-.344-.209-.385-.542-.415-.912-.047-.615-.15-1.229-.226-1.843-.026-.22-.097-.465-.03-.662.368-1.08.404-2.267 1.014-3.275.712-1.169 1.373-2.367 2.05-3.554.128-.227.246-.477.302-.734.451-2.04 1.456-3.823 2.64-5.463 1.517-2.105 3.162-4.115 4.786-6.137a5.695 5.695 0 0 1 1.789-1.497c-.144.238-.292.477-.6.996.395-.227.544-.28.656-.376 1.4-1.193 2.752-2.434 4.192-3.573 1.917-1.52 3.885-2.964 5.843-4.431.164-.125.466-.28.574-.215.533.34.897-.018 1.291-.256.523-.316 1.061-.609 1.553-.966.385-.28.78-.59 1.035-.985a3.397 3.397 0 0 1 1.236-1.139c.994-.536 1.983-1.085 2.977-1.616.19-.101.42-.233.61-.203.84.137 1.594-.226 2.363-.465.046.131.082.209.102.292.062.245.261.293.354.12.164-.299.23-.656.358-1.068.2-.101.492-.209.733-.388a2.111 2.111 0 0 1 1.722-.375c.58.119 1.123.011 1.645-.203 1.056-.442 2.173-.609 3.29-.656 1.769-.072 3.547-.108 5.269.453.446.15.887.328 1.327.495.241.095.472.209.718.286.969.31 2.05.322 2.793 1.223.164.197.661.125.784.322.323.513.764.817 1.24 1.127.513.328.713.871.748 1.48.026.53.062 1.067.082 1.598.031.71.426 1.139 1.015 1.413.16.072.328.12.492.161 1.45.376 2.722 1.122 3.916 2.016.235.18.528.394.61.65.138.43.353.668.753.83.169.065.318.298.384.489.318.87.64 1.747.897 2.636.128.453.272.876.728 1.014.594.178.784.656.922 1.18.072.257.103.525.144.788.087.602.328 1.073.886 1.383 1.04.579 1.507 1.61 1.646 2.726.112.895.404 1.646.989 2.255 1.701 1.77 1.932 3.918 1.45 6.196-.354 1.694-.856 3.352-1.291 5.028-.067.257-.139.513-.2.776-.082.37-.057.745.22.996.42.375.564.882.764 1.371.102.245.215.495.379.692 1.558 1.85 1.804 4.074 1.748 6.388-.006.22-.077.453-.041.662.184 1.097-.057 2.075-.498 3.09-.42.96-.558 2.051-.891 3.059-.277.835-.549 1.706-1.005 2.445-1.091 1.76-2.142 3.567-3.695 4.957-.63.56-1.091 1.246-1.522 1.974-1.425 2.41-3.147 4.562-5.381 6.232-.625.466-1.328.83-2.004 1.223-.482.28-1.03.435-1.379.954-.128.197-.425.293-.66.388-1.144.465-2.327.68-3.557.549-1-.376-2.014-.09-3.024-.018h3.039c-.38.077-.753.185-1.133.22-.984.096-1.973.215-2.962.227-.681.012-1.368-.137-2.055-.209-.856-.09-1.712-.16-2.568-.256-.384-.042-.768-.084-1.137-.191-2.286-.65-4.567-1.294-6.919-1.664a13.731 13.731 0 0 1-4.633-1.628c-1.44-.817-2.941-1.21-4.571-1.116-.128.006-.272.036-.385-.011-.845-.364-1.64-.442-2.419.208-.133.114-.476.012-.445-.292.03-.304-.108-.423-.329-.465-1.06-.18-2.121-.334-3.182-.501-.123-.018-.272.018-.369-.042-1.456-.835-3.147-1.282-4.27-2.684-.296-.37-.706-.572-1.147-.34-.374.197-.682.09-.974-.09-1.225-.745-2.5-1.425-3.638-2.29-1.277-.972-2.189-2.266-2.281-4.002-.01-.22-.092-.435-.097-.655-.036-1.128-.467-2.07-1.271-2.816-.344-.316-.503-.703-.6-1.145-.277-1.264-.487-2.517-.159-3.817.103-.411.046-.883-.01-1.312-.092-.71-.185-1.407-.005-2.117.112-.436-.036-.77-.395-1.032-.559-.412-1.102-.853-1.655-1.282-.533-.418-.943-.913-.994-1.635l.01.03c.184.048.364.09.625.155l-.62-1.115-.051-.036Zm66.121-16.735c.293-.728.313-.806.129-1.146-.231-.423-.503-.799-1.067-.793-.348 1.038.472 1.354.938 1.939ZM7.482 58.306c-.056.113-.128.209-.138.316-.005.042.107.108.169.161.066-.095.143-.179.184-.28.01-.03-.112-.113-.215-.197Zm60.53-26.988c-.056-.024-.112-.054-.174-.066-.01 0-.061.072-.051.09.03.053.082.101.123.149.03-.06.067-.113.102-.173Zm-.287 1.026c-.03.012-.066.03-.097.042.02.047.041.09.067.137.025-.03.061-.054.066-.084.005-.024-.02-.06-.036-.095ZM39.287 1.813l.057-.077h-.108l.051.077Zm23.36 14.32-.082.018.05.078.032-.096Zm1.122.698-.082-.054c-.01.03-.041.066-.03.084.01.024.05.035.076.053.01-.023.02-.053.036-.083Z"
        mask="url(#b)"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h72v72H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;