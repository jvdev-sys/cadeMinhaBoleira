const EntrySchema = {
    name: 'Entry',
    primaryKey: 'id',
    properties: {
        id: 'string',
        entryAt: 'date',
        closeAt: 'date?',
        timeElapsed: 'int?',
        client: 'Client',
        cakeSupport: 'CakeSupport',
    },
};

export default EntrySchema;
