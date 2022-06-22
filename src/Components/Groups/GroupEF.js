import React from 'react';
import useGroup from '../../hooks/useGroup';

const GroupEF = () => {
    const [group] = useGroup();
    console.log('EF',group);
    return (
        <div>
            <h1>Group EF</h1>
        </div>
    );
};

export default GroupEF;