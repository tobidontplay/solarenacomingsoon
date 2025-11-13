import ArticleLayout from "@/components/ArticleLayout";

export default function SecurityAudits() {
  return (
    <ArticleLayout title="Security & Audits">
      <div className="space-y-6">
        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6">
          <p className="text-sm font-semibold">
            🔒 <strong>Launch Status:</strong> Pre-mainnet audits in progress. Reports will be published before public launch.
          </p>
        </div>

        <p className="text-lg">
          Security is our top priority. SolArena implements defense-in-depth practices, professional audits, and responsible disclosure to protect user funds.
        </p>

        <h2 className="text-2xl font-bold mt-8">Security Posture</h2>
        <div className="space-y-4">
          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Defense-in-Depth Coding</h3>
            <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
              <li>• Rust's memory safety guarantees</li>
              <li>• Anchor framework's built-in protections</li>
              <li>• Comprehensive input validation</li>
              <li>• Safe math operations (no overflows)</li>
              <li>• Strict access control checks</li>
            </ul>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-purple mb-2">Third-Party Audits</h3>
            <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
              <li>• Professional security firms engaged</li>
              <li>• Multiple audit rounds before mainnet</li>
              <li>• Public audit reports (post-completion)</li>
              <li>• Continuous monitoring and updates</li>
            </ul>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Public Testnet</h3>
            <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
              <li>• Extended testnet period with monitoring</li>
              <li>• Fuzzing and stress testing</li>
              <li>• Community bug bounty program</li>
              <li>• Real-world scenario simulations</li>
            </ul>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-purple mb-2">Responsible Disclosure</h3>
            <ul className="text-sm space-y-1 ml-4 text-muted-foreground">
              <li>• Security contact: security@solarenalabs.com</li>
              <li>• Bug bounty program (details TBA)</li>
              <li>• Coordinated vulnerability disclosure</li>
              <li>• Rapid response and patching</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">Audit Timeline</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <ul className="space-y-3 text-sm">
            <li>
              <strong className="text-neon-cyan">Phase 1:</strong> Internal security review and code hardening
            </li>
            <li>
              <strong className="text-neon-purple">Phase 2:</strong> First professional audit (in progress)
            </li>
            <li>
              <strong className="text-neon-cyan">Phase 3:</strong> Fixes and second audit round
            </li>
            <li>
              <strong className="text-neon-purple">Phase 4:</strong> Public audit report release
            </li>
            <li>
              <strong className="text-neon-cyan">Phase 5:</strong> Mainnet launch with monitoring
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Known Risks</h2>
        <p>
          Despite best efforts, smart contracts carry inherent risks:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Smart Contract Risk:</strong> Bugs or exploits can occur despite audits</li>
          <li><strong>Oracle Risk:</strong> External data feeds could be manipulated or fail</li>
          <li><strong>Network Risk:</strong> Solana network congestion or downtime</li>
          <li><strong>Arbiter Risk:</strong> Human arbiters may make subjective or disputed decisions</li>
          <li><strong>Upgrade Risk:</strong> Future protocol changes could introduce new vulnerabilities</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Risk Mitigation</h2>
        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6">
          <ul className="space-y-2 text-sm">
            <li>✓ Multiple audit rounds before mainnet</li>
            <li>✓ Conservative rollout with monitoring</li>
            <li>✓ Emergency pause mechanisms (time-limited)</li>
            <li>✓ Transparent incident response plan</li>
            <li>✓ Insurance fund consideration (future)</li>
            <li>✓ Community governance for major changes</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Bug Bounty Program</h2>
        <p>
          Details coming soon. We will reward security researchers who responsibly disclose vulnerabilities:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Critical vulnerabilities: Up to $50,000</li>
          <li>High severity: Up to $25,000</li>
          <li>Medium severity: Up to $10,000</li>
          <li>Low severity: Up to $2,500</li>
        </ul>

        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Remember:</strong> Smart contracts carry risk. Users retain full custody and must proceed responsibly. Never stake more than you can afford to lose. SolArena Labs cannot reverse on-chain transactions.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
