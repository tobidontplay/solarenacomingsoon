import ArticleLayout from "@/components/ArticleLayout";

export default function TitanPerks() {
  return (
    <ArticleLayout title="Titan Rules & Perks">
      <div className="space-y-6">
        <p className="text-lg">
          Founding Titans are early partners who help shape the SolArena protocol. This program rewards builders, creators, and community leaders with exclusive benefits and enhanced visibility.
        </p>

        <h2 className="text-2xl font-bold mt-8">Titan Rules</h2>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-neon-cyan text-xl">•</span>
              <span><strong>No Paid Shilling:</strong> Titans promote through genuine engagement, not paid advertisements or misrepresentation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neon-cyan text-xl">•</span>
              <span><strong>No Custodial Control:</strong> Never handle user funds or act as a middleman</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neon-cyan text-xl">•</span>
              <span><strong>Fair Market Creation:</strong> Create clear, honest markets with transparent terms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neon-cyan text-xl">•</span>
              <span><strong>Respect Guidelines:</strong> Follow protocol guidelines and local laws</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neon-cyan text-xl">•</span>
              <span><strong>Community First:</strong> Prioritize community value over personal gain</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Exclusive Perks</h2>
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border-2 border-neon-purple rounded-xl p-6">
            <h3 className="font-bold text-neon-cyan mb-2 flex items-center gap-2">
              <span className="text-2xl">🎯</span> Custom Faction Role
            </h3>
            <p className="text-sm text-muted-foreground">
              A branded Discord role for your community to stand out. Your faction gets its own identity within the Arena ecosystem.
            </p>
          </div>

          <div className="bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border-2 border-neon-cyan rounded-xl p-6">
            <h3 className="font-bold text-neon-purple mb-2 flex items-center gap-2">
              <span className="text-2xl">⚡</span> Early Pro Access
            </h3>
            <p className="text-sm text-muted-foreground">
              Get premium tools like analytics dashboards, private markets, and advanced filters before public launch.
            </p>
          </div>

          <div className="bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border-2 border-neon-purple rounded-xl p-6">
            <h3 className="font-bold text-neon-cyan mb-2 flex items-center gap-2">
              <span className="text-2xl">📈</span> Boosted Referral Rewards
            </h3>
            <p className="text-sm text-muted-foreground">
              Enhanced benefits from your community's activity. Titans earn more from referrals and community engagement.
            </p>
          </div>

          <div className="bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border-2 border-neon-cyan rounded-xl p-6">
            <h3 className="font-bold text-neon-purple mb-2 flex items-center gap-2">
              <span className="text-2xl">🌟</span> Maximum Visibility
            </h3>
            <p className="text-sm text-muted-foreground">
              Featured across our ecosystem surfaces, social media, and community channels for maximum exposure.
            </p>
          </div>

          <div className="bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border-2 border-neon-purple rounded-xl p-6">
            <h3 className="font-bold text-neon-cyan mb-2 flex items-center gap-2">
              <span className="text-2xl">🏆</span> Founding Titan Badge
            </h3>
            <p className="text-sm text-muted-foreground">
              Permanent on-chain recognition as a protocol founder. This badge is forever tied to your wallet address.
            </p>
          </div>

          <div className="bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border-2 border-neon-cyan rounded-xl p-6">
            <h3 className="font-bold text-neon-purple mb-2 flex items-center gap-2">
              <span className="text-2xl">🔐</span> Private Council Access
            </h3>
            <p className="text-sm text-muted-foreground">
              Direct line to the team for feedback, roadmap influence, and early feature testing. Shape the protocol's future.
            </p>
          </div>

          <div className="bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border-2 border-neon-purple rounded-xl p-6">
            <h3 className="font-bold text-neon-cyan mb-2 flex items-center gap-2">
              <span className="text-2xl">💎</span> Enhanced Airdrop Allocation
            </h3>
            <p className="text-sm text-muted-foreground">
              Founding Titans receive priority allocation in $ARENA distribution phases based on contribution and community impact.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">Performance-Based Rewards</h2>
        <p>
          Titan benefits scale with your contribution:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>More community participation = higher referral multipliers</li>
          <li>Quality market creation = enhanced visibility</li>
          <li>Consistent engagement = priority in future programs</li>
          <li>Community growth = increased allocation in rewards</li>
        </ul>

        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Note:</strong> All partnerships respect our legal disclaimer. This is a collaboration program, not a paid promotion. Titans earn through performance and community contribution, not upfront payments.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
