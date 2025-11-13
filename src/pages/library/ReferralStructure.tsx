import ArticleLayout from "@/components/ArticleLayout";

export default function ReferralStructure() {
  return (
    <ArticleLayout title="Referral Structure & Point Multipliers">
      <div className="space-y-6">
        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6">
          <p className="text-sm font-semibold">
            📅 <strong>Launch Status:</strong> Final multipliers and tier thresholds will be announced before Phase 1 ends.
          </p>
        </div>

        <p className="text-lg">
          SolArena's referral system rewards you for bringing genuine participants to the protocol. The more your referrals engage, the more you earn.
        </p>

        <h2 className="text-2xl font-bold mt-8">How Referrals Work</h2>
        <div className="space-y-4">
          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">1. Get Your Referral Link</h3>
            <p className="text-sm text-muted-foreground">
              Once connected, you'll receive a unique referral link tied to your wallet address. Share this with your community.
            </p>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-purple mb-2">2. Share with Your Community</h3>
            <p className="text-sm text-muted-foreground">
              Post your link on X, Discord, Telegram, or anywhere your community gathers. Explain why you're excited about SolArena.
            </p>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">3. Earn from Their Activity</h3>
            <p className="text-sm text-muted-foreground">
              When referred users participate, you earn a percentage of their Arena Points. This doesn't reduce their points — it's bonus rewards for you.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">Referral Tiers</h2>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-gray-500/20 to-gray-400/20 border-2 border-gray-400 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-xl">Bronze Tier</h3>
              <span className="text-sm text-muted-foreground">Default</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Starting tier for all users
            </p>
            <ul className="text-sm space-y-1">
              <li>• 10% of referred users' points</li>
              <li>• Lifetime tracking</li>
              <li>• Basic referral dashboard</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-orange-500/20 to-orange-400/20 border-2 border-orange-400 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-xl">Silver Tier</h3>
              <span className="text-sm text-muted-foreground">10+ Active Referrals</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              For consistent community builders
            </p>
            <ul className="text-sm space-y-1">
              <li>• 12% of referred users' points</li>
              <li>• Enhanced dashboard with analytics</li>
              <li>• Priority support</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 border-2 border-yellow-400 rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-xl">Gold Tier</h3>
              <span className="text-sm text-muted-foreground">25+ Active Referrals</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              For influential community leaders
            </p>
            <ul className="text-sm space-y-1">
              <li>• 15% of referred users' points</li>
              <li>• Advanced analytics and insights</li>
              <li>• Custom Discord role</li>
              <li>• Featured on leaderboards</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-neon-purple/30 to-neon-cyan/30 border-2 border-neon-cyan rounded-xl p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-xl">Titan Tier</h3>
              <span className="text-sm text-muted-foreground">Founding Titans Only</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Exclusive tier for approved Founding Titans
            </p>
            <ul className="text-sm space-y-1">
              <li>• 20% of referred users' points</li>
              <li>• Full analytics suite</li>
              <li>• Branded faction role</li>
              <li>• Maximum visibility across ecosystem</li>
              <li>• Private council access</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">Quality Over Quantity</h2>
        <p>
          Referral rewards are weighted by quality, not just volume:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Active Participation:</strong> Referrals who consistently engage earn you more</li>
          <li><strong>Quality Markets:</strong> Referrals who create good markets boost your multiplier</li>
          <li><strong>Win Rate:</strong> Skilled referrals contribute more to your rewards</li>
          <li><strong>Longevity:</strong> Long-term participants are worth more than one-time users</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Anti-Abuse Protection</h2>
        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6">
          <p className="text-sm mb-3">
            To ensure fairness, we implement strict anti-abuse measures:
          </p>
          <ul className="text-sm space-y-1">
            <li>• Sybil detection algorithms</li>
            <li>• Minimum activity thresholds for referrals to count</li>
            <li>• Manual review of suspicious patterns</li>
            <li>• Penalties for farming or bot networks</li>
            <li>• Community reporting system</li>
          </ul>
        </div>

        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Pro Tip:</strong> Focus on bringing genuine users who will actively participate. One quality referral who engages consistently is worth more than ten inactive accounts.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
