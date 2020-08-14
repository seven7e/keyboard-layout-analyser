import { parseLayout } from './parse';
import { KeyboardModel } from '../models/keyboard';
import { get2DDefault } from './util';

const efforts = [
  [0, 4, 2, 2, 3, 4, 5, 3, 2, 2, 4, 0, 0, 0],
  [0, 1.5, 1, 1, 1, 3, 3, 1, 1, 1, 1.5, 0, 0],
  [0, 4, 4, 3, 2, 5, 3, 2, 3, 4, 4, 0],
];

const widths = [
  [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1.85,   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.65],
  [2.25, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2.25],
]

const qwerty = [
  'tab q w d f k j u r l ; [ ] |',
  'caps a s e t g y n i o h - enter',
  'l_shift z x c v b p m , . / r_shift',
  // 'L_Ctrl L_Alt L_Cmd Space R_Cmd R_Alt R_Ctrl'
];


const layouts_tmp: {[k: string]: Array<string>} = {
  qwerty,
}

var layouts: {[k: string]: KeyboardModel} = {};

Object.keys(layouts_tmp).forEach((k, i) => {
  let layout = parseLayout(layouts_tmp[k])
  layout.forEach((row, i) => {
    row.forEach((key, j) => {
      key.width = get2DDefault(widths, i, j, 1);
      key.effort = get2DDefault(efforts, i, j, 0);
    })
  })

  layouts[k] = layout;
});

console.log(layouts);

export default layouts;