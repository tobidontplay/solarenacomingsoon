import Landing from "./pages/Landing";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./index.css";

function App() {
  return (
    <TooltipProvider>
      <Landing />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
