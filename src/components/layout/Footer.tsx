import { Sparkles, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return <footer className="bg-foreground text-background py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                Brick Spark
              </span>
            </Link>
            <p className="text-background/70 mb-6 max-w-md">
              Transform your team's collaboration with hands-on LEGO® Serious Play® workshops 
              that deliver immediate, actionable results.
            </p>
            <div className="flex gap-4">
              <a href="mailto:contact@brickspark.com.au" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors" aria-label="Email Brick Spark">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/brickspark" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors" aria-label="Brick Spark on LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-background/70 hover:text-background transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-background/70 hover:text-background transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/70 hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
              {/* Plain anchors, not <Link>: these paths are served by the Next.js
                  app through a host rewrite, not by React Router. */}
              <li>
                <a href="/blog" className="text-background/70 hover:text-background transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/lego-serious-play-assessment" className="text-background/70 hover:text-background transition-colors">
                  Free Team Assessment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="mailto:contact@brickspark.com.au" className="hover:text-background transition-colors">
                  contact@brickspark.com.au
                </a>
              </li>
              <li>
                <a href="tel:+61437172064" className="hover:text-background transition-colors">
                  +61 437 172 064
                </a>
              </li>
              <li>Melbourne, VIC, Australia</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Brick Spark. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
          </div>
        </div>

        <p className="text-xs text-background/30 mt-8 text-center">
          LEGO® and LEGO® Serious Play® are trademarks of the LEGO Group, which does not sponsor, authorize, or endorse this website.
        </p>
      </div>
    </footer>;
};