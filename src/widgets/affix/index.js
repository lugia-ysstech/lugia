/**
 *
 * create by LYQ
 *
 * @flow
 */
import  React from 'react';
import { Affix , Button } from '@lugia/lugia-web';

export default class AffixDemo extends React.Component<any, any> {
    EleRef: any;
    Ele2Ref: any;
    constructor() {
      super();
      this.EleRef = null;
      this.Ele2Ref = null;
      this.state = {
        display: true,
      };
    }
    handleClick = () => {
      const { display } = this.state;
      this.setState({
        display: !display,
      });
    };
    handleChange = (res: boolean) => {
      console.info(res);
    };
    render() {
      const { display } = this.state;
      return (
        <div>
          <div style={{ width: '200px', height: '1600px', position: 'relative' }}>
            <div style={{ width: '200px', height: '200px' }} />
            <Affix offsetTop={50}>
              <p>window: affix-top</p>
              <Button>Affix-top-50</Button>
            </Affix>
  
            <div
              style={{ width: '200px', height: '200px', overflowY: 'scroll' }}
              ref={node => (this.EleRef = node)}
            >
              <div style={{ height: '400px' }}>
                <div style={{ width: '20px', height: '100px' }} />
                <Affix offsetTop={50} onChange={this.handleChange} target={() => this.EleRef}>
                  <p>target: target-top</p>
                  <Button>target-top-50</Button>
                </Affix>
              </div>
            </div>
  
            <div
              style={{
                width: '200px',
                height: '200px',
                overflowY: 'scroll',
                position: 'absolute',
                top: '800px ',
              }}
              ref={node => (this.Ele2Ref = node)}
            >
              <div style={{ height: '400px' }}>
                <div style={{ width: '20px', height: '200px' }} />
                <Affix offsetBottom={50} target={() => this.Ele2Ref}>
                  <p>target: target-bottom</p>
                  <Button>target-bottom-50</Button>
                </Affix>
              </div>
            </div>
  
            <div style={{ width: '200px', height: '600px' }} />
            <Affix offsetBottom={50}>
              <p>window: affix-bottom</p>
              <Button>Affix-bottom-50</Button>
            </Affix>
          </div>
        </div>
      );
    }
  }

