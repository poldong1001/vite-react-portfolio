import { Box, Container } from "@mui/material"
import { styled } from "@mui/system"
import { useState } from "react"
import LandingPage from "./component/LandingPage"
import About from "./component/aboutFolder/About.jsx"
import Project from "./component/projectFolder/Project.jsx"
import Blog from "./component/blogFolder/Blog.jsx"
import Contact from "./component/contactFolder/Contact.jsx"
// import About from "./components/aboutFolder/About.jsx"
// import Project from "./components/projectFolder/Project"
// import Blog from "./components/blogFolder/Blog.jsx"
// import Contact from "./components/contactFolder/Contact.jsx"
const Section = styled(Box)({
  height: "100vh",
  width: "100%",
})

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyCOntent: "center",
        // alignItems: "center",
        flexDirection: "column",
        backgroundColor: "whitesmoke",
      }}
    >
      <LandingPage />

      <Section
        id="about"
        sx={{
          backgroundColor: "rgba(32, 32, 35, 0.85)",
          // transition: "ease-in 0.7s",
        }}
      >
        <About />
      </Section>
      <Section id="project">
        <Project />
      </Section>
      <Section id="blog">
        <Blog />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </Box>
  )
}

export default App
