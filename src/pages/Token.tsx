import { Button } from "@/components/ui/button";
import { Check, Coins, AlertTriangle, Zap } from "lucide-react";

interface TokenProps {
  showJoinModal: () => void;
}

export default function Token({ showJoinModal }: TokenProps) {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <Coins className="w-10 h-10 text-neon-cyan" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Arena Points & $ARENA
          </h1>
          <p className="text-lg text-muted-foreground">
            Your on-chain reputation and key to the upcoming token airdrop.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-16 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">⚡ What Are Arena Points?</h2>
          <p className="text-center text-lg text-muted-foreground mb-8">
            Arena Points are SolArena's on-chain reputation and reward system — your proof of activity, influence, and skill inside the Arena.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card/60 border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-neon-cyan mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5" /> How You Earn
              </h3>
              <ul className="space-y-2 text-sm">
                <li><strong>Join Markets:</strong> Earn points for every prediction you make or resolve</li>
                <li><strong>Create Markets:</strong> Get extra points when others join your predictions</li>
                <li><strong>Refer Users:</strong> Bring new participants and earn a share of their activity points</li>
                <li><strong>Win Predictions:</strong> Victories multiply your points based on pool size and odds</li>
                <li><strong>Community Engagement:</strong> Meme drops, event votes, and Discord activity also contribute</li>
              </ul>
            </div>
            
            <div className="bg-card/60 border border-card-border rounded-xl p-6">
              <h3 className="font-bold text-neon-purple mb-4 flex items-center gap-2">
                <Coins className="w-5 h-5" /> What They Unlock
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Pro Tools Access:</strong> Early access to premium analytics and prediction tools</li>
                <li>• <strong>Faction Roles:</strong> Distinct Discord roles and badges that flex your on-chain reputation</li>
                <li>• <strong>Exclusive Markets & Events:</strong> Entry into private or high-stakes arenas</li>
                <li>• <strong>Airdrop Eligibility:</strong> Points will directly influence future reward and token distribution phases</li>
                <li>• <strong>Referral Multipliers:</strong> The higher your tier, the more you earn from your community's activity</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-xl p-6 mb-6">
            <h4 className="font-bold text-neon-purple mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Important Notes
            </h4>
            <ul className="text-sm space-y-1">
              <li>• Arena Points aren't tokens (yet) — they're on-chain reputation metrics that track your activity and influence within the protocol</li>
              <li>• You can't lose points for losing predictions; you only gain them through participation and contribution</li>
              <li>• Leaderboards and point logic are fully on-chain and transparent</li>
            </ul>
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent mb-4">
              Arena Points = Airdrop Eligibility
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border-2 border-neon-purple rounded-2xl p-8 sm:p-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Upcoming Token Launch: $ARENA
          </h2>
          <p className="text-lg text-center mb-6">Power the Arena with $ARENA.</p>
          <ul className="space-y-2 mb-8 max-w-2xl mx-auto">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
              <span><strong>Utility:</strong> Unlock Pro tools, governance, rewards</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
              <span><strong>Airdrop:</strong> 25% of supply reserved for community, vested over 6 months</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-neon-green mt-0.5 flex-shrink-0" />
              <span><strong>Eligibility:</strong> Arena Points determine your share</span>
            </li>
          </ul>
          <p className="text-center text-lg mb-8">Stay active, climb the leaderboard, and secure your legacy.</p>
          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-cyan" onClick={showJoinModal}>
              <Zap className="w-5 h-5 mr-2" /> Join & Start Earning Points
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
