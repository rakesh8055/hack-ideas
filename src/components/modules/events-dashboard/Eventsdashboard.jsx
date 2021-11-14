import React from 'react';
import './Eventsdashboard.styles.scss';
import EVENTS from '../../../data/data';
import Card from '../../common/card/Card';

const Eventsdashboard = () => {
    return(
    <div className='container-fluid events-dashboard overflow-scroll'>
        <div className='d-flex justify-content-center p-3'>
            <h4 data-testid='events-title'>Events/Challenges</h4>
        </div>
        <div className='container'>
            <div className='row'>
                {EVENTS.map((item) => <div key={item.id} className='col-md-4 col-sm-6 p-2 rounded'><Card {...item}/></div>)}
            </div>
        </div>
    </div>)
}
export default Eventsdashboard;