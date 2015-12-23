Spider = React.createClass({
    propTypes: {
        spider: React.PropTypes.object.isRequired
    },
    render() {
        return (
            <tr>
                <td>
                    <a className="white-text" href={"/spider/" + this.props.spider._id}>{this.props.spider.name}</a>
                </td>
            </tr>
        );
    }
});