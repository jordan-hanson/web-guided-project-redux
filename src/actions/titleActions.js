// Action creator:
// function that returns an action object

export const toggleEditing = () => {
  return { type: 'TOGGLE_EDITING' };
}

export const updateTitle = (newTitle) => {
  return { type: 'UPDATE_TITLE', payload: newTitle };
}

// With Redux, on the component side we'll wrap these in a dispatch function
// and call that wrapped version by the same name, to abstract away all of the "reducer-y stuff"
// This way, our components can just say, e.g., props.toggleEditing() rather than having to worry about building and dispatching actions