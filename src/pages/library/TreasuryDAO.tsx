import ArticleLayout from "@/components/ArticleLayout";

export default function TreasuryDAO() {
  return (
    <ArticleLayout title="Community Treasury & DAO Framework">
      <div className="space-y-6">
        <p className="text-lg">
          The SolArena Treasury is a protocol-owned, on-chain account that funds development, community rewards, and ecosystem growth. All allocations will be governed by the community DAO.
        </p>

        <h2 className="text-2xl font-bold mt-8">Treasury Funding Sources</h2>
        <div className="space-y-4">
          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Protocol Fees</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Primary revenue source from on-chain activity
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• 0.1% entry fee on all predictions</li>
              <li>• 1.5% fee on winnings (only charged when you win)</li>
              <li>• 100% transparent and auditable on-chain</li>
              <li>• No hidden fees or extraction</li>
            </ul>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-purple mb-2">Token Allocation</h3>
            <p className="text-sm text-muted-foreground mb-3">
              30% of $ARENA supply reserved for treasury
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Liquidity provision</li>
              <li>• Strategic partnerships</li>
              <li>• Emergency reserves</li>
              <li>• Long-term sustainability</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">Treasury Allocations</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-4">
            Preliminary allocation framework (subject to DAO governance):
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between items-center">
              <span><strong>Development & Audits:</strong> Core protocol maintenance</span>
              <span className="text-neon-cyan font-bold">35%</span>
            </li>
            <li className="flex justify-between items-center">
              <span><strong>Community Rewards:</strong> Airdrops, contests, incentives</span>
              <span className="text-neon-purple font-bold">25%</span>
            </li>
            <li className="flex justify-between items-center">
              <span><strong>Ecosystem Grants:</strong> Builder programs, integrations</span>
              <span className="text-neon-cyan font-bold">20%</span>
            </li>
            <li className="flex justify-between items-center">
              <span><strong>Marketing & Growth:</strong> Partnerships, campaigns</span>
              <span className="text-neon-purple font-bold">15%</span>
            </li>
            <li className="flex justify-between items-center">
              <span><strong>Emergency Reserve:</strong> Security incidents, unforeseen costs</span>
              <span className="text-neon-cyan font-bold">5%</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">DAO Framework</h2>
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan rounded-lg p-6">
            <h3 className="font-bold mb-2">Proposal Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Community member submits proposal on forum</li>
              <li>Discussion period (7 days minimum)</li>
              <li>Proposal refinement based on feedback</li>
              <li>Snapshot vote (3-5 days)</li>
              <li>If passed, implementation by core team or community</li>
            </ol>
          </div>

          <div className="bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-neon-purple rounded-lg p-6">
            <h3 className="font-bold mb-2">Voting Thresholds</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Minor Changes:</strong> Simple majority (51%)</li>
              <li><strong>Treasury Spending:</strong> 60% approval</li>
              <li><strong>Protocol Upgrades:</strong> 66% supermajority</li>
              <li><strong>Emergency Actions:</strong> Multi-sig + 75% approval</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">Grant Programs</h2>
        <p>
          The Treasury will fund ecosystem growth through milestone-based grants:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Builder Grants:</strong> Tools, integrations, analytics platforms</li>
          <li><strong>Content Grants:</strong> Educational content, tutorials, guides</li>
          <li><strong>Research Grants:</strong> Security research, economic modeling</li>
          <li><strong>Community Grants:</strong> Events, meetups, regional growth</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Transparency Commitments</h2>
        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6">
          <ul className="space-y-2 text-sm">
            <li>✓ All treasury transactions are on-chain and public</li>
            <li>✓ Quarterly treasury reports published</li>
            <li>✓ Real-time dashboard showing balances and allocations</li>
            <li>✓ Multi-sig control with community oversight</li>
            <li>✓ Audit trail for all spending decisions</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">How to Participate</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Hold $ARENA tokens to gain voting power</li>
          <li>Join governance discussions on Discord and forums</li>
          <li>Submit proposals for community consideration</li>
          <li>Vote on active proposals via Snapshot</li>
          <li>Apply for grants to build on SolArena</li>
        </ol>

        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Future Vision:</strong> The DAO will eventually control all protocol parameters, treasury allocations, and strategic decisions. The community is the protocol.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
