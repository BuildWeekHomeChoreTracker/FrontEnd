import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import getChildren from '../action/getChildren';

const ChildList = props => {
  useEffect(() => {
    getChildren();
  }, []);

  const getChildren = () => {
    props.getChildren();
  };

  return (
    <div>
      <h3>These are your kids </h3>
    </div>
  );
};

const mapStateToProps = ({getChildrenReducer}) => {
  console.log('MapState: ', getChildrenReducer.children);
  return {
    childrenlist: getChildrenReducer.children
  };
};

export default connect(
  mapStateToProps,
  {getChildren}
)(ChildList);
