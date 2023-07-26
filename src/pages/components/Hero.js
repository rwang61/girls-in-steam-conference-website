import "./../styles/Hero.css";
import { Button, Grid } from "@mui/material";
import "./../../fonts/JosefinSans-VariableFont_wght.ttf";
import gislogo from './../images/gis-logo.png';

export default function Hero() {
    return (
        <div className="Hero">
            <Grid container spacing={{ sm: 1, md: 2}}>
                <Grid item xs={6}>
                    
                        <h1 className="girls-in">girls in <br/></h1>
                        <h1 className="STEAM">STEAM</h1>
                        <h4 className="description">Supporting access to STEAM education for girls, gender-diverse people, and the LGBTQ+ community. </h4>
                        <Button className="get-involved" 
                                sx={{width: 200,
                                    color: 'white',
                                    borderRadius: 5,
                                    fontFamily: 'Josefin Sans',
                                    fontSize: 18,
                                    }}
                                variant="contained">GET INVOLVED</Button>
                </Grid>
                <Grid item xs={6}>
                    
                        <img className="logo" src={gislogo} alt="logo"/>
                </Grid>
            </Grid>
        </div>

        
    );
}