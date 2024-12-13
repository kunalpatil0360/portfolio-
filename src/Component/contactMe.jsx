import React, { forwardRef, useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";

const ContactMe = forwardRef((props, ref) => {
    // State to manage the visibility of contact details
    const [showDetails, setShowDetails] = useState(false);

    // Handler to toggle visibility of contact details
    const handleToggleDetails = () => {
        setShowDetails((prev) => !prev);
    };

    return (
        <Box
            ref={ref} // Attach the ref for scrolling
            sx={{
                textAlign: "center",
                backgroundColor: "#FDF4E3", // Light beige background
                padding: "40px 20px",
            }}
        >
            {/* Header Text */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    marginBottom: "20px",
                    color: "#333", // Darker text color
                }}
            >
                Let’s work together and make everything super dynamic and super useful.
            </Typography>

            {/* Button to toggle contact details */}
            <Button
                variant="outlined"
                sx={{
                    borderColor: "#333",
                    color: "#333",
                    borderRadius: "5px",
                    padding: "10px 20px",
                    textTransform: "none",
                    fontWeight: "bold",
                    "&:hover": {
                        borderColor: "#555",
                        backgroundColor: "#f0f0f0",
                    },
                }}
                onClick={handleToggleDetails}
            >
                Contact Me
            </Button>

            {/* Contact Details Section */}
            {showDetails && (
                <Box
                    sx={{
                        marginTop: 3,
                        padding: 3,
                        backgroundColor: "#FDF4E3",
                        display: "flex",
                        gap: 2,
                        justifyContent: "space-around",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Email Field */}
                    <Box
                        sx={{
                            flex: "1 1 45%",
                            textAlign: "left",
                            minWidth: "300px",
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            sx={{ marginBottom: 1 }}
                        >
                            EMAIL
                        </Typography>
                        <TextField
                            value="kunalpatil0360@gmail.com"
                            InputProps={{ readOnly: true }}
                            fullWidth
                            variant="outlined"
                            sx={{
                                backgroundColor: "#FDF4E3",
                                borderRadius: "5px",
                            }}
                        />
                    </Box>

                    {/* Mobile No Field */}
                    <Box
                        sx={{
                            flex: "1 1 45%",
                            textAlign: "left",
                            minWidth: "300px",
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            sx={{ marginBottom: 1 }}
                        >
                            MOBILE NO
                        </Typography>
                        <TextField
                            value="9876557747"
                            InputProps={{ readOnly: true }}
                            fullWidth
                            variant="outlined"
                            sx={{
                                backgroundColor: "#FDF4E3",
                                borderRadius: "5px",
                            }}
                        />
                    </Box>
                </Box>
            )}
        </Box>
    );
});

export default ContactMe;
