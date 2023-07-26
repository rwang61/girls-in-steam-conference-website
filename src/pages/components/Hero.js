import "./../styles/Hero.css";
import { Button, Grid } from "@mui/material";
import "./../../fonts/JosefinSans-VariableFont_wght.ttf";
import gislogo from './../images/gis-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Hero() {
    return (
        <div className="Hero">
            <Grid container spacing={{ sm: 1, md: 2}}>
                <Grid item xs={6}>
                    
                        <h1 className="title">girls in <br/>STEAM</h1>
                        <h4 className="description">Supporting access to STEAM education for girls, gender-diverse people, and the LGBTQ+ community. </h4>
                        <Button className="get-involved" variant="contained">GET INVOLVED</Button>
                </Grid>
                <Grid item xs={6}>
                    
                        <img className="logo" src={gislogo} alt="logo"/>
                </Grid>
            </Grid>
        </div>

        
    );
}