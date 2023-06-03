import { Grid, Typography } from "@mui/material";
import map1 from "./images/map1.png";
import steambbt from "./images/steambbt.png";
import "./aboutUs.css";
import "../fonts/JosefinSans-VariableFont_wght.ttf";
import "../fonts/Rastano.ttf";

export default function AboutUs() {
  return (
    <Grid container spacing={2} className="container">
      <Grid item xs={12} sm={6}>
        <div sx={{ maxWidth: 400 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textAlign: "left",
              color: "#6363AB",
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
            }}
          >
            ABOUT US
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              textAlign: "left",
              color: "#6363AB",
              fontFamily: "Josefin Sans",
              fontWeight: "bold",
            }}
          >
            Girls in STEAM is a Canadian non-profit organization that supports
            access to STEAM (Science, Technology, Engineering, Art & Design,
            Maths) education for girls, women, gender-diverse* people, and the
            LGBTQ+ community across North America.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: "left",
              color: "#5A4067",
              fontFamily: "Josefin Sans",
              fontWeight: "medium",
              marginBottom: "70px",
            }}
          >
            We aim to help balance the gender disparity in the tech industry
            through creating community, educational programming, and an
            accessible network for girls, women, gender-diverse* people, and the
            LGBTQ+ community to kick start their early careers.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="shadow-rectangle">
          <div className="photo-wrapper">
            <img src={steambbt} alt="Team Photo" className="photo" />
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Rastano",
                color: "black",
                marginTop: "15px",
              }}
            >
              Hello from the team ;)
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sx={{ margin: "0 2", backgroundColor: "white" }}>
        <Typography
          variant="h6"
          gutterbottom
          sx={{
            textAlign: "center",
            color: "#5A4067",
            fontFamily: "Josefin Sans",
            fontWeight: "medium",
            marginTop: "70px",
          }}
        >
          The Girls in STEAM team is based all across the world!
        </Typography>
        <img src={map1} alt="Map" style={{ width: "70%", height: "auto" }} />
      </Grid>
    </Grid>
  );
}