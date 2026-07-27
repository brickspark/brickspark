import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";

// NOTE: This is a plain-language policy describing what the site actually does
// today (GA4 with consent mode, the enquiry form, and follow-up email). It is a
// starting point, not legal advice — have it reviewed before relying on it.
const Privacy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Brick Spark"
        description="How Brick Spark collects, uses and protects your personal information, including analytics cookies and enquiry form data."
        canonical="https://www.brickspark.com.au/privacy"
      />

      <Header />

      <main className="min-h-screen pt-32 pb-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-12">
              Last updated: {new Date().toLocaleDateString("en-AU", { month: "long", year: "numeric" })}
            </p>

            <div className="space-y-10 text-foreground/85 leading-relaxed">
              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">Who we are</h2>
                <p>
                  Brick Spark provides LEGO® Serious Play® workshop facilitation in Melbourne,
                  Victoria. We handle personal information in line with the Australian Privacy
                  Principles under the Privacy Act 1988 (Cth). You can reach us at{" "}
                  <a href="mailto:contact@brickspark.com.au" className="text-primary underline">
                    contact@brickspark.com.au
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                  What we collect
                </h2>
                <p className="mb-3">When you complete an enquiry form we collect:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Your name and work email address</li>
                  <li>Your company name and phone number, if you provide them</li>
                  <li>
                    The answers you give about your team, your goals and the challenges you want
                    the workshop to address
                  </li>
                </ul>
                <p className="mt-3">
                  We also collect standard analytics data about how the site is used — pages
                  viewed, approximate location, device and browser type, and how you arrived here.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                  How we use it
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>To prepare and send you a workshop proposal or quote</li>
                  <li>To contact you about your enquiry and follow up on it</li>
                  <li>To deliver and improve workshops you book with us</li>
                  <li>To understand which parts of this site are useful and improve them</li>
                </ul>
                <p className="mt-3">
                  We do not sell your personal information, and we do not share it for anyone
                  else's marketing.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                  Cookies and analytics
                </h2>
                <p>
                  We use Google Analytics to understand site usage. Analytics cookies are only set
                  where consent allows, and visitors in the EEA and UK are asked to opt in before
                  any analytics cookie is set. You can clear or block cookies in your browser at
                  any time without losing access to the site.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                  Who else handles your data
                </h2>
                <p className="mb-3">
                  We use a small number of service providers to run this site and our follow-up:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Hosting and site analytics providers</li>
                  <li>Google Analytics, for usage measurement</li>
                  <li>Our database and email providers, to store enquiries and reply to them</li>
                </ul>
                <p className="mt-3">
                  Some of these providers store data outside Australia. We only use providers that
                  commit to appropriate security and confidentiality standards.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                  Keeping and deleting your information
                </h2>
                <p>
                  We keep enquiry details for as long as we need them to respond to you and to
                  meet our record-keeping obligations. Every marketing email we send includes an
                  unsubscribe link, and unsubscribing stops that contact immediately.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                  Access, correction and complaints
                </h2>
                <p>
                  You can ask us what personal information we hold about you, ask us to correct
                  it, or ask us to delete it. Email{" "}
                  <a href="mailto:contact@brickspark.com.au" className="text-primary underline">
                    contact@brickspark.com.au
                  </a>{" "}
                  and we will respond within a reasonable time. If you are not satisfied with how
                  we have handled your information, you can raise it with the Office of the
                  Australian Information Commissioner at oaic.gov.au.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                  Changes to this policy
                </h2>
                <p>
                  If we change how we handle personal information we will update this page and
                  revise the date above.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Privacy;
