import { KeyboardModel } from '../models/keyboard';
import { for2d } from './util';

export function getEffortColour(effort: number): string {
  let colour = '#d9d9d9';

  if (effort > 5.99) {
    colour = '#993366';
  } else if (effort > 4.99) {
    colour = '#cc0000';
  } else if (effort > 3.99) {
    colour = '#ff3300'
  } else if (effort > 2.99) {
    colour = '#ffcc00'
  } else if (effort > 1.99) {
    colour = '#ccff33'
  } else if (effort > 1.49) {
    colour = '#99ff66'
  } else if (effort > 0.99) {
    colour = '#00ff00'
  }

  return colour;
}

export function setColourByEffort(kb: KeyboardModel) {
  for2d(kb, (e, i, j) => {e.colour = getEffortColour(e.effort)});
}