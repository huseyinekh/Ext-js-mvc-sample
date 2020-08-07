Ext.define("App_.view.user.List",{
    extend:"Ext.grid.Panel",
    alias:"widget.userlist",
    title:'all users',

    store:"Users",
    initComponent:function(){
        this.columns = [
            {header: 'Phone',  dataIndex: 'phone',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];  
        this.callParent(arguments);
    }
})

