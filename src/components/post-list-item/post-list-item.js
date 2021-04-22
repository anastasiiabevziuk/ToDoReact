import React, {Component} from 'react';

export default class PostListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            important: false,
            done:false
        }
        this.onImportant = this.onImportant.bind(this);
        this.onDone = this.onDone.bind(this);

    }

    onImportant(){
        this.setState(({important})=> ({
            important: !important
        }))
    }
    onDone(){
        this.setState(({done})=> ({
            done: !done
        }))
    }


    render(){
        const {label, onDelete} = this.props
        const {important, done} = this.state;
        let classNames = "app-list-item d-flex justify-content-between";
        if(important){
            classNames+=" important"
        }
        if(done){
            classNames+=" like"
        }
        return(
            <div className={classNames}>
                <span className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                     className="btn-trash btn-sm"
                     onClick={this.onDone}>
                        <i className="fa fa-check"></i>
                    </button >
                   
                    <button type="button" 
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button >
                    <button type="button" 
                    className="btn-star btn-sm"
                    onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                </div>
            </div>

        )
    }
}

