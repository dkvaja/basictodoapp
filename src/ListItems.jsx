import React from 'react';
import './index.css';


const ListItems = (props) =>
{
   
    return(
    <>
    <div className='list-style'>
    <button className='rbtn flex-all-center' onClick={() => {
        props.onSelect(props.id);
    }}>✖️</button>
    <li>{props.val}</li>
    </div>
    </>
    );

}

export default ListItems;