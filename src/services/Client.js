import { getRealm } from './Realm';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';

export const getClients = async () => {
    let realm = await getRealm();
    const clients = realm.objects('Client');
    return clients;
}

export const saveClient = async (value) => {
    const realm = await getRealm();
    let data = {};
    let idAleatorio = uuid.v4();
    try {
        realm.write(() => {
            data = {
                id: value.id || idAleatorio,
                name: value.name,
                phone: value.phone,
                phoneMask: value.phoneMask,
            };
            realm.create('Client', data, true);
            console.log(
                'saveClient: save object: ',
                JSON.stringify(data),
            );
        });
    } catch (error) {
        console.error(
            'saveClient: error on save object: ',
            JSON.stringify(this.data), error
        );
        Alert.alert('', 'Erro ao salvar o cliente.');
    }
    return data;
}

export const deleteClient = async client => {
    const realm = await getRealm();
    try {
        console.log('Delete Client', client);
        realm.write(() => {
            realm.delete(client);
        });

    } catch (error) {
        console.error(
            'deleteClient: error on delete object: ',
            error,
        );
        Alert.alert('Erro ao excluir o cliente.');
    }
};