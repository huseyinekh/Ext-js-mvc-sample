Ext.define('App_.store.Users', {
    extend: 'Ext.data.Store',
    model: 'App_.model.User',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        useDefaultXhrHeader : false,
        api: {
            
            read: 'https://randomuser.me/api/?results=4',
            update: 'data/updateUsers.json'
        },
        reader: {
            type: 'json',
            root: 'results',
            successProperty: 'success'
        }
    }
});

