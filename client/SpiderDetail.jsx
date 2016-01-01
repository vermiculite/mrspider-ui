SpiderDetail = React.createClass({
    propTypes: {},

    mixins: [ReactMeteorData],

    getMeteorData() {
        return {spider: Spiders.findOne(this.props.id)};
    },

    getUrls() {
        var spider = this.data.spider;
        return spider.startUrls || [];
    },

    render() {
        var urlNodes = this.getUrls().map(url=> {
            return (
                <li key={url}>{url}</li>
            )
        });
        return (
            <div>
                <h1>Hi spidery detail {this.data.spider ? this.data.spider.name : ''}</h1>
                <UrlForm spider="" id={this.props.id}/>
                <ul>
                    {urlNodes}
                </ul>
            </div>
        )
    }
});
