import Jubmotron from "../common/Jumbotron";
import React, {useState} from 'react';
import {insertNoteAction,removeNoteAction} from "../redux/actions/actions"
import { useSelector, useDispatch } from "react-redux";
const NoteApp = (props) => {
  const [noteObj, setNote] = useState({note:'', active:true});
  const notesState = useSelector((state) => {return state.notesReducer})
  const dispatch = useDispatch();
  const insertNote = (e) => {
    e.preventDefault();
    if(!noteObj.note.length) {
      return;
    }
    dispatch(insertNoteAction(noteObj));
    setNote((prev) =>{return {...prev, note:'', active:true}})
  }
  return(<>
      <Jubmotron config={props.config}/>
      {/* Component */}
      <div className="">
        <form onSubmit={insertNote}>
          <div className="d-flex justify-content-center create-note">
              <div>
                <textarea className="" row="5" onChange={(e)=>{setNote((prev)=>{return {...prev, note:e.target.value} })}} value={noteObj.note} type="text"/>
              </div>
              <div>
                <button onClick={insertNote} className="btn btn-outline-success">Add Note</button>
              </div>
          </div>
          {/* <p className="alert alert-danger px-2 py-1 mt-2">! Note should not be empty</p> */}
        </form>

        {/* note list */}
        <div className="d-flex py-4 mb-5">
          <div className="container">
            <div className="row">
              {notesState &&
                notesState.map((item, index) => {
                  return <NoteCard key={index} noteObj={item} />
                })
              }
              </div>
          </div>
        </div>
      </div>
  </>);
}

const NoteCard = (props) => {
  const dispatch = useDispatch();
  const removeNote = () => {
    dispatch(removeNoteAction(props.noteObj));
  }
  return(<>
  <div className="col-sm-4 p-2">
    <div className="card text-white bg-navyBlue">
      <div className="card-body">
        <h5 className="card-title">{props.noteObj.note}</h5>
        {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <button onClick={removeNote} className="btn btn-danger p-1">Remove</button>
      </div>
    </div>
  </div>
  </>);
}
export default NoteApp;