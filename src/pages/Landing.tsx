import { Button } from "@/components/ui/button";
import { Check, ExternalLink, MessageCircle, Send, Shield, Zap, Users, Target, Coins, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import PartnerForm from "@/components/PartnerForm";

export default function Landing() {
  const [activePool, setActivePool] = useState<'yes' | 'no' | null>(null);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showPartnerForm, setShowPartnerForm] = useState(false);

  const developmentChecklist = [
    { task: "Smart Contract (Anchor/Rust)", status: "complete" },
    { task: "Treasury System", status: "complete" },
    { task: "Dual Resolution (Arbiter + Oracle)", status: "complete" },
    { task: "Pyth Oracle Integration", status: "complete" },
    { task: "Frontend UI (React + Tailwind)", status: "complete" },
    { task: "Clerk Authentication", status: "complete" },
    { task: "Supabase Integration", status: "complete" },
    { task: "Oracle Worker (Auto-resolution)", status: "complete" },
    { task: "Deploy Smart Contract", status: "in-progress" },
    { task: "Real Wallet Integration", status: "in-progress" },
    { task: "Database Schema Setup", status: "pending" },
    { task: "Testing Suite", status: "pending" },
    { task: "Mainnet Launch", status: "pending" },
  ];

  const completed = developmentChecklist.filter(item => item.status === "complete").length;
  const total = developmentChecklist.length;
  const progress = Math.round((completed / total) * 100);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-grid-pattern opacity-20" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-neon-cyan/5" />

      <div className="relative z-10">
        {/* Hero */}
        <section className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-8">
          <div className="flex justify-center mb-8">
            <img src="/fulllogo.png" alt="SolArena" className="w-48 h-48 sm:w-64 sm:h-64 object-contain opacity-90 hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple bg-clip-text text-transparent">
              SOLARENA
            </h1>
            <p className="text-lg text-muted-foreground/90">
              ⚔️ <strong>Where Speculation Becomes Sport</strong>
            </p>
            <p className="text-lg text-muted-foreground/90">
              Create and join peer-to-peer wagers on anything. Token prices. Meme wars. Crypto drama. All settled transparently on-chain.
            </p>
            <p className="text-sm text-neon-cyan mt-2">
              💎 Get in with as little as 0.1 SOL
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-cyan" onClick={() => setShowJoinModal(true)}>
                <Zap className="w-5 h-5 mr-2" /> Join the Arena
              </Button>
            </div>
          </div>
        </section>

        {/* Phase 1 Video */}
        <section className="container mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Phase 1: The Arena</h2>
          <p className="text-center text-muted-foreground mb-8">Where speculation becomes sport</p>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border-2 border-neon-purple/30 shadow-2xl">
              <video autoPlay loop muted playsInline preload="auto" className="w-full h-auto">
                <source src="/demo-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 sm:px-6 py-16 bg-card/20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-neon-purple/20 border-2 border-neon-purple flex items-center justify-center">
                <Target className="w-8 h-8 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold">1. Create</h3>
              <p className="text-sm text-muted-foreground mb-2">Set a bet on any event with custom terms.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-neon-cyan/20 border-2 border-neon-cyan flex items-center justify-center">
                <Coins className="w-8 h-8 text-neon-cyan" />
              </div>
              <h3 className="text-xl font-bold">2. Bet</h3>
              <p className="text-sm text-muted-foreground mb-2">Stake SOL on YES or NO. Pools form on-chain.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-neon-green/20 border-2 border-neon-green flex items-center justify-center">
                <Check className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-bold">3. Resolve</h3>
              <p className="text-sm text-muted-foreground mb-2">Oracles or arbiters settle outcomes. Winners claim payouts.</p>
            </div>
          </div>
        </section>

        {/* Interactive Pool System */}
        <section className="container mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Peer-to-Peer Pool System</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => setActivePool(activePool === 'yes' ? null : 'yes')}
                className={`bg-neon-cyan/10 border-2 border-neon-cyan rounded-xl p-8 text-center transition-all cursor-pointer hover:scale-105 ${activePool === 'yes' ? 'ring-4 ring-neon-cyan/50' : ''}`}
              >
                <div className="text-4xl font-bold text-neon-cyan mb-2">YES</div>
                <div className="text-sm text-muted-foreground">Pool</div>
              </button>
              <button
                onClick={() => setActivePool(activePool === 'no' ? null : 'no')}
                className={`bg-neon-purple/10 border-2 border-neon-purple rounded-xl p-8 text-center transition-all cursor-pointer hover:scale-105 ${activePool === 'no' ? 'ring-4 ring-neon-purple/50' : ''}`}
              >
                <div className="text-4xl font-bold text-neon-purple mb-2">NO</div>
                <div className="text-sm text-muted-foreground">Pool</div>
              </button>
            </div>
            
            {activePool && (
              <div className="bg-card/60 backdrop-blur-xl border border-card-border rounded-xl p-6 mb-6 animate-fade-in">
                {activePool === 'yes' ? (
                  <div>
                    <h4 className="text-lg font-bold text-neon-cyan mb-3">YES Pool Explained</h4>
                    <p className="text-sm text-muted-foreground mb-2">When you bet on YES, your SOL joins the YES pool. If the outcome is YES:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• You get your original stake back</li>
                      <li>• You receive a proportional share of the NO pool based on your contribution</li>
                      <li>• Example: If you staked 10% of the YES pool, you get 10% of the NO pool as profit</li>
                    </ul>
                  </div>
                ) : (
                  <div>
                    <h4 className="text-lg font-bold text-neon-purple mb-3">NO Pool Explained</h4>
                    <p className="text-sm text-muted-foreground mb-2">When you bet on NO, your SOL joins the NO pool. If the outcome is NO:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• You get your original stake back</li>
                      <li>• You receive a proportional share of the YES pool based on your contribution</li>
                      <li>• Example: If you staked 10% of the NO pool, you get 10% of the YES pool as profit</li>
                    </ul>
                  </div>
                )}
              </div>
            )}
            
            <div className="text-center space-y-2 bg-card/40 rounded-xl p-6">
              <p className="text-sm"><strong>Winners split the losing pool</strong> proportionally to their stake.</p>
              <p className="text-xs text-muted-foreground">All funds locked in smart contracts. No house edge. Pure peer-to-peer.</p>
            </div>
          </div>
        </section>

        {/* Built on Trust */}
        <section className="container mx-auto px-4 sm:px-6 py-16 bg-card/20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Built on Trust</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card/60 border border-card-border rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-neon-purple" />
              <h3 className="font-bold mb-2">Smart Contract Audited</h3>
              <p className="text-sm text-muted-foreground">Testnet audited; mainnet audit planned.</p>
            </div>
            <div className="bg-card/60 border border-card-border rounded-xl p-6 text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-neon-cyan" />
              <h3 className="font-bold mb-2">Built on Solana & Pyth</h3>
              <p className="text-sm text-muted-foreground">Fast settlement, real-time oracle feeds.</p>
            </div>
            <div className="bg-card/60 border border-card-border rounded-xl p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-neon-green" />
              <h3 className="font-bold mb-2">Peer-to-Peer Model</h3>
              <p className="text-sm text-muted-foreground">We don't bet against you. You bet against other Gladiators.</p>
            </div>
          </div>
        </section>


        {/* Arena Points */}
        <section className="container mx-auto px-4 sm:px-6 py-16 bg-card/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">What Are Arena Points?</h2>
            <p className="text-center text-lg text-muted-foreground mb-8">Your on-chain reputation and key to $ARENA airdrop eligibility.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card/60 border border-card-border rounded-xl p-6">
                <h3 className="font-bold text-neon-cyan mb-4">How You Earn</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Bet:</strong> +25 points per wager</li>
                  <li><strong>Create:</strong> +50 points when others join</li>
                  <li><strong>Refer:</strong> +200 points per verified user (min 0.25 SOL stake)</li>
                  <li><strong>Win:</strong> Multipliers based on pool size</li>
                  <li><strong>Engage:</strong> Earn via memes, votes, Discord</li>
                </ul>
              </div>
              
              <div className="bg-card/60 border border-card-border rounded-xl p-6">
                <h3 className="font-bold text-neon-purple mb-4">What They Unlock</h3>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Pro Tools:</strong> Early access to analytics</li>
                  <li>• <strong>Faction Roles:</strong> Exclusive Discord badges</li>
                  <li>• <strong>Private Bets:</strong> High-stakes arenas</li>
                  <li>• <strong>Airdrop Eligibility:</strong> Points determine $ARENA share</li>
                  <li>• <strong>Referral Multipliers:</strong> Higher tiers boost earnings</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-neon-purple mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Important Notes
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Arena Points are reputation metrics, not tokens.</li>
                <li>• You can't lose points for losing bets.</li>
                <li>• Leaderboards are on-chain and transparent.</li>
              </ul>
            </div>
            
            <div className="text-center">
              <a href="https://discord.gg/GmG6xrnUm8" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-cyan">
                  Join Discord to Climb Leaderboard
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* For Builders */}
        <section className="container mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto bg-card/60 border border-card-border rounded-2xl p-8 sm:p-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">For Builders, Creators & Communities</h2>
            <p className="text-center text-lg mb-6">Build the Arena with us, not paid shills. Become a <strong className="text-neon-purple">Founding Faction Leader</strong>:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-neon-green mt-0.5" />
                <span><strong>2x Arena Points:</strong> Double points for your community's referrals</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-neon-green mt-0.5" />
                <span><strong>Custom UI Slot:</strong> Your logo on our betting board</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-neon-green mt-0.5" />
                <span><strong>Lifetime Pro Access:</strong> Premium tools, private bets, analytics</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-neon-green mt-0.5" />
                <span><strong>Airdrop Priority:</strong> Reserved $ARENA allocation for top Factions</span>
              </div>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-cyan" onClick={() => setShowPartnerForm(true)}>
                <Users className="w-5 h-5 mr-2" /> Apply Now
              </Button>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="container mx-auto px-4 sm:px-6 py-16 bg-card/20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Roadmap</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/60 border border-card-border rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Development Progress</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-neon-cyan">{progress}%</div>
                  <div className="text-xs text-muted-foreground">{completed} of {total} complete</div>
                </div>
              </div>
              
              <div className="h-3 bg-card-border rounded-full overflow-hidden mb-8">
                <div className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan transition-all" style={{ width: `${progress}%` }} />
              </div>
              
              <div className="space-y-3">
                {developmentChecklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    {item.status === "complete" ? (
                      <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                    ) : item.status === "in-progress" ? (
                      <div className="w-5 h-5 border-2 border-neon-cyan rounded-full animate-pulse flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-muted rounded-full flex-shrink-0" />
                    )}
                    <span className={item.status === "complete" ? "text-foreground" : "text-muted-foreground"}>{item.task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="container mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto bg-destructive/10 border border-destructive/30 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" /> Disclaimer
            </h3>
            <div className="text-sm text-muted-foreground space-y-3">
              <p>SolArena is a decentralized, peer-to-peer prediction protocol on Solana, enabling users to create and trade contracts on real-world outcomes. Participation involves significant financial risk, and you may lose all funds staked. Only commit what you can afford to lose.</p>
              
              <p>Arena Points are non-transferable, on-chain metrics tracking platform activity and reputation. They are not financial instruments, carry no monetary value, and do not guarantee future rewards, including eligibility for the $ARENA token airdrop. Airdrop terms, including Arena Points' role and token allocation, are subject to change at SolArena Labs' discretion.</p>
              
              <p>SolArena operates as a decentralized platform, not a bookmaker. All contracts are settled via smart contracts and oracles, with outcomes determined by transparent, on-chain logic. Smart contracts are in development and will undergo professional audits, but blockchain technology carries inherent risks, including potential vulnerabilities. Use at your own risk.</p>
              
              <p>Users are solely responsible for ensuring compliance with local laws, including those related to online wagering, blockchain transactions, or prediction markets. SolArena Labs does not provide financial, legal, or tax advice. No content on this site or related channels constitutes a recommendation to trade or stake.</p>
              
              <p>For questions or support, join our <a href="https://discord.gg/GmG6xrnUm8" className="text-neon-purple hover:underline">Discord</a>, <a href="https://x.com/i/communities/1986456387635806219" className="text-neon-cyan hover:underline">X community</a>, or <a href="https://t.me/+a8QoNIahl5Q5MTEx" className="text-neon-purple hover:underline">Telegram</a>.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-card-border bg-card/20 backdrop-blur-xl">
          <div className="container mx-auto px-4 sm:px-6 py-12">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-wrap justify-center gap-3">
                <a href="https://discord.gg/GmG6xrnUm8" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline"><MessageCircle className="w-5 h-5 mr-2" /> Discord <ExternalLink className="w-4 h-4 ml-2 opacity-50" /></Button>
                </a>
                <a href="https://x.com/SOLArenaLabs" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    X <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
                  </Button>
                </a>
                <a href="https://t.me/+a8QoNIahl5Q5MTEx" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline"><Send className="w-5 h-5 mr-2" /> Telegram <ExternalLink className="w-4 h-4 ml-2 opacity-50" /></Button>
                </a>
              </div>
              
              <div className="text-center space-y-2">
                <Link href="/faq">
                  <a className="text-sm text-neon-cyan hover:text-neon-purple transition-colors font-medium">📖 Read the FAQ</a>
                </Link>
                <p className="text-sm text-muted-foreground">Built with ⚡ on Solana</p>
                <p className="text-xs text-muted-foreground/70 italic">"Where speculation becomes sport."</p>
                <p className="text-xs text-muted-foreground/50">© 2025 SolArena Labs. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Partner Form */}
      {showPartnerForm && <PartnerForm onClose={() => setShowPartnerForm(false)} />}

      {/* Join Arena Modal */}
      {showJoinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowJoinModal(false)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative bg-card border-2 border-neon-purple rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-neon-purple/50" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Join the Arena
            </h3>
            <p className="text-center text-muted-foreground mb-6">Choose your platform to enter the Colosseum</p>
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
    </div>
  );
}
