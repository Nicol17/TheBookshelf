import React from 'react';

import useStyles from './styles'; 


const Footer = () => {

    const classes = useStyles();
    return(
        <footer className={classes.footer}>
            <span>Designed & Developed by <a className={classes.a} target = "_blank" href="http://www.nicollluesa.com">Nicol Lluesa </a>&#169;. All rights reserved.</span>
        </footer>
    )
}

export default Footer;