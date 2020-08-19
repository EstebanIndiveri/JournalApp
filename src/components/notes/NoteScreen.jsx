import React from 'react';
import NoteAppBar from './NoteAppBar';

const NoteScreen = () => {
    return ( 
            <div className="notes__main-content">
                <NoteAppBar/>
                <div className="notes__content">
                    
                        <input
                        type="text"
                        placeholder="Some awesome title"
                        className="notes__title-input"
                        name="title"
                        />
                        <textarea
                        placeholder="What happened today"
                        className="notes__text-area"
                        ></textarea>
                        
                        <div className="notes__image">
                            <img 
                            height="200px"
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&w=1000&q=80"
                            alt="image"
                            />
                        </div>
                </div>
            </div> 
    );
}
 
export default NoteScreen;