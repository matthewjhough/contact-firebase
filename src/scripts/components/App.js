var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        // todo
    }

    componentWillUnmount() {
        // todo
    }

    render() {
        return (
            <div>
                My App. 
            </div>
        );
    }

    _onChange() {
        this.setState({
            // set data of app component
        });
    }
    
}

module.exports = App;