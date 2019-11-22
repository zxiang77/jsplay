import React from 'react'
export default class ConfigInput extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<div className='child'>
            <label name={this.props.name} style={{width: '30%'}} for={this.props.name}>
                {this.props.name}
            </label>
            <input id={'field-' + this.props.name} style={{width: '90%'}} name={this.props.name} className='round-box' type='text' />
        </div>)
    }
}
