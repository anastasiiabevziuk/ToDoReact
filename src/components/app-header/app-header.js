import React from 'react';

const AppHeader = ({allPosts, importants}) => {
    return (
        <div className="app-header d-flex">
            <h1>ToDo App </h1>
            <h2>Total {allPosts}, in favorites {importants}</h2>

        </div>
    )
}

export default AppHeader;