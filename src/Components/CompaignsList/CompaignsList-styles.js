import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    table: { marginTop: '55px', minWidth: 650, },
    circStyle: { position: 'absolute', top: '50%', left: '50%' },
    tableNameCell: { position: 'relative', top: '10px' },
    sortByNameButton: { color: '#3f51b5', fontWeight: 700, cursor: 'pointer' },
    activeState: { display: 'flex', alignItems: 'center' }
});


