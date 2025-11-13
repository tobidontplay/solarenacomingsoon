import { Book, FileText, Coins, Users, Code, Scale, Newspaper } from "lucide-react";
import { Link } from "wouter";

export default function Library() {
  const sections = [
    {
      title: "Overview & Quick Start",
      icon: Book,
      color: "neon-cyan",
      description: "New to SolArena? Start here.",
      articles: [
        { title: "What Is SolArena?", slug: "what-is-solarena" },
        { title: "Quick Start Guide", slug: "quick-start" },
        { title: "How to Earn Arena Points", slug: "earn-arena-points" },
      ]
    },
    {
      title: "Token & Points Mechanics",
      icon: Coins,
      color: "neon-purple",
      description: "Understand the reward system.",
      articles: [
        { title: "$ARENA Token Utility", slug: "arena-token" },
        { title: "Arena Points Explained", slug: "arena-points" },
        { title: "Airdrop Eligibility", slug: "airdrop-eligibility" },
      ]
    },
    {
      title: "Founding Titans Program",
      icon: Users,
      color: "neon-cyan",
      description: "Partner with us as a Founding Titan.",
      articles: [
        { title: "Become a Founding Titan", slug: "founding-titans" },
        { title: "Titan Rules & Perks", slug: "titan-perks" },
        { title: "Referral Structure", slug: "referral-structure" },
      ]
    },
    {
      title: "Technical Docs",
      icon: Code,
      color: "neon-purple",
      description: "For developers and advanced users.",
      articles: [
        { title: "Smart Contract Architecture", slug: "smart-contracts" },
        { title: "Security & Audits", slug: "security-audits" },
        { title: "How Resolutions Work", slug: "resolutions" },
      ]
    },
    {
      title: "Governance & Future",
      icon: FileText,
      color: "neon-cyan",
      description: "Long-term vision and roadmap.",
      articles: [
        { title: "$ARENA Governance Roadmap", slug: "governance" },
        { title: "Community Treasury & DAO", slug: "treasury-dao" },
        { title: "Roadmap Updates", slug: "roadmap" },
      ]
    },
    {
      title: "Legal & Disclaimers",
      icon: Scale,
      color: "neon-purple",
      description: "Stay compliant and informed.",
      articles: [
        { title: "Terms of Participation", slug: "terms" },
        { title: "Risk Disclosure", slug: "risk-disclosure" },
        { title: "Regional Restrictions", slug: "regional-restrictions" },
      ]
    },
    {
      title: "Press & Articles",
      icon: Newspaper,
      color: "neon-cyan",
      description: "External storytelling and media.",
      articles: [
        { title: "SolArena: Put Your Money Where Your Mouth Is", slug: "press-overview" },
        { title: "How Solana Enables Social Predictions", slug: "solana-predictions" },
      ]
    },
  ];

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Book className="w-20 h-20 mx-auto text-neon-cyan" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Arena Library
          </h1>
          <p className="text-lg text-muted-foreground">
            Your complete guide to the SolArena protocol — from quick starts to technical deep dives.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div key={idx} className="bg-card/60 border border-card-border rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-${section.color}/20 border-2 border-${section.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 text-${section.color}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                    <p className="text-sm text-muted-foreground">{section.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {section.articles.map((article, articleIdx) => (
                    <Link key={articleIdx} href={`/library/${article.slug}`}>
                      <a className="block p-4 rounded-lg bg-background/50 border border-card-border hover:border-neon-cyan/50 transition-colors group">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
                          <span className="text-sm font-medium group-hover:text-neon-cyan transition-colors">
                            {article.title}
                          </span>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-16 bg-card/20">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Can't Find What You're Looking For?</h2>
          <p className="text-muted-foreground">
            Join the discussion on{" "}
            <a href="https://discord.gg/GmG6xrnUm8" target="_blank" rel="noopener noreferrer" className="text-neon-purple hover:text-neon-cyan transition-colors">
              Discord
            </a>
            {" "}or{" "}
            <a href="https://x.com/i/communities/1986456387635806219" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:text-neon-purple transition-colors">
              X Community
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
