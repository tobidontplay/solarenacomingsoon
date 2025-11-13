import ArticleLayout from "@/components/ArticleLayout";

export default function ArenaPoints() {
  return (
    <ArticleLayout title="Arena Points Explained">
      <div className="space-y-6">
        <p className="text-lg">
          Arena Points are your on-chain reputation score. You earn them by creating markets, making predictions, winning, referring users, and engaging with the community. They're not tokens (yet), but they directly influence your $ARENA airdrop eligibility and unlock Pro features.
        </p>

        <h2 className="text-2xl font-bold mt-8">How You Earn Arena Points</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Join Markets:</strong> Earn points for every prediction you make or resolve</li>
          <li><strong>Create Markets:</strong> Get extra points when others join your predictions</li>
          <li><strong>Refer Users:</strong> Bring new participants and earn a share of their activity points</li>
          <li><strong>Win Predictions:</strong> Victories multiply your points based on pool size and odds</li>
          <li><strong>Community Engagement:</strong> Meme drops, event votes, and Discord activity also contribute</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">What Arena Points Unlock</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Pro Tools Access:</strong> Early access to premium analytics and prediction tools</li>
          <li><strong>Faction Roles:</strong> Distinct Discord roles and badges that flex your on-chain reputation</li>
          <li><strong>Exclusive Markets & Events:</strong> Entry into private or high-stakes arenas</li>
          <li><strong>Airdrop Eligibility:</strong> Points will directly influence future reward and token distribution phases</li>
          <li><strong>Referral Multipliers:</strong> The higher your tier, the more you earn from your community's activity</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Important Notes</h2>
        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6">
          <ul className="space-y-2 text-sm">
            <li>• Arena Points aren't tokens (yet) — they're on-chain reputation metrics that track your activity and influence within the protocol</li>
            <li>• You can't lose points for losing predictions; you only gain them through participation and contribution</li>
            <li>• Leaderboards and point logic are fully on-chain and transparent</li>
            <li>• Points accumulate over time — early and consistent users have the advantage</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Arena Points = Airdrop Eligibility</h2>
        <p>
          When $ARENA launches, your Arena Points will determine your share of the community airdrop allocation. The more you participate during Phase 1, the larger your potential rewards. Snapshots and distribution details will be announced publicly on X and Discord.
        </p>

        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Pro Tip:</strong> Consistency beats volume. Regular participation, quality market creation, and community referrals yield better long-term point accumulation than sporadic high-stakes predictions.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
