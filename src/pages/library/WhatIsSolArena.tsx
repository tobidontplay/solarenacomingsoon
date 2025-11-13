import ArticleLayout from "@/components/ArticleLayout";

export default function WhatIsSolArena() {
  return (
    <ArticleLayout title="What Is SolArena?">
      <div className="space-y-6">
        <p className="text-lg">
          SolArena is a decentralized prediction protocol where speculation becomes sport. Users compete by creating or joining peer-to-peer prediction markets on crypto events, meme wars, or market outcomes — all transparently settled on-chain.
        </p>

        <h2 className="text-2xl font-bold mt-8">Why It Matters</h2>
        <p>
          Traditional prediction platforms take custody of your funds and extract house edges. SolArena removes both. Every pool is peer-to-peer, funds are locked in audited smart contracts, and outcomes are verified by oracles or arbiters.
        </p>

        <h2 className="text-2xl font-bold mt-8">Core Idea</h2>
        <p>
          <strong>Predict. Compete. Earn.</strong> Your skill and conviction are rewarded with Arena Points — your on-chain reputation that fuels $ARENA eligibility and unlocks advanced tools.
        </p>

        <h2 className="text-2xl font-bold mt-8">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Create:</strong> Set up a prediction market on any event with custom terms.</li>
          <li><strong>Compete:</strong> Stake SOL on YES or NO. Pools form directly in smart contracts.</li>
          <li><strong>Resolve:</strong> Oracles or arbiters settle outcomes on-chain. Winners claim rewards.</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8">Built on Solana</h2>
        <p>
          SolArena leverages Solana's speed and low fees to enable instant settlements and real-time oracle feeds via Pyth Network. No waiting, no gas wars — just pure competition.
        </p>

        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Key Takeaway:</strong> SolArena is not a bookmaker or casino. It's a peer-to-peer protocol where you compete against other users via smart contracts. No house, no custody, no middlemen.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
