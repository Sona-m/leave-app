import axios from 'axios';

const fetchProfile = async () => {
    const response = await axios.get('');
    return response.data;
}