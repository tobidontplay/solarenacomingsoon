import ArticleLayout from "@/components/ArticleLayout";

export default function ArenaToken() {
  return (
    <ArticleLayout title="$ARENA Token Utility">
      <div className="space-y-6">
        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6">
          <p className="text-sm font-semibold">
            ⚠️ <strong>Launch Status:</strong> Token details are preliminary and subject to change. $ARENA is not live yet.
          </p>
        </div>

        <p className="text-lg">
          $ARENA is the governance and reputation token of the SolArena ecosystem. It reflects skill, consistency, and contribution to the protocol.
        </p>

        <h2 className="text-2xl font-bold mt-8">Token Purpose</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Governance</h3>
            <p className="text-sm text-muted-foreground">
              Vote on protocol upgrades, treasury allocations, parameter changes, and ecosystem proposals.
            </p>
          </div>
          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-purple mb-2">Access</h3>
            <p className="text-sm text-muted-foreground">
              Unlock pro features, advanced markets, creator tools, and exclusive prediction arenas.
            </p>
          </div>
          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Reputation</h3>
            <p className="text-sm text-muted-foreground">
              Mirror your on-chain contribution and long-term alignment with the protocol's success.
            </p>
          </div>
          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-purple mb-2">Incentives</h3>
            <p className="text-sm text-muted-foreground">
              Reward community growth, quality market creation, and ecosystem development.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">Utility Examples</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Governance Voting:</strong> Participate in DAO decisions and protocol evolution</li>
          <li><strong>Fee Discounts:</strong> Reduced protocol fees for $ARENA holders</li>
          <li><strong>Boosted Rewards:</strong> Enhanced Arena Points multipliers</li>
          <li><strong>Exclusive Markets:</strong> Access to high-stakes or private prediction arenas</li>
          <li><strong>Creator Tools:</strong> Advanced analytics, market templates, and automation</li>
          <li><strong>Staking Benefits:</strong> Earn yield from protocol fees (planned for V2)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Distribution Overview</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-4">
            Preliminary allocation (subject to change):
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>Community Airdrop</span>
              <span className="font-bold text-neon-cyan">25%</span>
            </li>
            <li className="flex justify-between">
              <span>Ecosystem Growth</span>
              <span className="font-bold text-neon-purple">20%</span>
            </li>
            <li className="flex justify-between">
              <span>Team (Vested 12-24 months)</span>
              <span className="font-bold text-neon-cyan">15%</span>
            </li>
            <li className="flex justify-between">
              <span>Titans & KOL Programs</span>
              <span className="font-bold text-neon-purple">10%</span>
            </li>
            <li className="flex justify-between">
              <span>Treasury & Liquidity</span>
              <span className="font-bold text-neon-cyan">30%</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Airdrop Connection</h2>
        <p>
          Arena Points earned during Phase 1 will directly influence your $ARENA airdrop allocation. The more you participate, create, win, and refer, the larger your potential rewards.
        </p>
        <p className="mt-4">
          Snapshots and distribution details will be announced publicly on X and Discord before each phase.
        </p>

        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Disclaimer:</strong> $ARENA is not live yet. Token design, distribution, and utilities may change before launch and will follow all applicable laws. This is not financial advice. Participation in airdrops may be subject to regional restrictions.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
