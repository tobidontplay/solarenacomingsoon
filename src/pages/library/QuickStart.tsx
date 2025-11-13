import ArticleLayout from "@/components/ArticleLayout";

export default function QuickStart() {
  return (
    <ArticleLayout title="Quick Start Guide">
      <div className="space-y-6">
        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6">
          <p className="text-sm font-semibold">
            📅 <strong>Launch Status:</strong> This guide will be updated on mainnet launch with live screenshots and step-by-step walkthroughs.
          </p>
        </div>

        <p className="text-lg">
          Get started with SolArena in minutes. This guide walks you through connecting your wallet, exploring markets, and making your first prediction.
        </p>

        <h2 className="text-2xl font-bold mt-8">Step 1: Connect Your Wallet</h2>
        <p>
          SolArena works with popular Solana wallets:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Phantom:</strong> Most popular Solana wallet with mobile and browser support</li>
          <li><strong>Backpack:</strong> Modern wallet with built-in xNFT support</li>
          <li><strong>Solflare:</strong> Feature-rich wallet with staking capabilities</li>
        </ul>
        <p className="mt-4">
          Click "Connect Wallet" in the top right corner and approve the connection. Your wallet address will be displayed once connected.
        </p>

        <h2 className="text-2xl font-bold mt-8">Step 2: Explore Markets</h2>
        <p>
          Browse active prediction markets on the main dashboard. Each market shows:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Market question and terms</li>
          <li>Current YES/NO pool sizes</li>
          <li>Resolution method (Oracle or Arbiter)</li>
          <li>Deadline and settlement time</li>
          <li>Creator and participants</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Step 3: Create or Join</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-neon-cyan mb-2">Create a Market</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Click "Create Market" button</li>
              <li>Define your prediction question clearly</li>
              <li>Set YES/NO terms and resolution criteria</li>
              <li>Choose resolution method (Oracle for price-based, Arbiter for subjective)</li>
              <li>Set deadline and initial stake</li>
              <li>Submit and approve transaction</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-bold text-neon-purple mb-2">Join a Market</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Select a market you want to participate in</li>
              <li>Review the terms and resolution method</li>
              <li>Choose YES or NO based on your prediction</li>
              <li>Enter your SOL stake amount</li>
              <li>Confirm and approve the transaction</li>
            </ol>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">Step 4: Resolution</h2>
        <p>
          Markets resolve in one of two ways:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Oracle Mode:</strong> Automated resolution using Pyth Network price feeds for objective, verifiable outcomes</li>
          <li><strong>Arbiter Mode:</strong> Trusted community arbiters decide subjective outcomes (memes, events, culture)</li>
        </ul>
        <p className="mt-4">
          All resolutions are recorded on-chain and publicly verifiable.
        </p>

        <h2 className="text-2xl font-bold mt-8">Step 5: Claim and Earn</h2>
        <p>
          Once a market resolves:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Winners can claim their rewards directly from the smart contract</li>
          <li>Rewards are proportional to your stake in the winning pool</li>
          <li>Arena Points are automatically credited to your account</li>
          <li>Check your profile to see updated stats and leaderboard position</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Step 6: Learn and Level Up</h2>
        <p>
          As you participate:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Accumulate Arena Points for every action</li>
          <li>Climb the leaderboard to unlock pro features</li>
          <li>Refer friends to earn bonus points</li>
          <li>Qualify for future $ARENA airdrop phases</li>
        </ul>

        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Pro Tip:</strong> Start with smaller stakes to learn the mechanics. Focus on markets you understand well. Consistency and quality predictions beat high-risk gambling.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
