import React from 'react';
import * as Constants from '../constants/configState'
import ConfigInput from '../components/ConfigInput';


export default class MainConfig extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            config: {},
            step: Constants.START,
        }; // the global state in charge of everything
        this.handleConfigUpdate = this.handleConfigUpdate.bind(this);
        this.handleConfigUpdateReplace = this.handleConfigUpdateReplace.bind(this);
        // notes: js treats function as an object as well, so the function object has to bind itself, so it could treat
        // itself as a callable
    }

    handleConfigUpdate(field) {
        return (e) => {
            this.setState((state, prop) => ({
                [field]: state[field] + prop[field]
            })); // for atomic state update
        }

    }

    handleConfigUpdateReplace(field) {
        return (e) => {
            const value = e.target.value; // why event can only be unpacked here?

            this.setState((state, props) => {
                return {
                    [field]: value
                };
            });
        }
    }

    render() {
        return (
        <form className='flex'>
            <ConfigInput name='apiVersion' type='dropdown' data={['Please Select', 1.1, 1.2]} onComplete={this.handleConfigUpdateReplace}/>

        </form>)
    }
}

const mapStateToProps = (state) => (

)

// roadmap: create a sample, input field, and use polymorphism to determine type of the input
// each completed field should update state,
// different state will render different behaviors

// api version -> adding component
// query ability, for field like network, need to specify what component should be whitelisted
// can start from all the abstract/ util components. then it would be more versatile to implement config generation

// care about flex box later
