import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import video from '../video/contact-bg.mp4'
import MessageForm from '../components/MessageForm';

function Contact() {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [renderOthers, setRenderOthers] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBackgroundLoaded(true);
      const timeout = setTimeout(() => { setRenderOthers(true) }, 1000)
      return () => clearTimeout(timeout);
    }, 1000);
  }, []);

  return (
    <>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Seu navegador não suporta a reprodução de vídeo.
      </video>
      {
        backgroundLoaded && (
          <>
            <Header page='/contact' />
            {
              renderOthers && (
                <>
                  <SideNavBar />
                  <MessageForm />
                </>
              )
            }
          </>
        )
      }
    </>
  );
}

export default Contact;