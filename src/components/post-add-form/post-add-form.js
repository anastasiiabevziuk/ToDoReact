import React from 'react';

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex"> 
            <input
                type="text"
                placeholder="write a goal"
                className="form-control new-post-label"
            />
             <button 
                type="submit"
                className="btn btn-outline-secondary">
                Add
            </button>
        </form>
    )
}

export default PostAddForm;

