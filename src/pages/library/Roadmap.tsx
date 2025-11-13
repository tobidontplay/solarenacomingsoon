import ArticleLayout from "@/components/ArticleLayout";

export default function Roadmap() {
  return (
    <ArticleLayout title="Roadmap Updates">
      <div className="space-y-6">
        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6">
          <p className="text-sm font-semibold">
            🗺️ <strong>Launch Status:</strong> Roadmap is preliminary and subject to change based on community feedback and market conditions.
          </p>
        </div>

        <p className="text-lg">
          SolArena's development roadmap prioritizes security, user experience, and community-driven growth. Here's what's planned.
        </p>

        <h2 className="text-2xl font-bold mt-8">Phase 1: The Arena (Q1 2025)</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <h3 className="font-bold text-neon-cyan mb-3">Core Protocol Launch</h3>
          <ul className="space-y-2 text-sm">
            <li>✅ Smart contract development and testing</li>
            <li>✅ Pyth Network oracle integration</li>
            <li>✅ Arena Points system implementation</li>
            <li>🔄 Professional security audits (in progress)</li>
            <li>🔄 Testnet launch with community testing</li>
            <li>⏳ Mainnet launch (pending audits)</li>
            <li>⏳ Founding Titans program activation</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Phase 2: Growth & Expansion (Q2 2025)</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <h3 className="font-bold text-neon-purple mb-3">Ecosystem Development</h3>
          <ul className="space-y-2 text-sm">
            <li>⏳ $ARENA token launch and distribution</li>
            <li>⏳ Pro tools and analytics dashboard</li>
            <li>⏳ Mobile-optimized interface</li>
            <li>⏳ Advanced market templates</li>
            <li>⏳ Referral system v2 with enhanced tracking</li>
            <li>⏳ Community governance activation</li>
            <li>⏳ First ecosystem grants program</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Phase 3: Decentralization (Q3 2025)</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <h3 className="font-bold text-neon-cyan mb-3">DAO & Advanced Features</h3>
          <ul className="space-y-2 text-sm">
            <li>⏳ Full DAO governance implementation</li>
            <li>⏳ Dispute resolution system</li>
            <li>⏳ Multi-arbiter consensus for high-stakes markets</li>
            <li>⏳ Staking mechanisms for $ARENA</li>
            <li>⏳ Cross-chain bridge exploration</li>
            <li>⏳ API and developer tools</li>
            <li>⏳ Third-party integrations</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Phase 4: Innovation (Q4 2025+)</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <h3 className="font-bold text-neon-purple mb-3">Next-Gen Features</h3>
          <ul className="space-y-2 text-sm">
            <li>⏳ AI-powered market suggestions</li>
            <li>⏳ Automated market makers (AMM) for liquidity</li>
            <li>⏳ NFT-based achievements and badges</li>
            <li>⏳ Social features (profiles, follows, feeds)</li>
            <li>⏳ Tournament and league systems</li>
            <li>⏳ Mobile app (iOS & Android)</li>
            <li>⏳ Institutional-grade analytics</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Upcoming Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan rounded-lg p-4">
            <h4 className="font-bold mb-2">Oracle Expansion</h4>
            <ul className="text-sm space-y-1">
              <li>• Additional Pyth price feeds</li>
              <li>• Switchboard integration</li>
              <li>• Custom oracle support</li>
              <li>• Multi-oracle consensus</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-neon-purple rounded-lg p-4">
            <h4 className="font-bold mb-2">Wallet & Tools</h4>
            <ul className="text-sm space-y-1">
              <li>• Ledger hardware wallet support</li>
              <li>• WalletConnect integration</li>
              <li>• Telegram bot for notifications</li>
              <li>• Discord bot for market alerts</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan rounded-lg p-4">
            <h4 className="font-bold mb-2">Analytics Platforms</h4>
            <ul className="text-sm space-y-1">
              <li>• Dune Analytics dashboards</li>
              <li>• Flipside Crypto integration</li>
              <li>• Custom API for developers</li>
              <li>• Real-time market data feeds</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border border-neon-purple rounded-lg p-4">
            <h4 className="font-bold mb-2">Ecosystem Partners</h4>
            <ul className="text-sm space-y-1">
              <li>• Jupiter aggregator integration</li>
              <li>• Raydium liquidity pools</li>
              <li>• Magic Eden NFT marketplace</li>
              <li>• Dialect notifications</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">Community-Driven Priorities</h2>
        <p>
          The roadmap will evolve based on:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Community feedback and feature requests</li>
          <li>DAO governance votes on priorities</li>
          <li>Market demand and user behavior</li>
          <li>Technical feasibility and security considerations</li>
          <li>Partnership opportunities and ecosystem growth</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Stay Updated</h2>
        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6">
          <p className="text-sm mb-3">
            Follow our progress and get involved:
          </p>
          <ul className="text-sm space-y-1">
            <li>• Quarterly roadmap updates on X and Discord</li>
            <li>• Monthly development recaps</li>
            <li>• Community calls for major milestones</li>
            <li>• GitHub for open-source contributions</li>
          </ul>
        </div>

        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Note:</strong> Timelines are estimates and subject to change. Security and quality take priority over speed. We'll ship when it's ready, not when it's rushed.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
