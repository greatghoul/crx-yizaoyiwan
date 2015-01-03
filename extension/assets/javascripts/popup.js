var demo = new Vue({
  el: '#messages',

  data: {
    messages: [] 
  },

  created: function() {
    this.fetch_data();
  },

  filters: {
    truncate: function(v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    timeago: function(v) {
      return $.timeago(v);
    }
  },

  methods: {
    fetch_data: function() {
      var self = this;
      get_messages(function(messages) {
        self.messages = messages;
        log(messages);
      });
    }
  }
});