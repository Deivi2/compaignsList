import compaignsTypes from './compaigns-types';
import { compaignsData } from '../../data';

export default function (state = { compaignsData }, action) {
    switch (action.type) {

        case compaignsTypes.FETCH_COMPAIGNS_USERS:
            return { ...state, usersData: action.payload };

        default:
            return state;
    }
}
