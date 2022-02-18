import { useEffect, useState } from "react";
import { getAssets } from "./getAssets";


export const useFetchAssets = (asset) => {

    const [state, setState] = useState({
        data: [],
    });
    
    useEffect( () => {
        
            getAssets( asset)
                .then(  ast => {

                    setState({
                        data: ast
                    });

                } )
        }, [asset] );

        return state;

}