import { useEffect, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { getEntries, saveEntry} from '../services/Entry';

const useEntry = () => {
    const [entries, setEntries] = useState();
    const [entriesFiltered, setEntriesFiltered] = useState();

    useFocusEffect(useCallback(() =>{
        
        const loadEntries = async () => {
            let data = await getEntries();
            let dataFilter = data.filter(item => item.closeAt === null);
            setEntriesFiltered(dataFilter);
            setEntries(data);
            console.log("useEntry :: loadEntries :: entries :: ", data);
        }
        loadEntries();
    },[]));

    return [entries, entriesFiltered, saveEntry ];
}

export default useEntry;