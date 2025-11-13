import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface ArticleLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function ArticleLayout({ title, children }: ArticleLayoutProps) {
  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/library">
            <a className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-cyan transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Library
            </a>
          </Link>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple bg-clip-text text-transparent mb-8">
            {title}
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 pb-16">
        <article className="max-w-4xl mx-auto prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-neon-cyan prose-a:no-underline hover:prose-a:text-neon-purple prose-li:text-muted-foreground">
          {children}
        </article>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-12 bg-card/20">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Join the discussion on{" "}
            <a href="https://discord.gg/GmG6xrnUm8" target="_blank" rel="noopener noreferrer" className="text-neon-purple hover:text-neon-cyan transition-colors font-medium">
              Discord
            </a>
            {" "}or{" "}
            <a href="https://x.com/i/communities/1986456387635806219" target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:text-neon-purple transition-colors font-medium">
              X Community
            </a>
          </p>
          <Link href="/library">
            <Button variant="outline" className="border-neon-cyan">
              Browse More Articles
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
