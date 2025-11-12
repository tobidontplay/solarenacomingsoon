import { Button } from "@/components/ui/button";
import { Check, Users, Zap } from "lucide-react";

interface CommunityProps {
  showJoinModal: () => void;
  showPartnerForm: () => void;
}

export default function Community({ showJoinModal, showPartnerForm }: CommunityProps) {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Users className="w-20 h-20 mx-auto text-neon-cyan" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple bg-clip-text text-transparent">
            For Builders, Creators & Communities
          </h1>
          <p className="text-lg text-muted-foreground">
            We're not paying for shills — we're building the Arena with the people who made Solana culture.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 border-2 border-neon-purple rounded-2xl p-8 sm:p-12 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
              Join as a Founding Gladiator
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-8">
              Get your custom community Faction role, early tools, and referral rewards. Join as a founding Gladiator.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-bold text-neon-cyan mb-4">What You Get</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-neon-green mt-0.5" />
                    <span><strong>Custom Faction Role:</strong> Branded Discord role for your community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-neon-green mt-0.5" />
                    <span><strong>Early Pro Access:</strong> Premium tools before public launch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-neon-green mt-0.5" />
                    <span><strong>Boosted Referral Rewards:</strong> Higher % from your community's activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-neon-green mt-0.5" />
                    <span><strong>Visibility:</strong> Featured across our ecosystem and socials</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-neon-purple mb-4">Who We're Looking For</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-neon-green mt-0.5" />
                    <span>Trading & alpha communities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-neon-green mt-0.5" />
                    <span>Meme coin & NFT projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-neon-green mt-0.5" />
                    <span>Content creators & influencers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-neon-green mt-0.5" />
                    <span>Solana ecosystem builders</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-cyan" onClick={showPartnerForm}>
                <Users className="w-5 h-5 mr-2" /> Apply as a Partner Community
              </Button>
            </div>
          </div>

          <div className="bg-card/60 border border-card-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6">Partner Benefits Breakdown</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-neon-green mt-0.5" />
                <span><strong>Custom Discord Faction Role:</strong> Your community gets a unique, branded role in our Discord</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-neon-green mt-0.5" />
                <span><strong>Referral Dashboard:</strong> Track your community's activity and earnings in real-time</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-neon-green mt-0.5" />
                <span><strong>Lifetime Pro Access:</strong> Premium tools, private bets, analytics</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-neon-green mt-0.5" />
                <span><strong>Airdrop Priority:</strong> Reserved $ARENA allocation for top Factions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-16 bg-card/20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Build Together?</h2>
          <p className="text-lg text-muted-foreground">
            Join the Arena community or apply as a partner to shape the future of on-chain betting.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="bg-gradient-to-r from-neon-purple to-neon-cyan" onClick={showJoinModal}>
              <Zap className="w-5 h-5 mr-2" /> Join the Arena
            </Button>
            <Button size="lg" variant="outline" className="border-neon-purple" onClick={showPartnerForm}>
              <Users className="w-5 h-5 mr-2" /> Apply as Partner
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
