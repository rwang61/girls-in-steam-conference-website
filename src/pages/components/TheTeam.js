import './../styles/TheTeam.css';
import React from 'react';
import BioDialog from './BioDialog.js';
import { bioData } from '../data/bioData.js';

import { Typography } from "@mui/material";

export default function Slider() {
    const [open, setOpen] = React.useState(false);
    const [dialogContent, setDialogContent] = React.useState(bioData[0]);
    const handleBioImgClick = (bio) => {
        setOpen(true);
        setDialogContent(bio);
    };
    return (
        <div className="the-team">
            <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: "30px" }} >
                THE TEAM BEHIND GiS
            </Typography>
            <div className="slider">
                {/* need two for infinite scrolling */}
                <div className="imgs-slide">
                    {bioData.map((bio) => <img src={bio.src} alt={bio.name} key={bio.name} onClick={() => handleBioImgClick(bio)} />)}
                </div>
                <div className="imgs-slide">
                    {bioData.map((bio) => <img src={bio.src} alt={bio.name} key={bio.name} onClick={() => handleBioImgClick(bio)} />)}
                </div>
            </div>
            <BioDialog open={open} setOpen={setOpen} dialogContent={dialogContent} />
        </div>
    );
}