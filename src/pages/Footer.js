import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import "./styles/Footer.css";

export default function Footer() {

    return (
        <Paper className="App-footer" sx={{ marginTop: 'calc(10% + 60px)', bottom: 0 }} component="footer" square variant="outlined">
            <Container maxWidth="lg">
                <div className="GIS">
                    <header>girls in STEAM</header>
                    <Typography
                        sx={{
                            color: "#FFFFFF",
                        }}
                        className="font"
                    >
                        Supporting access to STEAM education for girls, gender-diverse people, and the LGBTQ+ community.
                    </Typography>
                </div>
                <div className="Quick-links">
                    <Typography
                        sx={{
                            color: "#FFFFFF",
                        }}
                        className="font"
                    >
                        Quick Links
                    </Typography>
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                    <a href="/">Our Values</a>
                    <a href="/">Events</a>
                    <a href="/">Resources</a>
                    <a href="/">Newsletter</a>
                </div>
                <div className="Support">
                    <Typography
                        sx={{
                            color: "#FFFFFF",
                        }}
                        className="font"
                    >
                        Support
                    </Typography>
                    <a href="/">Become a Sponsor</a>
                    <a href="/">Work With Us</a>
                    <a href="/">Donate</a>
                    <a href="/">FAQ</a>
                    <a href="/">Join GIS</a>
                </div>

                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        my: 1
                    }}

                >

                </Box>

                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}
                >
                    <Typography variant="caption" color="initial">
                        © 2023 by Girls in STEAM
                    </Typography>
                </Box>
            </Container>

        </Paper>
    );
}