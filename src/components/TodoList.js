import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import getChores from '../action/getChores';

const TodoList = props => {
  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = () => {
    props.getChores(2);
  };

  return (
    <div>
      <h3>These are your kids </h3>
    </div>
  );
};

const mapStateToProps = ({getChoresReducer}) => {
  console.log('MapState: ', getChoresReducer.choresList);
  return {
    todoList: getChoresReducer.choresList
  };
};

export default connect(
  mapStateToProps,
  {getChores}
)(TodoList);
