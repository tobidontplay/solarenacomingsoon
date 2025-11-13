import ArticleLayout from "@/components/ArticleLayout";

export default function RiskDisclosure() {
  return (
    <ArticleLayout title="Risk Disclosure">
      <div className="space-y-6">
        <div className="bg-red-500/10 border-2 border-red-500/50 rounded-lg p-6">
          <p className="text-sm font-semibold text-red-400">
            ⚠️ <strong>Important:</strong> Participation in SolArena involves financial risk. You may lose your staked funds. Only participate with amounts you can afford to lose.
          </p>
        </div>

        <p className="text-lg">
          SolArena is a decentralized prediction protocol. While we implement security best practices, users must understand and accept the inherent risks of participating.
        </p>

        <h2 className="text-2xl font-bold mt-8">Market Risk</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-3">
            <strong>You can lose your entire stake.</strong>
          </p>
          <ul className="text-sm space-y-2">
            <li>• Prediction markets are inherently uncertain</li>
            <li>• Outcomes may be unpredictable or influenced by external factors</li>
            <li>• No guaranteed returns or profits</li>
            <li>• Past performance does not indicate future results</li>
            <li>• Market manipulation by large participants is possible</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Smart Contract Risk</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-3">
            <strong>Bugs or exploits can occur despite audits.</strong>
          </p>
          <ul className="text-sm space-y-2">
            <li>• Smart contracts are immutable once deployed</li>
            <li>• Undiscovered vulnerabilities may exist</li>
            <li>• Audits reduce but don't eliminate risk</li>
            <li>• Exploits could result in loss of funds</li>
            <li>• No insurance or recovery mechanisms (yet)</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Oracle Risk</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-3">
            <strong>External data feeds could be manipulated or fail.</strong>
          </p>
          <ul className="text-sm space-y-2">
            <li>• Oracle data depends on external providers (Pyth Network)</li>
            <li>• Price feeds could be manipulated during low liquidity</li>
            <li>• Network congestion may delay oracle updates</li>
            <li>• Oracle failures could prevent resolution</li>
            <li>• Flash loan attacks on price feeds are possible</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Arbiter Risk</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-3">
            <strong>Human arbiters may make subjective or disputed decisions.</strong>
          </p>
          <ul className="text-sm space-y-2">
            <li>• Arbiter decisions are final (no appeals in V1)</li>
            <li>• Subjective outcomes may be controversial</li>
            <li>• Arbiters could act maliciously or negligently</li>
            <li>• Conflicts of interest may exist</li>
            <li>• Community disputes may arise from decisions</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Network Risk</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-3">
            <strong>Solana network issues could affect protocol function.</strong>
          </p>
          <ul className="text-sm space-y-2">
            <li>• Network congestion may delay transactions</li>
            <li>• Downtime or outages could prevent participation</li>
            <li>• High transaction fees during peak periods</li>
            <li>• Fork or upgrade risks</li>
            <li>• Validator centralization concerns</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Regulatory Risk</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-3">
            <strong>Rules vary by jurisdiction and may change.</strong>
          </p>
          <ul className="text-sm space-y-2">
            <li>• Prediction markets may be restricted in your region</li>
            <li>• Laws and regulations are evolving</li>
            <li>• Tax implications vary by jurisdiction</li>
            <li>• Compliance is your responsibility</li>
            <li>• Access may be restricted without notice</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Liquidity Risk</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-3">
            <strong>Markets may lack sufficient participation.</strong>
          </p>
          <ul className="text-sm space-y-2">
            <li>• Low liquidity markets may have poor odds</li>
            <li>• Difficulty exiting positions before resolution</li>
            <li>• Large stakes may move markets significantly</li>
            <li>• Some markets may never resolve</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Token Risk</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground mb-3">
            <strong>$ARENA token carries additional risks.</strong>
          </p>
          <ul className="text-sm space-y-2">
            <li>• Token price may be volatile</li>
            <li>• No guaranteed value or liquidity</li>
            <li>• Airdrop eligibility not guaranteed</li>
            <li>• Token utility may change</li>
            <li>• Regulatory classification uncertain</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Your Responsibilities</h2>
        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6">
          <p className="text-sm mb-3">
            By participating in SolArena, you acknowledge that:
          </p>
          <ul className="text-sm space-y-2">
            <li>✓ You understand and accept all risks outlined above</li>
            <li>✓ You are solely responsible for your decisions</li>
            <li>✓ You will comply with local laws and regulations</li>
            <li>✓ You have the financial capacity to lose your stake</li>
            <li>✓ You will not hold SolArena Labs liable for losses</li>
            <li>✓ You have read and understood the Terms of Participation</li>
          </ul>
        </div>

        <div className="bg-red-500/10 border-2 border-red-500/50 rounded-lg p-6 mt-8">
          <p className="text-sm font-semibold text-red-400">
            <strong>Final Warning:</strong> This is not financial advice. SolArena Labs does not provide investment recommendations. Consult with legal and financial professionals before participating. Never stake more than you can afford to lose.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
