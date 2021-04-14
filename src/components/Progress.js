import React, { Component } from 'react';

import '../css/Progress.css';

const steps = [
    {
        key: 1,
        id: 'step1',
        text: 'Step 1'
    },
    {
        key: 2,
        id: 'step2',
        text: 'Step 2'
    },
    {
        key: 3,
        id: 'step3',
        text: 'Step 3'
    },
];

class Progress extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul id="progressbar">
                { this.showSteps(steps) }
            </ul>
        );
    }

    showSteps = (steps) => {
        var result = null;

        result = steps.map((step, index) => {
            let active = "";
            if (step.key <= this.props.stage) {
                active = "active";
            }
            return <li class={active} id={step.id}><strong>{step.text}</strong></li>;
        });
 
        return result;
    }
}

export default Progress