import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const serviceCard = [
  {
    heading: "Diagnoist",
    para: " Lizards are a widespread group of squamate reptiles with over 6,000 species, ranging across all continents except Antarctica,",
    img: "",
  },
  {
    heading: "Diagnoist",
    para: " Lizards are a widespread group of squamate reptiles with over 6,000 species, ranging across all continents except Antarctica,",
    img: "",
  },
  {
    heading: "Diagnoist",
    para: " Lizards are a widespread group of squamate reptiles with over 6,000 species, ranging across all continents except Antarctica,",
    img: "",
  },
  
];
const Services = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={4}>
          <Card sx={{ maxWidth: 345 }}>
            {serviceCard &&
              serviceCard.map((i, j) => {
                return (
                  <>
                    <CardMedia
                      component="img"
                      height="140"
                      img src="https://ibnsino.getmytemplate.com/images/jpg/department-details.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                      <h1 style={{ textAlign: "center" }}>{i.heading}</h1>
                      <p>
                        {i.para}
                      </p>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </>
                );
              })}
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default Services;
