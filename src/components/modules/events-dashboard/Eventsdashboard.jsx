import React, { useState } from 'react';
import './Eventsdashboard.styles.scss';
import EVENTS from '../../../data/data';
import Card from '../../common/card/Card';
import Customsort from '../../common/custom-sort/Customsort';
import { sortByOptions } from '../../../data/data';

const Eventsdashboard = () => {
    const [events, setEvents] = useState(EVENTS);
    const [didSortChange, setSortChange] = useState(false);

    const sortEventsBy = (sortBy, sortType) => {
        return EVENTS.sort((a, b) => {
            const isAscendingOrDescending = (sortType === 'asc') ? 1 : -1;
            return (isAscendingOrDescending * (sortBy === 'creationDate' ? new Date(a[sortBy]) : a[sortBy])) - (isAscendingOrDescending * (sortBy === 'creationDate' ? new Date(b[sortBy]) : b[sortBy]));
        });
    }

    const handleSortSelectionChange = (e) => {
        const { value } = e.target;
        setSortChange(prev => !prev);
        const sortObj = sortByOptions.filter((item) => item.name === value);
        setEvents(sortEventsBy(sortObj[0].sortBy, sortObj[0].sortType))
    }

    return(
    <div className='container-fluid events-dashboard overflow-scroll' id='events-dashboard'>
        <div className='d-flex justify-content-between p-3 ps-5 pe-5'>
            <h4 data-testid='events-title'>Events/Challenges</h4>
            <Customsort handleSortSelectionChange={handleSortSelectionChange}/>
        </div>
        <div className='container'>
            <div className='row'>
                {events.map((item) => <div key={item.id} className='col-md-4 col-sm-6 p-2 rounded'><Card {...item}/></div>)}
            </div>
        </div>
    </div>)
}
export default Eventsdashboard;