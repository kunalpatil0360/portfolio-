import React, { forwardRef } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Hero2 from "../Images/Hero2.png"; // Import Hero image

const AboutMe = forwardRef((props, ref) => {
    // Handler to download the CV
    const handleDownload = () => {
        const fileURL = './KunalCV.pdf';
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = 'Kunal_Patil_FullStack_Developer';
        link.click();
    };

    return (
        <Box
            ref={ref} // Attach the ref here
            id="aboutMe"
            sx={{
                backgroundColor: "#FDF4E3",
                padding: "2rem",
            }}
        >
            <Grid
                container
                spacing={4}
                alignItems="center"
                justifyContent="center"
                sx={{
                    flexDirection: { xs: "column", sm: "row" },
                }}
            >
                {/* Left Text Content */}
                <Grid item xs={12} sm={6}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            height: "100%",
                            overflow: "hidden",
                        }}
                    >
                        A Little Bit About Me
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            mt: 2,
                            maxWidth: "500px",
                            mx: { xs: "auto", md: 0 },
                        }}
                    >
                        I am Kunal Patil from Maharashtra, India. I am a skilled Full Stack Developer with expertise in <b>.NET, React, .NET Core, MVC, and UI/UX design</b>. With a creative mindset and strong problem-solving skills, I specialize in building scalable, user-centric applications that seamlessly blend functionality with exceptional design.
                        <br />
                        <br />
                        My passion lies in delivering innovative solutions that create meaningful impact and elevate user experiences.
                        <br />
                        <br />
                        Besides designing, I like to watch anime, read books, and solve sudoku.
                    </Typography>

                    <Box
                        sx={{
                            mt: 4,
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            gap: 2,
                            justifyContent: { xs: "center", md: "flex-start" },
                        }}
                    >
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: "#3C3C3C",
                                color: "#3C3C3C",
                                textTransform: "none",
                                padding: "0.5rem 2rem",
                                "&:hover": {
                                    backgroundColor: "#FFF5E1",
                                    borderColor: "#3C3C3C",
                                },
                            }}
                            onClick={handleDownload}
                        >
                            Download CV
                        </Button>
                    </Box>
                </Grid>

                {/* Right Image */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: "flex",
                        justifyContent: { xs: "center", md: "flex-end" },
                        alignItems: "center",
                    }}
                >
                    <Box
                        component="img"
                        src={Hero2}
                        alt="Creative Designer"
                        sx={{
                            width: { xs: "90%", sm: "80%", md: "70%" },
                            maxWidth: "400px", // Limit maximum size
                            height: "auto", // Maintain aspect ratio
                            objectFit: "contain", // Ensure the image fits within its container
                            overflow: "hidden", // Prevent overflow issues
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
});

export default AboutMe;
