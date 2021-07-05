import React from 'react';
import SearchBar from './components/SearchBar';
import youtubeapi from './api/youtubeapi';
import VideoList from './components/videoList';
import VideoDetails from './components/VideoDetails';

class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state={
      videos:[],
      SelectedVideo: null
    };
  }

  componentDidMount(){
    this.onTermSubmit('html');
  }
  onTermSubmit=async(term)=>
  {
      //this call with term value
      console.log(term);

      //we can call youtubeapi function which is instance of axios so we write like
      //in get you are passing the path for searching for that you can use 'q' which is specifically mentioned for surfing

     const response= await youtubeapi.get('/search',{
        params:{
          q:term
        }
      });
      this.setState({
            videos:response.data.items,
            SelectedVideo:response.data.items[0]
          });
  }

  //this video object we are getting from youtube API
  //we can update the state slelcted video which we select and pass it down to the videodetails component
  onVideoSelect=(video)=>{
    
      this.setState({SelectedVideo:video});
  };
  render()
  {
      return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetails selectvideo={this.state.SelectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} videosArray={this.state.videos}/>
                    </div>
                </div>
            </div>
        </div>
      );
  }
}

export default App;
