const ClientSchema = {
    name: 'Client',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        phoneMask: 'string',
        phone: 'string',
        entries: 'Entry[]',
    },
};

export default ClientSchema;