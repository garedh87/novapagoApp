import React, { useState, useEffect } from 'react'
import { getCryptocurrencies } from '../helpers/getCryptocurrencies';
import { CryptoGridItem, getMonthAverage } from './CryptoGridItem';

export const CryptoGrid = ({ cryptocurrency }) => {
  
    const [assets, setAssets] = useState([]);

    useEffect( () => {
        getCryptocurrencies( cryptocurrency)
            .then(  setAssets )
    }, [] )

    
    return (
    <div>
        
        <div className='row card-item'>
            {
                assets.map( asset => (
                        <CryptoGridItem
                            key={ asset.id } 
                            { ...asset }
                        />
                ))
            }
        </div>
    </div>
  )
}
