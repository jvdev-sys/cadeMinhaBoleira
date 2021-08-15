import { useEffect, useState } from 'react';

import {getCakeSupports ,saveCakeSupport, deleteCakeSupport} from '../services/CakeSupport';

const useCakeSupport = () => {

    const [cakeSupports, setCakeSupports] = useState([]);

    useEffect(() => {
            const loadCakeSupports = async () => {
                const data = await getCakeSupports();
                setCakeSupports(data);
                console.log("useCakeSupport :: loadCakeSupports :: cakeSupports :: ", data)
            } 
            loadCakeSupports();
    },[]);
   

    return [cakeSupports, setCakeSupports, getCakeSupports, saveCakeSupport, deleteCakeSupport];
};


export default useCakeSupport;