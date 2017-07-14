Ext.define('MyApp.view.newdevcard.Main', {
    extend : 'Ext.Component',
    xtype  : 'myapp-cards-main',
    html    : 'This is the <strong>Cards</strong> view!',
    padding : 20,
    
    scrollable: 'vertical',
    cls: 'dev-card-contact',
    bind: {
        html: '<b>e-mail:</b> {dev.email}<br><br><b>phone:</b> {dev.cell}<br><br><b>Loc:</b> {dev.location.city:capitalize}, {dev.location.state:capitalize} &nbsp;&nbsp;<b><i>{dev.nat:uppercase}</i></b>'
    }
    
});
