import { Button } from "@/components/ui/button";
import { MessageCircle, Send, ExternalLink, Menu, X, Zap } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

interface LayoutProps {
  children: React.ReactNode;
  showJoinModal: () => void;
}

export default function Layout({ children, showJoinModal }: LayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/token", label: "$ARENA & Points" },
    { href: "/community", label: "Community" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-grid-pattern opacity-30 dark:opacity-20" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-neon-purple/3 to-neon-cyan/3 dark:via-neon-purple/5 dark:to-neon-cyan/5" />

      <div className="relative z-10">
        {/* Navigation Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-card-border">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/">
                <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <img src="/logo.png" alt="SolArena" className="w-10 h-10 object-contain" />
                  <span className="font-bold text-xl bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                    SOLARENA
                  </span>
                </a>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className={`text-sm font-medium transition-colors hover:text-neon-cyan ${
                        location === link.href ? "text-neon-cyan" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
                <ThemeToggle />
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-neon-purple to-neon-cyan"
                  onClick={showJoinModal}
                >
                  <Zap className="w-4 h-4 mr-2" /> Join Arena
                </Button>
              </nav>

              {/* Mobile Menu Button & Theme Toggle */}
              <div className="md:hidden flex items-center gap-2">
                <ThemeToggle />
                <button
                  className="p-2 hover:bg-card/50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <nav className="md:hidden py-4 border-t border-card-border">
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <a
                        className={`block px-4 py-2 rounded-lg transition-colors ${
                          location === link.href
                            ? "bg-neon-cyan/10 text-neon-cyan"
                            : "text-muted-foreground hover:bg-card/50"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    </Link>
                  ))}
                  <Button
                    className="bg-gradient-to-r from-neon-purple to-neon-cyan"
                    onClick={() => {
                      showJoinModal();
                      setMobileMenuOpen(false);
                    }}
                  >
                    <Zap className="w-4 h-4 mr-2" /> Join Arena
                  </Button>
                </div>
              </nav>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 border-t border-card-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
              {/* Brand */}
              <div className="space-y-4">
                <Link href="/" className="flex items-center gap-2">
                  <img src="/logo.png" alt="SolArena" className="w-10 h-10 object-contain" />
                  <span className="font-display font-bold text-xl bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                    SOLARENA
                  </span>
                </Link>
                <p className="text-sm text-muted-foreground">
                  Where speculation becomes sport. Built on Solana.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href}>
                      <a className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors">
                        {link.label}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-bold mb-4">Join the Community</h3>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://discord.gg/GmG6xrnUm8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-purple transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" /> Discord
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                  <a
                    href="https://x.com/SOLArenaLabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-cyan transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    X (Twitter)
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                  <a
                    href="https://t.me/+a8QoNIahl5Q5MTEx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-purple transition-colors"
                  >
                    <Send className="w-4 h-4" /> Telegram
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                  <a
                    href="https://x.com/i/communities/1986456387635806219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-cyan transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    X Community
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-card-border pt-8 text-center space-y-2">
              <p className="text-sm text-muted-foreground">Built with ⚡ on Solana</p>
              <p className="text-xs text-muted-foreground/70 italic">"Where speculation becomes sport."</p>
              <p className="text-xs text-muted-foreground/50">© 2025 SolArena Labs. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
