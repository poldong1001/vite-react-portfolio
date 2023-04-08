import styled from "@emotion/styled"
import SearchIcon from "@mui/icons-material/Search"
// import HamburgerMenu from "./BurgerBtn"
import BurgerBtn from "./BurgerBtn"
import LogoPort from "../assets/LogoPort.png"
import ProfileOne from "../assets/ProfileOne.png"
import LogoTwo from "../assets/LogoTwo.png"
// import MyComponent from "./MyComponent"
import { Box, Link, Button, InputBase, CardMedia } from "@mui/material"

import React, { useState } from "react"

const NavGrid = styled(Box)({
  //   height: "100%",
  flex: "4",

  textAlign: "center",
})

const NavLinks = styled(Link)({
  //   backgroundColor: "red",
  //   boxShadow: "-2px 2px 2px rgba(0, 0, 0, 0.50)",
  //   boxShadow: "-2px 2px 2px rgba(72, 72, 72, 1)",
  //   backgroundColor: "rgba(245, 103, 31, 1)",
  //   borderRadius: "50px",
  //   border: " 1px solid rgba(245, 103, 31, 1)",

  listStyle: "none",
  textDecoration: "none",
  //   padding: "0px 10px 0px 10px",
  fontWeight: "bold",
  transition: "ease-in 0.3s",
  // color: "rgba(72, 72, 72, 1)"
  // color: "whitesmoke",
  color: "rgba(224, 190, 112, 1)",
  "&:hover": {
    border: "1px solid rgb(192,192,192)",
    // backgroundColor: "rgba(224, 190, 112, 1)",
    borderRadius: "30px",
    color: "rgb(192,192,192)",
    padding: "4px",
  },
})

function NavContent() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        // flexDirection: "row-reverse", //temporary tag
        alignItems: "center",
        width: "100%",
        height: "100%",
        // position: "fixed",
      }}
    >
      <NavGrid sx={{ display: "flex", justifyContent: "left" }}>
        <Box
          //   flex={1}

          sx={{
            width: "20vw",

            minWidth: "250px",
            display: "flex",
            gap: "10px",
            // backgroundColor: "green",
            // backgroundColor: "rgba(72, 72, 72, 1)",
            // boxShadow: "1px 2px 5px rgba(0, 0, 0, 0.80)",

            // border: "1px solid rgba(72, 72, 72, 1)",
            border: "1px solid rgba(224, 190, 112, 1)",
            borderRadius: "50px",
          }}
        >
          <InputBase
            sx={{
              // color: "rgba(72, 72, 72, 1)",
              color: "rgba(224, 190, 112, 1)",
              paddingLeft: "10px",
              //   backgroundColor: "pink",
              //   borderColor: "whitesmoke",
              //   borderRadius: "30px",
              width: "90%",
            }}
            placeholder="Search"
          ></InputBase>
          <Button
            sx={{
              margin: "2px",
              // backgroundColor: "rgb(255, 228, 0, 1)",
              backgroundColor: "rgba(224, 190, 112, 1)",
              boxShadow: "-2px 1px 2px rgba(0, 0, 0, 0.50)",
              // backgroundColor: "green",
              transition: "ease-in 0.3s",
              borderRadius: "50px",
              color: "rgba(72, 72, 72, 1)",
              "&:hover": {
                backgroundColor: "rgb(192,192,192)",
                color: "black",
              },
            }}
          >
            <SearchIcon />
          </Button>
        </Box>
      </NavGrid>
      <NavGrid sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          component={"img"}
          // image={LogoTwo}
          image={LogoTwo}
          sx={{
            borderRadius: "10px",
            // backgroundColor: "rgb(192,192,192)",
            // boxShadow: "1px 4px 9px rgba(0, 0, 0, 0.50)",
            display: { xs: "none", md: "unset" },
            width: "100px",
            height: "110px",
            // padding: "10px",
          }}
        />
      </NavGrid>
      <NavGrid
        sx={{
          display: { xs: "none", sm: "flex" },
          gap: "30px",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        <NavLinks
          sx={{
            fontSize: { xs: "2vw", md: "18px" },
          }}
          href="#"
        >
          MLB
        </NavLinks>
        <NavLinks
          sx={{
            fontSize: { xs: "2vw", md: "18px" },
          }}
          href="#about"
        >
          ABOUT
        </NavLinks>
        <NavLinks
          sx={{
            fontSize: { xs: "2vw", md: "18px" },
          }}
          href="#project"
        >
          PROJECT
        </NavLinks>
        <NavLinks
          sx={{
            fontSize: { xs: "2vw", md: "18px" },
          }}
          href="#blog"
        >
          BLOG
        </NavLinks>
        <NavLinks
          sx={{
            fontSize: { xs: "2vw", md: "18px" },
          }}
          href="#contact"
        >
          CONTACT
        </NavLinks>
      </NavGrid>
      <BurgerBtn />
    </Box>
  )
}

export default NavContent
