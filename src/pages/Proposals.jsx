import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import Footer from '../components/Footer';
import ProposalsCard from '../components/ProposalsCard';
import { getProposalsData } from '../services/request';

function Proposals() {
  const [dataProposals, setDataProposals] = useState([
    {id: 1, title: ''},
    {id: 2, title: ''},
  ])

  const requestProposalsData = async () => {
    const data = await getProposalsData()
    setDataProposals(data)
  }

  useEffect(()=>{
    requestProposalsData()
  }, [])

  return (
    <>
      <Header page='propostas' />
      <SideNavBar />
      <div className='news-pg'>
        <div class="proposals-banner">
          <h1>PROPOSTAS</h1>
        </div>
        <div className='news-area'>
          {
            dataProposals.map(
              (proposal) => <ProposalsCard data={proposal} />
            )
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Proposals;