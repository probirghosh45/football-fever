import React from 'react';
import useGroup from '../../hooks/useGroup';
import GroupCart from '../../Shared/GroupCart';

const GroupCD = () => {
    const [group] = useGroup()
    // console.log(group);

    const groupCD = group.filter((ab)=>ab.category==="GroupAB")
    // console.log("AB",groupAB);

    return (
        <div class='grid sm:grid-cols-1 justify-items-center md:grid-cols-2 py-8 gap-4'>
            {
                groupCD.map ((cd)=>(<GroupCart key={cd.id}  groupData={cd} />))
            }
        </div>
    );
};

export default GroupCD;