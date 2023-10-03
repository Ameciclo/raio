import React from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import video from '../video/contact-bg.mp4'
import MessageForm from '../components/MessageForm';

function Contact() {
  return (
    <>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeo.
      </video>
      <Header page='contato' />
      <SideNavBar />
      <MessageForm />
    </>
  );
}

export default Contact;