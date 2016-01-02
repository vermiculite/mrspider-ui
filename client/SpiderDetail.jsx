SpiderDetail = React.createClass({
    propTypes: {},

    mixins: [ReactMeteorData],

    getMeteorData() {
        Meteor.subscribe('middleware');
        var data = {
            spider: Spiders.findOne(this.props.id),
            middleware: Middleware.find().fetch()
        };
        return data;
    },

    getUrls() {
        var spider = this.data.spider;
        return spider.startUrls || [];
    },

    middlewares() {

    },

    render() {
        var urlNodes = this.getUrls().map(url=> {
            return (
                <UrlItem key={url} url={url} spider={this.props.id}/>
            )
        });
        var middlewares = this.data.middleware.map(middleware => {
            return (<li className="collection-item teal" key={middleware.middleware}>{middleware.middleware}</li>)
        });
        return (
            <div>
                <h1>{this.data.spider ? this.data.spider.name : ''}</h1>

                <div className="card-panel teal darken-2">
                    <UrlForm spider="" id={this.props.id}/>
                    <ul className="collection">
                        {urlNodes}
                    </ul>
                </div>
                <div className="card-panel teal darken-2">
                    <h3>
                        Middleware
                    </h3>
                    <ul className="collection">
                        {middlewares}
                    </ul>
                </div>
            </div>
        )
    }
});
