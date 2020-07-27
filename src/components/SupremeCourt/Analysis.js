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
                                calendar year and confirmed death for 6 of them. In all the
                                confirmation decisions, brutality of the offence and collective
                                conscience played a major role in determining the outcome. The
                                Supreme Court precedent in Machhi Singh v. State of Punjab 23,
                                laying down 5 factors where death sentence is appropriate, was
                                frequently relied upon to dismiss mitigating factors presented by
                                the defense.
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
                                of 13 years spent on death row by 5 persons. These cases are
                                Basavaraj @ Basya and Ors v. State of Karnataka (acquitting three
                                out of four persons), Ambadas Laxman Shinde and Ors. v. State of
                                Maharashtra (acquitting five persons) and Digamber Vaishnav and Anr.
                                v. State of Chhattisgarh (acquitting two persons). While acquitting
                                the accused in all of the three cases, the Supreme Court raised
                                questions on the evidence, particularly around identification of the
                                accused. In Shinde, the Court also directed the initiation of
                                departmental action against investigating officers, highlighting the
                                lackadaisical nature of investigation and mala-fide prosecution.
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
                                cases in 2019. In 8 cases, the Court held that the cases did not
                                fall within the category of ‘rarest of the rare’, and commuted the
                                sentence to life imprisonment with the possibility of remission. The
                                most common reasons invoked by the Court were young age, lack of
                                criminal antecedents and good conduct of the accused in prison. In
                                Raju @ Jagdish Paswan, inordinate delay on the part of the Governor
                                to decide mercy (over four years) was the reason for commutation.
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
                            <p>
                                In Anokhilal, involving rape and murder of a minor, the Court
                                observed that the trial had been completed in only 13 days, and that
                                the amicus had been appointed on the same day as framing of the
                                charges. r. The 13-day duration was itself indicative of the fact
                                that the legal aid provided to the accused was not real and
                                meaningful. This was indicative of the lack of fairness of the
                                trial. In this case, reading into the right to legal aid under
                                Article 39-A of the Indian Constitution, the Court also laid down
                                guidelines as to legal representation in capital cases, requiring a
                                lawyer with at least 10 years experience in doing trials to
                                represent persons accused of capital offences.
                            </p>
                            <p>
                                In Pappu, the Court remitted the matter for trial since the High
                                Court, which was the court of first appeal, did not appreciate the
                                evidence, and proceeded directly to the question of sentence and
                                confirmed the findings of the trial court.{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Definations;
