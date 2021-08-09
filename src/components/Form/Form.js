import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createBook, updateBook } from '../../actions/posts';


const Form = ( {currentId, setCurrentId, handleClose} ) => {
    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        isbn: '',
        description: '',
        cover: '',
        genre: '',
        pages: '',
        url: '',
        myReview: '',
        myRating: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();
    const book = useSelector((state) => currentId ? state.books.find((b) => b._id === currentId) : null);

    useEffect(() => {
        if(book) setBookData(book);
    }, [book])



    const handleSubmit = async (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateBook(currentId, bookData));
        } else {
            dispatch(createBook(bookData));
            handleClose();
        }
        
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setBookData({ title: '', author: '', isbn: '', description: '', cover: '', genre: '', pages: '', url: '', myReview: '', myRating: ''})
    }


    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Book</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={bookData.title} onChange={(e) => setBookData({...bookData, title: e.target.value })} />
                <TextField name="author" variant="outlined" label="Author" fullWidth value={bookData.author} onChange={(e) => setBookData({...bookData, author: e.target.value })} />
                <TextField name="isbn" variant="outlined" type="number" label="ISBN" fullWidth value={bookData.isbn} onChange={(e) => setBookData({...bookData, isbn: e.target.value })} />
                <TextField name="description" variant="outlined" label="Description" fullWidth value={bookData.description} onChange={(e) => setBookData({...bookData, description: e.target.value })} />
                <TextField name="genre" variant="outlined" label="Genre" fullWidth value={bookData.genre} onChange={(e) => setBookData({...bookData, genre: e.target.value })} />
                <TextField name="pages" variant="outlined" type="number" label="Pages" fullWidth value={bookData.pages} onChange={(e) => setBookData({...bookData, pages: e.target.value })} />
                <TextField name="url" variant="outlined" label="URL" fullWidth value={bookData.url} onChange={(e) => setBookData({...bookData, url: e.target.value })} />
                <TextField name="myRating" variant="outlined" type="number" label="My Rating" fullWidth value={bookData.myRating} onChange={(e) => setBookData({...bookData, myRating: e.target.value })} />
                <TextField name="myReview" variant="outlined" label="My Review" fullWidth value={bookData.myReview} onChange={(e) => setBookData({...bookData, myReview: e.target.value })} />

                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setBookData({...bookData, cover: base64 })} /></div>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;