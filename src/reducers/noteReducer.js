import { types } from "../types/types";

/*
{
    notes:[],
    active:null,
    active:{
        id:'123123123',
        title:'',
        body:'',
        imageUrl:'',
        date:1234556
    }
}
*/
const initalState={
    notes:[],
    active:null
}
export const noteReducer=(state=initalState,action)=>{
    switch (action.type) {
        case types.notesActive:
        return{
            ...state,
            active:{
                ...action.payload
            }
        }
        case types.notesLoad:
            return{
                ...state,
                notes:[...action.payload]
            }
        case types.notesUpdated:
            return{
                ...state,
                notes:state.notes.map(
                    note=>note.id===action.payload.id
                    ?action.payload.note
                    :note
                )
            }
        default:
            return state;
    }
}