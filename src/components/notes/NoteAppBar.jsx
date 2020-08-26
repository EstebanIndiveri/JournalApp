import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

const NoteAppBar = () => {
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)
    const handleSave=()=>{
        dispatch(startSaveNote(active));
    }
    const handlePictureUpload=()=>{
        document.querySelector('#fileSelector').click();
    }
    const handleFileChange=(e)=>{
        e.preventDefault();
        const file=e.target.files[0];
        if(file){
            dispatch(startUploading(file));
        }
    }
    return ( <div className="notes__appbar">
                <span>19 de agosto de 2020</span>
                <input
                id="fileSelector"
                type="file"
                name="file"
                style={{display:"none"}}
                onChange={handleFileChange}
                />
                <div>
                    <button className="btn"
                    onClick={handlePictureUpload}
                    >
                        Picture
                    </button>

                    <button className="btn"
                    onClick={handleSave}
                    >
                        Save
                    </button>

                </div>
            </div> 
    );
}
 
export default NoteAppBar;