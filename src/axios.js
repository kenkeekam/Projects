import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'https://us-central1-challenge-38ceb.cloudfunctions.net/api'
    // 'http://localhost:5001/challenge-38ceb/us-central1/api' 
});

export default instance;