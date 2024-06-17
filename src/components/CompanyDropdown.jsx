// src/components/CompanyDropdown.jsx
import React from 'react';

const CompanyDropdown = ({ companies, onSelectCompany }) => {
    return (
        <select onChange={(e) => onSelectCompany(e.target.value)}>
            <option value="">Select Company</option>
            {companies.map((company) => (
                <option key={company.id} value={company.id}>{company.name}</option>
            ))}
        </select>
    );
};

export default CompanyDropdown;
