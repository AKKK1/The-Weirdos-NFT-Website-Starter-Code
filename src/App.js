import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import { light } from './styles/Themes';

import Showcase from "./components/sections/Showcase";
import Team from "./components/sections/Team";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./components/sections/Home";
import Roadmap from "./components/sections/Roadmap";
import About from "./components/sections/About";
import Faq from "./components/sections/Faq";




function App() {
  return (
    <div >
      <>
        <GlobalStyles />

        <ThemeProvider theme={light} >
          <Navigation />
          <Home />
          <About />
          <Roadmap />
          <Showcase />
          <Team />
          <Faq />
          <Footer />



        </ThemeProvider>

      </>
    </div>
  );
}

export default App;
