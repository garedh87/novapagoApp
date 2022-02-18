import React, { useEffect, useState } from 'react'
import { AssetGrid } from './components/AssetGrid'
import { DefaultList } from './components/DefaultList'
import { SearchAsset } from './components/SearchAsset'
import { getDefault } from './helpers/getDefault'

export const NovapagoApp = () => {

   
    const [ assets, setAssets] = useState([]);
   

    //
    // function AssetRender(assets) {
    //     const isValueEmpty = assets.isEmptyValue;
    //     if (isEmptyValue) {
    //       return <AssetGrid />;
    //     }
    //     return <DefaultList />;
    //   }
    
    return (
        

    <div className='container-fluid bg-primary pb-5 pt-3'>

         <div className='row mb-4  '>

              <div className='col-sm-8 align-self-center text-align-left text-light border-dark'>
                  <h2 className='mt-2 pl-2'>Top Cryptocurrencies by Market Cap</h2>
                    <hr></hr>
              </div>
              
              <div className='col-sm-4 align-self-end'>
                  <SearchAsset  setAssets={setAssets}/>
              </div> 
              <div className='row pb-2'></div>
        
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

        
                {/* {

                    assets.map(asset => (
                        <DefaultList 
                            key={asset}
                            asset={asset}/>
                    ))
                } */}
                {/* Finally I was unable to implement the default 
                    10 assets display in this version */}
            
                {
                    assets.map(asset => (
                        <AssetGrid
                            key={asset}
                            asset={asset} />
                    ))
                }
            </div>
                <div>

                </div>
                    
        </div> 

        </div>

    </div>
  )
}
