import React from "react";
import ReactDom from "react-dom";

const Modal = ({ open, onClose, children }) => {
    const MODAL_STYLES = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "50%",
        zIndex: 100,
    }

    const MODAL_OVERLAY = {
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, .6)",
        zIndex: 100,
    }

    if (!open) return null

    return ReactDom.createPortal(
        <button onClick={() => onClose()}>
            {/* I used inline styles here to overrule all other styles, particularly the z-index to make the modal appear front and center */}
            <div style={MODAL_OVERLAY} />
            <div style={MODAL_STYLES} className="modal">
                {children}
                <button onClick={() => onClose()}>Close</button>
            </div>
        </button>,
        document.getElementById("portal")
    )
}

export default Modal;