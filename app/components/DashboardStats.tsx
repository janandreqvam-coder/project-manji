import StatCard from "./ui/StatCard";

export default function DashboardStats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Server"
          value="ONLINE"
          subtitle="148 Drivers"
          icon="🟢"
        />

        <StatCard
          title="Garage"
          value="286"
          subtitle="Community Builds"
          icon="🚗"
        />

        <StatCard
          title="Events"
          value="12"
          subtitle="This Month"
          icon="🏁"
        />

        <StatCard
          title="Members"
          value="542"
          subtitle="Growing Community"
          icon="👥"
        />

      </div>

    </section>
  );
}