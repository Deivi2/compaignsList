import { createSelector } from "reselect";

const selectCompaigns = state => state.compaigns;

export const selectCompaignsAllData = createSelector(
    [selectCompaigns],
    compaigns => compaigns
)
export const selectCompaignsData = createSelector(
    [selectCompaigns],
    compaigns => compaigns.compaignsData
)

export const selectCompaignsUsersData = createSelector(
    [selectCompaigns],
    compaigns => compaigns.usersData
)


