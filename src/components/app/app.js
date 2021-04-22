import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {label: "Find a dream job", important: true, id: "gfhj"},
                {label: "Clean the house", important: false, id: "jhjm"},
                {label: "Read the book", important: false, id: "hgfg"}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(id){
        this.setState(({data})=> {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index +1);
            const newArr = [...before, ...after];
            return {
                data: newArr
            }
        });
    }

   render(){
        return (
            <div className="app">
                <AppHeader/>
                <PostAddForm/>
                <PostList 
                posts={this.state.data}
                onDelete={this.deleteItem}/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>  
            </div> 
        )
    }
}

