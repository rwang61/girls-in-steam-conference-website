import './../styles/TheTeam.css';
import React from 'react';
import BioDialog from './BioDialog.js';

import { Typography } from "@mui/material";
import allison from './../images/allison.png';
import ariel from './../images/ariel.png';
import britney from './../images/britney.png';
import claire from './../images/claire.png';
import coco from './../images/coco.png';
import crystal from './../images/crystal.png';
import donna from './../images/donna.png';
import doreen from './../images/doreen.png';
import haley from './../images/haley.png';
import haruka from './../images/haruka.png';
import jackie from './../images/jackie.png';
import julia from './../images/julia.png';
import kristy from './../images/kristy.png';
import marina from './../images/marina.png';
import melanie from './../images/melanie.png';
import nika from './../images/nika.png';
import rachel from './../images/rachel.png';

const imgSrcs = [
    { name: "Allison", src: allison },
    { name: "Ariel", src: ariel },
    { name: "Britney", src: britney },
    { name: "Claire", src: claire },
    { name: "Coco", src: coco },
    { name: "Crystal", src: crystal },
    { name: "Donna", src: donna },
    { name: "Doreen", src: doreen },
    { name: "Haley", src: haley },
    { name: "Haruka", src: haruka },
    { name: "Jackie", src: jackie },
    { name: "Julia", src: julia },
    { name: "Kristy", src: kristy },
    { name: "Marina", src: marina },
    { name: "Melanie", src: melanie },
    { name: "Nika", src: nika },
    { name: "Rachel", src: rachel }
];

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
                    {imgSrcs.map((imgSrc) => <img src={imgSrc.src} alt={imgSrc.name} key={imgSrc.name} onClick={handleBioImgClick} />)}
                </div>
                <div className="imgs-slide">
                    {imgSrcs.map((imgSrc) => <img src={imgSrc.src} alt={imgSrc.name} key={imgSrc.name} onClick={handleBioImgClick} />)}
                </div>
            </div>
            <BioDialog open={open} setOpen={setOpen} />
        </div>
    );
}