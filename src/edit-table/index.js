import * as React from "react";
import EditTables from './edittable';

const tableInfo = require('./lugia.table.zh-CN');


type PropsType ={
  dataSource:Object
};

type StateType ={


};
export default class EditTable extends React.Component<PropsType, StateType> {
  static defaultProps = {
    dataSource:tableInfo
  };
  static getDerivedStateFromProps(defProps: PropsType, stateProps: StateType) {
  }
  render() {
    return (
      <EditTables
        {...this.props}
      />
    );
  }

}
