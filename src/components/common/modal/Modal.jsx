const Modal = ({modalId, title, isFooter, children}) => (
    <div className="modal fade" data-testid='modal-id' id={modalId} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 data-testid='modal-title' className="modal-title" id="staticBackdropLabel">{title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                { isFooter &&
                    <div data-testid='modal-footer' className="modal-footer">
                        <button type="button" data-testid='close-btn' className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                }
            </div>
        </div>
    </div> 
)

export default Modal;