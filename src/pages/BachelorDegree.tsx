import { Outlet } from "react-router-dom"

const BachelorDegree = () => {
  return (
    <div>
      BachelorDegree
      <Outlet /> {/* C'est ici que les pages enfants apparaissent */}
    </div>
  );
}

export default BachelorDegree