import React from 'react';
import useGroup from '../../hooks/useGroup';
import GroupCart from '../../Shared/GroupCart';

const GroupAB = () => {
    const [group] = useGroup()
    // console.log('AB',group);

    const groupAB = group.filter((ab)=>ab.category==="GroupAB")
    // console.log("AB",groupAB);

    return (
        <div class='grid sm:grid-cols-1 justify-items-center md:grid-cols-2 py-8 gap-4'>
            {
                groupAB.map ((ab)=>(<GroupCart key={ab.id}  groupData={ab} />))
            }
        </div>
    );
};

export default GroupAB;