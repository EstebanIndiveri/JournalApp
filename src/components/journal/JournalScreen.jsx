import React from 'react'
import SideBar from './Sidebar';
import NothingSelected from './NothingSelected';
import NoteScreen from '../notes/NoteScreen';
import { useSelector } from 'react-redux';

const JournalScreen = () => {
    const {active} = useSelector(state => state.notes);
    return ( 
    <div  className="journal__main-content animate__animated animate__fadeIn animate__faster">
        <SideBar/>
        <main>
            {
                (active)
                ?(<NoteScreen/>)
                :(<NothingSelected/>)
            }
        </main>
    </div> 
    );
}
 
export default JournalScreen;