import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { getProposalsData } from '../services/request';

function SingleProposal() {
  const { id } = useParams();

  const [dataProposal, setDataProposal] = useState([
    {id: 1, title: ''},
    {id: 2, title: ''},
  ])

  const requestProposalData = async () => {
    const data = await getProposalsData()
    setDataProposal(data.find((proposal) => String(proposal.id) === id))
  }

  useEffect(()=>{
    requestProposalData()
  }, [])
  
  return (
    <>
      <Header page='propostas' />
      <SideNavBar />
      <>
        <div className='news-pg fade-in'>
          <div className="single-proposal-banner">
            <h1>{dataProposal.title}</h1>
          </div>
          <p className='news-text'>{dataProposal.text}</p>
        </div>
        < Footer />
      </>
    </>
  );
}

export default SingleProposal;