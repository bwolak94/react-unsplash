import React from 'react';

import './Modal.css';

const Modal = (props) => {
    console.log(props.item.user)
    let user;
    if(props.item ){
            user = (
                <div className="modal-body">
                    <h5 className='atuhor'>
                        Author - {props.item.user.name}
                    </h5>
                    <p>Location - {props.item.user.location}</p>
                </div>
            )
    }
    return (

    <div>
        <div className="modal-wrapper"
             style={{
                 transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                 opacity: props.show ? '1' : '0'
             }}>
            <div className="modal-header">
                <h3>{props.item.alt_description}</h3>
                <span className="close-modal-btn" onClick={props.close}>×</span>
            </div>
            {user} -
            <div className="modal-footer">
                <button className="btn-cancel" onClick={props.close}>CLOSE</button>
            </div>
        </div>
    </div>

    )
}

export default Modal;
