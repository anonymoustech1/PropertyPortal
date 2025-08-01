import React from 'react'

const OptionsCard = () => {
  return (
    <>
    <div className='option-container' style={{width:"100%"}}>
        <img className='card-img-top' src="/images/fetchLogo.jpg" alt="card image cap" />
        <div className='card-body'>
            <div className="card-title">Buy</div>
            <div className='card-text'><p >Valerie agents are among the most experienced in the industry 
                and can help you win in today’s market.</p></div>
            <div className="findAgent"><button>Find an agent</button></div>
            <a href="#" className='btn btn-primary'></a>
        </div>
      
    </div>
      
    </>
  )
}

export default OptionsCard
