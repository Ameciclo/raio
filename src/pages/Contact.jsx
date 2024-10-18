import React from 'react';
import Header from '../components/Header';
import MessageForm from '../components/MessageForm';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <Header page='contato' />
      <div className="page-banner contact-banner">
        <h1>Contato</h1>
      </div>
      <MessageForm />
      <Footer />
    </>
  );
}

export default Contact;