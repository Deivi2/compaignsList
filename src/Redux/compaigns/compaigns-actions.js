import axios from 'axios';
import compaignsTypes from './compaigns-types'

export const fetchUsers = async () => {
    try {
        var request = await axios.get('https://jsonplaceholder.typicode.com/users')
    } catch (error) {
        throw error
    }

    return {
        type: compaignsTypes.FETCH_COMPAIGNS_USERS,
        payload: request.data
    }
}

