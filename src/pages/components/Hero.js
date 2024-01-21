import "./../styles/Hero.css";
import { Box, Button } from "@mui/material";
import "./../../fonts/JosefinSans-VariableFont_wght.ttf";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import panel from './../images/carousel-panel.jpg';
import studio from './../images/carousel-studio.jpg';
import workshop from './../images/carousel-workshop.jpg';
import leftArrow from './../images/left-arrow.svg';
import rightArrow from './../images/right-arrow.svg';

export default function Hero() {
    return (
        <div id="Hero">
            <div className="info-column">
                <h1 className="girls-in">girls in <br /></h1>
                <h1 className="STEAM">STE<span style={{ color: '#A6A8CE' }}>A</span>M</h1>
                <h4 className="description">Supporting access to STEAM education for girls, gender-diverse students, and the LGBTQ+ community. </h4>

                <Box className="hero-buttons">
                    <Button
                        onClick={e => { window.open('https://linktr.ee/girlsinsteamorg'); }}
                        sx={{
                            width: 200,
                            backgroundColor: '#54547E',
                            color: 'white',
                            borderRadius: 4,
                            fontFamily: 'Josefin Sans',
                            fontSize: 18,
                            fontWeight: 700,
                        }}
                        variant="contained">GET INVOLVED
                    </Button>
                </Box>
            </div>
            <div className="carousel-column">
                <div className="hero-carousel">
                    <AliceCarousel autoPlay autoPlayInterval="3000" infinite="true" disableDotsControls="true"
                        renderNextButton={() => {
                            return <img className="left" src={leftArrow} alt="left-arrow" />
                        }}
                        renderPrevButton={() => {
                            return <img className="right" src={rightArrow} alt="right-arrow" />
                        }}>
                        <img className="slide-image" src={workshop} alt="GiS Workshop" />
                        <img className="slide-image" src={studio} alt="GiS Studio" />
                        <img className="slide-image" src={panel} alt="GiS Panel" />
                    </AliceCarousel>
                </div>
            </div>
        </div>
    );
}
