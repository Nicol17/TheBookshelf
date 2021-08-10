import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        paddingTop: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: '#000',
        fontFamily: 'Helvetica, Arial, sans-serif',
        textTransform: 'capitalize',
        [theme.breakpoints.down("xs")]: {
          fontSize: '35px'
        }
      },
      image: {
        marginLeft: '25px',
        paddingBottom: '15px',
        [theme.breakpoints.down("xs")]: {
          margin: '15px',
          paddingBottom: '0'
        }
      },
      // }
      // [theme.breakpoints.down('sm')]: {
      // mainContainer: {
      //   flexDirection: "column-reverse"
      // }}
}));