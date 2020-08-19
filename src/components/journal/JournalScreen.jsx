import React from 'react'
import SideBar from './Sidebar';

const JournalScreen = () => {
    return ( 
    <div className="journal__main-content">
        <SideBar/>
        <main>
            <h1>Main content</h1>
        </main>
    </div> 
    );
}
 
export default JournalScreen;