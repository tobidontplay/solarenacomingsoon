import ArticleLayout from "@/components/ArticleLayout";

export default function EarnArenaPoints() {
  return (
    <ArticleLayout title="How to Earn Arena Points">
      <div className="space-y-6">
        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6">
          <p className="text-sm font-semibold">
            ✅ <strong>Launch Status:</strong> Live on Phase 1. More earning sources will be added over time.
          </p>
        </div>

        <p className="text-lg">
          Arena Points are your on-chain reputation score. They track your participation, skill, and contribution to the protocol. Here's how to maximize your points.
        </p>

        <h2 className="text-2xl font-bold mt-8">Ways to Earn Points</h2>

        <div className="space-y-6">
          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-neon-cyan mb-3">Join Markets</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Earn points for every prediction you make. The more you participate, the more you earn.
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Base points for each valid participation</li>
              <li>• Bonus for participating in new or underserved markets</li>
              <li>• Multipliers for consistent daily activity</li>
            </ul>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-neon-purple mb-3">Create Markets</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Get extra points when others join your markets. Quality market creation is highly rewarded.
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Points for each market created</li>
              <li>• Bonus points for each participant who joins</li>
              <li>• Multipliers for markets with high engagement</li>
              <li>• Extra rewards for innovative or popular market ideas</li>
            </ul>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-neon-cyan mb-3">Win Predictions</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Victories multiply your points based on pool size, odds, and relative risk.
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Win multiplier applied to base participation points</li>
              <li>• Higher multipliers for underdog positions</li>
              <li>• Bonus for consistent win streaks</li>
              <li>• Skill-adjusted rewards (not just volume)</li>
            </ul>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-neon-purple mb-3">Refer Users</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Bring new participants and earn a share of their activity points.
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Earn 10% of referred users' points (doesn't reduce theirs)</li>
              <li>• Lifetime referral tracking</li>
              <li>• Bonus for referring active, quality participants</li>
              <li>• Titans get enhanced referral multipliers</li>
            </ul>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="text-xl font-bold text-neon-cyan mb-3">Community Engagement</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Contribute beyond predictions: memes, content, votes, and Discord activity count.
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Meme drops and community contests</li>
              <li>• Governance votes and proposal participation</li>
              <li>• Discord roles and verified contributions</li>
              <li>• Content creation (guides, tutorials, analysis)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">What Points Unlock</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Pro Tools Access:</strong> Analytics, private markets, advanced filters</li>
          <li><strong>Roles and Status:</strong> On-chain reputation and exclusive Discord roles</li>
          <li><strong>Exclusive Access:</strong> Entry to private or high-stakes arenas</li>
          <li><strong>Airdrop Eligibility:</strong> Points directly influence future $ARENA distribution</li>
          <li><strong>Referral Multipliers:</strong> Higher tiers earn more from community activity</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Important Notes</h2>
        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6">
          <ul className="space-y-2 text-sm">
            <li>• Arena Points are not tokens (yet) — they're on-chain reputation metrics</li>
            <li>• You don't lose points for losing predictions; only gain through participation</li>
            <li>• Leaderboards and point logic are fully transparent and on-chain</li>
            <li>• Points accumulate over time — early and consistent users have the advantage</li>
            <li>• Anti-sybil and anti-spam protections are in place</li>
          </ul>
        </div>

        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Strategy Tip:</strong> Consistency beats volume. Regular participation, quality market creation, and genuine community referrals yield better long-term point accumulation than sporadic high-stakes predictions.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
