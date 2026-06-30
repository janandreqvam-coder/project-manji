import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Modes from "./components/Modes";
import FeaturedCars from "./components/FeaturedCars";
import Garage from "./components/Garage";
import Drivers from "./components/Drivers";
import ServerStatus from "./components/ServerStatus";
import Events from "./components/Events";
import Leaderboard from "./components/Leaderboard";
import DiscordCTA from "./components/DiscordCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      <CursorGlow />

      <Navbar />

      <Hero />

      <About />

      <Modes />

      <FeaturedCars />

      <Garage />

      <Drivers />

      <ServerStatus />

      <Events />

      <Leaderboard />

      <DiscordCTA />

    </main>
  );
}