//Action creator:
//function that returns an action object

export const toggleEditing = () => {
    return { type: 'TOGGLE_EDITING' };
}

export const updateTitle = (newTitle) => {
    return { type: 'UPDATE_TITLE', payload: newTitle };
}