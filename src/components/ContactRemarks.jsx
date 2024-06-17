// src/components/ContactRemarks.jsx
import React, { useState } from 'react';
import CompanyDropdown from './CompanyDropdown';
import RemarkForm from './RemarkForm';
import Filters from './Filters';
import '../styles.css'; // Make sure you import your CSS

const ContactRemarks = () => {
    const [companies] = useState([
        { id: 1, name: 'Company A' },
        { id: 2, name: 'Company B' },
        { id: 3, name: 'Company C' },
    ]);

    const [remarks, setRemarks] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState('');
    const [filter, setFilter] = useState('all');
    const [remarkToEdit, setRemarkToEdit] = useState(null);

    const handleAddRemark = (newRemark) => {
        setRemarks([...remarks, newRemark]);
    };

    const handleUpdateRemark = (updatedRemark) => {
        setRemarks(remarks.map((r) => (r.id === updatedRemark.id ? updatedRemark : r)));
        setRemarkToEdit(null);
    };

    const handleDeleteRemark = (remarkId) => {
        setRemarks(remarks.filter((r) => r.id !== remarkId));
    };

    const filteredCompanies = companies.filter((company) => {
        if (filter === 'withRemarks') {
            return remarks.some((remark) => remark.companyId === company.id);
        }
        if (filter === 'withoutRemarks') {
            return !remarks.some((remark) => remark.companyId === company.id);
        }
        return true;
    });

    const selectedCompanyDetails = companies.find((c) => c.id === parseInt(selectedCompany));

    return (
        <div className="container">
            <Filters filter={filter} onChangeFilter={setFilter} />
            <CompanyDropdown companies={filteredCompanies} onSelectCompany={setSelectedCompany} />
            {selectedCompanyDetails ? (
                <>
                    <h3>Remarks for {selectedCompanyDetails.name}</h3>
                    <ul>
                        {remarks
                            .filter((remark) => remark.companyId === selectedCompanyDetails.id)
                            .map((remark) => (
                                <li key={remark.id}>
                                    {remark.date}: {remark.remark} ({remark.status})
                                    <button onClick={() => setRemarkToEdit(remark)}>Edit</button>
                                    <button onClick={() => handleDeleteRemark(remark.id)}>Delete</button>
                                </li>
                            ))}
                    </ul>
                    <RemarkForm
                        selectedCompany={selectedCompanyDetails.id}
                        onAddRemark={handleAddRemark}
                        onUpdateRemark={handleUpdateRemark}
                        remarkToEdit={remarkToEdit}
                    />
                </>
            ) : (
                <p>Please select a company to view and add remarks.</p>
            )}
        </div>
    );
};

export default ContactRemarks;
