const CakeSupportSchema = {
    name: 'CakeSupport',
    primaryKey: 'id',
    properties: {
        id: 'string',
        description: 'string',
        isOut: 'bool',
        entries: 'Entry[]',
    },
};

export default CakeSupportSchema;