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
  l_shift: 'Shift',
  r_shift: 'Shift',
  enter: 'Enter',
}

function getKeyWidth(keyName: string) {
  let width = widthConfig[keyName.toLowerCase()];
  if (width) {
    return width;
  }

  return 1;
}

function getKeyLabel(keyName: string): string {
  let label = labels[keyName];
  if (label) {
    return label;
  }

  return keyName.toUpperCase();
}

export function parse_row(row: string): KeyRowModel {
  return row.split(/\s+/).map(k => ({
    code: k,
    shift: k,
    label: getKeyLabel(k),
    width: getKeyWidth(k),
    effort: 1,
    colour: '#ffffff'
  }));
}

export function parse_layout(row_strs: Array<string>) {
  return row_strs.map(parse_row);
}