import React, { useState } from 'react';
import KeyboardLayout from '../components/keyboard';
import { parseLayout } from '../util/parse';
import Layouts from '../util/predefined_layouts';
import { KeyboardModel } from '../models/keyboard';
import vis from '../util/vis';
import { countChar } from '../util/util';

let layout = vis.changeColourByEffort(Layouts.qwerty)

function Home(props: any) {
  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // console.log(e.target.value);
    setText(e.target.value);
  }

  const [text, setText] = useState('');
  const [keyboard, setKeyboard] = useState(layout);

  function calcKeyboardMetrics(text: string, keyboard: KeyboardModel) {
    // console.log('evaluate', text, keyboard);
    if (text.length <= 0) {
      return;
    }
    // let cnt = {q: 10, w: 20};
    let cnt = countChar(text.toLowerCase());
    // console.log('cnt', cnt);
    let new_kb = vis.changeColourByFreq(keyboard, cnt);
    // console.log('new keyboard', new_kb);
    setKeyboard(new_kb);
  }

  return (
    <div>
      <p>Test</p>
      {/* <div style={{display: 'flex', justifyContent: 'center', border:'2px solid'}}> */}
      <div style={{textAlign: 'center'}}>
        <div style={{width: '80%', display: 'inline-block'}}>
          <KeyboardLayout rows={keyboard}></KeyboardLayout>
        </div>
      </div>
      <div style={{marginTop: '20px'}}>
        <textarea placeholder="Enter text here..." 
          onChange={(e) => onTextChange(e)}
          style={{width: '60%', height: '200px'}}>
        </textarea>
        <button type='button'
          style={{backgroundColor: '#99ddff', margin: '10px', 
                  // marginBottom: '2px', 
                  height: '50px',
                  width: '80px',
                  display: 'inline-block'}}
          onClick={() => calcKeyboardMetrics(text, keyboard)}
          >
          Calculate
        </button>
      </div>
    </div>
  )
}

export default Home;