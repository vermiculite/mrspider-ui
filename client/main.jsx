Meteor.subscribe('spiders');


MainLayout = React.createClass({
    render() {
        return (
            <div>
                <header>
                    <h1 className="center-align">Mr Spider UI</h1>
                </header>
                <main>{this.props.content}</main>
                <footer className="center-align">We love Mr Spider</footer>
            </div>
        );
    }
});