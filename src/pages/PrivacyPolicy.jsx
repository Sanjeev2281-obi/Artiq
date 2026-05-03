import { motion } from "framer-motion";
import Footer from '../component/Footer';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

const sections = [
  {
    num: "01",
    title: "Information We Collect",
    content: [
      {
        sub: "Personal Information",
        text: "We may collect your name, email address, and phone number (if provided) when you interact with our platform, submit inquiries, or create an account.",
      },
      {
        sub: "Usage Data",
        text: "We automatically collect data about pages visited, time spent on the site, and browser and device information to understand how our platform is used.",
      },
      {
        sub: "Cookies & Tracking",
        text: "We may use cookies and similar technologies to improve user experience, remember preferences, and analyse traffic patterns across our platform.",
      },
    ],
  },
  {
    num: "02",
    title: "How We Use Your Information",
    items: [
      "Provide and continually improve our services",
      "Respond to inquiries and support requests",
      "Personalise your experience on the platform",
      "Monitor and analyse usage to enhance performance",
      "Send relevant updates or communications (with your consent)",
    ],
  },
  {
    num: "03",
    title: "Sharing Your Information",
    text: "We do not sell your personal data. We may share information with trusted service providers (hosting, analytics) who assist us in operating the platform, and with legal authorities if required by applicable law.",
  },
  {
    num: "04",
    title: "Data Security",
    text: "We implement reasonable and appropriate security measures to protect your personal data from unauthorised access, disclosure, or loss. However, no system is entirely immune — we encourage you to use the platform responsibly.",
  },
  {
    num: "05",
    title: "Your Rights",
    items: [
      "Access the personal data we hold about you",
      "Request correction or deletion of your data",
      "Opt-out of marketing communications at any time",
      "Lodge a complaint with a relevant data protection authority",
    ],
  },
  {
    num: "06",
    title: "Third-Party Services",
    text: "We may integrate third-party tools such as analytics and hosting services. These providers may collect data according to their own privacy policies, which we encourage you to review.",
  },
  {
    num: "07",
    title: "Changes to This Policy",
    text: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. Updated versions will be posted on this page with a revised date.",
  },
  {
    num: "08",
    title: "Contact Us",
    text: "If you have any questions, requests, or concerns about this Privacy Policy or how we handle your data, please reach out to us at support@artiqora.com — we're happy to help.",
  },
];

const PrivacyPolicy = () => {
  return (
    <>
      <div className="bg-white min-h-screen">

        {/* ── HERO ── */}
        <section className="px-6 md:px-20 lg:px-32 pt-40 pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.p
              {...fadeUp(0)}
              className="text-[10px] uppercase tracking-[0.3em] text-black/30 mb-10"
            >
              Legal
            </motion.p>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <motion.h1
                {...fadeUp(0.1)}
                className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight text-black"
              >
                Privacy<br />Policy
              </motion.h1>

              <motion.div {...fadeUp(0.22)} className="md:text-right space-y-2">
                <p className="text-[10px] uppercase tracking-[0.25em] text-black/25">
                  Last updated
                </p>
                <p className="text-[15px] text-black/50 font-light">May 3, 2026</p>
                <div className="w-full md:w-44 h-px bg-black/10 my-3" />
                <p className="text-[13px] text-black/30 font-light leading-relaxed max-w-xs md:ml-auto">
                  ARTIQORA Private Limited is committed to protecting your privacy with transparency and care.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── DIVIDER ── */}
        <div className="px-6 md:px-20 lg:px-32">
          <div className="max-w-7xl mx-auto w-full h-px bg-black/8" />
        </div>

        {/* ── SECTIONS ── */}
        <section className="px-6 md:px-20 lg:px-32 py-6">
          <div className="max-w-7xl mx-auto">
            {sections.map((section) => (
              <motion.div
                key={section.num}
                {...fadeUpView(0)}
                className="grid grid-cols-12 gap-x-6 md:gap-x-12 py-10 border-b border-black/8"
              >
                {/* Number */}
                <div className="col-span-12 md:col-span-1 mb-2 md:mb-0">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-black/20 font-light">
                    {section.num}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-12 md:col-span-3 mb-4 md:mb-0">
                  <h3 className="text-[17px] md:text-[19px] font-light text-black leading-snug tracking-tight">
                    {section.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="col-span-12 md:col-span-8 space-y-5">
                  {section.content &&
                    section.content.map((c, j) => (
                      <div key={j}>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-black/30 mb-1.5">
                          {c.sub}
                        </p>
                        <p className="text-[15px] text-black/50 font-light leading-relaxed">
                          {c.text}
                        </p>
                      </div>
                    ))}

                  {section.items && (
                    <ul className="space-y-3">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-4">
                          <span className="mt-[11px] w-4 h-px bg-black/20 shrink-0" />
                          <span className="text-[15px] text-black/50 font-light leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.text && (
                    <p className="text-[15px] text-black/50 font-light leading-relaxed">
                      {section.text}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CLOSING STATEMENT ── */}
        <motion.section
          {...fadeUpView(0)}
          className="px-6 md:px-20 lg:px-32 mt-20 mb-32"
        >
          <div className="max-w-7xl mx-auto">
            <div className="w-full h-px bg-black/8 mb-20" />
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
              <p className="text-3xl md:text-4xl lg:text-5xl font-light text-black/15 leading-snug tracking-tight max-w-xl">
                "Your trust is the<br />foundation of everything<br />we create."
              </p>
              <a
                href="mailto:info@artiqora.co"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-black border border-black/20 px-6 py-3 rounded-full w-fit hover:bg-black hover:text-white transition-all duration-300 group"
              >
                Contact us
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </motion.section>

      </div>

      <div className="font-[Outfit]">
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;