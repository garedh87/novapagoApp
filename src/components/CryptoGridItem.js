import React from 'react'

export const getMonthAverage = async(id) => {

    const url =`http://api.coincap.io/v2/assets/${id}/history?interval=d1`
    const response = await fetch( url );
    const { data } = await response.json();

    function lastMonth(data) {
        return data.index <= 30;
    }
    const prices = data.filter (lastMonth);

    console.log(prices);

    const total = prices.forEach(price => {
        total = total + price ;
    });

    const monthAverage = parseFloat(total)/30;
    console.log(monthAverage);
    return (
        
        <div className='span'> $ {monthAverage} </div>
        
    )

  
}

export const CryptoGridItem = ( {monthAverage, name, rank, symbol, price, marketCap, last24} ) => {


  return (
    //format:"0,0.00"
    
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    {rank}
                </div>
                <div className="col-sm">
                    {name}    
                </div>
                <div className="col-sm">
                    {symbol}
                </div>
                <div className="col-sm">
                    $ {price.substr(0, 10)} 
                </div>
                <div className="col-sm">
                    $ {marketCap.substr(0, 10)}
                </div>
                <div className="col-sm">
                    $ {last24.substr(0, 10)}
                </div>
                <div className="col-sm">
                    $ {monthAverage}
                </div>
                
            </div>
        </div>

   
  )
}
