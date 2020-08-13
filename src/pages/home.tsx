import React from 'react';
import KeyboardLayout from '../components/keyboard';
import { parse_layout } from '../util/parse';
import Layouts from '../util/predefined_layouts';

function Home(props: any) {
  return (
    <div>
      <p>Test</p>
      {/* <div style={{display: 'flex', justifyContent: 'center', border:'2px solid'}}> */}
      <div>
        <KeyboardLayout rows={Layouts.qwerty}></KeyboardLayout>
      </div>
    </div>
  )
}

export default Home;