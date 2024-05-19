import React, { useState } from 'react';
import data from './data';
import "./styles.css";

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getitemid) {
        setSelected(getitemid === selected ? null : getitemid);
    }

    function handleMultiSelection(getitemid) {
        const updatedMultiple = multiple.includes(getitemid)
            ? multiple.filter(id => id !== getitemid)
            : [...multiple, getitemid];
        setMultiple(updatedMultiple);
    }

    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                {enableMultiSelection ? "Disable" : "Enable"} multi selection
            </button>
            <div className='accordion'>
                {data && data.length > 0 ? data.map(dataItem => (
                    <div key={dataItem.id} className='item'>
                        <div
                            onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}
                            className='title'
                        >
                            <h3>{dataItem.questions}</h3>
                            <span>{enableMultiSelection ? (multiple.includes(dataItem.id) ? '-' : '+') : (selected === dataItem.id ? '-' : '+')}</span>
                        </div>
                        {enableMultiSelection
                            ? (multiple.includes(dataItem.id) && <div className='content'>{dataItem.answer}</div>)
                            : (selected === dataItem.id && <div className='content'>{dataItem.answer}</div>)
                        }
                    </div>
                )) : <div>Data not found!!!</div>}
            </div>
        </div>
    );
}

export default Accordion;
