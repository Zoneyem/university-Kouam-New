import { Outlet } from "react-router-dom";

const MasterDegree = () => {
  return (
    <div>
      MasterDegree
      <Outlet /> {/* C'est ici que les pages enfants apparaissent */}
    </div>
  );
}

export default MasterDegree