if (Meteor.isClient) {
  $(function() {
    $('.ui.sticky')
        .sticky({context:'#sticky'})
    ;
    $('.ui.sidebar').first().sidebar('attach events', '.animated.fade.button', 'click');

    ;
  })}