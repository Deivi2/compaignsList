import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { selectCompaignsData, selectCompaignsUsersData } from '../../Redux/compaigns/compaigns-select'
import { createStructuredSelector } from "reselect";
import { bindCompaignsData, isDateInARange, sortDataByName } from '../../Utils/helpers'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './CompaignsList-styles'


function CompaignsList({ compaignsData, usersData }) {
    const classes = useStyles();
    const [compaignsWithUsers, setCompaignsWithUsers] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const data = bindCompaignsData(compaignsData, usersData);
        usersData && setCompaignsWithUsers(data);
        usersData && setLoading(false)
    }, [usersData])

    const handleSortByName = () => setCompaignsWithUsers((prevState) => sortDataByName(prevState));

    if (loading) return <CircularProgress className={classes.circStyle} />

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell> <div className={classes.tableNameCell}> <div>Name</div> <div onClick={handleSortByName} className={classes.sortByNameButton}>Sort by name</div> </div> </TableCell>
                        <TableCell>User Name</TableCell>
                        <TableCell>Start Date</TableCell>
                        <TableCell>End Date</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>Budget</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {compaignsWithUsers.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell >{row.compaignUser.name}</TableCell>
                            <TableCell >{row.startDate}</TableCell>
                            <TableCell >{row.endDate}</TableCell>
                            <TableCell >{isDateInARange(row.startDate, row.endDate) ? (<div className={classes.activeState}><FiberManualRecordIcon style={{ fill: 'green' }} /> <span>Active</span></div>) : (<div className={classes.activeState}><FiberManualRecordIcon style={{ fill: 'red' }} /> <span>Inactive</span> </div>)}</TableCell>
                            <TableCell >{row.Budget / 100} USD</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}




const mapStateToProps = createStructuredSelector({
    compaignsData: selectCompaignsData,
    usersData: selectCompaignsUsersData
});


export default connect(mapStateToProps)(CompaignsList);