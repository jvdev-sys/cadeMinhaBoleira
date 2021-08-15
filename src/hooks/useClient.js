import { useEffect, useState } from 'react';

import { getClients, saveClient, deleteClient } from '../services/Client';
import { useNavigation } from '@react-navigation/native';

const useClient = () => {
    const [clients, setClients] = useState();
    const navigation = useNavigation();

    useEffect(() => {
        const loadClients = navigation.addListener('focus',async () => {
            const data = await getClients();
            setClients(data);
            console.log("useClient :: loadClients :: clients :: ", data);
        });
        return loadClients;
    }, [navigation]);

    return [clients, saveClient, deleteClient];
}

export default useClient;