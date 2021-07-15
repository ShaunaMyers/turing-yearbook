import React from 'react';
import { staff } from '../../data/yearbook-data';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = (props) => {

    const allStaff = props.staff.map(card => {
        return <Person id={staff.id} name={staff.name} quote={staff.quote} superlative={staff.superlative} photo={staff.photo} />
    })
    return (
        <section>
            <h2>Staff</h2>
            {allStaff}
        </section>
    )
}

export default Cohort;
