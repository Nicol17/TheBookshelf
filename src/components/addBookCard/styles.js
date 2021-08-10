import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  addBookCard: {
    textAlign: 'center',
    display: 'block',
    width: '20%',
    height: 'auto',
    margin: '5% auto',
    [theme.breakpoints.down('md')]: {
      width: '30%'
    },
    [theme.breakpoints.down("xs")]: {
      width: '60%',
      marginBottom: '50px'
    }
  },
  AddIcon: {
    display: 'block',
    textAlign: 'center',
    margin: '0 auto',
    fontSize: '100px', 
    [theme.breakpoints.down("sm")]: {
      fontSize: '60px'
    }
  },

}));