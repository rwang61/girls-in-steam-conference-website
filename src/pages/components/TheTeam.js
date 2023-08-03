import './../styles/TheTeam.css';
import React from 'react';
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

export default function Slider() {
    return (
        <div className="the-team">
            <p>THE TEAM BEHIND GIS</p>
            <div className="slider">
                <div className="imgs-slide">
                    <img src={allison} alt="Allison" />
                    <img src={ariel} alt="Ariel" />
                    <img src={britney} alt="Britney" />
                    <img src={claire} alt="Claire" />
                    <img src={coco} alt="Coco" />
                    <img src={crystal} alt="Crystal" />
                    <img src={donna} alt="Donna" />
                    <img src={doreen} alt="Doreen" />
                    <img src={haley} alt="Haley" />
                    <img src={haruka} alt="Haruka" />
                    <img src={jackie} alt="Jackie" />
                    <img src={julia} alt="Julia" />
                    <img src={kristy} alt="Kristy" />
                    <img src={marina} alt="Marina" />
                    <img src={melanie} alt="Melanie" />
                    <img src={nika} alt="Nika" />
                    <img src={rachel} alt="Rachel" />
                </div>
                <div className="imgs-slide">
                    <img src={allison} alt="Allison" />
                    <img src={ariel} alt="Ariel" />
                    <img src={britney} alt="Britney" />
                    <img src={claire} alt="Claire" />
                    <img src={coco} alt="Coco" />
                    <img src={crystal} alt="Crystal" />
                    <img src={donna} alt="Donna" />
                    <img src={doreen} alt="Doreen" />
                    <img src={haley} alt="Haley" />
                    <img src={haruka} alt="Haruka" />
                    <img src={jackie} alt="Jackie" />
                    <img src={julia} alt="Julia" />
                    <img src={kristy} alt="Kristy" />
                    <img src={marina} alt="Marina" />
                    <img src={melanie} alt="Melanie" />
                    <img src={nika} alt="Nika" />
                    <img src={rachel} alt="Rachel" />
                </div>
            </div>
        </div>
    );
}