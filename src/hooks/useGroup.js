import { useEffect, useState } from "react";

const useGroup = () => {
  const [group, setGroup] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/probirghosh45/football-fever/main/public/teamData.json?token=GHSAT0AAAAAABTPCZFS5IS2Y7JYXPRLVHUOYVS7LEA")
      .then((response) => response.json())
      .then((data) => setGroup(data));
  }, []);

  return [group];
};

export default useGroup;
