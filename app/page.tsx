import DashboardStats from "./components/DashboardStats";
import Dashboard from "./components/Dashboard";
import CursorGlow from "./components/CursorGlow";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <CursorGlow />

      <Hero />

      <DashboardStats />

      <Dashboard />

      <About />

    </main>
  );
}