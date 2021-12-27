import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import VideoList from '../VideoList/VideoList';
import youtube from '../../apis/youtube';
import VideoDetail from '../VideoDetail/VideoDetail';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
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
                videos: response.data.items,
                selectedVideo: response.data.items[0],
            })
        } catch (e){
            console.log(e)
        }

    }

    componentDidMount(){
        this.onTermSubmit('building'); //Used to set a default value
    }

    onVideoSelect = (video) => {
        console.log(video)
        this.setState({
            selectedVideo: video,
        })
    }

    render(){
        console.log(this.state)
        return(
            <>
                <div className= 'ui container' >
                    <Searchbar onFormSubmit={this.onTermSubmit} />
                    <div className='ui grid'>
                        <div className='ui row'>
                            <div className='eleven wide column'>
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                            <div className='five wide column'>
                                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default App