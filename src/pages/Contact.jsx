import React from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import MessageForm from '../components/MessageForm';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <Header page='contato' />
      <SideNavBar />
      <MessageForm />
      <Footer />
    </>
  );
}

export default Contact;