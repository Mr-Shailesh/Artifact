import React from "react";
import { Link } from "react-router-dom";


import classes from "./Footer.module.css";

const Footer = () => (
  <footer className={classes.footer}>
    <p className={classes.para}>   &copy; 2022 Copyright: <u><Link to="/home" rel="noreferrer" >ArtiFact</Link></u> </p>
  </footer>
);


export default Footer;
