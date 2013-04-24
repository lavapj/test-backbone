////////////////////////////////////////////// Model

var Apple = Backbone.Model.extend();


////////////////////////////////////////////// Collection

var Bushel = Backbone.Collection.extend({
    model: Apple,
    url: 'http://search.twitter.com/search.json?q=NYC&callback=?',
    parse: function(response) {
        // console.log('parsing ...')
        return response.results;
    }
});

bushel = new Bushel();

////////////////////////////////////////////// Views

(function ($) {

  var ListView = Backbone.View.extend({
    el: $("body"),

    initialize: function () {
        console.log("working?");
    },
    events: {
      "click #mybutton":  "addOne"
    },
    addOne: function () {
      // var friend_name = prompt("Who is your friend?");
      // this.bushel.fetch();
      document.getElementById("content").innerHTML = bushel;
    }
  });


$(document).ready(function(){
  var pageView = new ListView();
});


})(jQuery);

