import React, { useEffect, useRef } from 'react';
import NoteAppBar from './NoteAppBar';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

const NoteScreen = () => {
    const dispatch = useDispatch();
    const {active:note} = useSelector(state => state.notes);
    const [formValues,handleInputChange,reset]=useForm(note);
    const{body,title,id}=formValues;
    const activeId=useRef(note.id);

    useEffect(()=>{
        if(note.id!==activeId.current){
            reset(note);
            activeId.current=note.id
        }
    },[note,reset])

    useEffect(()=>{
        dispatch(activeNote(formValues.id,{...formValues}))
    },[formValues,dispatch])

    const handleDelete=()=>{
        dispatch(startDeleting(id))
    }

    return ( 
            <div className="notes__main-content">
                <NoteAppBar/>
                <div className="notes__content">
                    
                        <input
                        type="text"
                        placeholder="Some awesome title"
                        className="notes__title-input"
                        name="title"
                        value={title}
                        onChange={handleInputChange}
                        />
                        <textarea
                        placeholder="What happened today"
                        className="notes__text-area"
                        name="body"
                        value={body}
                        onChange={handleInputChange}
                        ></textarea>
                        
                       { 
                        (note.url)&&
                            (<div className="notes__image">
                                    <img 
                                    height="200px"
                                    src={note.url}
                                    alt="image"
                                    />
                            </div>)
                        }
                </div>

                <button className="btn btn-danger"
                onClick={handleDelete}
                >
                    Delete
                </button>
            </div> 
    );
}
 
export default NoteScreen;