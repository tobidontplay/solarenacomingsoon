import ArticleLayout from "@/components/ArticleLayout";

export default function Governance() {
  return (
    <ArticleLayout title="$ARENA Governance Roadmap">
      <div className="space-y-6">
        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6">
          <p className="text-sm font-semibold">
            🗳️ <strong>Launch Status:</strong> Progressive decentralization planned. Governance details will evolve with community input.
          </p>
        </div>

        <p className="text-lg">
          SolArena is committed to progressive decentralization. Governance will transition from core team leadership to community-driven DAO control over time.
        </p>

        <h2 className="text-2xl font-bold mt-8">Governance Phases</h2>
        <div className="space-y-4">
          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Phase 0: Foundation (Current)</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Core protocol launch and point accrual
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Core team manages protocol parameters</li>
              <li>• Community feedback via Discord and X</li>
              <li>• Arena Points accumulation begins</li>
              <li>• Founding Titans program establishes early governance voices</li>
            </ul>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-purple mb-2">Phase 1: Limited Governance</h3>
            <p className="text-sm text-muted-foreground mb-3">
              $ARENA distribution and initial voting
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• $ARENA token launch and distribution</li>
              <li>• Snapshot voting on non-critical proposals</li>
              <li>• Treasury allocation votes</li>
              <li>• Community proposals and discussion forums</li>
            </ul>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Phase 2: Full DAO</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Expanded on-chain governance and parameter control
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• On-chain voting for protocol upgrades</li>
              <li>• Fee parameter adjustments</li>
              <li>• Treasury spending and grants</li>
              <li>• Arbiter selection and reputation systems</li>
              <li>• Emergency response procedures</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">What You Can Vote On</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan rounded-lg p-4">
            <h4 className="font-bold mb-2">Protocol Parameters</h4>
            <ul className="text-sm space-y-1">
              <li>• Fee percentages</li>
              <li>• Minimum stake amounts</li>
              <li>• Resolution timeframes</li>
              <li>• Point multipliers</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-neon-purple rounded-lg p-4">
            <h4 className="font-bold mb-2">Treasury Allocation</h4>
            <ul className="text-sm space-y-1">
              <li>• Development funding</li>
              <li>• Marketing initiatives</li>
              <li>• Community grants</li>
              <li>• Ecosystem partnerships</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan rounded-lg p-4">
            <h4 className="font-bold mb-2">Feature Proposals</h4>
            <ul className="text-sm space-y-1">
              <li>• New market types</li>
              <li>• Pro tool features</li>
              <li>• Integration priorities</li>
              <li>• UI/UX improvements</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-neon-purple rounded-lg p-4">
            <h4 className="font-bold mb-2">Ecosystem Decisions</h4>
            <ul className="text-sm space-y-1">
              <li>• Partnership approvals</li>
              <li>• Titan program changes</li>
              <li>• Airdrop criteria</li>
              <li>• Brand and messaging</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">Voting Power</h2>
        <p>
          Governance voting power will be determined by:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>$ARENA Holdings:</strong> Token balance in your wallet</li>
          <li><strong>Staked $ARENA:</strong> Enhanced voting power for stakers (V2)</li>
          <li><strong>Arena Points:</strong> Historical contribution weight</li>
          <li><strong>Participation:</strong> Bonus for consistent governance engagement</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Guiding Values</h2>
        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6">
          <ul className="space-y-2 text-sm">
            <li>✓ <strong>Transparency:</strong> All proposals and votes are public</li>
            <li>✓ <strong>User Sovereignty:</strong> Community controls the protocol's future</li>
            <li>✓ <strong>Builder-First:</strong> Reward contributors and creators</li>
            <li>✓ <strong>Long-Term Thinking:</strong> Sustainable growth over short-term gains</li>
            <li>✓ <strong>Inclusivity:</strong> All voices matter, not just whales</li>
          </ul>
        </div>

        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Get Involved:</strong> Join governance discussions on Discord and participate in Snapshot votes. Your voice shapes the protocol's future.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
