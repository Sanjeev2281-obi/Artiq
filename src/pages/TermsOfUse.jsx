import { motion } from "framer-motion";
import Footer from '../component/Footer';// adjust path if needed

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

export const sections = [
  {
    num: "00",
    title: "Acceptance of Terms",
    text: "By accessing or using ARTIQORA, you agree to be bound by these Terms of Use. If you do not agree, please do not use the platform.",
  },
  {
    num: "01",
    title: "Use of Service",
    text: "You agree to use the platform only for lawful purposes and in a manner that does not harm, disrupt, or interfere with the platform or other users.",
  },
  {
    num: "02",
    title: "User Accounts",
    items: [
      "You are responsible for maintaining the confidentiality of your account",
      "You must provide accurate and complete information",
      "You are responsible for all activities under your account",
      "You must notify us of any unauthorized access",
    ],
  },
  {
    num: "03",
    title: "Intellectual Property",
    text: "All content on ARTIQORA, including designs, text, graphics, images, and branding, is the property of ARTIQORA Private Limited. Unauthorized use, reproduction, or distribution is strictly prohibited and may result in legal action.",
  },
  {
    num: "04",
    title: "Payments and Services",
    text: "If you purchase products or services, you agree to provide accurate payment information. Pricing, availability, and service details may change without prior notice.",
  },
  {
    num: "05",
    title: "Limitation of Liability",
    content: [
      {
        sub: "No Liability",
        text: "We are not liable for indirect, incidental, or consequential damages arising from use of the platform.",
      },
      {
        sub: "Use at Your Own Risk",
        text: "The platform is provided on an 'as-is' basis without warranties of any kind.",
      },
    ],
  },
  {
    num: "06",
    title: "Termination",
    text: "We reserve the right to suspend or terminate access to the platform at our discretion if users violate these terms.",
  },
  {
    num: "07",
    title: "Third-Party Links",
    text: "We are not responsible for content or practices of third-party websites linked from our platform.",
  },
  {
    num: "08",
    title: "User Content",
    text: "By submitting content, you grant ARTIQORA a non-exclusive, royalty-free license to use and display it for service-related purposes.",
  },
  {
    num: "09",
    title: "Prohibited Conduct",
    items: [
      "Attempting to hack, scrape, or reverse engineer the platform",
      "Uploading harmful or illegal content",
      "Impersonating others",
      "Using the platform for spam or unauthorized business",
    ],
  },
  {
    num: "10",
    title: "Changes to Terms",
    text: "We may update these Terms at any time. Continued use of the platform means you accept the updated terms.",
  },
  {
    num: "11",
    title: "Governing Law",
    text: "These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Chennai, Tamil Nadu.",
  },
  {
    num: "12",
    title: "Contact",
    text: "For any questions regarding these Terms, contact support@artiqora.com.",
  },
];
const TermsOfUse = () => {
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
                Terms<br />of Use
              </motion.h1>

              <motion.div {...fadeUp(0.22)} className="md:text-right space-y-2">
                <p className="text-[10px] uppercase tracking-[0.25em] text-black/25">
                  Last updated
                </p>
                <p className="text-[15px] text-black/50 font-light">May 3, 2026</p>
                <div className="w-full md:w-44 h-px bg-black/10 my-3" />
                <p className="text-[13px] text-black/30 font-light leading-relaxed max-w-xs md:ml-auto">
                  By using ARTIQORA, you agree to these terms. Please read them carefully — they govern your relationship with us.
                </p>
              </motion.div>
            </div>

            {/* Company badge — same style as "Chennai, India" label */}
            <motion.div {...fadeUp(0.34)} className="mt-12">
              <div className="inline-flex items-center gap-4 border border-black/10 px-5 py-2.5 rounded-full">
                <span className="text-[10px] uppercase tracking-[0.25em] text-black/30 font-light">
                  ARTIQORA Private Limited
                </span>
                <span className="w-1 h-1 rounded-full bg-black/15" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-black/25 font-light">
                  Chennai, India
                </span>
              </div>
            </motion.div>
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
                "A space where art<br />and integrity<br />meet."
              </p>
              <a
                href="mailto:info@artiqora.co"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-black border border-black/20 px-6 py-3 rounded-full w-fit hover:bg-black hover:text-white transition-all duration-300 group"
              >
                Get in touch
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

export default TermsOfUse;