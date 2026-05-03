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

const sections = [
  {
    num: "01",
    title: "Use of Service",
    text: "By accessing or using ARTIQORA, you agree to use our platform only for lawful purposes and in a manner that does not harm, disrupt, or interfere with the platform or the experience of other users.",
  },
  {
    num: "02",
    title: "User Accounts",
    items: [
      "You are solely responsible for maintaining the security and confidentiality of your account credentials",
      "You must provide accurate, current, and complete information when creating your account",
      "You are responsible for all activity that occurs under your account",
      "You must notify us immediately of any unauthorised access or security breach",
    ],
  },
  {
    num: "03",
    title: "Intellectual Property",
    text: "All content on ARTIQORA — including design, text, graphics, photographs, artworks, and the ARTIQORA logo — is the exclusive intellectual property of ARTIQORA Private Limited and may not be copied, reproduced, distributed, or reused without express written permission.",
  },
  {
    num: "04",
    title: "Limitation of Liability",
    content: [
      {
        sub: "Not responsible for",
        text: "Any indirect, incidental, consequential, or punitive damages arising from your use of the platform, data loss, or service interruptions.",
      },
      {
        sub: "Use at your own risk",
        text: "The platform is provided on an 'as-is' basis. While we strive for reliability and quality, we make no warranties regarding uninterrupted access or error-free operation.",
      },
    ],
  },
  {
    num: "05",
    title: "Termination",
    text: "ARTIQORA Private Limited reserves the right, at its sole discretion, to suspend or permanently terminate access to the platform for any user who violates these Terms of Use or engages in conduct deemed harmful to the platform, its users, or its partners.",
  },
  {
    num: "06",
    title: "Third-Party Links",
    text: "Our platform may contain links to external websites or third-party services. These are provided for convenience only. We are not responsible for the content, accuracy, privacy practices, or terms of any third-party sites.",
  },
  {
    num: "07",
    title: "User-Generated Content",
    text: "If you submit, upload, or share any content on our platform, you grant ARTIQORA a non-exclusive, royalty-free licence to use, display, and distribute that content in connection with our services. You remain the owner of your content.",
  },
  {
    num: "08",
    title: "Prohibited Conduct",
    items: [
      "Attempting to reverse-engineer, scrape, or extract data from the platform",
      "Impersonating any person or entity, or misrepresenting your affiliation",
      "Uploading or transmitting harmful, offensive, or unlawful content",
      "Using the platform for unauthorised commercial activities or spam",
    ],
  },
  {
    num: "09",
    title: "Changes to Terms",
    text: "We may update these Terms of Use at any time. Any significant changes will be communicated via the platform or email. Continued use of ARTIQORA after such updates constitutes your acceptance of the revised terms.",
  },
  {
    num: "10",
    title: "Governing Law",
    text: "These Terms of Use are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu.",
  },
  {
    num: "11",
    title: "Contact",
    text: "For questions, concerns, or formal notices relating to these Terms of Use, please contact our team at support@artiqora.com. We aim to respond within 2–3 business days.",
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