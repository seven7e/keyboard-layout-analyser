import { parse_layout } from './parse';
import { KeyboardModel } from '../models/keyboard';

const qwerty = [
    'Tab Q W D F K J U R L ; [ ] |',
    'Caps A S E T G Y N I O H - Enter',
    'L_Shift Z X C V B P M , . / R_Shift',
    // 'L_Ctrl L_Alt L_Cmd Space R_Cmd R_Alt R_Ctrl'
  ];


const layouts_tmp: {[k: string]: Array<string>} = {
  qwerty,
}

var layouts: {[k: string]: KeyboardModel} = {};

Object.keys(layouts_tmp).forEach((k, i) => {
  layouts[k] = parse_layout(layouts_tmp[k])
});

console.log(layouts);

export default layouts;