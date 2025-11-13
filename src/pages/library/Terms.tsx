import ArticleLayout from "@/components/ArticleLayout";

export default function Terms() {
  return (
    <ArticleLayout title="Terms of Participation">
      <div className="space-y-6">
        <p className="text-lg">
          SolArena is a decentralized protocol for social prediction markets. Users interact directly with Solana smart contracts and retain full control of their funds.
        </p>

        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6">
          <p className="text-sm font-semibold">
            Participation involves financial risk. You may lose your staked funds. SolArena Labs does not operate as a bookmaker or gambling entity.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8">Key Rules</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>No custodial control over user funds</li>
          <li>All pools are created and joined voluntarily</li>
          <li>Outcomes are determined by oracles or community arbiters</li>
          <li>Users are responsible for compliance with local laws</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">User Responsibilities</h2>
        <p>
          By participating in SolArena, you acknowledge that:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>You are solely responsible for your actions and decisions</li>
          <li>You understand the risks associated with decentralized protocols</li>
          <li>You will comply with all applicable laws in your jurisdiction</li>
          <li>You will not use the protocol for illegal activities</li>
          <li>You understand that smart contracts are immutable once deployed</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Protocol Nature</h2>
        <p>
          SolArena is a decentralized, peer-to-peer protocol. SolArena Labs:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Does not take custody of user funds</li>
          <li>Does not operate as a house or bookmaker</li>
          <li>Does not guarantee outcomes or profits</li>
          <li>Provides software tools for peer-to-peer interaction</li>
          <li>Cannot reverse or modify on-chain transactions</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Fees & Treasury</h2>
        <p>
          The protocol charges transparent fees (0.1% entry, 1.5% on winnings) that go directly to the on-chain Treasury. These funds support:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Protocol development and maintenance</li>
          <li>Community airdrops and rewards</li>
          <li>Security audits and improvements</li>
          <li>Ecosystem growth initiatives</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Dispute Resolution</h2>
        <p>
          For arbiter-resolved markets, disputes are handled through on-chain governance mechanisms. Oracle-resolved markets use verifiable data feeds from Pyth Network. In all cases, outcomes are final once settled on-chain.
        </p>

        <h2 className="text-2xl font-bold mt-8">Modifications</h2>
        <p>
          These terms may be updated as the protocol evolves. Continued use of SolArena constitutes acceptance of any modifications. Major changes will be announced via Discord and X.
        </p>

        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Questions?</strong> Join our Discord or X Community to discuss terms, compliance, or protocol mechanics with the team and community.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
