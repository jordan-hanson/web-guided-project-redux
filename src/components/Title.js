import React, { useState } from 'react';
import { toggleEditing, updateTitle } from '../actions/titleActions';

// import connect 
import { connect } from 'react-redux'

const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState();

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };
  console.log(props)
  return (

    <div>
      {!props.editing ? (
        <h1 onClick={() => props.toggleEditing()}>
          {props.title}{' '}
          <i
            className="far fa-edit"
          // onClick={() => props.toggleEditing()}
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

// console.log(connect())
const mapStateToProps = (state) => {
  console.log(state)
  return {
    title: state.title,
    editing: state.editing
  }
}
export default connect(mapStateToProps, { toggleEditing, updateTitle })(Title);
// connect is a function currying where a function returns a function and executes something else
// Inside of Connect it:
// 1. Calls store.getState();
// 2. Passes state into mapStateToProps
// Then we can pass in props through our component that is now our 'state' from the store in index and the reducer initialState
// 3. Taking the object returned from mapStateToProps and connecting it to the component's props
// 4. SECOND PARAMATER DOES: Get an object containing actionCreators
// 5. Add actionCreators to props
// 6. automatically calls dispatch(actionCreator) when calling props.actionCreator