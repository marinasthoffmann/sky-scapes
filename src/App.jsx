import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"

const GradientBackground = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
    img {
      max-width: 212px;
    }
`

function App() {

  return (
    <GradientBackground>
      <GlobalStyles />
      <Header />
      <SideBar />
      <Banner text={"The most complete space photo gallery!"} backgroundImage={"./images/banner.png"}/>
    </GradientBackground>
  )
}

export default App
