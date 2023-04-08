import { Box, Typography, CardMedia, Link } from "@mui/material"
import React from "react"
// import ProfileOne from "../../assets/ProfileOne.png"
import MyImageTwo from "../../assets/MyImageTwo.png"
import MyImageThree from "../../assets/MyImageThree.png"
import BackImageTwo from "../../assets/BackImageTwo.jpg"
import BackImageFour from "../../assets/BackImageFour.jpg"
import styled from "@emotion/styled"

const OtherSkills = styled(Link)({
  fontSize: "18px",

  color: "rgba(224, 190, 112, 1)",
  textDecoration: "none",
})

function About() {
  return (
    <Box
      sx={{
        // flexWrap: "wrap",
        backgroundImage: `url( ${BackImageFour})`,
        backgroundRepeat: "no-repeat",
        // backdropFilter: "blur(1px)",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: { xs: "column" },
        // justifyContent: "center",
        // alignItems: "end",
        // height: "100vh",
        // gap: "50px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(32, 32, 35, 0.85)",
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            // maxWidth: "lg",
            maxWidth: "lg",
            // paddingTop: { xs: "150px", sm: "0" },
            // height: "100vh",
            width: "80%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
          }}
        >
          <Box
            flex={6}
            sx={{
              height: "100vh",
              // width: "250px",
              // backgroundColor: "pink",
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <Box
              sx={{
                // backgroundColor: "white",

                display: "flex",
                justifyContent: "center",
                alignItems: { xs: "end", sm: "center" },
              }}
            >
              <CardMedia
                title=""
                image={MyImageThree}
                sx={{
                  // display: "flex",
                  height: { xs: "200px", sm: "350px" },
                  width: { xs: "200px", sm: "250px" },
                  // borderRadius: "50%",
                  borderRadius: "15px",
                  // maxWidth: "500px",
                  // alignItems: "end",
                  // paddingRight: "50px",
                  // clipPath: "polygon(100% 0, 100% 80%, 0 80%, 0 0)",
                  // clipPath: "circle(40% at 50% 40%)",
                  // borderRadius: "100px",
                  backgroundColor: "rgb(192,192,192)",
                  // border: "5px solid rgba(224, 190, 112, 1)",
                  // backgroundColor: "rga(224, b190, 112, 1)",
                }}
              />
            </Box>
          </Box>
          <Box
            flex={6}
            sx={{
              // height: "100vh",
              // backgroundColor: "grey",
              display: "flex",
              gap: "20px",
              paddingLeft: { xs: "0", sm: "20px" },
              flexDirection: "column",

              // alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                // backgroundColor: "rgb(192,192,192)",
                border: "2px solid rgba(224, 190, 112, 1)",
                boxShadow: "-6px 6px 8px rgb(192,192,192,0.50)",
                // width: "50%",

                borderRadius: "10px",
                width: { xs: "80vw", sm: "40vw" },
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "10px", sm: "1.5vw" },
                  textAlign: "justify",
                  padding: "10px",
                  color: "rgba(224, 190, 112, 1)",
                }}
              >
                "I am a motivated and enthusiastic intern web developer. I am
                passionate about coding and building websites, As a recent
                graduate in a bootcamp, I have a strong foundation in web
                development concepts, including HTML, CSS, and JavaScript. I am
                currently expanding my knowledge by learning new technologies
                and tools like React, Material UI,
              </Typography>
            </Box>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                gap: "5px",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "rgb(192,192,192)",
                }}
              >
                OTHER SKILLS
              </Box>
              <Box
                sx={{ display: "flex", gap: "5px", flexDirection: "column" }}
              >
                <OtherSkills>Graphics Design</OtherSkills>
                <OtherSkills>Photography</OtherSkills>
                <OtherSkills>Photo/ Video Editing</OtherSkills>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default About
