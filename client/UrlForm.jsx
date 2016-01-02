UrlForm = React.createClass({


    mixins: [ReactMeteorData],

    getMeteorData() {
        return {spider: Spiders.findOne(this.props.id)};
    },

    getInitialState() {
        return {
            url: ''
        }
    },

    handleUrlChange(e) {
        this.setState({
            url: e.target.value
        });
    },

    handleSubmit(event) {
        event.preventDefault();
        Meteor.call('addUrl', this.props.id, this.state.url);
        var urlInput = event.target.url;
        urlInput.value = '';
        urlInput.focus();
    },

    render() {
        return (
            <div className="row">
                <h3 className="col s12">Links</h3>
                <div className="input-field col s12">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="spiderName" className="col s10" name="url" onChange={this.handleUrlChange}/>
                        <label htmlFor="spiderName">Add a start url</label>
                        <button type="submit" className="col s2 waves-effect waves-light btn">add</button>
                    </form>
                </div>
            </div>
        );
    }
});
