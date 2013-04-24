////////////////////////////////////////////// Model

var Apple = Backbone.Model.extend();

var Apple = Backbone.Collection.extend({
    model: Apple,
    url: 'http://search.twitter.com/search.json?q=NYC&callback=?',
    parse: function(response) {
        console.log('parsing ...')
        return response.results;
    }
});


////////////////////////////////////////////// Collection

var Bushel = Backbone.Collection.extend({
    model: Apple
});



////////////////////////////////////////////// Views

(function ($) {



})(jQuery);

