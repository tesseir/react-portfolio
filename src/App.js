import { useState } from 'react';
import { Header, Navigation, AboutMe, Portfolio, ContactMe, Footer, Wrapper} from "./components"

function App() {

  const [showAboutMe, setShowAboutMe] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContactMe, setShowContactMe] = useState(false);

  return (
    <div className="App">
      <Header />
      <Navigation 
      setShowAboutMe={setShowAboutMe}
      setShowPortfolio={setShowPortfolio}
      setShowContactMe={setShowContactMe}
      />
      <main>
        {showAboutMe && <AboutMe />}
        {showPortfolio && <Portfolio />}
        {showContactMe && <ContactMe />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
