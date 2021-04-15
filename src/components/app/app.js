import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
const App = () => {

    const data = [
        {label: "Find a dream job", important: true, id: "gfhj"},
        {label: "Clean the house", important: false, id: "jhjm"},
        {label: "Read the book", important: false, id: "hgfg"}
    ];

    return (
       <div className="app">
            <AppHeader/>
            <PostAddForm/>
            <PostList posts={data}/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            
       </div>
        
    )
}

export default App;