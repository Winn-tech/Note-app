import React, { useEffect } from 'react'
const Modal = ({modalContent, closeModal, className}) => {
    useEffect(()=>{
        setTimeout(()=>{closeModal()},2000)
    })
    return ( 
        <p className={className}>{modalContent}</p>
     );
}
 
export default Modal;