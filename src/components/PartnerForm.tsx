import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Send } from "lucide-react";

export default function PartnerForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    community: "",
    twitter: "",
    discord: "",
    members: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const formDataToSend = new FormData(e.currentTarget);
      formDataToSend.append("access_key", "7b3cdd11-6597-4152-8c41-e58d32b0a999");
      formDataToSend.append("subject", "New Partner Application - SolArena");
      formDataToSend.append("from_name", formData.name);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div 
        className="relative bg-card border-2 border-neon-purple rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-neon-purple/50"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
          Apply as a Partner Community
        </h3>
        <p className="text-center text-muted-foreground mb-6 text-sm">
          Join as a Founding Faction Leader
        </p>

        {status === "success" ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-cyan/20 border-2 border-neon-cyan flex items-center justify-center">
              <Send className="w-8 h-8 text-neon-cyan" />
            </div>
            <h4 className="text-xl font-bold text-neon-cyan mb-2">Application Sent!</h4>
            <p className="text-muted-foreground">We'll review your application and get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Your Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-card-border rounded-lg focus:outline-none focus:border-neon-purple transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-card-border rounded-lg focus:outline-none focus:border-neon-purple transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Community Name *</label>
              <input
                type="text"
                name="community"
                required
                value={formData.community}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-card-border rounded-lg focus:outline-none focus:border-neon-purple transition-colors"
                placeholder="Your community or project name"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Twitter/X Handle</label>
                <input
                  type="text"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-background border border-card-border rounded-lg focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="@yourhandle"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Discord Server</label>
                <input
                  type="text"
                  name="discord"
                  value={formData.discord}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-background border border-card-border rounded-lg focus:outline-none focus:border-neon-cyan transition-colors"
                  placeholder="discord.gg/..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Community Size</label>
              <input
                type="text"
                name="members"
                value={formData.members}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-card-border rounded-lg focus:outline-none focus:border-neon-purple transition-colors"
                placeholder="Approximate member count"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tell us about your community *</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-background border border-card-border rounded-lg focus:outline-none focus:border-neon-purple transition-colors resize-none"
                placeholder="What makes your community unique? Why do you want to partner with SolArena?"
              />
            </div>

            {status === "error" && (
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 text-sm text-destructive">
                Failed to send application. Please try again or contact us directly on Discord.
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                size="lg"
                className="flex-1 bg-gradient-to-r from-neon-purple to-neon-cyan"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Submit Application"}
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                onClick={onClose}
                disabled={status === "sending"}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
