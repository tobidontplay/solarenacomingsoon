import ArticleLayout from "@/components/ArticleLayout";

export default function RegionalRestrictions() {
  return (
    <ArticleLayout title="Regional Restrictions & Compliance Info">
      <div className="space-y-6">
        <p className="text-lg">
          SolArena is a decentralized, peer-to-peer protocol. Users interact directly with smart contracts and retain full control of their funds. However, access and eligibility may be limited by regional laws.
        </p>

        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6">
          <p className="text-sm font-semibold">
            ⚖️ <strong>Important:</strong> Users are responsible for compliance in their jurisdiction. We recommend consulting local legal guidance if unsure.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8">What SolArena Is (And Isn't)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card/60 border border-green-500/30 rounded-lg p-6">
            <h3 className="font-bold text-green-400 mb-3">✓ What We Are</h3>
            <ul className="text-sm space-y-2">
              <li>• Decentralized prediction protocol</li>
              <li>• Peer-to-peer smart contract platform</li>
              <li>• Non-custodial (users keep control)</li>
              <li>• Transparent, on-chain operations</li>
              <li>• Software tool provider</li>
            </ul>
          </div>

          <div className="bg-card/60 border border-red-500/30 rounded-lg p-6">
            <h3 className="font-bold text-red-400 mb-3">✗ What We're Not</h3>
            <ul className="text-sm space-y-2">
              <li>• Not a bookmaker or casino</li>
              <li>• Not a gambling service</li>
              <li>• Not a financial institution</li>
              <li>• Not a custodian of funds</li>
              <li>• Not an investment advisor</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">Restricted Jurisdictions</h2>
        <p>
          Access to SolArena may be restricted in certain jurisdictions where prediction markets or similar activities are prohibited. This includes but is not limited to:
        </p>
        <div className="bg-card/60 border border-card-border rounded-lg p-6">
          <ul className="space-y-2 text-sm">
            <li>• <strong>United States:</strong> Certain states may prohibit prediction markets (check local laws)</li>
            <li>• <strong>China:</strong> Cryptocurrency activities are restricted</li>
            <li>• <strong>North Korea:</strong> Comprehensive sanctions apply</li>
            <li>• <strong>Iran:</strong> Sanctions and restrictions apply</li>
            <li>• <strong>Syria:</strong> Sanctions and restrictions apply</li>
            <li>• <strong>Cuba:</strong> Sanctions and restrictions apply</li>
            <li>• <strong>Crimea:</strong> Sanctions apply</li>
            <li>• Other jurisdictions with applicable restrictions</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">User Responsibilities</h2>
        <div className="space-y-4">
          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Know Your Local Laws</h3>
            <p className="text-sm text-muted-foreground">
              Research and understand the legal status of prediction markets, cryptocurrency, and decentralized protocols in your jurisdiction.
            </p>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-purple mb-2">Tax Obligations</h3>
            <p className="text-sm text-muted-foreground">
              Winnings and token rewards may be taxable in your jurisdiction. Consult a tax professional for guidance on reporting requirements.
            </p>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-cyan mb-2">Age Requirements</h3>
            <p className="text-sm text-muted-foreground">
              You must be of legal age (18+ or as required by your jurisdiction) to participate. Minors are prohibited from using SolArena.
            </p>
          </div>

          <div className="bg-card/60 border border-card-border rounded-lg p-6">
            <h3 className="font-bold text-neon-purple mb-2">Sanctions Compliance</h3>
            <p className="text-sm text-muted-foreground">
              Users from sanctioned countries or on sanctions lists (OFAC, UN, EU) are prohibited from participating.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8">How We Approach Compliance</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>No Custody:</strong> We never hold user funds, reducing regulatory complexity</li>
          <li><strong>Decentralized:</strong> Protocol operates autonomously via smart contracts</li>
          <li><strong>Transparent:</strong> All operations are on-chain and publicly auditable</li>
          <li><strong>Educational:</strong> We provide clear disclaimers and risk disclosures</li>
          <li><strong>Responsive:</strong> We monitor regulatory developments and adapt as needed</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Airdrop & Token Restrictions</h2>
        <p>
          $ARENA token distribution may be subject to additional restrictions:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Certain jurisdictions may be excluded from airdrops</li>
          <li>KYC/AML requirements may apply for large allocations</li>
          <li>Token utility may vary by region</li>
          <li>Governance participation may be restricted</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">Changes to Access</h2>
        <div className="bg-neon-cyan/10 border border-neon-cyan/30 rounded-lg p-6">
          <p className="text-sm mb-3">
            SolArena Labs reserves the right to:
          </p>
          <ul className="text-sm space-y-1">
            <li>• Restrict access from additional jurisdictions</li>
            <li>• Implement geo-blocking or verification</li>
            <li>• Modify terms and eligibility criteria</li>
            <li>• Comply with legal orders or regulatory guidance</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8">Get Legal Advice</h2>
        <p>
          If you're unsure about the legal status of prediction markets in your jurisdiction:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Consult with a local attorney specializing in cryptocurrency or gaming law</li>
          <li>Research your country's regulatory framework for blockchain applications</li>
          <li>Check with local financial regulators or consumer protection agencies</li>
          <li>Review tax implications with a qualified accountant</li>
        </ul>

        <div className="bg-neon-purple/10 border border-neon-purple/30 rounded-lg p-6 mt-8">
          <p className="text-sm">
            <strong>Disclaimer:</strong> This information is not legal advice. Laws vary by jurisdiction and change frequently. Users are solely responsible for ensuring their participation complies with applicable laws.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
