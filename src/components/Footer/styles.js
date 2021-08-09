import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    footer: {color: '#fff', 
      backgroundColor: '#000', 
      width: '100%',
      textAlign: 'center',
      fontSize: '20px',
      padding: '5px 0',
      marginTop: '40px'
      // marginTop: 'calc(5% + 60px)'
    },

    a: {
      color: '#fff'
    }
  }));