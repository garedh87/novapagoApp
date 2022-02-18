import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";


export const getAssets = async( asset ) => {

    
    const url =`http://api.coincap.io/v2/assets?search=${encodeURI(asset)}&limit=1`;
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