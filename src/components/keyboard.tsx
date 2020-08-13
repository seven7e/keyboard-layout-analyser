import React from 'react';
import '../css/keyboard.css';
import { KeyModel, KeyRowModel, KeyboardModel } from '../models/keyboard';
import _ from 'lodash';

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

function KeyButton(props: {keyModel: KeyModel, unitWidth: number}) {
  const percent = props.keyModel.width * props.unitWidth;
  // console.log(props.keyModel, percent);
  
  const style = {
    width: `${percent}%`,
    paddingBottom: `${props.unitWidth}%`
  };

  return (
    <div className='keyboard-button-wrapper' style={style}>
      <div className='keyboard-button' 
          style={{backgroundColor: getEffortColour(props.keyModel.effort)}}>
        <div className='keyboard-button-content'>
          {props.keyModel.label}
        </div>
      </div>
    </div>
  );
}

function KeyboardRow(props: {row: KeyRowModel}) {
  const totalWidth = _.sum(props.row.map(k => k.width));
  // const unitWidth = 100 / totalWidth;
  const unitWidth = 6.8;

  return (
    <div className='keyboard-row'>
      {props.row.map((k, i) => (
        <KeyButton key={i} keyModel={k} unitWidth={unitWidth}></KeyButton>
      ))}
    </div>
  );
}

function KeyboardLayout(props: {rows: KeyboardModel}) {
  return (
    <div className='keyboard-layout'>
      {props.rows.map((r, i) => (
        <KeyboardRow key={i} row={r}></KeyboardRow>
      ))}
    </div>
  );
}

export default KeyboardLayout;