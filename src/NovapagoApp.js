import React, { useState } from 'react'
import { AddCryptocurrency } from './components/AddCryptocurrency'
import { CryptoGrid } from './components/CryptoGrid'

export const NovapagoApp = () => {

    const [displayedCryptocurrencies, setDisplayedCryptocurrencies] = useState([''])


  return (
    
    <div className='container-fluid bg-primary pb-5 pt-3'>

       
            
            <div className='row mb-4  '>
              <div className='col-sm-8 align-self-center text-align-left text-light border-dark'>
                  <h2 className='mt-2 pl-2'>Top Currencies by Market Cap</h2>
                    <hr></hr>
              </div>
              
              <div className='col-sm-4 align-self-end'>
                  <AddCryptocurrency setDisplayedCryptocurrencies={setDisplayedCryptocurrencies} />
              </div>

            

            

        </div>
      
        <div className='card border-success shadow p-3'>
            <div className='card-header'>
                <div className='row align-items-center'>
                    <div className='col-sm'>
                        <h5>Rank</h5>
                    </div>
                    <div className='col-sm'>
                        <h5>Name</h5>
                    </div>
                    <div className='col-sm'>
                        <h5>Symbol</h5>
                    </div>
                    <div className='col-sm'>
                        <h5>Price</h5>
                    </div>
                    <div className='col-sm'>
                        <h5>Market Cap</h5>
                    </div>
                    <div className='col-sm'>
                        <h5>Average price 24h</h5>
                    </div>
                    <div className='col-sm'>
                        <h5>Average price 30 days</h5>
                    </div>
                </div>
            </div>

            <div className='card-body'>
                {displayedCryptocurrencies.map(cryptocurrency => (
                    <CryptoGrid
                      key={cryptocurrency}
                      cryptocurrency={cryptocurrency} />
                ))}
            </div>
                    
        </div>    
    </div>
    
  )
}
