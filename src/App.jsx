import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './styles/app.css';
import {Home, NotFoundPage, Contact, Faq, SingleNews, News} from './pages';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/contato" element={ <Contact /> } />
        <Route path="/faq" element={ <Faq /> } />
        <Route path="/news/1" element={ <SingleNews /> } />
        <Route path="/news" element={ <News /> } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
