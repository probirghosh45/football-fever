import { useEffect, useState } from "react";

const useGroup = () => {
  const [group, setGroup] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("https://raw.githubusercontent.com/probirghosh45/football-fever/main/public/teamData.json")
      .then((response) => response.json())
      .then((data) => {
        setGroup(data);
        setLoading(false)
      });
  }, []);

  return [group,loading];
};

export default useGroup;
