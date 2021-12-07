import React, { Component } from 'react'
import Searchbar from '../Searchbar/Searchbar'

class App extends Component{
    render(){
        return(
            <>
                <div className= 'ui container'>
                    <Searchbar/>
                </div>
            </>
        )
    }
}

export default App