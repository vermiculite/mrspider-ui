Meteor.publish('spiders', function() {
    return Spiders.find();
});