import { getRealm } from './Realm';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';

export const getEntries = async () => {
    let realm = await getRealm();
    const entries = realm.objects('Entry');
    return entries;
}

export const saveEntry = async (value) => {
    const realm = await getRealm();
    let data = {};
    let idAleatorio = uuid.v4();
    try {
        realm.write(() => {
            data = {
                id: value.id || idAleatorio,
                entryAt: value.entryAt,
                closeAt: value.closeAt,
                timeElapsed: value.timeElapsed,
                client: value.client,
                cakeSupport: value.cakeSupport,
            };
            realm.create('Entry', data, true);
            console.log(
                'saveEntry: save object: ',
                JSON.stringify(data),
            );
        });
    } catch (error) {
        console.error(
            'saveEntry: error on save object: ',
            JSON.stringify(this.data), error
        );
        Alert.alert('', 'Erro ao salvar a entrega de bolo.');
    }
    return data;
}

export const deleteEntry = async entry => {
    const realm = await getRealm();
    try {
        console.log('Delete entry', entry);
        realm.write(() => {
            realm.delete(entry);
        });

    } catch (error) {
        console.error(
            'deleteEntry: error on delete object: ',
            error,
        );
        Alert.alert('Erro ao excluir a entrega de bolo.');
    }
};

