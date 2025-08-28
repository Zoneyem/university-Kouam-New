import { Outlet } from "react-router-dom";

const IndustrielPage = () => {
  return (
    <div>
      IndustrielPage
      <Outlet /> {/* C'est ici que les pages enfants apparaissent */}
    </div>
  );
}

export default IndustrielPage