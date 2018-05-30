import React, { Component } from 'react';

class Test extends Component {
    state = {
        value: null,
    }

    componentDidMount() {
        // this.setState({
        //     value: this.props.history.location.state
        // })
        fetch(`http://localhost:8080/api/posts?q=${this.props.history.location.state}`)
            .then(response => response.json())
            // .then(myJson => console.log("API RESULT", myJson[0]))
            .then(myJson => this.setState({value: myJson[0]}))
            .catch(err => console.log(err));
    }

    render() {
        console.log('Results State = ', this.state.results)
        let results;
        if (this.state.value !== null) {
            results = <div>
                        <p>{this.state.value.dealership}</p>
                      </div>
        } else {
            results = <h3>Loading</h3>
        }

        return (
            <div>
                <h1>Test</h1>
                { results }
            </div>
        )
    }
}

export default Test;
