import PageHeader from "@/components/page/pageHeader";
import DefaultLayout from "@/layouts/default";

const DashboardPage = () => {
  return (
    <DefaultLayout>
      <PageHeader>
        <div>
          <PageHeader.Title>Dashboard</PageHeader.Title>
          <PageHeader.Description>
            Coming soon, probably... 🚧
          </PageHeader.Description>
        </div>
      </PageHeader>
    </DefaultLayout>
  );
};
export default DashboardPage;
