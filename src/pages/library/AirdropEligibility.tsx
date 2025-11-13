import ArticleLayout from "@/components/ArticleLayout";

export default function AirdropEligibility() {
  return (
    <ArticleLayout title="Airdrop Eligibility & Reward Logic">
      <div className="space-y-6">
        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6">
          <p className="text-sm font-semibold">
            📅 <strong>Launch Status:</strong> Details will be announced before snapshots begin. Follow X and Discord for updates.
          </p>
        </div>

        <p className="text-lg">
          Arena Points earned during Phase 1 will directly influence your $ARENA airdrop allocation. Here's how eligibility and rewards are determined.
        </p>

        <h2 className="text-2xl font-bold mt-8">Core Principles</h2>
        <div className="space-y-4">
          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Participation-Weighted</h3>
            <p className="text-sm text-muted-foreground">
              More consistent activity → higher allocation. We reward builders and active participants, not one-time speculators.
            </p>
          </div>
          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-purple mb-2">Quality Over Spam</h3>
            <p className="text-sm text-muted-foreground">
              Anti-abuse filters and sybil resistance ensure genuine users are rewarded. Bots and farmers will be filtered out.
            </p>
          </div>
          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Public Snapshots</h3>
            <p className="text-sm text-muted-foreground">
              Snapshot dates and logic will be announced on X and Discord. No surprises, full transparency.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">Signals That May Matter</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Markets Created:</strong> Quality market creation with high engagement</li>
          <li><strong>Predictions Made:</strong> Consistent participation across diverse markets</li>
          <li><strong>Win Rate:</strong> Adjusted for pool size, risk, and difficulty</li>
          <li><strong>Referrals:</strong> Bringing active, genuine users (not bots)</li>
          <li><strong>Community Contributions:</strong> Memes, tools, content, governance participation</li>
          <li><strong>Early Adoption:</strong> Bonus for Phase 1 participants</li>
          <li><strong>Titan Status:</strong> Founding Titans receive enhanced allocations</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Anti-Sybil Measures</h2>
        <p>
          To ensure fair distribution, we implement multiple protection layers:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>On-chain activity patterns and wallet age analysis</li>
          <li>Minimum participation thresholds</li>
          <li>Quality-weighted metrics (not just volume)</li>
          <li>Manual review of suspicious patterns</li>
          <li>Community reporting and verification</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Snapshot Timeline</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-4">
            Preliminary timeline (subject to change):
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <strong className="text-neon-cyan">Phase 1 (Current):</strong> Arena Points accumulation, no snapshots yet
            </li>
            <li>
              <strong className="text-neon-purple">Pre-Snapshot Announcement:</strong> 2-4 weeks notice before first snapshot
            </li>
            <li>
              <strong className="text-neon-cyan">Snapshot 1:</strong> Initial eligibility check and preliminary allocations
            </li>
            <li>
              <strong className="text-neon-purple">Snapshot 2+:</strong> Additional snapshots may occur before token launch
            </li>
            <li>
              <strong className="text-neon-cyan">Token Launch:</strong> $ARENA distribution to eligible wallets
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Regional Compliance</h2>
        <p>
          Eligibility may vary by region and applicable laws. Users in restricted jurisdictions may not be able to claim airdrops. Check local regulations and our Terms of Participation for details.
        </p>

        <h2 className="text-2xl font-bold mt-8">How to Maximize Your Allocation</h2>
        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6">
          <ul className="space-y-2 text-sm">
            <li>✓ Participate consistently, not just during snapshot periods</li>
            <li>✓ Create quality markets that attract genuine engagement</li>
            <li>✓ Refer real users who will actively participate</li>
            <li>✓ Engage with the community (Discord, X, governance)</li>
            <li>✓ Focus on skill and strategy, not just volume</li>
            <li>✓ Stay updated on announcements and snapshot dates</li>
          </ul>
        </div>

        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Remember:</strong> Airdrop farming and sybil attacks will be filtered out. Genuine participation and community contribution are what matter. Build reputation, not just transactions.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
