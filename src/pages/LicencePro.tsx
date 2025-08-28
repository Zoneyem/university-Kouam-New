import { Outlet } from "react-router-dom";

const LicencePro = () => {
  return (
    <div>
      <Outlet /> {/* C'est ici que les pages enfants apparaissent */}
      LicencePro
    </div>
  );
}

export default LicencePro