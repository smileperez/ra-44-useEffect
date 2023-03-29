import React from 'react';

function Details( {info} ) {

    if (!info.id) {
        return (
            <>
            </>
        );
    }

    return (
        <div key={info.id} className='details'>
            <img className='details-img' src={info.avatar} alt={"картинка"} />
            <div className='list-details'><h2 className='details-name'>{info.name}</h2></div>
            <div className='list-details'><p className='details-text'>City: {info?.details?.city}</p></div>
            <div className='list-details'><p className='details-text'>Company: {info?.details?.company}</p></div>
            <div className='list-details'><p className='details-text'>Position: {info?.details?.position}</p></div>
        </div>
    )
}

export default Details;