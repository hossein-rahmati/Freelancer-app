import Body from "../ui/Body.jsx";
import Navbar from "../ui/Navbar.jsx";

function Home() {
  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl py-10 px-6">
        <Navbar />
        <Body />
      </div>
    </div>
  );
}

export default Home;
