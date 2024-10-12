import React from "react";

function DeleteModel({handleDelete,rollno,modalId}) {
  //console.log(rollno,"test");
  return (
    <>
      <button
        type="button"
        class="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
      >
        Delete
      </button>
      <div className="modal" id={modalId} tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-dark">Are you sure you want to delete...?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=> handleDelete(rollno)}>
                Confirm delete..?
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModel;
