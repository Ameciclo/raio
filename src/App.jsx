import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import './styles/app.css';
import { Home, NotFoundPage, Contact, Faq, SingleNews, News, Developing, Observatory, Proposals, SingleProposal } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  let location = useLocation();
  if (location === "/") location.pathname = "/inicial"
  console.log(location.pathname)
  return (
    <>
      <Header page={location.pathname}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/faq/:keyword" element={<Faq />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/noticias/:id" element={<SingleNews />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/propostas/:id" element={<SingleProposal />} />
        <Route path="/propostas" element={<Proposals />} />
        <Route path="/observatorio/dev" element={<Developing />} />
        <Route path="/observatorio" element={<Observatory />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
