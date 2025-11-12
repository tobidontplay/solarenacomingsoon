export default function FAQ() {
  const faqs = [
    {
      question: "🧩 What is SolArena?",
      answer: "SolArena is the first on-chain betting arena on Solana where users create and join yes or no wagers about anything — token prices, meme wars, or crypto drama — all settled transparently on-chain. There are no bookies or middlemen. Just you, the crowd, and the chain."
    },
    {
      question: "💥 How does it work?",
      answer: "Each bet has two sides: YES and NO. You pick your side, stake your tokens, and when the outcome is decided, the winners split the losing side's pool based on how much they staked. It's peer-to-peer, not house versus player."
    },
    {
      question: "🏆 How do I earn in SolArena?",
      answer: "You earn by winning bets or by creating popular ones that attract volume. You can also collect Arena Points, which boost your airdrop eligibility and unlock premium features once the $ARENA token launches."
    },
    {
      question: "💎 What are Arena Points?",
      answer: "Arena Points are your reputation inside SolArena. You earn them by joining, creating, or winning bets, as well as through referrals or community activity. They will directly influence your airdrop rewards and access to upcoming Pro features."
    },
    {
      question: "💰 Are there any fees?",
      answer: "Yes, but they're small and transparent. There's a 0.1% entry fee on every bet and a 1.5% fee on winnings, only taken when you win. All fees go to the on-chain Treasury, which is public and auditable. SolArena never bets against users. The platform grows with the community."
    },
    {
      question: "⚙️ How is fairness guaranteed?",
      answer: "Every transaction and payout happens fully on-chain, so results and stakes are public and verifiable. There are two ways to resolve bets: Arbiter Mode for community or meme-based bets decided by trusted figures, and Oracle Mode for price-based bets using Pyth Network feeds."
    },
    {
      question: "🧠 What is Phase 1: The Arena?",
      answer: "Phase 1 launches the core betting experience. Users can create, fund, and resolve bets on-chain while earning Arena Points. It's the foundation for everything that comes next — a place to test your conviction, prove your alpha, and climb the leaderboard before the token launches."
    },
    {
      question: "🪂 Will there be an airdrop?",
      answer: "Yes. Arena Points earned during Phase 1 will directly affect $ARENA airdrop eligibility. The more you participate, the larger your potential rewards. Snapshots and details will be announced publicly on X and Discord."
    },
    {
      question: "🤝 Can creators or communities join early?",
      answer: "Yes. We're inviting early \"Gladiator\" communities and creators to help shape SolArena. They get custom Discord roles, early access to Pro features, boosted referral rewards, and visibility across our ecosystem. If you run a trading or meme community, reach out to us on X or Discord to collaborate."
    },
    {
      question: "🪩 What is SolArena Pro?",
      answer: "Pro Mode is the advanced toolset for top bettors and community leaders. It includes analytics dashboards, community bet creation tools, and future integrations for automated resolution or staking. Early partners and creators will get free access during the launch phase."
    },
    {
      question: "🔒 Is SolArena safe?",
      answer: "SolArena is built with Anchor (Rust) and deployed on Solana, known for speed and low fees. Before full launch, the contracts will be open-sourced and audited for transparency."
    },
    {
      question: "🧱 How does SolArena make money?",
      answer: "The platform earns from a 0.1% entry fee and a 1.5% winnings fee. These funds go directly to the on-chain Treasury to support development, liquidity, and airdrops. The system is built to align with players, not against them."
    },
    {
      question: "🕹️ How do I get started?",
      answer: "Connect your Solana wallet (Phantom, Backpack, or Solflare). Create or join a bet. Earn Arena Points as you play. Climb the leaderboard and secure your $ARENA rewards."
    }
  ];

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple bg-clip-text text-transparent">
            ⚔️ SolArena FAQ
          </h1>
          <p className="text-xl text-muted-foreground">
            Enter the Arena, Understand the Game
          </p>
        </div>
      </section>

        {/* FAQ Content */}
        <section className="container mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card/60 backdrop-blur-xl border border-card-border rounded-xl p-6 hover:border-neon-purple/50 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-neon-cyan">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
      </section>
    </>
  );
}
