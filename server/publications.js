Meteor.publish('spiders', function() {
    return Spiders.find();
});

Meteor.publish('middleware', function() {
    console.log(Object.keys(spider.middleware).forEach(middleware => {
        this.added('middleware', middleware, {middleware: middleware});
    }));
    this.ready();
});
