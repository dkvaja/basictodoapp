import React from 'react';
import './index.css';


const ListItems = ({ id, val, onSelect }) => {

    return (
        <>
            <div className='list-style'>
                <button className='rbtn flex-all-center' onClick={() => {
                    onSelect(id);
                }}>✖️</button>
                <li>{val}</li>
            </div>
        </>
    );

}

export default ListItems;