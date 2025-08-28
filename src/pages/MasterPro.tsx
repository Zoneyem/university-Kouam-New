import { Outlet } from "react-router-dom";

const MasterPro = () => {
  return (
    <div>
      MasterPro
      <Outlet /> {/* C'est ici que les pages enfants apparaissent */}
    </div>
  );
}

export default MasterPro