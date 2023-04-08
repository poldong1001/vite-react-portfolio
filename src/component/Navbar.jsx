import React from "react"
import CssNav from "./CssNav.css"
import NavContent from "./NavContent"

import { Box, Link } from "@mui/material"
import { useState } from "react"
import { useEffect } from "react"

function Navbar() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  })

  return (
    <Box
      zIndex={1}
      className={`${loaded ? "title" : "title-unloaded"}`}
      sx={{
        // transform: "scaleX(0)",
        display: "flex",
        justifyContent: "center",

        width: "100%",
        position: "fixed",
      }}
    >
      <Box
        sx={{
          // border: " 2px solid rgba(72, 72, 72, 1)",
          boxShadow: "2px 4px 5px rgba(0, 0, 0, 0.50)",
          // borderRadius: "50px",
          // padding: "30px",
          padding: "30px",
          display: "flex",
          justifyContent: "center",
          // position: "fixed",
          // backgroundColor: "rgba(239, 239, 259, 1)",
          backgroundColor: "rgba(32, 32, 35, 0.85)",
          backdropFilter: "blur(5px)",
          // backgroundColor: "rgba(15, 46, 54, 1)",
          // width: "80%",
          // maxWidth: "xl",
          width: "100%",
          height: "5vh",
        }}
      >
        <NavContent />
      </Box>
    </Box>
  )
}

export default Navbar
