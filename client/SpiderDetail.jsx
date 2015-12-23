SpiderDetail = React.createClass({
    propTypes: {

    },

    mixins: [ReactMeteorData],

    getMeteorData() {
        return {spider: Spiders.findOne(this.props.id)};
    },

    render() {
        return (
            <h1>Hi spidery detail {this.data.spider ? this.data.spider.name : ''}</h1>
        )
    }
});