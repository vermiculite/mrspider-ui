Spiders = new Mongo.Collection('spiders');

Meteor.methods({
    newSpider(name) {
        check(name, String);
        Spiders.insert({
            name: name,
            createdAt: new Date()
        });
    }
})