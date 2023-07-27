import "./../styles/Hero.css";
import { Button } from "@mui/material";
import "./../../fonts/JosefinSans-VariableFont_wght.ttf";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import white from './../images/white.png';
import pink from './../images/pink.png';
import lightPurple from './../images/light-purple.png';
import darkPurple from './../images/dark-purple.png';
import leftArrow from './../images/left-arrow.svg';
import rightArrow from './../images/right-arrow.svg';

export default function Hero() {
    return (
        <div className="Hero">
            <div className="row">
                <div className="column">
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
                                variant="contained">GET INVOLVED
                    </Button>
                </div>
                <div className="column">
                    <div className="hero-carousel">
                    <AliceCarousel autoPlay autoPlayInterval="3000" infinite="true" disableDotsControls="true"
                        renderPrevButton={() => {
                        return <img className="left" src={leftArrow} alt="left-arrow" />
                      }}
                        renderNextButton={() => {
                        return <img className="right" src={rightArrow} alt="right-arrow" />
                      }}>
                        <img className="slide-image" src={lightPurple} alt="light-purple"/>
                        <img className="slide-image" src={darkPurple} alt="dark-purple"/>
                        <img className="slide-image" src={pink} alt="pink"/>
                        <img className="slide-image" src={white} alt="white"/>
                    </AliceCarousel>
                    </div>
                </div>
            </div>
        </div>  
    );
}