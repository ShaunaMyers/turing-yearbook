import React from 'react';
import { staff } from '../../data/yearbook-data';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = (props) => {

    const allStaff = props.staff.map(staff => {
        return <Person key={staff.id} id={staff.id} name={staff.name} quote={staff.quote} superlative={staff.superlative} photo={staff.photo} />
    })
    return (
        <section>
            <h2>Staff</h2>
            <div className="staffContainer">
            {allStaff}
            </div>
        </section>
    )
}

export default Cohort;
