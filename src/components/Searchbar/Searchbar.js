import React, { Component } from 'react'

class Searchbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: '',
        }
    };

    onChangeHandler = (event) =>{ 
        let value = event.target.value;

        this.setState({term: value})
        console.log(value)
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log("INSIDE Searchbar")

        //TODO: Make sure we call
        // callback from aprent componet

        this.props.onFormSubmit(this.state.term)
    }

    render(){
        return(
            <>
                <div className="search-bar ui segment">
                    <form className="ui form" onSubmit={this.onFormSubmit}>
                        <div className="field">
                        <label>Video Search</label>
                        <input type='text' 
                        value={this.state.term} 
                            onChange={this.onChangeHandler}
                        />
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Searchbar