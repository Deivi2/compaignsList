import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './Redux/compaigns/compaigns-actions';
import Header from './Components/Header/Header-componet'
import CompaignsList from './Components/CompaignsList/CompaignsList-component'

const App = ({ fetchUsersData }) => {

    useEffect(() => {
        fetchUsersData()
    }, [])


    return (
        <>
            <Header />
            <CompaignsList />
        </>
    )

}


const mapDispatchToProps = dispatch => ({
    fetchUsersData: (name) => dispatch(fetchUsers(name)),
});


export default connect(null, mapDispatchToProps)(App);

