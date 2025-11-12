import { Route, Switch } from "wouter";
import { useState } from "react";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Token from "./pages/Token";
import Community from "./pages/Community";
import FAQ from "./pages/FAQ";
import Layout from "./components/Layout";
import PartnerForm from "./components/PartnerForm";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Users } from "lucide-react";
import "./index.css";

function App() {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(false);

  return (
    <TooltipProvider>
      <Layout showJoinModal={() => setShowJoinModal(true)}>
        <Switch>
          <Route path="/" component={() => <Home showJoinModal={() => setShowJoinModal(true)} />} />
          <Route path="/how-it-works" component={() => <HowItWorks showJoinModal={() => setShowJoinModal(true)} />} />
          <Route path="/token" component={() => <Token showJoinModal={() => setShowJoinModal(true)} />} />
          <Route path="/community" component={() => <Community showJoinModal={() => setShowJoinModal(true)} showPartnerForm={() => setShowPartnerForm(true)} />} />
          <Route path="/faq" component={() => <FAQ />} />
        </Switch>
      </Layout>

      {/* Partner Form */}
      {showPartnerForm && <PartnerForm onClose={() => setShowPartnerForm(false)} />}

      {/* Join Arena Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowJoinModal(false)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative bg-card border-2 border-neon-purple rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl shadow-neon-purple/50" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Join the Arena
            </h3>
            <p className="text-sm sm:text-base text-center text-muted-foreground mb-4 sm:mb-6">Choose your platform to enter the Colosseum</p>
            <div className="space-y-3">
              <a href="https://t.me/+a8QoNIahl5Q5MTEx" target="_blank" rel="noopener noreferrer" className="block">
                <Button size="lg" className="w-full bg-gradient-to-r from-neon-purple to-neon-cyan hover:shadow-neon-purple">
                  <Send className="w-5 h-5 mr-2" /> Telegram
                </Button>
              </a>
              <a href="https://discord.gg/GmG6xrnUm8" target="_blank" rel="noopener noreferrer" className="block">
                <Button size="lg" variant="outline" className="w-full border-neon-purple hover:bg-neon-purple/10">
                  <MessageCircle className="w-5 h-5 mr-2" /> Discord
                </Button>
              </a>
              <a href="https://x.com/SOLArenaLabs" target="_blank" rel="noopener noreferrer" className="block">
                <Button size="lg" variant="outline" className="w-full border-neon-cyan hover:bg-neon-cyan/10">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X (Twitter)
                </Button>
              </a>
              <a href="https://x.com/i/communities/1986456387635806219" target="_blank" rel="noopener noreferrer" className="block">
                <Button size="lg" variant="outline" className="w-full border-neon-purple hover:bg-neon-purple/10">
                  <Users className="w-5 h-5 mr-2" /> X Community
                </Button>
              </a>
            </div>
            <button
              onClick={() => setShowJoinModal(false)}
              className="mt-6 w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Toaster />
    </TooltipProvider>
  );
}

export default App;
