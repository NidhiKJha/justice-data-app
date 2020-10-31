import React, { Component } from 'react';
import './analysis.css';

class Definations extends Component {
    state = {};
    render() {
        return (
            <div>
                <div className="tab-header" style={{ textAlign: 'center' }}>
                    Analysis of Supreme Court Decision
                </div>
                <div className="container">
                    <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <span className="pad-body" style={{ fontSize: '18px' }}>
                                CONFIRMATIONS
                            </span>

                            <p>
                                The Supreme Court decided death sentence appeals from 6 persons this
                                calendar year and confirmed death for 6 of them.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <span className="pad-body" style={{ fontSize: '18px' }}>
                                ACQUITTALS
                            </span>

                            <p>
                                This year the Supreme Court acquitted 10 persons across 3 cases in
                                who had been on death row for at least 5 years with the maximum time
                                of 13 years spent on death row by 5 persons. 
                            </p>
                        </div>
                    </div>

                    <div className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <span className="pad-body" style={{ fontSize: '18px' }}>
                                COMMUTATIONS
                            </span>

                            <p>
                                The Supreme Court commuted the death sentences of 17 persons in 17
                                cases in 2019.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <div className="timeline-content">
                            <span className="pad-body" style={{ fontSize: '18px' }}>
                                REMISSIONS
                            </span>
                            <p>
                                In two cases, the Court remitted the case back to the trial court
                                for fresh trial.{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Definations;
