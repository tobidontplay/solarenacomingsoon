export default function FAQ() {
  const faqs = [
    {
      question: "What is SolArena?",
      answer: "SolArena is a decentralized prediction protocol on Solana. Users create and join peer-to-peer prediction markets on anything — token prices, meme wars, crypto drama — all settled transparently on-chain via smart contracts. No bookmakers, no middlemen. Just you, other users, and the blockchain."
    },
    {
      question: "Is SolArena a gambling site?",
      answer: "No. SolArena is a decentralized protocol for social predictions. You compete against other users, not a house. All actions happen on-chain through smart contracts, and outcomes are transparent. SolArena Labs does not operate as a bookmaker, casino, or gambling service."
    },
    {
      question: "Are my funds safe?",
      answer: "Your funds are held in audited smart contracts on Solana. You retain full control — SolArena Labs never has custody of your assets. All transactions are peer-to-peer and verifiable on-chain. Before mainnet launch, contracts will be open-sourced and professionally audited."
    },
    {
      question: "What are Arena Points?",
      answer: "Arena Points are your on-chain reputation score. You earn them by creating markets, making predictions, winning, referring users, and engaging with the community. They're not tokens (yet), but they directly influence your $ARENA airdrop eligibility and unlock Pro features."
    },
    {
      question: "How do fees work?",
      answer: "There's a 0.1% entry fee when you stake and a 1.5% fee on winnings (only charged if you win). All fees go to the on-chain Treasury, which is public and auditable. These funds support development, liquidity, and community airdrops. SolArena Labs does not take a house edge."
    },
    {
      question: "How do I qualify for the $ARENA airdrop?",
      answer: "Earn Arena Points by participating during Phase 1. The more you create, predict, win, and refer, the higher your airdrop allocation. Snapshots and distribution details will be announced on X and Discord. Early and active users get priority."
    },
    {
      question: "How does it work?",
      answer: "Each prediction market has two sides: YES and NO. You pick your side, stake SOL, and when the outcome is resolved, winners split the losing side's pool proportionally. It's peer-to-peer via smart contracts — no house, no odds manipulation."
    },
    {
      question: "How are outcomes decided?",
      answer: "Two ways: Oracle Mode uses Pyth Network real-time price feeds for automated, tamper-proof resolution. Arbiter Mode uses trusted community figures for subjective predictions (memes, events, etc.). All resolutions happen on-chain and are publicly verifiable."
    },
    {
      question: "Can I lose my Arena Points?",
      answer: "No. You only gain points through participation. Losing a prediction doesn't reduce your score — it's a reputation system, not a penalty system. The goal is to reward activity and skill over time."
    },
    {
      question: "What is Phase 1: The Arena?",
      answer: "Phase 1 is the core prediction protocol launch. Users can create markets, stake on outcomes, resolve predictions, and earn Arena Points. It's the foundation for everything — prove your alpha, climb the leaderboard, and secure your $ARENA allocation before the token goes live."
    },
    {
      question: "Can creators or communities partner with SolArena?",
      answer: "Yes. We're inviting Founding Titans — builders, KOLs, and communities — to shape the protocol. Partners get custom Discord roles, early Pro access, boosted referral rewards, and visibility. If you run a trading or meme community, apply via our Titans page or reach out on X/Discord."
    },
    {
      question: "Is this legal in my country?",
      answer: "SolArena is a decentralized, peer-to-peer protocol. Users interact directly with smart contracts and retain full control of their funds. Participation may be subject to local laws and regulations. Users are responsible for compliance in their jurisdiction. We recommend consulting local legal guidance if unsure."
    },
    {
      question: "How do I get started?",
      answer: "Connect your Solana wallet (Phantom, Backpack, or Solflare). Browse or create a prediction market. Stake SOL on YES or NO. Earn Arena Points as you participate. Climb the leaderboard and secure your $ARENA rewards."
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
