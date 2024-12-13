import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";
import Project1 from "../Images/Project1.png";
import Project2 from "../Images/Project2.png";
import Project3 from "../Images/Project3.png";

// Data for Recent Work
const recentWorkData = [
  {
    title: "Azure Blob Logging",
    description:
      "Developed an Azure Log Management Portal using .NET MVC, designed to store and manage application logs on Azure Blob Storage. The portal allows users to easily upload, retrieve, and analyze logs directly through an intuitive web interface.",
    buttonText: "Know More",
    image: Project1,
  },
  {
    title: "Renewal Notice Generation Application",
    description:
      "Led the development of Renewal Notice Generation UI and Payment UI for a key client, ensuring intuitive navigation and user-friendly interfaces that aligned with the client’s business needs.",
    buttonText: "Know More",
    image: Project2,
  },
  {
    title: "Insurance Portal",
    description:
      "Developed an Insurance Portal using React and .NET Core to showcase domain expertise and organizational projects. The application highlights key insurance domains, detailed descriptions of completed projects, and their impact. It provides an intuitive interface for users to explore industry-specific solutions and organizational achievements. Built with a focus on presenting information effectively, the portal combines React’s dynamic UI capabilities with .NET Core’s robust backend to deliver a seamless and engaging user experience.",
    buttonText: "Know More",
    image: Project3,
  },
];

const RecentWork = () => {
  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#FDF4E3" }}>
      {/* Header Section */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#3C3C3C",
          marginBottom: "2rem",
        }}
      >
        My Recent Work
      </Typography>

      {/* Projects Grid */}
      <Grid container spacing={4}>
        {recentWorkData.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "12px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              {/* Content Section */}
              <CardContent
                sx={{
                  flex: 1,
                  padding: "2rem",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#3C3C3C",
                    marginBottom: "1rem",
                    textAlign: "left",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#6D6D6D",
                    marginBottom: "1rem",
                    textAlign: "left",
                  }}
                >
                  {item.description}
                </Typography>
                <Typography align="left">
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#FF715B",
                      color: "#FFFFFF",
                      "&:hover": {
                        backgroundColor: "#FF5A3A",
                      },
                    }}
                  >
                    {item.buttonText}
                  </Button>
                </Typography>
              </CardContent>

              {/* Image Section */}
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  width: { xs: "100%", sm: "300px" },
                  height: "auto",
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecentWork;
