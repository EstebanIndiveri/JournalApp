import { db } from "../firebase/firabase-config";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import Swal from 'sweetalert2';
export const startNewNote=()=>{
    return async(dispatch,getState)=>{
        const {uid}=getState().auth;
        console.log(uid);
        const newNote={
            title:'',
            body:'',
            date:new Date().getTime()
        }
        const doc= await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(activeNote(doc.id,newNote));
    }
}

export const activeNote=(id,note)=>({
    type:types.notesActive,
    payload:{
        id,
        ...note    
    }
})

export const startLoadingNotes=(uid)=>{
    return async(dispatch)=>{
        const notes = await loadNotes(uid);
        dispatch(setNote(notes));
    }
}

export const setNote=(notes)=>({
    type:types.notesLoad,
    payload:notes
});

export const startSaveNote=(note)=>{
    return async(dispatch,getState)=>{
        const {uid}=getState().auth;
        if(!note.url){
            delete note.url;
        }
        const noteToFirestore={...note};
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
        dispatch(refreshNotes(note.id,noteToFirestore));
        Swal.fire('Saved',note.title,'success');
    }
}
export const refreshNotes=(id,note)=>({
    type:types.notesUpdated,
    payload:{
        id,
        note:{
            id,
            ...note
        }
    }
})
export const startUploading=(file)=>{
    return async(dipatch,getState)=>{
        const {active:activeNote}=getState().notes;
        console.log(file);
        console.log(activeNote);

    }
}