import React from "react"
import {
  Box,
  Button,
  Typography,
  CardMedia,
  Snackbar,
  IconButton,
} from "@mui/material"

// import Navbar from "./Navbar"

import Navbar from "./Navbar"

import Htmlicon from "../assets/Htmlicon.png"
import Cssicon from "../assets/Cssicon.png"
import JsIcon from "../assets/JsIcon.png"
import Reacticon from "../assets/Reacticon.png"
import MaterialUIicon from "../assets/MaterialUIicon.png"

import BackImageTwo from "../assets/BackImageTwo.jpg"
import BackImageThree from "../assets/BackImageThree.jpg"
import styled from "@emotion/styled"

const ProgLang = styled(Typography)({
  color: "rgb(192,192,192)",
  fontWeight: "bold",
  fontSize: "20px",
})

const ProgIcons = styled(CardMedia)({
  component: "img",
  backgroundColor: "rgb(192,192,192)",

  height: "30px",
  width: "30px",
  borderRadius: "40px",
  border: "1px solid rgba(72, 72, 72, 1)",
  boxShadow: "-2px 1px 5px rgba(0, 0, 0, 0.50)",
})

function LandingPage() {
  return (
    <Box
      sx={{
        // backgroundColor: "rgba(49, 53, 66, 1)",
        // backgroundColor: "pink",
        backgroundImage: `url( ${BackImageThree})`,
        // backgroundPosition:"ce",
        backgroundRepeat: "no-repeat",
        // backdropFilter: "blur(50px)",
        backgroundSize: "cover",
        backgroundPosition: "top",
        display: "flex",

        textAlign: "center",
        justifyContent: "center",
        // alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        // padding: "20px",
      }}
    >
      <Box sx={{}}>
        <Navbar />
      </Box>
      <Box
        sx={{
          height: "100vh",
          marginTop: "100px",
          display: "flex",
          gap: { md: "10px" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(32, 32, 35, 0.85)",

          //   flexDirection: { xs: "column", md: "row" },
        }}
        width={"100%"}
        // backgroundColor={"yellow"}
      >
        <Box
          flex={2}
          sx={{
            // height: "200px",
            // backgroundColor: "red",
            // display: "flex",
            display: { xs: "flex", sm: "flex" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              // display: { xs: "none", sm: "flex" },
              display: "flex",
              gap: "30px",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <ProgLang>HTML</ProgLang>
            <ProgLang>CSS</ProgLang>
            <ProgLang>JAVASCRIPT</ProgLang>
            <ProgLang>REACT</ProgLang>
            <ProgLang>MATERIAL UI</ProgLang> */}
            {/* <Typography>TECH:</Typography> */}
            <ProgIcons image={Htmlicon} />
            <ProgIcons image={Cssicon} />
            <ProgIcons image={JsIcon} />
            <ProgIcons image={Reacticon} />
            <ProgIcons image={MaterialUIicon} />

            {/* <HtmlOutlinedIcon sx={{ fontSize: "30px" }} />
            // <CssOutlinedIcon sx={{ fontSize: "30px" }} />
            // <JavascriptOutlinedIcon sx={{ fontSize: "30px" }} /> */}
          </Box>
        </Box>
        <Box
          flex={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              // textAlign: "center",
              // width: { xs: "50px", sm: "unset" },
              fontSize: { xs: "300%", md: "h2" },
              // lineClamp: "(30px,50%,35px)",
              // textShadow: "1px 2px 5px rgba(0, 0, 0, 0.50)",
              textShadow: "-1px 2px 50px rgba(32, 32, 35, 1)",
              fontWeight: "bolder",
              fontFamily: "revert",
              // color: "rgba(243, 243, 243, 1)",
              color: "rgba(224, 190, 112, 1)",
              lineHeight: { xs: "40px", sm: "unset" },
            }}
          >
            "MARK LEO BOSTRILLO"
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "180%", sm: "h4" },
              // color: "rgb(255, 228, 0, 1)",
              color: "rgba(224, 190, 112, 1)",
              // color: "green",
              textShadow: "1px 2px 5px rgba(0, 0, 0, 0.99)",
              fontWeight: "bold",
              fontFamily: "revert",
            }}
          >
            WEB DEVELOPER
          </Typography>
        </Box>
        <Box
          flex={8}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography
            sx={{
              borderRadius: "5px",
              padding: "10px",
              fontSize: { xs: "130%", sm: "25px" },
              width: { xs: "300px", md: "500px" },
              // color: "rgba(72, 72, 72, 1)",
              color: "rgba(224, 190, 112, 1)",
              textAlign: "justify",
              fontWeight: "bold",
              border: "2px solid rgba(224, 190, 112, 1)",
              boxShadow: "-6px 6px 8px rgb(192,192,192,0.50)",
            }}
          >
            " I'm a fullstack web developer, currently focusing in frontend
            projects (and occasionally designing). im using this tools. "HTML,
            CSS, JAVASCRIPT, REACT, MATERIAL UI "
          </Typography>
          <Box sx={{ display: "flex", gap: "35px", justifyContent: "center" }}>
            <Button
              sx={{
                backgroundColor: "rgb(192,192,192)",
                boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.50)",
                borderRadius: "50px",
                color: "rgba(32, 32, 35, 1)",
                fontWeight: "bold",
                transition: "ease-in 0.3s",
                "&:hover": {
                  border: "1px solid rgba(224, 190, 112, 1)",
                  backgroundColor: "black",
                  color: "whitesmoke",
                },
              }}
            >
              CHECK OUT MY WORK
            </Button>
            <Button
              sx={{
                transition: "ease-in 0.3s",
                // backgroundColor: "rgba(72, 72, 72, 1)",
                backgroundColor: "rgb(192,192,192)",
                boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.50)",
                borderRadius: "50px",
                color: "rgba(32, 32, 35, 1)",
                fontWeight: "bold",
                "&:hover": {
                  border: "1px solid rgba(224, 190, 112, 1)",
                  backgroundColor: "black",
                  color: "whitesmoke",
                },
              }}
            >
              RESUME/CV
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default LandingPage
