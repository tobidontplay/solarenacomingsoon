import { Button } from "@/components/ui/button";
import { Check, ExternalLink, Twitter, MessageCircle, Send } from "lucide-react";
import { Link } from "wouter";

export default function Landing() {
  const developmentChecklist = [
    { task: "Smart Contract (Anchor/Rust)", status: "complete", category: "Core" },
    { task: "Treasury System (0.1% + 1.5% fees)", status: "complete", category: "Core" },
    { task: "Dual Resolution (Arbiter + Oracle)", status: "complete", category: "Core" },
    { task: "Pyth Oracle Integration", status: "complete", category: "Core" },
    { task: "Frontend UI (React + Tailwind)", status: "complete", category: "Frontend" },
    { task: "Clerk Authentication", status: "complete", category: "Frontend" },
    { task: "Supabase Integration", status: "complete", category: "Backend" },
    { task: "Oracle Worker (Auto-resolution)", status: "complete", category: "Backend" },
    { task: "Deploy Smart Contract", status: "in-progress", category: "Deployment" },
    { task: "Real Wallet Integration", status: "in-progress", category: "Frontend" },
    { task: "Database Schema Setup", status: "pending", category: "Backend" },
    { task: "Testing Suite", status: "pending", category: "Quality" },
    { task: "Mainnet Launch", status: "pending", category: "Deployment" },
  ];

  const completed = developmentChecklist.filter(item => item.status === "complete").length;
  const total = developmentChecklist.length;
  const progress = Math.round((completed / total) * 100);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-neon-cyan/5" />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-16">
          {/* Logo */}
          <div className="flex justify-center mb-12 animate-fade-in">
            <img 
              src="/fulllogo.png" 
              alt="SolArena Logo" 
              className="w-64 h-64 object-contain drop-shadow-neon-purple hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* About */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
            <h1 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple bg-clip-text text-transparent animate-gradient">
              SOLARENA
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              The first fully on-chain, trustless betting protocol on Solana. Turn every prediction into a verifiable wager.
            </p>
            <p className="text-lg text-muted-foreground/80">
              No bookies. No middlemen. Just code, consensus, and the thrill of being right.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-6">
              <a
                href="https://discord.gg/GmG6xrnUm8"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-neon-purple/50 hover:border-neon-purple hover:bg-neon-purple/10 transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:text-neon-purple transition-colors" />
                  Discord
                  <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
                </Button>
              </a>
              <a
                href="https://x.com/SOLArenaLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-neon-cyan/50 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all"
                >
                  <Twitter className="w-5 h-5 mr-2 group-hover:text-neon-cyan transition-colors" />
                  Twitter
                  <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
                </Button>
              </a>
              <a
                href="https://t.me/+a8QoNIahl5Q5MTEx"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-neon-purple/50 hover:border-neon-purple hover:bg-neon-purple/10 transition-all"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:text-neon-purple transition-colors" />
                  Telegram
                  <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
                </Button>
              </a>
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative rounded-2xl overflow-hidden border-2 border-neon-purple/30 shadow-2xl shadow-neon-purple/20 hover:border-neon-cyan/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10 pointer-events-none" />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src="/demo-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center mt-4 text-sm text-muted-foreground">
              Phase 1: The Arena — Where speculation becomes sport
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center mb-20">
            <Link href="/dashboard">
              <Button 
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-neon-purple to-neon-cyan hover:shadow-neon-purple transition-all duration-300 hover:scale-105"
              >
                Enter The Arena
              </Button>
            </Link>
          </div>

          {/* Development Progress */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/40 backdrop-blur-xl border border-card-border rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-display font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                  Development Progress
                </h2>
                <div className="text-right">
                  <div className="text-4xl font-bold text-neon-cyan">{progress}%</div>
                  <div className="text-sm text-muted-foreground">{completed} of {total} complete</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="h-3 bg-card-border rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan transition-all duration-1000 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Checklist by Category */}
              <div className="space-y-6">
                {["Core", "Frontend", "Backend", "Quality", "Deployment"].map(category => {
                  const items = developmentChecklist.filter(item => item.category === category);
                  if (items.length === 0) return null;

                  return (
                    <div key={category}>
                      <h3 className="text-lg font-semibold text-neon-purple mb-3">{category}</h3>
                      <div className="space-y-2">
                        {items.map((item, index) => (
                          <div 
                            key={index}
                            className="flex items-center gap-3 p-3 rounded-lg bg-card/20 border border-card-border/50 hover:border-neon-purple/30 transition-all"
                          >
                            <div className={`
                              w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0
                              ${item.status === 'complete' ? 'bg-neon-green/20 border-2 border-neon-green' : 
                                item.status === 'in-progress' ? 'bg-neon-cyan/20 border-2 border-neon-cyan' : 
                                'bg-card-border/20 border-2 border-card-border'}
                            `}>
                              {item.status === 'complete' && (
                                <Check className="w-4 h-4 text-neon-green" />
                              )}
                              {item.status === 'in-progress' && (
                                <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
                              )}
                            </div>
                            <span className={`
                              ${item.status === 'complete' ? 'text-foreground' : 
                                item.status === 'in-progress' ? 'text-neon-cyan' : 
                                'text-muted-foreground'}
                            `}>
                              {item.task}
                            </span>
                            <span className={`
                              ml-auto text-xs px-2 py-1 rounded-full
                              ${item.status === 'complete' ? 'bg-neon-green/10 text-neon-green' : 
                                item.status === 'in-progress' ? 'bg-neon-cyan/10 text-neon-cyan' : 
                                'bg-card-border/10 text-muted-foreground'}
                            `}>
                              {item.status === 'complete' ? 'Done' : 
                               item.status === 'in-progress' ? 'In Progress' : 
                               'Pending'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Next Milestone */}
              <div className="mt-8 p-4 bg-neon-purple/5 border border-neon-purple/30 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-neon-purple">Next Milestone:</span> Deploy smart contract to devnet and integrate real Solana wallets
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 text-center text-muted-foreground border-t border-card-border">
          <p className="text-sm">Built with ⚡ on Solana</p>
          <p className="text-xs mt-2 italic">"Where speculation becomes sport."</p>
        </footer>
      </div>
    </div>
  );
}
