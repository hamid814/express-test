import React, { useReducer } from 'react';
import Context from './Context';
import Reducer from './Reducer';

const State = props => {
  const initialState = {
    addedNew: false,
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  // Get data
  const setAddedNew = () => {
    console.log('adding new')
    
    dispatch({
      type: 'set-added-new',
      payload: true
    });

    setTimeout(() => {
      dispatch({
        type: 'set-added-new',
        payload: false
      })
    }, 500);
  }

  return (
    <Context.Provider
      value={{
        test: state.test,
        setAddedNew,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;