var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm.js');

/* es6 component */

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }

    render() {
        console.log(this.state.contacts);
        return (
            <div>
                <AddForm />
            </div>
        );
    }

    _onChange() {
        this.setState({
            contacts: AppStore.getContacts()
        });
    }
    
}

module.exports = App;