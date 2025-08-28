import { Outlet } from "react-router-dom";

const BtsPage = () => {
  return (
    <div>
      <Outlet /> {/* C'est ici que les pages enfants apparaissent */}
    </div>
  );
};

export default BtsPage;
