////////////////////////////////////////////// Model 

// var Tweet = Backbone.Model.extend();

// var Tweets = Backbone.Collection.extend({
//     model: Tweet,
//     url: 'http://search.twitter.com/search.json?q=NYC&callback=?',
//     parse: function(response) {
//         console.log('parsing ...')
//         return response.results;
//     }
// });



////////////////////////////////////////////// Views

(function ($) {
  
  var AddMyView = Backbone.View.extend({
    el: $("body"),
    events: {
      "click #mybutton":  "doSomething"
    },
    doSomething: function () {
      // var friend_name = prompt("Who is your friend?");
      document.getElementById("apples").innerHTML = "BANANAS BANANAS BANANAS";
    }
  });

  var AddMyView2 = Backbone.View.extend({
    el: $("body"),
    events: {
      "click #pearsbutton":  "doThis"
    },
    doThis: function () {
      $("#pears").attr("style", "background: blue;");
    }
  });

$(document).ready(function(){
  var pageView2 = new AddMyView2();
  var pageView = new AddMyView();
}); 



  // var TwitterView = Backbone.View.extend({
  //   el: $('body'),
  //   events: {
  //       'click #search': 'doSearch'
  //   },
  //   initialize: function() {
  //       _.bindAll(this, 'render', 'addItem');
  //       this.tweets = new Tweets();
  //       _this = this;
  //       // Bind an event handler for the reset event.
  //       this.tweets.bind('reset', function(collection) {
  //           // Clear any old tweet renderings
  //           _this.$('#tweets').empty();
  //           // For each tweet in the collection, we call addItem and
  //           // and pass the tweet.
  //           collection.each(function(tweet) {
  //               _this.addItem(tweet);
  //           });
  //       });
  //       this.counter = 0;
  //       this.render();
  //   },
  //   // This function is the event handler for the button click.
  //   // It tells the Tweets collection to fetch()
  //   doSearch: function() {
  //       var subject = $('#search').val() || 'NYC';
  //       this.tweets.url = 'http://search.twitter.com/search.json?q=' + subject + '&callback=?';
  //       this.tweets.fetch();
  //   },
  //   render: function() {
  //       $(this.el).append("<input id= 'search'type='text' placeholder='Write a word'></input>");
  //       $(this.el).append("<button id='add'>Search twitts</button>");
  //       $(this.el).append("<ul id='tweets'></ul>");
  //       return this;
  //   },
  //   addItem: function(item) {
  //       console.log(item);
  //       $('ul', this.el).append("<li><b>" + item.get('from_user_name') + "</b>:  " + item.get('text') + "</li>");
  //   }
  // });
  // var pageView = new TwitterView();



})(jQuery);

