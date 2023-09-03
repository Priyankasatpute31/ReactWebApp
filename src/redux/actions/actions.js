export const tabSelectionAction = (selectedTab) => {
  return {
    type: 'tabSelection',
    payload: selectedTab
  }
};
export const insertNoteAction = (ObjEnteredNote) => {
  return {
    type: 'INSERT_NOTE',
    payload: ObjEnteredNote
  }
};
export const removeNoteAction = (ObjNoteRemove) => {
  return {
    type: 'REMOVE_NOTE',
    payload: ObjNoteRemove
  }
};