UrlItem = React.createClass({

    handleDelete(e) {
        Meteor.call('removeUrl', this.props.spider, this.props.url);
    },

    render() {
        return <li className="teal collection-item">{this.props.url}<i onClick={this.handleDelete} className="material-icons right">delete</i><div className="clearfix"></div></li>
    }

});
