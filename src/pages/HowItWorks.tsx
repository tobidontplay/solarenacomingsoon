import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Zap } from "lucide-react";

interface HowItWorksProps {
  showJoinModal: () => void;
}

export default function HowItWorks({ showJoinModal }: HowItWorksProps) {
  const [activePool, setActivePool] = useState<'yes' | 'no' | null>(null);

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple bg-clip-text text-transparent">
            How SolArena Works
          </h1>
          <p className="text-lg text-muted-foreground">
            Peer-to-peer betting, transparent resolution, and fair payouts — all on-chain.
          </p>
        </div>
      </section>

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

          <div className="bg-card/60 border border-card-border rounded-xl p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Click on YES or NO</strong> above to see how each pool works
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-16 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Transparent Fees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card/60 border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-neon-cyan mb-3">Entry Fee: 0.1%</h3>
              <p className="text-sm text-muted-foreground">
                A small fee is charged when you place a bet. This goes directly to the on-chain Treasury to support development and airdrops.
              </p>
            </div>
            <div className="bg-card/60 border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-neon-purple mb-3">Winnings Fee: 1.5%</h3>
              <p className="text-sm text-muted-foreground">
                Only charged when you win. This fee helps maintain the platform and fund community rewards. You never pay if you lose.
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            All fees are public and auditable on-chain. SolArena never bets against you.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">How Bets Are Resolved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card/60 border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-neon-cyan mb-3">🤖 Oracle Mode</h3>
              <p className="text-sm text-muted-foreground mb-3">
                For price-based bets, we use Pyth Network real-time oracle feeds.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Fully automated</li>
                <li>• Instant resolution</li>
                <li>• Tamper-proof data</li>
              </ul>
            </div>
            <div className="bg-card/60 border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-neon-purple mb-3">⚔️ Arbiter Mode</h3>
              <p className="text-sm text-muted-foreground mb-3">
                For community or meme-based bets, a trusted arbiter decides the outcome.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Human judgment</li>
                <li>• Flexible for any bet type</li>
                <li>• Arbiter reputation on-chain</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-16 bg-card/20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Join the Arena and start earning Arena Points today.</h2>
          <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-cyan" onClick={showJoinModal}>
            <Zap className="w-5 h-5 mr-2" /> Join the Arena
          </Button>
        </div>
      </section>
    </>
  );
}
