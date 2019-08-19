import * as React from 'react';
import { Args, Table, Td, Title, Tr } from '../css/edittable';
import styled from "styled-components";


const TableContainer = styled.div`
  width:100%;
  overflow:auto;
`;


type PropsType = {
  dataSource: Object,
  style:Object;
};

type StateType = {};

const objectToArray = (obj: Object) => {
  const arr = [];
  for (const key in obj) {
    obj[ key ].name = key;
    arr.push(obj[ key ]);
  }
  return arr;
};


const getEventProps = (args: Object) => {
  const result = [];
  args.forEach(item => {
    result.push(item.name + ' : ' + item.type + ' (' + item.desc + ')');
  });
  return result;
};

const getEventPropsElement = (arr: Array<string>) => {
  return arr.map(item => (
    <Args>{item}</Args>
  ));
};

const getDefaultValue = (val: any) => {
  if (!val || val === 'undefined' || val === 'null') return '——';
  return val.toString();
};

const getPropsType = (type: any,propsType:Object) => {
  if(!propsType || !(type in propsType)) return type;
  let data = propsType[type];
  let resArray = data;
  if(!Array.isArray(data)){
    resArray = [];
    data= objectToArray(data);
    data.forEach(item => {
      resArray.push( item.name +'[' +item.type+']');
    });
  }
  return type + ' (可选值: ' +resArray.toString() +')' ;
};

class Element extends React.Component<PropsType, StateType> {

  static defaultProps = {};

  static getDerivedStateFromProps (defProps: PropsType, stateProps: StateProps) {
    if (!stateProps) {
      return {
        dataSource: defProps.dataSource,
      };
    }
    const { dataSource } = stateProps;
    return {
      dataSource: 'dataSource' in stateProps ? dataSource : defProps.dataSource,
    };
  }

  render () {
    return (
      <React.Fragment>
        {this.getProps('props')}
        {this.getProps('events')}
      </React.Fragment>
    );
  }

  getProps = (datatype: string) => {
    const { dataSource: { [ datatype ]: value } ,style:{width} = {}} = this.state;
    const propsSource = objectToArray(value);
    if (propsSource.length <= 0) {
      return;
    }
    const desc = datatype === 'props'? '属性': '事件';
    const title = datatype === 'props' ? ['参数', '描述', '数据类型', '默认值'] : ['事件名称', '描述', '数据类型', '回调参数'];
    const { dataSource: { type : propsType } } = this.state;
    return (
      <React.Fragment>
        <Title>
          {this.state.dataSource.title}组件{desc}说明如下：
        </Title>
        <TableContainer>
          <Table width={width}>
            <Tr>
              {title.map(item => (
                <Td>{item}</Td>
              ))}
            </Tr>
            {propsSource.map(item => {
              if(item.designOnly){
                return null;
              }
              return (
                <Tr>
                  <Td>{item.name}</Td>
                  <Td width={160}>{item.desc}</Td>
                  <Td>{getPropsType(item.type,propsType) || 'Function'}</Td>
                  <Td>{item.args ? getEventPropsElement(getEventProps(item.args)) : getDefaultValue(item.defaultValue)}</Td>
                </Tr>
              );
            })}
          </Table>
        </TableContainer>

      </React.Fragment>
    );
  };


}

export default Element;
