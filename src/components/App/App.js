import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import VideoList from '../VideoList/VideoList';
import youtube from '../../apis/youtube';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
        }
    }

    // state = {videos: []}

    onTermSubmit = async (term) => {
        console.log(term)
        try {
            const response  = await youtube.get('/search', {
                params: {
                     q: term,
                }
            })
            this.setState({
                videos: response.data.items
            })
        } catch (e){
            console.log(e)
        }

    }

    render(){
        console.log(this.state)
        return(
            <>
                <div className= 'ui container'>
                    <Searchbar onFormSubmit={this.onTermSubmit} />
                    <VideoList videos={this.state.videos} />
                </div>
            </>
        )
    }
}

export default App