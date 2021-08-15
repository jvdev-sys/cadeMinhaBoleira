import Realm from 'realm';

import EntrySchema from '../schemas/EntrySchema';
import ClientSchema from '../schemas/ClientSchema';
import CakeSupportSchema from '../schemas/CakeSupportSchema';

export const getRealm = async () => {
    const realm = await Realm.open({
        schema: [ClientSchema, EntrySchema, CakeSupportSchema ],
        schemaVersion: 13,
    });
    //dropDB(realm); 
    return realm;
};

export const dropDB = realm => {
    console.log('dropDB :: dropping DB...');
    realm.write(() => {
        realm.deleteAll();
    });
}
