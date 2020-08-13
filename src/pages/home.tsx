import React, { useState } from 'react';
import KeyboardLayout from '../components/keyboard';
import { parse_layout } from '../util/parse';
import Layouts from '../util/predefined_layouts';
import { KeyboardModel } from '../models/keyboard';

function calcKeyboardMetrics(text: string, keyboard: KeyboardModel) {
  console.log('evaluate', text, keyboard);
}

function Home(props: any) {
  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // console.log(e.target.value);
    setText(e.target.value);
  }

  const [text, setText] = useState('');

  return (
    <div>
      <p>Test</p>
      {/* <div style={{display: 'flex', justifyContent: 'center', border:'2px solid'}}> */}
      <div style={{textAlign: 'center'}}>
        <div style={{width: '80%', display: 'inline-block'}}>
          <KeyboardLayout rows={Layouts.qwerty}></KeyboardLayout>
        </div>
      </div>
      <div style={{marginTop: '20px'}}>
        <textarea defaultValue="Enter text here..." 
          onChange={(e) => onTextChange(e)}
          style={{width: '60%', height: '200px'}}>
        </textarea>
        <button type='button'
          style={{backgroundColor: '#99ddff', margin: '10px', 
                  // marginBottom: '2px', 
                  height: '50px',
                  width: '80px',
                  display: 'inline-block'}}
          onClick={() => calcKeyboardMetrics(text, Layouts.qwerty)}
          >
          Calculate
        </button>
      </div>
    </div>
  )
}

export default Home;