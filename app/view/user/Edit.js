Ext.define("App_.view.user.Edit",{
    extend:"Ext.window.Window",
    alias:'widget.useredit',

    title:"Edit User",
    layout:"fit",
    autoShow:true,

    initComponent:function(){
        this.items =[
            {
                xtype:'form',
                padding:"20px",
                border:0,
                items:[
                    {
                        xtype:'textfield',
                        name:"phone",
                        fieldLabel:'Phone'
                        
                    },
                    {
                        xtype:'textfield',
                        name:"email",
                        fieldLabel:'Email'
                    }
                ]
            }
        ];
        this.buttons=[
            {
                text:'Save',
                action:"save"
            },
            {
                text:"Cancel",
                scope:this,
                handler:this.close
            }
        ];
        this.callParent(arguments);
    }
});