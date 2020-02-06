import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import deleteChild from '../action/deleteChild';

import getChildren from '../action/getChildren';

const ChildList = props => {
  useEffect(() => {
    getChildren();
  }, []);

  const getChildren = id => {
    props.getChildren(id);
  };

  const deleteChild = id => {
    props.deleteChild(id);
  };

  return (
    <div>
      <h3>These are your kids </h3>
      {props.childrenList.map(item => {
        return (
          <div>
            <h3 key={item.username}>Name: {item.fstname}</h3>
            <button onClick={() => deleteChild(item.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({getChildrenReducer}) => {
  console.log('MapState: ', getChildrenReducer.children);
  return {
    childrenList: getChildrenReducer.children
  };
};

export default connect(
  mapStateToProps,
  {getChildren, deleteChild}
)(ChildList);
