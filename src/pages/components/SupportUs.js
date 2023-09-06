import "./../styles/SupportUs.css";
import { Box, Button, Grid, Typography } from "@mui/material";

import ig from "./../images/logo-ig.png";
import fb from "./../images/logo-fb.png";
import yt from "./../images/logo-yt.png";
import linkedin from "./../images/logo-linkedin.png";
// import notion from "./../images/logo-notion.png";

import thermometer from "./../images/thermometer.svg";

export default function SupportUs() {
    return (
        <div id="Support">
            <Grid container spacing={2} className="SupportUsContainer">
                <Grid item sm={12} md={6}>
                    <div >
                        <div className="SupportSectionContainer">
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: "bold",
                                }}
                            >
                                SUPPORT US
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: "bold",
                                }}
                            >
                                Girls in STEAM appreciates your support.
                            </Typography>

                            <Typography
                                variant="body1"
                            >
                                Join us in our journey to support access to STEAM education for girls, women, <br />
                                gender-diverse* people, and the LBGT+ community across North America.
                            </Typography>
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
                                    marginTop: '20px',
                                }}
                                variant="contained">
                                DONATE
                            </Button>
                        </div>
                        <div className="SupportSectionContainer">
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                }}
                            >
                                CONTACT US
                            </Typography>
                            <Typography
                                variant="body1"
                            >
                                Email us at <a href="mailto:info@girlsinsteam.org">info@girlsinsteam.org</a> if you have any questions!
                            </Typography>
                        </div>
                        <div className="SupportSectionContainer">
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                }}
                            >

                                SEE WHAT WE'RE UP TO!
                            </Typography>
                            <Box id="social-icon-box"
                                sx={{
                                    flexGrow: 1,
                                    display: "flex",
                                    gap: "20px",
                                }}
                            >
                                <a href="https://www.instagram.com/girlsinsteamorg/"><img className="social-icon" alt="Instagram logo" src={ig}></img></a>
                                <a href="https://www.facebook.com/girlsinsteamorg/"><img className="social-icon" alt="Facebook logo" src={fb}></img></a>
                                <a href="https://www.youtube.com/@girlsinsteam"><img className="social-icon" alt="YouTube logo" src={yt}></img></a>
                                <a href="https://www.linkedin.com/company/girlsinsteam/"><img className="social-icon" alt="Linkedin logo" src={linkedin}></img></a>
                            </Box>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <img style={{ maxWidth: "225px" }} src={thermometer} alt="Donation tracker thermometer" />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}