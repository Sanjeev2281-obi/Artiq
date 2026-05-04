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

export const privacyPolicy = [
  {
    num: "00",
    title: "Effective Date",
    text: "Effective Date: May 2026. This Privacy Policy describes how ARTIQORA Private Limited (“we”, “our”, “us”) collects, uses, and protects your information when you use our platform.",
  },
  {
    num: "01",
    title: "Information We Collect",
    content: [
      {
        sub: "Personal Information",
        text: "We may collect personal information such as your name, email address, and phone number when you contact us, register, or use our services.",
      },
      {
        sub: "Usage Data",
        text: "We automatically collect information such as pages visited, time spent, device type, browser type, and interaction data to improve our services.",
      },
      {
        sub: "Cookies & Tracking",
        text: "We use cookies and similar technologies to enhance user experience, remember preferences, and analyse platform usage. You can control cookies through your browser settings.",
      },
    ],
  },
  {
    num: "02",
    title: "How We Use Your Information",
    items: [
      "Provide, operate, and improve our platform",
      "Respond to inquiries and customer support requests",
      "Personalise user experience",
      "Analyse usage and performance",
      "Send updates or communication with user consent",
    ],
  },
  {
    num: "03",
    title: "Sharing of Information",
    text: "We do not sell your personal data. We may share limited information with trusted third-party service providers (such as hosting and analytics providers) who are contractually obligated to protect your data. We may also disclose information if required by law.",
  },
  {
    num: "04",
    title: "Data Security",
    text: "We implement industry-standard security measures including secure servers, encryption, and access controls to protect your data. However, no system is completely secure, and we cannot guarantee absolute security.",
  },
  {
    num: "05",
    title: "Data Retention",
    text: "We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law.",
  },
  {
    num: "06",
    title: "Your Rights",
    items: [
      "Access your personal data",
      "Request correction or deletion of your data",
      "Opt-out of marketing communications",
      "Withdraw consent where applicable",
    ],
  },
  {
    num: "07",
    title: "Children’s Privacy",
    text: "Our platform is not intended for individuals under the age of 18. We do not knowingly collect personal data from children.",
  },
  {
    num: "08",
    title: "Third-Party Services",
    text: "We may use third-party services such as analytics or hosting providers. These services may collect information according to their own privacy policies.",
  },
  {
    num: "09",
    title: "Changes to This Policy",
    text: "We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.",
  },
  {
    num: "10",
    title: "Contact Us",
    text: "ARTIQORA Private Limited, Chennai, Tamil Nadu, India. For any questions or requests regarding this policy, contact us at support@artiqora.com.",
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
            {privacyPolicy.map((section) => (
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