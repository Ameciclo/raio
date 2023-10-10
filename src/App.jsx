import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './styles/app.css';
import {Home, NotFoundPage, Contact, Faq, SingleNews, News, Developing, Observatory, Proposals, SingleProposal} from './pages';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/contato" element={ <Contact /> } />
        <Route path="/faq" element={ <Faq /> } />
        <Route path="/noticias/:id" element={ <SingleNews /> } />
        <Route path="/noticias" element={ <News /> } />
        <Route path="/propostas/:id" element={ <SingleProposal /> } />
        <Route path="/propostas" element={ <Proposals /> } />
        <Route path="/observatorio/dev" element={ <Developing /> } />
        <Route path="/observatorio" element={ <Observatory /> } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
