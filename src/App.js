import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from "react-redux";

import { getBooks } from "./actions/posts.js";
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import Footer from './components/Footer/footer';
import AddBookCard from './components/addBookCard/addBookCard';
import book from './images/book.png';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [currentId, dispatch]);

  return (
    <>
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">NICOL'S BOOKSHELF</Typography>
        <img className={classes.image} src={book} alt="memories" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid>
            <AddBookCard currentId={currentId} setCurrentId={setCurrentId} onClick={(e) => this.setState({isOpen: true})}/>
              <Posts currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
              {/* <Form currentId={currentId} setCurrentId={setCurrentId}/> */}

          </Grid>
        </Container>
      </Grow>
    </Container>
          <Footer />
          </>
  );
}

export default App;
