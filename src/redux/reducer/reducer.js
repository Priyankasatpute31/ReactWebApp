const initialTabState = {selectedTab: 'address'}
const tabReducer = (state = initialTabState, action) => {
  switch (action.type) {
    case 'tabSelection':
      return {
        selectedTab: action.payload
      }
    default:
      return {
        selectedTab: 'note_app'
      }
  }
};

const initialNotesState = JSON.parse(localStorage.getItem('notes')) || [];
const notesReducer = (state = initialNotesState, action) => {
  switch(action.type) {
    case 'INSERT_NOTE':
      let notes = [...state, action.payload];
      localStorage.setItem('notes',JSON.stringify(notes));
      return notes;
    case 'REMOVE_NOTE':
      let noteArray = state;
      noteArray  = noteArray.filter((item) => {
        return item.note !== action.payload.note
      });
      localStorage.setItem('notes',JSON.stringify(noteArray));
      return noteArray
    default:
      localStorage.setItem('notes',JSON.stringify(state));
      return state
  }
}
export default tabReducer;
export {notesReducer}