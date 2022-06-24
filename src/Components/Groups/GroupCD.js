import React from "react";
import useGroup from "../../hooks/useGroup";
import GroupCart from "../../Shared/GroupCart";
import Spinner from "../../Shared/Spinner";

const GroupCD = () => {
  const [group, loading] = useGroup();
  // console.log("CD",group)

  const groupCD = group.filter((cd) => cd.category === "GroupCD");
  // console.log("CD",groupCD);
  return (
    <>
      {loading ? (
        <div style={{ minHeight: "600px" }}>
          <Spinner />
        </div>
      ) : (
        <div class="grid sm:grid-cols-1 md:grid-cols-2 justify-items-center gap-4 py-8">
          {groupCD.map((cd) => (
            <GroupCart key={cd.id} groupData={cd} />
          ))}
        </div>
      )}
    </>
  );
};

export default GroupCD;
