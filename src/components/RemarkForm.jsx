// src/components/RemarkForm.jsx
import React, { useState, useEffect } from 'react';

const RemarkForm = ({ selectedCompany, onAddRemark, onUpdateRemark, remarkToEdit }) => {
    const [remark, setRemark] = useState('');
    const [status, setStatus] = useState('Still Communication');

    useEffect(() => {
        if (remarkToEdit) {
            setRemark(remarkToEdit.remark);
            setStatus(remarkToEdit.status);
        }
    }, [remarkToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (remarkToEdit) {
            onUpdateRemark({ ...remarkToEdit, remark, status });
        } else {
            onAddRemark({ id: Date.now(), companyId: selectedCompany, remark, status, date: new Date().toLocaleDateString() });
        }
        setRemark('');
        setStatus('Still Communication');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                placeholder="Remark"
                required
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Still Communication">Still Communication</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Paused">Paused</option>
                <option value="Closed">Closed</option>
            </select>
            <button type="submit">{remarkToEdit ? 'Update' : 'Add'} Remark</button>
        </form>
    );
};

export default RemarkForm;
