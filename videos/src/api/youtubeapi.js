import axios from 'axios';
const KEY='AIzaSyAY-UBgRoYZJAkT98Ge7JeXmi3LCJ2ZH90';


//we can create preconfigured instance of axios that already has baseURL and some other parameter loaded into it.

export default axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        //add a type parameter to our axios config object to only search for videos and not playlists.
        params: {
            part: 'snippet',
            maxResults: 5,
            key:  KEY,
           type: 'video'
        }
});