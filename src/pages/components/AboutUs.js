import { Grid, Typography } from "@mui/material";
import map1 from "./../images/map-with-pins.png";
import booth from './../images/booth.jpg';
import "./../styles/AboutUs.css";
import "./../../fonts/JosefinSans-VariableFont_wght.ttf";
import "./../../fonts/Rastano.ttf";

export default function AboutUs() {
  return (
    <div id="About">
      <Grid container spacing={2} className="AboutUsContainer">
        <Grid item sm={12} md={6}>
          <div sx={{ maxWidth: 400 }}>
            <Typography
              variant="h4"
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
        <Grid item sm={12} md={6}>
          <div className="shadow-rectangle" style={{
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            <div className="photo-wrapper">
              <img src={booth} alt="Girls in STEAM Exec team" className="photo" />
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
            sx={{
              textAlign: "center",
              color: "#5A4067",
              fontWeight: "medium",
              marginTop: "70px",
            }}
          >
            The Girls in STEAM team is based all across the world!
          </Typography>
          <img src={map1} alt="Map" style={{ width: "70%", maxWidth: "800px", height: "auto" }} />
        </Grid>
      </Grid>
    </div>
  );
}