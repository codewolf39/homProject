import { Button } from "@/components/ui/button";
import Hero from "./component/Hero";
import Services from "./component/Services";
import Users from "./component/Users";
import Pricing from "./component/Pricing";
import Contacts from "./component/Contacts";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Hero />
      <Services />
      <Users />
      <Pricing />
      <Contacts />
    </div>
  );
}

export default App;
