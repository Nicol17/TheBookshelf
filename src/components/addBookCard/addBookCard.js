import React, { useState } from 'react';
import Form from '../Form/Form';
import { Button, Card, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import useStyles from './styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';



// const useStyles = makeStyles((theme) => ({
//     AddIcon: {
//         display: 'block',
//         fontSize: '150px', 
//       },
//       buttons: {
//         display: 'block',
//         margin: '0 auto',
//         textAlign: 'center'
//       },
// }));


const AddBookCard = ({ currentId={currentId}, setCurrentId={setCurrentId} }) => {
  const classes = useStyles();
  
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  
    return (
      <Card className={classes.addBookCard}>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          <AddCircleIcon className={classes.AddIcon}/>
          Add a New Book!
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Your New Book To The Database!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill the information below:
            </DialogContentText>
            <Form currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose}/>
          </DialogContent>
          <DialogActions>
          </DialogActions>
        </Dialog>
      </Card>
    )
  }
  
  export default AddBookCard;