Meteor.subscribe('spiders');


MainLayout = React.createClass({
    render() {
        return (
            <div>
                <main>{this.props.content}</main>
            </div>
        );
    }
});
