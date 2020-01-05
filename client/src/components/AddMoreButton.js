import React from 'react'

/**
 * Update the state of the parent and 
 */
export default class AddMoreButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='flex'>
            <button>Add More</button>
            <button >Finish</button>
        </div>
    }
}
