import React from "react";
import useGroup from "../../hooks/useGroup";
import GroupCart from "../../Shared/GroupCart";
import Spinner from "../../Shared/Spinner";

const GroupEF = () => {
  const [group, loading] = useGroup();
  // console.log('EF',group);

  const groupEF = group.filter((ef) => ef.category === "GroupEF");
  // console.log(groupEF);
  return (
    <>
      {loading ? (
               <div style={{minHeight : '600px'}} >
               <Spinner />
             </div>
      ) : (
        <div class="grid sm:grid-cols-1 md:grid-cols-2 justify-items-center gap-4 py-8">
          {groupEF.map((ef) => (
            <GroupCart key={ef.id} groupData={ef} />
          ))}
        </div>
      )}
    </>
  );
};

export default GroupEF;
