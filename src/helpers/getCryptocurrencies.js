


export const getCryptocurrencies = async() => {

    const url ='http://api.coincap.io/v2/assets?limit=10&API_KEY=api.coincap.io/v2/assets'
    const response = await fetch( url );
    const { data } = await response.json();


    const assets = data.map( asset => {

        //const monthAverage = getMonthAverage(asset.id);
        

        return {
            id: asset.id,
            rank: asset.rank,
            name: asset.name,
            symbol: asset.symbol,
            price: asset.priceUsd,
            marketCap: asset.marketCapUsd,
            last24: asset.vwap24Hr,
            //lastMonth: monthAverage
            
            
        }
    })

   
   return assets;
}

export const searchCryptocurrencies = async(cryptocurrency) => {

    const url =`api.coincap.io/v2/assets?search=${encodeURI( cryptocurrency)}`
    const response = await fetch( url );
    const { data } = await response.json();


    const assets = data.map( asset => {
        return {
            id: asset.id,
            rank: asset.rank,
            name: asset.name,
            symbol: asset.symbol,
            price: asset.priceUsd,
            marketCap: asset.marketCapUsd,
            last24: asset.vwap24Hr,
            
            
            
        }
    });

    return assets;
}