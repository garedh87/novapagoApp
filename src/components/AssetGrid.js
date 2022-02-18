import React from 'react'
import { useFetchAssets } from '../helpers/useFetchAssets'
import { AssetGridItem } from './AssetGridItem';

export const AssetGrid = ({asset}) => {

    const {data:assets} = useFetchAssets(asset);
   

    

    return (
        <div className="row">
            {
                assets.map ( ast =>(
                    <div className='row align-items-center' 
                    key={ast.id}>
                        <div className="col-sm">
                        {ast.rank}
                        </div>
                        <div className="col-sm">
                            {ast.name}    
                        </div>
                        <div className="col-sm">
                            {ast.symbol}
                        </div>
                        <div className="col-sm">
                            $ {ast.price} 
                        </div>
                        <div className="col-sm">
                            $ {ast.marketCap.substr(0, 10)
                                }
                        </div>
                        <div className="col-sm">
                            $ {ast.last24.substr(0, 10)}
                        </div>
                        <div className="col-sm">
                           
                        </div>
                    </div>
                ))
            
            }
        </div>  
    )
}
