import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { getProposalsData } from '../services/request';

function SingleProposal() {
  const { id } = useParams();

  const [dataProposal, setDataProposal] = useState({ id: 1, attributes: { title: '' }})

  useEffect(()=>{
    const requestProposalData = async () => {
      const data = await getProposalsData()
      setDataProposal(data.find((proposal) => String(proposal.id) === id))
    }
    return requestProposalData()
  }, [])
  
  return (
    <>
      <Header page='propostas' />
      <SideNavBar />
      <>
        <div className='news-pg fade-in'>
          <div className="single-proposal-banner">
            <h1>{dataProposal.attributes.title}</h1>
          </div>
          <p className='news-text'>{dataProposal.attributes.text}</p>
        </div>
        < Footer />
      </>
    </>
  );
}

export default SingleProposal;