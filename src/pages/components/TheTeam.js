import './../styles/TheTeam.css';
import React from 'react';
import BioDialog from './BioDialog.js';
import { bioData } from '../data/bioData.js';

import { Typography } from "@mui/material";

export default function Slider() {
    const [open, setOpen] = React.useState(false);
    const handleBioImgClick = () => {
        setOpen(true);
    };
    return (
        <div className="the-team">
            <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: "30px" }} >
                THE TEAM BEHIND GiS
            </Typography>
            <div className="slider">
                {/* need two for infinite scrolling */}
                <div className="imgs-slide">
                    {bioData.map((imgSrc) => <img src={imgSrc.src} alt={imgSrc.name} key={imgSrc.name} onClick={handleBioImgClick} />)}
                </div>
                <div className="imgs-slide">
                    {bioData.map((imgSrc) => <img src={imgSrc.src} alt={imgSrc.name} key={imgSrc.name} onClick={handleBioImgClick} />)}
                </div>
            </div>
            <BioDialog open={open} setOpen={setOpen} />
        </div>
    );
}