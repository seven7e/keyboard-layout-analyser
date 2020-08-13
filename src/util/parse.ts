import { KeyRowModel } from '../models/keyboard';
import { table } from 'console';

const widthConfig: {[key: string]: number} = {
  tab: 1.5,
  caps: 2,
  l_shift: 2.5,
  r_shift: 2,
  enter: 1.5
};

const labels: {[key: string]: string} = {
  tab: 'Tab',
  caps: 'Caps Lock',
  l_shift: 'Shift'
}

function getKeyWidth(keyName: string) {
  let width = widthConfig[keyName.toLowerCase()];
  if (width) {
    return width;
  }

  return 1;
}

export function parse_row(row: string): KeyRowModel {
  return row.split(/\s+/).map(k => ({label: k, width: getKeyWidth(k)}));
}

export function parse_layout(row_strs: Array<string>) {
  return row_strs.map(parse_row);
}