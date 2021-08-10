import React, { useState } from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Link, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import Form from '../../Form/Form';
import DeleteIcon from '@material-ui/icons/Delete';
import BuildIcon from '@material-ui/icons/Build';
import { useDispatch } from 'react-redux';

import ShowMoreText from "react-show-more-text";
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';






import { deleteBook } from '../../../actions/posts';

const Post = ({ book, currentId, setCurrentId }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const [readMore, setReadMore] = useState(false);
    const [expanded, setExpanded] = useState(false);


    const ReadMore = () => {
        setReadMore(!readMore);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const handleEdit = () => {
        setCurrentId(book._id);
        handleClickOpen()
    }


    return(
        <Card className={classes.card} >
            <CardMedia className={classes.media} image={book.cover} title={book.title}/>
            <div className={classes.details}>
            <CardContent>
            <Typography gutterBottom variant="h4" component="h2">{book.title}</Typography>
            <Typography gutterBottom variant="h5" component="h4">{book.author}</Typography>
            <Typography gutterBottom variant="h6" component="h6">ISBN: {book.isbn}</Typography>

            <Typography paragraph variant="body2" color="textSecondary" component="p">
            <ShowMoreText
            /* Default options */
            lines={3}
            more="Show More"
            less="Show less"
            anchorClass=""
            onClick={ReadMore}
            expanded={false}
            >
            {book.description}</ShowMoreText></Typography>

            <Rating
                className={classes.rating}
                value={book.myRating}
                precision={0.5}
                icon={<FavoriteIcon fontSize="medium" />}
                // onChange={(e, value) => setRating(value)}
            />
            </CardContent>

            </div>
            
            <CardActions className={classes.expandButton}>
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
            <ExpandMoreIcon className={classes.dropDownButton}/>
            </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography paragraph variant="body2" color="textSecondary" component="p">My Review: {book.myReview}</Typography>
            <Typography paragraph variant="h6" component="h6">Genre: {book.genre}</Typography>
            <Typography paragraph variant="h6" component="h6">Pages: {book.pages}</Typography>
            <Typography paragraph>URL: <Link href={book.url} target="_blank" variant="body2">{book.url}</Link></Typography>
            </CardContent>
        </Collapse></CardActions>

        <CardActions className={classes.cardActions}>
                <Button style={{color: 'black'}} size="small" onClick={handleEdit}>
                    <BuildIcon fontSize="default" />
                    Edit
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit Your Book!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill the information below:
            </DialogContentText>
            <Form currentId={currentId} setCurrentId={setCurrentId} handleClose={handleClose}/>
          </DialogContent>
          <DialogActions>
          </DialogActions>
        </Dialog>
            

                <Button size="small" color="secondary" onClick={() => dispatch(deleteBook(book._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;