import React from 'react'
export default class ConfigInput extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // probably not the best place to setup

        // the type here is the entry point for polymorphism

    }

    render() {
        let field;
        if (this.props.type === 'dropdown') {
            const cb = (e) => {
                if (e.target.value === 'Please Select') {
                    return;
                }
                return this.props.onComplete('apiVersion')(e);
            };

            field = <select onChange={cb}>
                {this.props.data.map((version, idx) => {
                    return (<option value={version} key={version}>
                        {version}
                    </option>)
                })}
            </select>
        } else {
            field = <input
                id={'field-' + this.props.name}
                style={{width: '90%'}}
                name={this.props.name}
                className='round-box'
                type={this.props.type} />
        }

        return (<div className='child'>
            <label name={this.props.name} style={{width: '30%'}} for={this.props.name}>
                {this.props.name}
            </label>
            { field }
        </div>)
    }
}
// notes: the tags in Reacts are called JSX
// try out the Redux