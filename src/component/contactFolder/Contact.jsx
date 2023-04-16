import { Box, CardMedia, Typography } from "@mui/material"
import React from "react"
import BackImageFive from "../../assets/BackImageFive.jpg"
import styled from "@emotion/styled"
import FacebookIcon from "../../assets/FacebookIcon.png"
import LinkedInIcon from "../../assets/LinkedInIcon.png"
import InstagramIcon from "../../assets/InstagramIcon.png"
import TwitterIcon from "../../assets/TwitterIcon.png"
import MEssengerIcon from "../../assets/MEssengerIcon.png"
import PhoneIcon from "../../assets/PhoneIcon.png"
import GmailIcon from "../../assets/GmailIcon.png"

// import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined"
// import SettingsPhoneOutlinedIcon from "@mui/icons-material/SettingsPhoneOutlined"

// import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined"
const IconBoxOne = styled(CardMedia)({
  backgroundColor: "rgb(192,192,192)",
  borderRadius: "10px",
  padding: "5px",
  // border: "1px solid rgba(224, 190, 112, 1)",
  height: "50px",
  width: "50px",
  minHeight: "20px",
  minWidth: "20px",
})

function Contact() {
  return (
    <Box
      sx={{
        backgroundImage: `url( ${BackImageFive})`,

        backgroundRepeat: "no-repeat",

        backgroundSize: "cover",
        // backgroundPosition: "top",
        display: "flex",

        // textAlign: "center",
        justifyContent: "center",

        // flexDirection: "column",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          height: "100vh",

          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(32, 32, 35, 0.85)",
          backdropFilter: "blur(3.5px)",
          // -webkit-backdrop-filter: blur(3.5px);

          //   flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            height: "80vh",
            // maxWidth: "700px",
            width: "100%",
            // backgroundColor: "whitesmoke",
            display: "flex",
            flexDirection: "column",
            //   alignItems: "start",
            justifyContent: "center",
            alignItems: "center",

            //   flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography
            sx={{
              fontSize: "3vw",
              // alignItems: "center",
              fontWeight: "bold",
              color: "rgba(224, 190, 112, 1)",
            }}
          >
            SAY HELLO!
          </Typography>
          <Box sx={{ display: "flex", gap: "20px", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                padding: "20px",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                borderRadius: "10px",
                border: "1px solid rgba(224, 190, 112, 1)",
              }}
            >
              {/* <IconBoxOne component={"img"} image={FacebookIcon}></IconBoxOne> */}
              <IconBoxOne component={"img"} image={MEssengerIcon}></IconBoxOne>
              <IconBoxOne component={"img"} image={PhoneIcon}></IconBoxOne>
              <IconBoxOne component={"img"} image={GmailIcon}></IconBoxOne>
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "20px",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                borderRadius: "10px",
                border: "1px solid rgba(224, 190, 112, 1)",
              }}
            >
              <IconBoxOne component={"img"} image={FacebookIcon}></IconBoxOne>
              <IconBoxOne component={"img"} image={LinkedInIcon}></IconBoxOne>
              <IconBoxOne component={"img"} image={InstagramIcon}></IconBoxOne>
              <IconBoxOne component={"img"} image={TwitterIcon}></IconBoxOne>
            </Box>
          </Box>{" "}
          <Typography
            sx={{
              display: "flex",
              // padding: "80px",
              justifyContent: "center",
              alignItems: "center",
              // textAlign: "center",
              // height: "40vh",
              // backgroundColor: "red",
              // position: "relative",

              // backgroundColor: "#f5f5f5",
              backgroundColor: "rgba(224, 190, 112, 1)",
              // padding: theme.spacing(3),
              textAlign: "center",
              position: "fixed",
              left: 0,
              bottom: 0,
              height: "20vh",
              width: "100%",
            }}
          >
            &copy; 2023 mlb.com All rights reserved.
            {/* 2023 Your Website Name. All rights reserved. */}
          </Typography>
        </Box>
      </Box>
      {/* <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: theme.spacing(3),
          textAlign: "center",
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
        }}
      >
        sds
      </Box> */}
    </Box>
  )
}

export default Contact
