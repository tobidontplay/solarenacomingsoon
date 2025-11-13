import ArticleLayout from "@/components/ArticleLayout";

export default function SolanaPredictions() {
  return (
    <ArticleLayout title="How Solana's Speed Enables Social Predictions">
      <div className="space-y-6">
        <p className="text-lg">
          Solana's unique architecture makes it the ideal blockchain for real-time prediction markets. Here's why speed, cost, and reliability matter for social predictions.
        </p>

        <h2 className="text-2xl font-bold mt-8">The Speed Advantage</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <h3 className="font-bold text-neon-cyan mb-3">Near-Instant Finality</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Solana's 400ms block times mean transactions confirm almost instantly. For prediction markets, this enables:
          </p>
          <ul className="text-sm space-y-2 ml-4">
            <li>• Real-time market participation without waiting</li>
            <li>• Instant resolution and payout claims</li>
            <li>• Dynamic odds that update immediately</li>
            <li>• Seamless UX that feels like Web2</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">The Cost Factor</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <h3 className="font-bold text-neon-purple mb-3">Micro-Cent Transactions</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Average transaction costs on Solana are ~$0.00025. This makes small-stake predictions viable:
          </p>
          <ul className="text-sm space-y-2 ml-4">
            <li>• Users can participate with any amount</li>
            <li>• No gas wars or fee spikes</li>
            <li>• Profitable even for small wins</li>
            <li>• Accessible to global users</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Oracle Integration</h2>
        <div className="bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border-2 border-neon-cyan rounded-xl p-6">
          <h3 className="font-bold text-xl mb-3">Pyth Network: Real-Time Price Feeds</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Pyth Network provides high-frequency, low-latency price data directly on Solana. This enables:
          </p>
          <ul className="text-sm space-y-2">
            <li>• Automated resolution for price-based predictions</li>
            <li>• Sub-second price updates</li>
            <li>• Tamper-proof, verifiable data</li>
            <li>• Coverage for 100+ crypto assets</li>
            <li>• Confidence intervals for accuracy</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Scalability for Social</h2>
        <p>
          Solana's 65,000 TPS capacity means SolArena can scale to millions of users without congestion:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Viral Moments:</strong> Handle sudden traffic spikes from trending predictions</li>
          <li><strong>Global Participation:</strong> Support users worldwide simultaneously</li>
          <li><strong>Complex Markets:</strong> Multi-outcome predictions with many participants</li>
          <li><strong>Frequent Updates:</strong> Real-time leaderboards and point calculations</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Developer Experience</h2>
        <div className="space-y-4">
          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Anchor Framework</h3>
            <p className="text-sm text-muted-foreground">
              Rust-based framework with type safety, built-in security features, and excellent tooling. Faster development without sacrificing security.
            </p>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-purple mb-2">Composability</h3>
            <p className="text-sm text-muted-foreground">
              Easy integration with Jupiter (swaps), Raydium (liquidity), Magic Eden (NFTs), and other Solana protocols. Build features faster.
            </p>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Tooling Ecosystem</h3>
            <p className="text-sm text-muted-foreground">
              Solana Beach, Solscan, Dune Analytics, and more provide robust infrastructure for monitoring, analytics, and user experience.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">Why Not Ethereum?</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-card-border rounded-lg overflow-hidden">
            <thead className="bg-card/60">
              <tr>
                <th className="p-3 text-left">Feature</th>
                <th className="p-3 text-left">Solana</th>
                <th className="p-3 text-left">Ethereum</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-card-border">
                <td className="p-3 font-medium">Block Time</td>
                <td className="p-3 text-neon-cyan">400ms</td>
                <td className="p-3 text-muted-foreground">12s</td>
              </tr>
              <tr className="border-t border-card-border bg-card/30">
                <td className="p-3 font-medium">Transaction Cost</td>
                <td className="p-3 text-neon-cyan">~$0.00025</td>
                <td className="p-3 text-muted-foreground">$1-50+</td>
              </tr>
              <tr className="border-t border-card-border">
                <td className="p-3 font-medium">TPS</td>
                <td className="p-3 text-neon-cyan">65,000</td>
                <td className="p-3 text-muted-foreground">15-30</td>
              </tr>
              <tr className="border-t border-card-border bg-card/30">
                <td className="p-3 font-medium">Finality</td>
                <td className="p-3 text-neon-cyan">Instant</td>
                <td className="p-3 text-muted-foreground">~13 min</td>
              </tr>
              <tr className="border-t border-card-border">
                <td className="p-3 font-medium">UX</td>
                <td className="p-3 text-neon-cyan">Web2-like</td>
                <td className="p-3 text-muted-foreground">Slow, expensive</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-8">Real-World Impact</h2>
        <p>
          Solana's performance enables SolArena to deliver experiences impossible on slower chains:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Live Predictions:</strong> Create and join markets during live events</li>
          <li><strong>Micro-Stakes:</strong> Participate with $1-10 without fees eating profits</li>
          <li><strong>Instant Gratification:</strong> Claim winnings seconds after resolution</li>
          <li><strong>Global Access:</strong> No geographic bottlenecks or congestion</li>
          <li><strong>Mobile-First:</strong> Fast enough for seamless mobile UX</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">The Solana Ecosystem Advantage</h2>
        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6">
          <p className="text-sm mb-3">
            SolArena benefits from Solana's thriving ecosystem:
          </p>
          <ul className="text-sm space-y-1">
            <li>• Phantom, Backpack, Solflare: Best-in-class wallets</li>
            <li>• Jupiter: Seamless token swaps</li>
            <li>• Pyth Network: Real-time oracle data</li>
            <li>• Magic Eden: NFT integrations (future)</li>
            <li>• Dialect: Push notifications</li>
            <li>• Vibrant community of builders and users</li>
          </ul>
        </div>

        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Bottom Line:</strong> Solana's speed, cost, and ecosystem make it the only viable chain for real-time, social prediction markets at scale. SolArena wouldn't be possible anywhere else.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
