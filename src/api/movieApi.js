import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.majorcineplex.com/apis/get_movie_avaiable',
});