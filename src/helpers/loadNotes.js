import { db } from "../firebase/firabase-config"

export const loadNotes=async (uid)=>{
    
    const noteSnap= await db.collection(`${uid}/journal/notes`).get();
    
    const notes=[];
    
    noteSnap.forEach(snapshot=>{
        notes.push({
            id:snapshot.id,
            ...snapshot.data()
        });
    });

    return notes;
}