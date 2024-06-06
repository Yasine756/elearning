import { useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopNav from './topNav';
import Home from './home';
import Footer from './footer';

function App() {
  const formateurRef = useRef(null);
  const [animateButton, setAnimateButton] = useState(false);

  const scrollToFormateur = () => {
    formateurRef.current.scrollIntoView({ behavior: 'smooth' });
    setAnimateButton(true);
    setTimeout(() => setAnimateButton(false), 2000); // Reset animation after 2 seconds
  };

  return (
    <BrowserRouter>
      <div className="App">
        <TopNav scrollToFormateur={scrollToFormateur} />
        <Routes>
          <Route path="/" element={<Home formateurRef={formateurRef} animateButton={animateButton} />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
