import React from 'react'


export const DefaultList = async(asset) => {

    
    const url = 'api.coincap.io/v2/assets?limit=10';
    const response = await fetch( url);
    const { data } = await response.json();

    

    return (
        <div className="row">
            {
                data.map ( ast =>(
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
