import React from 'react';
import '../scss/Popup.css';
const Popup = (props: any) => {
    return props.trigger ? (
        <div className="popup">
            <div className="popup-inner">
                {props.children}
                <button className="close-btn" onClick={(e) => props.setTrigger(false)}>
                    close
                </button>
            </div>
        </div>
    ) : (
        <></>
    );
};

export default Popup;
