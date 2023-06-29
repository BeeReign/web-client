import dynamic from "next/dynamic";

const DashboardCard = dynamic(() => import("./components/card"));

export default function Home() {
  return (
    <>
      <DashboardCard />
    </>
  );
}
