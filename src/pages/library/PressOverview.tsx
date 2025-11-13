import ArticleLayout from "@/components/ArticleLayout";

export default function PressOverview() {
  return (
    <ArticleLayout title="SolArena: Put Your Money Where Your Mouth Is">
      <div className="space-y-6">
        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6">
          <p className="text-sm font-semibold">
            📰 <strong>Launch Status:</strong> Press materials will be refreshed near public launch. Media inquiries: press@solarenalabs.com
          </p>
        </div>

        <p className="text-lg italic">
          "On-chain social prediction turns conviction into a public sport. SolArena makes speculation transparent, competitive, and community-driven."
        </p>

        <h2 className="text-2xl font-bold mt-8">The Thesis</h2>
        <p>
          Crypto Twitter is full of hot takes, alpha calls, and bold predictions. But talk is cheap. SolArena turns conviction into action by letting users create and compete in peer-to-peer prediction markets — all settled transparently on-chain.
        </p>
        <p className="mt-4">
          Unlike traditional prediction platforms that act as middlemen, SolArena is a decentralized protocol. Users interact directly with smart contracts, retain full custody of their funds, and compete against each other — not a house.
        </p>

        <h2 className="text-2xl font-bold mt-8">Why It Matters</h2>
        <div className="space-y-4">
          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Transparency</h3>
            <p className="text-sm text-muted-foreground">
              Every transaction, outcome, and fee is recorded on-chain. No hidden odds, no black boxes, no trust required.
            </p>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-purple mb-2">User Sovereignty</h3>
            <p className="text-sm text-muted-foreground">
              Your funds stay in your wallet until you stake. Smart contracts handle everything else. No custodians, no middlemen.
            </p>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Community-First</h3>
            <p className="text-sm text-muted-foreground">
              Growth is organic, driven by Founding Titans — builders, KOLs, and communities who shape the protocol's future.
            </p>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-purple mb-2">Solana-Powered</h3>
            <p className="text-sm text-muted-foreground">
              Near-instant finality and low fees make SolArena's UX seamless. Pyth Network oracles deliver reliable, tamper-proof data.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Create:</strong> Anyone can create a prediction market on any event — token prices, meme wars, crypto drama</li>
          <li><strong>Compete:</strong> Users stake SOL on YES or NO. Pools form directly in smart contracts</li>
          <li><strong>Resolve:</strong> Outcomes are determined by oracles (automated) or arbiters (community-verified)</li>
          <li><strong>Earn:</strong> Winners claim rewards proportionally. Everyone earns Arena Points for participation</li>
        </ol>

        <h2 className="text-2xl font-bold mt-8">Arena Points & $ARENA</h2>
        <p>
          Arena Points are your on-chain reputation score. You earn them by creating markets, making predictions, winning, and referring users. They're not tokens (yet), but they directly influence your $ARENA airdrop eligibility.
        </p>
        <p className="mt-4">
          $ARENA will power governance, unlock pro features, and reward long-term contributors. Early and consistent users get priority.
        </p>

        <h2 className="text-2xl font-bold mt-8">Founding Titans Program</h2>
        <p>
          SolArena grows through community leadership, not paid ads. The Founding Titans program invites builders, creators, and KOLs to shape the protocol. Benefits include:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Custom faction roles and branding</li>
          <li>Early access to pro tools</li>
          <li>Boosted referral rewards</li>
          <li>Maximum visibility across the ecosystem</li>
          <li>Private council access for roadmap influence</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Target Audience</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Crypto Traders:</strong> Put your alpha where your mouth is</li>
          <li><strong>Meme Communities:</strong> Settle debates on-chain</li>
          <li><strong>KOLs & Influencers:</strong> Build reputation through accurate predictions</li>
          <li><strong>Solana Builders:</strong> Integrate with a growing prediction protocol</li>
          <li><strong>Degens:</strong> Compete, earn, and climb leaderboards</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Key Differentiators</h2>
        <div className="bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border-2 border-neon-cyan rounded-xl p-6">
          <ul className="space-y-2 text-sm">
            <li>✓ <strong>No House:</strong> Peer-to-peer, not platform vs. user</li>
            <li>✓ <strong>No Custody:</strong> Users keep control of funds</li>
            <li>✓ <strong>Transparent Fees:</strong> 0.1% entry, 1.5% on winnings (only if you win)</li>
            <li>✓ <strong>On-Chain Everything:</strong> Markets, outcomes, points, governance</li>
            <li>✓ <strong>Community-Driven:</strong> Titans and DAO shape the future</li>
            <li>✓ <strong>Solana-Native:</strong> Fast, cheap, and scalable</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Roadmap Highlights</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Q1 2025:</strong> Mainnet launch, Founding Titans activation</li>
          <li><strong>Q2 2025:</strong> $ARENA token launch, pro tools, mobile optimization</li>
          <li><strong>Q3 2025:</strong> Full DAO governance, staking, dispute resolution</li>
          <li><strong>Q4 2025+:</strong> AI features, mobile app, institutional tools</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Media Contact</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <p className="text-sm mb-3">
            For press inquiries, partnerships, or interviews:
          </p>
          <ul className="text-sm space-y-1">
            <li>• Email: press@solarenalabs.com</li>
            <li>• X: @SOLArenaLabs</li>
            <li>• Discord: discord.gg/GmG6xrnUm8</li>
            <li>• Website: solarenalabs.com</li>
          </ul>
        </div>

        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>About SolArena Labs:</strong> SolArena Labs is building the future of decentralized prediction markets on Solana. Our mission is to make speculation transparent, competitive, and community-driven — where conviction meets action.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
