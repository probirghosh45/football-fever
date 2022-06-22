import React from 'react';
import useGroup from '../../hooks/useGroup';


const GroupCD = () => {

    const [group] = useGroup()
    console.log("CD",group)

    return (
        <div>
            <h1>Group CD</h1>
        </div>
    );
};

export default GroupCD;