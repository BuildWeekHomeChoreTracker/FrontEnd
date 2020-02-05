import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import getChores from '../action/getChores';

const TodoList = props => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getTodo();
    setList(props.todoList);
  }, [list]);

  const getTodo = () => {
    props.getChores(1);
  };

  return (
    <div>
      <h3>HERE ARE THE CHORES LIST</h3>
      {props.todoList.map(item => (
        <h5 key={item.id}>Name: {item.name}</h5>
      ))}
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