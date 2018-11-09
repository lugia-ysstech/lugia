import React from 'react';
import {Slider,Theme} from '@lugia/lugia-web';
import Widget from '@lugia/lugia-web/dist/consts/index';
export default ()=>{
    return (
        <div style={{ float: 'left', padding: '0 50px 50px' }}>
          <h2 style={{ padding: '35px 0' }}> normal</h2>
          <Slider vertical tips onChange={this.onchange} />
        </div>
    )
}