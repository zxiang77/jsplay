import React from 'react';
import * as Constants from '../constants/steps'  
import ConfigInput from './ConfigInput';


export default class MainConfig extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            config: {},
            step: Constants.START,
        } // the global state in charge of everything
        this.handleConfigUpdate = this.handleConfigUpdate.bind(this);
    }

    handleConfigUpdate(field) {
        this.setState((state, prop) => ({
            [field]: state[field] + prop[field]
        }));
    }

    render() {
        // todo:z create a form here
        return (
        <form className='flex'>
            <ConfigInput name='apiVersion' />
            <ConfigInput name='apiVersion2' />
            <ConfigInput name='apiVersion3' />
        </form>)
    }
}
