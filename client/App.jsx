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
            return <Spider key={spider._id} spider={spider}/>;
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
                    <form className="new-spider" onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <label htmlFor="addSpider">Add Spider</label>
                            <input
                                type="text"
                                ref="textInput"
                                id="addSpider"
                                className="validate teal darken-1"
                            />

                        </div>
                    </form>
                </header>

                <table className="teal lighten-1">
                    <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderSpiders()}
                    </tbody>
                </table>
            </div>
        );
    }
});