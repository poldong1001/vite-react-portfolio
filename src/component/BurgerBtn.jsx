import { Box, Link } from "@mui/material"
import React from "react"
import { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import PublicRoundedIcon from "@mui/icons-material/PublicRounded"
import BrowseGalleryOutlinedIcon from "@mui/icons-material/BrowseGalleryOutlined"
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded"
import styled from "@emotion/styled"

// import Btnburger from "./Btnburger.css"

// const MobileNavLinks = styled(Link)({
//   color: "red",
// })
function BurgerBtn() {
  const [openMenu, setOpenMenu] = useState(false)

  function toggleOpenMenu() {
    setOpenMenu(!openMenu)
  }

  return (
    <Box
      sx={{
        // backgroundColor: "red",
        width: "100px",
        display: { xs: "unset", sm: "none" },

        // flexDirection: "column",
      }}
    >
      <div onClick={toggleOpenMenu}>
        <Box display={"flex"} justifyContent={"right"}>
          <MenuIcon
            sx={{
              color: "rgba(224, 190, 112, 1)",
              height: "80px",
              width: "40px",
            }}
          />
        </Box>
      </div>
      {openMenu && (
        <Box
          sx={{
            // width: "500px",
            position: "absolute",
            // justifyContent: "left",
            // transition: "all .7s ease-out",
            // display: "flex",
            // gap: "10px",
          }}
        >
          <Box
            sx={{
              // position: "absolute",
              width: "100px",
              backgroundColor: "rgb(192,192,192,0.90)",
              boxShadow: "-2px 4px 1px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(2px)",
              borderRadius: "8px",
              display: "flex",
              // width: "0px",
              // justifyContent: "space-around",
              padding: "10px",
              // marginRight: "110px",
              marginTop: "9px",
              gap: "20px",
              flexDirection: "column",
            }}
          >
            <Box sx={{ display: "flex", gap: "2px" }}>
              {/* <AccountCircleOutlinedIcon /> */}
              <Link sx={{ color: "rgba(72, 72, 72, 1)", fontWeight: "bold" }}>
                MLB{" "}
              </Link>
            </Box>

            <Box href sx={{ display: "flex", gap: "3px" }}>
              {/* <InfoOutlinedIcon /> */}
              <Link
                href="#about"
                sx={{ color: "rgba(72, 72, 72, 1)", fontWeight: "bold" }}
              >
                ABOUT{" "}
              </Link>
            </Box>

            <Box sx={{ display: "flex", gap: "3px" }}>
              {/* <PublicRoundedIcon /> */}
              <Link sx={{ color: "rgba(72, 72, 72, 1)", fontWeight: "bold" }}>
                PROJECT{" "}
              </Link>
            </Box>

            <Box sx={{ display: "flex", gap: "3px" }}>
              {/* <BrowseGalleryOutlinedIcon /> */}
              <Link sx={{ color: "rgba(72, 72, 72, 1)", fontWeight: "bold" }}>
                BLOGS
              </Link>
            </Box>

            <Box sx={{ display: "flex", gap: "3px" }}>
              {/* <AlternateEmailRoundedIcon /> */}
              <Link sx={{ color: "rgba(72, 72, 72, 1)", fontWeight: "bold" }}>
                CONTACTS{" "}
              </Link>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default BurgerBtn
