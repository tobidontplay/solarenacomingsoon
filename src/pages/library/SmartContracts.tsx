import ArticleLayout from "@/components/ArticleLayout";

export default function SmartContracts() {
  return (
    <ArticleLayout title="Smart Contract Architecture">
      <div className="space-y-6">
        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6">
          <p className="text-sm font-semibold">
            🔧 <strong>Launch Status:</strong> Architecture docs will be expanded before mainnet. Code will be open-sourced post-audit.
          </p>
        </div>

        <p className="text-lg">
          SolArena is built on Solana using Anchor (Rust) for secure, efficient, and transparent on-chain prediction markets. Here's how the protocol works under the hood.
        </p>

        <h2 className="text-2xl font-bold mt-8">Core Components</h2>
        <div className="space-y-4">
          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Market Account</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Stores all market data and state
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Market question and terms</li>
              <li>• Resolution method (Oracle or Arbiter)</li>
              <li>• Deadline and settlement timestamp</li>
              <li>• Creator and arbiter addresses</li>
              <li>• Current state (Active, Resolved, Disputed)</li>
            </ul>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-purple mb-2">Pool Accounts</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Separate accounts for YES and NO liquidity
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Total SOL staked in each pool</li>
              <li>• Individual stake tracking per user</li>
              <li>• Entry timestamps and fees collected</li>
              <li>• Proportional share calculations</li>
            </ul>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Treasury Account</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Protocol-owned account for fee collection
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• 0.1% entry fees accumulate here</li>
              <li>• 1.5% winnings fees from resolved markets</li>
              <li>• Transparent, on-chain accounting</li>
              <li>• Future DAO governance control</li>
            </ul>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-purple mb-2">Resolution Module</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Handles outcome determination and settlement
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Oracle integration (Pyth Network)</li>
              <li>• Arbiter decision recording</li>
              <li>• Dispute handling (V2)</li>
              <li>• Automatic payout calculations</li>
            </ul>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Points Module</h3>
            <p className="text-sm text-muted-foreground mb-3">
              On-chain reputation and activity tracking
            </p>
            <ul className="text-sm space-y-1 ml-4">
              <li>• Arena Points calculation logic</li>
              <li>• Referral tracking and attribution</li>
              <li>• Leaderboard state updates</li>
              <li>• Snapshot mechanisms for airdrops</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">Key Standards & Integrations</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Anchor Framework:</strong> Type-safe Rust framework for Solana programs</li>
          <li><strong>Pyth Network:</strong> Real-time price oracle integration for automated resolution</li>
          <li><strong>SPL Token:</strong> Standard for $ARENA token (future)</li>
          <li><strong>Event Emission:</strong> On-chain events for indexers and analytics</li>
          <li><strong>PDA Derivation:</strong> Deterministic account addressing for security</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Security Features</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <ul className="space-y-2 text-sm">
            <li>✓ No admin keys or backdoors</li>
            <li>✓ Immutable market terms once created</li>
            <li>✓ Automatic fee calculations (no manual intervention)</li>
            <li>✓ Time-locked resolutions to prevent manipulation</li>
            <li>✓ Signer verification on all sensitive operations</li>
            <li>✓ Overflow protection and safe math</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Open Source Commitment</h2>
        <p>
          All smart contract code will be open-sourced after professional audits are complete. This allows:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Community review and verification</li>
          <li>Independent security research</li>
          <li>Ecosystem integrations and tooling</li>
          <li>Educational resources for builders</li>
        </ul>

        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>For Developers:</strong> Full technical documentation, deployment guides, and integration examples will be published on GitHub before mainnet launch. Join our Discord dev channel for early access.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
