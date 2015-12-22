// App component - represents the whole app
App = React.createClass({

    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            spiders: Spiders.find({}, {sort: {createdAt: -1}}).fetch()
        }
    },

    renderSpiders() {
        return this.data.spiders.map((spider) => {
            return <Spider key={spider._id} spider={spider} />;
        });
    },


    handleSubmit(event) {
        event.preventDefault();
        var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        Meteor.call('newSpider', text);
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    },

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Spider List</h1>
                    <form className="new-spider" onSubmit={this.handleSubmit} >
                        <input
                            type="text"
                            ref="textInput"
                            placeholder="Type to add new spiders" />
                    </form>
                </header>

                <ul className="list-group">
                    {this.renderSpiders()}
                </ul>
            </div>
        );
    }
});