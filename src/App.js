import { useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from './pages/Acceuil/home';

import Footer from './components/footer';
import Support from './pages/Support/support';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import TopNav from './components/topNav';
import FormateurSignIn from './pages/signIn/FormateurSignIn';
import EtudiantSignIn from './pages/signIn/EtudiantSignIn';
import SignUpApprenant from './pages/signUp/SignUpAprenant';
import DevenirForm from './pages/devenirForm/devenirForm';

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
        <ToastContainer position="bottom-right" />
        <Routes>
          <Route path="/" element={<Home formateurRef={formateurRef} animateButton={animateButton} />} />
          <Route path="/support" element={<Support/>}/>
          <Route path="/FormateurSignIn" element={<FormateurSignIn/>}/>
          <Route path="/EtudiantSignIn" element={<EtudiantSignIn/>}/>
          <Route path="/SignUpAprenant" element={<SignUpApprenant/>}/>
          <Route path="/devenirForm" element={<DevenirForm/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
