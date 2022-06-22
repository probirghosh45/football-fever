import React from 'react';
import useGroup from '../../hooks/useGroup';
import GroupCart from '../../Shared/GroupCart';

const GroupGH = () => {
    const [group] = useGroup();

    const groupGH = group.filter((gh)=>gh.category === "GroupGH")
    console.log(groupGH);
    return (
        <div class="grid sm:grid-cols-1 md:grid-cols-2 justify-items-center py-8 gap-4  ">
            {groupGH.map ((gh)=><GroupCart key={gh.id} groupData={gh} />)}
        </div>
    );
};

export default GroupGH;