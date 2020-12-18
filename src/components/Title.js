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
        <h1 onClick={() => props.toggleEditing()}>
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
              props.updateTitle(newTitleText)
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
  return {
    editing: state.editing,
    title: state.title
  }
}

// This is how we update state in the store (with reducer actions)
const mapDispatchToProps = (dispatch) => {
  return {
    updateTitle: (newTitle) => dispatch(updateTitle(newTitle)),
    toggleEditing: () => dispatches(toggleEditing())
  }
}

export default Title;
