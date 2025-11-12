import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Users, Target, Coins } from "lucide-react";
import { Link } from "wouter";

interface HomeProps {
  showJoinModal: () => void;
}

export default function Home({ showJoinModal }: HomeProps) {
  return (
    <>
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-16 pb-6 sm:pb-8">
        <div className="flex justify-center mb-6 sm:mb-8">
          <img 
            src="/fulllogo.png" 
            alt="SolArena" 
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain opacity-50 hover:opacity-70 transition-all duration-300 dark:opacity-70 dark:hover:opacity-90 dark:invert-0 invert" 
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple bg-clip-text text-transparent leading-tight">
            SOLARENA
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground px-2">
            ⚔️ <strong>Put Your Money Where Your Mouth Is</strong>
          </p>
          <p className="text-base sm:text-lg text-muted-foreground/90 px-2">
            A decentralized prediction protocol where you compete, create markets, and earn Arena Points. Token prices. Meme wars. Crypto drama. All settled transparently on-chain.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4 sm:pt-6 px-4">
            <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-cyan w-full sm:w-auto" onClick={showJoinModal}>
              <Zap className="w-5 h-5 mr-2" /> Join the Arena
            </Button>
            <Link href="/how-it-works" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-neon-cyan w-full">
                Learn How It Works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-card/20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">How It Works</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-neon-purple/20 border-2 border-neon-purple flex items-center justify-center">
              <Target className="w-8 h-8 text-neon-purple" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold">1. Create</h3>
            <p className="text-sm text-muted-foreground px-2">Create a prediction market on any event with custom terms.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-neon-cyan/20 border-2 border-neon-cyan flex items-center justify-center">
              <Coins className="w-8 h-8 text-neon-cyan" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold">2. Compete</h3>
            <p className="text-sm text-muted-foreground px-2">Stake SOL on YES or NO. Pools form directly in smart contracts.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-neon-green/20 border-2 border-neon-green flex items-center justify-center">
              <Check className="w-8 h-8 text-neon-green" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold">3. Resolve</h3>
            <p className="text-sm text-muted-foreground px-2">Oracles or arbiters settle outcomes on-chain. Winners claim rewards.</p>
          </div>
        </div>
        <div className="text-center mt-6 sm:mt-8 px-4">
          <Link href="/how-it-works" className="inline-block w-full sm:w-auto">
            <Button size="lg" variant="outline" className="border-neon-purple w-full sm:w-auto">
              See Full Details →
            </Button>
          </Link>
        </div>
      </section>

      {/* Built on Trust */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Built on Trust</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-card/60 border border-card-border rounded-xl p-5 sm:p-6 text-center">
            <Shield className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-neon-purple" />
            <h3 className="text-base sm:text-lg font-bold mb-2">Smart Contract Audited</h3>
            <p className="text-sm text-muted-foreground">Testnet audited; mainnet audit planned.</p>
          </div>
          <div className="bg-card/60 border border-card-border rounded-xl p-5 sm:p-6 text-center">
            <Zap className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-neon-cyan" />
            <h3 className="text-base sm:text-lg font-bold mb-2">Built on Solana & Pyth</h3>
            <p className="text-sm text-muted-foreground">Fast settlement, real-time oracle feeds.</p>
          </div>
          <div className="bg-card/60 border border-card-border rounded-xl p-5 sm:p-6 text-center">
            <Users className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-neon-green" />
            <h3 className="text-base sm:text-lg font-bold mb-2">Peer-to-Peer Model</h3>
            <p className="text-sm text-muted-foreground">No house, no middlemen. You compete directly against other users via smart contracts.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-card/20">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-2">Ready to Enter the Arena?</h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Join the community, earn Arena Points, and secure your $ARENA airdrop eligibility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2 sm:pt-4 px-4">
            <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-cyan w-full sm:w-auto" onClick={showJoinModal}>
              <Zap className="w-5 h-5 mr-2" /> Join the Arena
            </Button>
            <Link href="/token" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-neon-cyan w-full">
                Learn About $ARENA
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
