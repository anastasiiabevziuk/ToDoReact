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
                {label: "Find a dream job", important: false, id: 1},
                {label: "Clean the house", important: false, id: 2},
                {label: "Read the book", important: false, id: 3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        

        this.maxId = 4;
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

    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr =[...data, newItem];
            return {
                data: newArr 
            }
        })  
    }

    onToggleImportant(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
            return{
                data: newArr
            }
        })

    }

   render(){
       const allPosts = this.state.data.length;
       const importants = this.state.data.filter(item => item.important).length;
        return (
            <div className="app">
                <AppHeader
                importants={importants}
                allPosts={allPosts}/>
                <PostAddForm
                onAdd={this.addItem}/>
                <PostList 
                posts={this.state.data}
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>  
            </div> 
        )
    }
}

