import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { connect } from "react-redux"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Data from "../data/data"
import { ContactBtn } from "../components/NavBar/ContactBtn"

import { toggleDarkMode, incrementIndex, decrementIndex } from "../state/app"

const Index = styled.div`
  height: 200px;
  color: red;
  width: 200px;
  font-size: 3rem;
`

const IndexPage = ({
  isDarkMode,
  currentIndex,
  nextIndex,
  prevIndex,
  maxTitles,
  dispatch,
}) => (
  <Layout>
    <SEO title="Home" />
    <Index>{Data[currentIndex].maintitle}</Index>
    <button onClick={() => dispatch(incrementIndex())}>+++</button>
    <button onClick={() => dispatch(decrementIndex())}>---</button>

    <button
      style={isDarkMode ? { background: "black", color: "white" } : null}
      onClick={() => dispatch(toggleDarkMode(!isDarkMode))}
    >
      Dark mode {isDarkMode ? "on" : "off"}>
    </button>
    <ContactBtn>hi</ContactBtn>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default connect(
  state => ({
    isDarkMode: state.app.isDarkMode,
    titlesCount: state.app.titlesCount,
    maxTitles: state.app.maxTitles,
    currentIndex: state.app.currentIndex,
    nextIndex: state.app.nextIndex,
    prevIndex: state.app.prevIndex,
  }),
  null
)(IndexPage)
