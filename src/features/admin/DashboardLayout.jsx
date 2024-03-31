import Loading from "../../ui/Loading.jsx";
import DashboardHeader from "../../ui/DashboardHeader.jsx";

function DashboardLayout() {
  // const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      {/*<Stats proposals={proposals} />*/}
    </div>
  );
}

export default DashboardLayout;
