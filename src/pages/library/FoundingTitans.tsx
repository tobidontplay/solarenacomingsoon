import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function FoundingTitans() {
  return (
    <ArticleLayout title="The 10 Founding Titans Program">
      <div className="space-y-6">
        <p className="text-lg">
          The Founding Titans are early alliances of builders, creators, and community leaders shaping SolArena's ecosystem. Only 10 slots are available for this exclusive program.
        </p>

        <h2 className="text-2xl font-bold mt-8">Why It Exists</h2>
        <p>
          We want SolArena to grow organically — through influence, not ads. Titans get rewarded for bringing communities, creating activity, and fueling on-chain competition.
        </p>

        <h2 className="text-2xl font-bold mt-8">Titan Benefits</h2>
        <div className="bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border-2 border-neon-purple rounded-xl p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-neon-cyan">✓</span>
              <span><strong>Custom Faction Role:</strong> A branded Discord role for your community to stand out</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neon-cyan">✓</span>
              <span><strong>Early Pro Access:</strong> Premium tools like analytics and private markets before public launch</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neon-cyan">✓</span>
              <span><strong>Boosted Referral Rewards:</strong> Enhanced benefits from your community's activity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neon-cyan">✓</span>
              <span><strong>Visibility:</strong> Featured across our ecosystem and socials for maximum exposure</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neon-cyan">✓</span>
              <span><strong>Founding Titan Badge:</strong> Permanent on-chain recognition as a protocol founder</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neon-cyan">✓</span>
              <span><strong>Private Council Access:</strong> Direct line to the team for feedback and roadmap influence</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Who We're Looking For</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Trading & alpha communities</li>
          <li>Meme coin & NFT projects</li>
          <li>Content creators & influencers</li>
          <li>Solana ecosystem builders</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">How to Apply</h2>
        <p>
          Applications are confidential, and we'll discuss details privately to align with your plans. We're looking for communities that can drive meaningful participation and bring unique value to the Arena.
        </p>

        <div className="flex justify-center mt-8">
          <Link href="/community">
            <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-cyan">
              Apply as a Founding Titan
            </Button>
          </Link>
        </div>

        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Note:</strong> All partnerships respect our legal disclaimer. This is a collaboration program, not a paid promotion. Titans earn through performance and community contribution, not upfront payments.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
