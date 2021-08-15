import { getRealm } from './Realm';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';

export const getCakeSupports = async () => {
    let realm = await getRealm();
    const cakeSupports = realm.objects('CakeSupport');
    return cakeSupports;
}

export const saveCakeSupport = async (value) => {
    const realm = await getRealm();
    let data = {};
    let idAleatorio = uuid.v4();
    try {
        realm.write(() => {
            data = {
                id: value.id || idAleatorio,
                isOut: value.isOut,
                description: value.description,
            };
            realm.create('CakeSupport', data, true);
            console.log(
                'saveCakeSupport: save object: ',
                JSON.stringify(data),
            );
        });
    } catch (error) {
        console.error(
            'saveCakeSupport: error on save object: ',
            JSON.stringify(this.data), error
        );
        Alert.alert('','Erro ao salvar o suporte.');
    }
    return data;
}

export const deleteCakeSupport = async cakeSupport => {
    const realm = await getRealm();
    try {
        console.log('Delete Support', cakeSupport);
        realm.write(() => {
            realm.delete(cakeSupport);
        });
        
    } catch (error) {
        console.error(
            'deleteCakeSupport: error on delete object: ',
            error,
        );
        Alert.alert('Erro ao excluir o suporte.');
    }
};