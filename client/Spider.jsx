// Task component - represents a single todo item
Spider = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        spider: React.PropTypes.object.isRequired
    },
    render() {
        return (
            <tr><td>{this.props.spider.name}</td></tr>
        );
    }
});