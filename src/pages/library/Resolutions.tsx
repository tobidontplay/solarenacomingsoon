import ArticleLayout from "@/components/ArticleLayout";

export default function Resolutions() {
  return (
    <ArticleLayout title="How Resolutions Work">
      <div className="space-y-6">
        <p className="text-lg">
          SolArena uses a hybrid resolution system combining decentralized oracles and verified arbiters to ensure transparency and fairness for all market types.
        </p>

        <h2 className="text-2xl font-bold mt-8">Oracle Resolution</h2>
        <div className="bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border-2 border-neon-cyan rounded-xl p-6">
          <h3 className="font-bold text-neon-cyan mb-3 text-xl">🤖 Automated & Verifiable</h3>
          <p className="text-sm text-muted-foreground mb-4">
            For objective, data-driven outcomes like token prices, trading volumes, or timestamps.
          </p>
          
          <h4 className="font-bold mb-2">How It Works</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm mb-4">
            <li>Market creator specifies oracle parameters (price feed, threshold, deadline)</li>
            <li>Pyth Network provides real-time, tamper-proof price data</li>
            <li>Smart contract automatically checks conditions at deadline</li>
            <li>Outcome is determined and recorded on-chain</li>
            <li>Winners can immediately claim rewards</li>
          </ol>

          <h4 className="font-bold mb-2">Benefits</h4>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Fully automated (no human intervention)</li>
            <li>• Instant resolution at deadline</li>
            <li>• Tamper-proof data from Pyth Network</li>
            <li>• Verifiable on-chain</li>
            <li>• No disputes or subjectivity</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Arbiter Resolution</h2>
        <div className="bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border-2 border-neon-purple rounded-xl p-6">
          <h3 className="font-bold text-neon-purple mb-3 text-xl">⚔️ Human Judgment</h3>
          <p className="text-sm text-muted-foreground mb-4">
            For subjective outcomes like meme wars, community events, or cultural predictions where oracle data doesn't exist.
          </p>
          
          <h4 className="font-bold mb-2">How It Works</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm mb-4">
            <li>Market creator designates a trusted arbiter (or uses default)</li>
            <li>Arbiter reviews evidence and community input after deadline</li>
            <li>Arbiter submits decision on-chain (YES or NO)</li>
            <li>Decision is final and recorded permanently</li>
            <li>Winners claim rewards based on arbiter's ruling</li>
          </ol>

          <h4 className="font-bold mb-2">Arbiter Selection</h4>
          <ul className="text-sm space-y-1 ml-4">
            <li>• Verified community members with reputation</li>
            <li>• KOLs and Founding Titans</li>
            <li>• Domain experts for specific topics</li>
            <li>• On-chain reputation tracking</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-card-border rounded-lg overflow-hidden">
            <thead className="bg-card/60">
              <tr>
                <th className="p-3 text-left">Feature</th>
                <th className="p-3 text-left">Oracle Mode</th>
                <th className="p-3 text-left">Arbiter Mode</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-card-border">
                <td className="p-3 font-medium">Speed</td>
                <td className="p-3 text-neon-cyan">Instant</td>
                <td className="p-3 text-neon-purple">Hours to days</td>
              </tr>
              <tr className="border-t border-card-border bg-card/30">
                <td className="p-3 font-medium">Cost</td>
                <td className="p-3 text-neon-cyan">Low (oracle fees)</td>
                <td className="p-3 text-neon-purple">Moderate (arbiter fee)</td>
              </tr>
              <tr className="border-t border-card-border">
                <td className="p-3 font-medium">Objectivity</td>
                <td className="p-3 text-neon-cyan">100% objective</td>
                <td className="p-3 text-neon-purple">Subjective</td>
              </tr>
              <tr className="border-t border-card-border bg-card/30">
                <td className="p-3 font-medium">Use Cases</td>
                <td className="p-3 text-neon-cyan">Prices, volumes, time</td>
                <td className="p-3 text-neon-purple">Memes, events, culture</td>
              </tr>
              <tr className="border-t border-card-border">
                <td className="p-3 font-medium">Disputes</td>
                <td className="p-3 text-neon-cyan">Not possible</td>
                <td className="p-3 text-neon-purple">Possible (V2)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mt-8">Dispute Resolution (V2)</h2>
        <p>
          Future versions will include dispute mechanisms for arbiter decisions:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Community voting on disputed outcomes</li>
          <li>Multi-arbiter consensus for high-stakes markets</li>
          <li>Reputation staking for arbiters</li>
          <li>Appeal windows with evidence submission</li>
        </ul>

        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Best Practice:</strong> Use Oracle Mode whenever possible for objective outcomes. Reserve Arbiter Mode for truly subjective predictions where no data feed exists.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
