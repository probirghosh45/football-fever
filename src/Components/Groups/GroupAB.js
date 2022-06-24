import React from "react";
import useGroup from "../../hooks/useGroup";
import GroupCart from "../../Shared/GroupCart";
import Spinner from "../../Shared/Spinner";

const GroupAB = () => {
  const [group, loading] = useGroup();
  const groupAB = group.filter((ab) => ab.category === "GroupAB");
  return (
    <>
      {loading ? (
       <div style={{minHeight : '600px'}} >
         <Spinner />
       </div>
      ) : (
        <div class="grid sm:grid-cols-1 justify-items-center md:grid-cols-2 py-8 gap-4">
          {groupAB.map((ab) => (
            <GroupCart key={ab.id} groupData={ab} />
          ))}
        </div>
      )}
    </>
  );
};

export default GroupAB;
