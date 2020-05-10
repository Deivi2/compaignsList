import moment from 'moment';

export const bindCompaignsData = (compaignsData = [], usersData = []) => {
    return compaignsData.reduce((acc, cur) => {
        const user = usersData.find((user) => user.id === cur.userId)
        return startDateIsLessThenEnd(cur.startDate, cur.endDate) ? [...acc, { ...cur, compaignUser: user ? user : { name: 'Unknown user' } }] : [...acc]
    }, [])
}

export const startDateIsLessThenEnd = (date1, date2) => {
    const startDate = moment(date1, "DD/MM/YYYY");
    const endDate = moment(date2, "DD/MM/YYYY");
    return startDate < endDate;
}


export const isDateInARange = (date1, date2) => {
    const compareDate = moment(new Date(), "DD/MM/YYYY");
    const startDate = moment(date1, "DD/MM/YYYY");
    const endDate = moment(date2, "DD/MM/YYYY");

    return compareDate.isBetween(startDate, endDate);
}


export const sortDataByName = (data) => [...data].sort((a, b) => (a.name < b.name) ? -1 : 1);