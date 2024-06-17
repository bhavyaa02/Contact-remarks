
import React from 'react';
import '../styles.css'; // Make sure you import your CSS

const Filters = ({ filter, onChangeFilter }) => {
    return (
        <div className="filters">
            <label className={`filter-label ${filter === 'all' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    value="all"
                    checked={filter === 'all'}
                    onChange={(e) => onChangeFilter(e.target.value)}
                />
                All Companies
            </label>
            <label className={`filter-label ${filter === 'withRemarks' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    value="withRemarks"
                    checked={filter === 'withRemarks'}
                    onChange={(e) => onChangeFilter(e.target.value)}
                />
                Companies with Remarks
            </label>
            <label className={`filter-label ${filter === 'withoutRemarks' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    value="withoutRemarks"
                    checked={filter === 'withoutRemarks'}
                    onChange={(e) => onChangeFilter(e.target.value)}
                />
                Companies with No Remarks
            </label>
        </div>
    );
};

export default Filters;
