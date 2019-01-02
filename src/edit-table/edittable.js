
import * as React from 'react';
import {Table,Tr,Td,Args}  from '../css/edittable';

type PropsType ={
  dataSource:Object
};

type StateType ={


};

const objectToArray = (obj:Object) => {
  const arr =[];
  for (const key in obj) {
    obj[key].name = key;
    arr.push(obj[key]);
  }
  return arr;
};


const getEventProps =(args:Object) => {
  const result = [];
  args.forEach(item => {
    result.push(item.name+' : ' + item.type +' (' +item.desc+')');
  });
  return result;
};

const getEventPropsElement = (arr:Array<string>) => {
    return arr.map(item => (
      <Args>{item}</Args>
    ));
};

const getDefaultValue = (val:any) => {
  if(val ==='undefined' || val === 'null') return '——';
  return val.toString();
};

class Element extends React.Component<PropsType, StateType> {

  static defaultProps = {

  };

  static getDerivedStateFromProps(defProps: PropsType, stateProps: StateProps) {
    if (!stateProps) {
      return {
        dataSource: defProps.dataSource,
      };
    }
    const { dataSource} = stateProps;
    return {
      dataSource: 'dataSource' in stateProps ? dataSource :defProps.dataSource,
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.getProps('props')}
        {this.getProps('events')}
      </React.Fragment>
    );
  }

  getProps = (type:string) => {
    const {dataSource:{[type]:value}} = this.state;
    const propsSource = objectToArray(value);
    if(propsSource.length<=0) return;
    const title = type === 'props'?['参数','描述','数据类型','默认值']:['事件名称','描述','数据类型','回调参数'];
    return (
      <Table>
        <Tr>
          {title.map( item => (
            <Td>{item}</Td>
          ))}
        </Tr>
        { propsSource.map( item => (
          <Tr>
            <Td>{item.name}</Td>
            <Td>{item.desc}</Td>
            <Td>{item.type || 'Function'}</Td>
            <Td>{item.args?getEventPropsElement(getEventProps(item.args)):getDefaultValue(item.defaultValue)}</Td>
          </Tr>
        ))}
      </Table>
    );
  };



}

export default Element;
