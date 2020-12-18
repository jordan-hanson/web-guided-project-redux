import React, { useState, useReducer } from 'react';

import { initialState, titleReducer } from '../reducers/titleReducer';
import {updateTitle, toggleEditing} from "../actions/titleActions";

const Title = () => {
  const [newTitleText, setNewTitleText] = useState();
  const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1 onClick={() => dispatch(toggleEditing())}>
          {state.title}{' '}
          <i
            className="far fa-edit"
          />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() =>
              dispatch(updateTitle(newTitleText))
            }
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

// Step 3: connect the component to the Redux store

// This is how we read state values from the store
const mapStateToProps = (state) => {

}

// This is how we update state in the store (with reducer actions)
const mapDispatchToProps = () => {

}

export default Title;
