Spiders = new Mongo.Collection('spiders');

Meteor.methods({
    newSpider(name) {
        check(name, String);
        Spiders.insert({
            name: name,
            createdAt: new Date()
        });
    },
    addUrl(spiderId, url) {
        check(spiderId,String);
        check(url, String);
        Spiders.update(spiderId, {$addToSet: {startUrls: url}});
    },
    removeUrl(spiderId, url) {
        check(spiderId,String);
        check(url, String);
        Spiders.update(spiderId, {$pull: {startUrls: url}});
    }
})
