import React from 'react'


const JournalEntry = () => {
    return ( 
        <div className="journal__entry pointer">
            <div className="journal__entry-picture"
                 style={{backgroundImage:'url(https://boatingnz.co.nz/wp-content/uploads/2019/11/boating-nz-image-1075-underway.jpg)',backgroundSize:'cover'}}
            ></div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, facere.
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
     );
}
 
export default JournalEntry;