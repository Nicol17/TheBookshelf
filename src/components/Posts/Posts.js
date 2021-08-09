import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import AddBookCard from '../addBookCard/addBookCard';

import useStyles from './styles';


const Books = ({ currentId, setCurrentId }) => {
    const books = useSelector((state) => state.books);
    const classes = useStyles();

    console.log(books);
    return(
        !books.length ? <CircularProgress /> : (

            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    books.map(book => (
                        <Grid key={book._id} item xs={12} sm={6} lg={4}>
                            <Post book={book} currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    );
}

export default Books;