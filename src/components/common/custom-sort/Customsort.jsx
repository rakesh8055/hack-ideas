import React from 'react';
import { sortByOptions } from '../../../data/data';
import './Customsort.styles.scss';

const Customsort = ({handleSortSelectionChange}) => {
    return (
        <select className='border-0 rounded sort p-1' data-testid='sort' name='sort' defaultValue={'default'} onChange={handleSortSelectionChange} defaultValue={'default'}>
            <option key={0} value='default'>Sort By</option>
            {sortByOptions.map((sortOption) =>
            <option key={sortOption.id} value={sortOption.name}>{sortOption.name}</option>)}
        </select>
    )
}
export default Customsort;