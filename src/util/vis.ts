import { KeyboardModel } from '../models/keyboard';
import { for2d, map2d } from './util';
import { copyKey, changeKeyColour } from './parse';

function getEffortColour(effort: number): string {
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

function changeColourByEffort(kb: KeyboardModel) {
  return map2d(kb, (e, i, j) => changeKeyColour(e, getEffortColour(e.effort)));
}

function gradient(color1: string, color2: string, ratio: number): string {
  let hex = function(x: number) {
      let y = x.toString(16);
      return (y.length == 1) ? '0' + y : y;
  };

  let r = Math.ceil(parseInt(color1.substring(0,2), 16) * ratio + parseInt(color2.substring(0,2), 16) * (1-ratio));
  let g = Math.ceil(parseInt(color1.substring(2,4), 16) * ratio + parseInt(color2.substring(2,4), 16) * (1-ratio));
  let b = Math.ceil(parseInt(color1.substring(4,6), 16) * ratio + parseInt(color2.substring(4,6), 16) * (1-ratio));

  let middle = hex(r) + hex(g) + hex(b);

  return middle
}

function changeColourByFreq(kb: KeyboardModel, freq: {[k: string]: number}): KeyboardModel {
  let colour1 = 'ffffff';
  let colour2 = 'ff0000';
  // let colour2 = '00ff00';

  // console.log('freq', freq);
  let score: (typeof freq) = {};
  Object.keys(freq).forEach(c => {
    // score[c] = Math.log10(1 + freq[c]);
    if ((c >= 'a' && c <= 'z') 
        || c == ';' || c == ',' || c == '.' || c == '/'
        || c == '-') {
      score[c] = freq[c];
    }
  });

  let max_score = Math.max(...Object.values(score));
  let min_score = Math.min(...Object.values(score));
  min_score *= 0.8;
  min_score = 0;

  // console.log('max freq', max_freq);

  if (max_score <= 0) {
    return kb;
  }

  // console.log(score);

  Object.keys(score).forEach(c => {
    score[c] = 1 - (score[c] - min_score) / (max_score - min_score);
  })

  // console.log(score);

  return map2d(kb, (k, i, j) => {
    let f = 1;
    let t;
    if (k.code in score) {
      f = score[k.code];
      t = changeKeyColour(k, '#' + gradient(colour1, colour2, f));
    } else {
      t = changeKeyColour(k, '#dddddd');
    }
    // console.log(t, f, score[k.code]);
    return t;
  })
}

export default {
  changeColourByEffort,
  changeColourByFreq,
};
