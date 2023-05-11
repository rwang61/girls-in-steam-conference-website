import { Grid, Typography, Card, CardContent } from "@mui/material";
import map from "./images/map.png";
import "./aboutUs.css";

export default function AboutUs() {
  return (
    <Grid container spacing={2} className="container">
      <Grid
        item
        xs={6}
        sx={{
          paddingRight: "100px",
        }}
      >
        <div sx={{ maxWidth: 400 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              textAlign: "left",
              color: "#6363AB",
            }}
            className="gis-font"
          >
            ABOUT US
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              textAlign: "left",
              color: "#6363AB",
            }}
            className="gis-font"
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
            }}
            className="gis-font"
          >
            We aim to help balance the gender disparity in the tech industry
            through creating community, educational programming, and an
            accessible network for girls, women, gender-diverse* people, and the
            LGBTQ+ community to kick start their early careers.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={5}>
        <Card>
          <CardContent className="team-photo">
            <Typography variant="h6" gutterBottom>
              Additional Info
            </Typography>
            <Typography variant="body2">team photo</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sx={{ margin: "0 2", backgroundColor: "white" }}>
        <Typography
          variant="h6"
          gutterbottom
          sx={{
            textAlign: "center",
            color: "#5A4067",
          }}
        >
          The Girls in STEAM team is based all across the world!
        </Typography>
        <img src={map} alt="Map" />
      </Grid>
    </Grid>
  );
}
