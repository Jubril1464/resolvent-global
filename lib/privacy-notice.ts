/**
 * Privacy Notice content, transcribed from the approved source document
 * (`docs/Resolvent_Global_Privacy_Notice.docx`).
 *
 * The source document's "Implementation Notes for the Web Developer" and
 * "Reference Basis" sections are deliberately excluded — the document itself
 * states those notes are operational instructions rather than public-facing
 * content. See `lib/legal.ts` for why this lives in code and for the shape
 * the page renders from.
 */

import type { LegalDocument, LegalSection } from "@/lib/legal"

const SECTIONS: LegalSection[] = [
  {
    id: "section-1",
    number: 1,
    title: "Who We Are",
    navLabel: "Who We Are",
    blocks: [
      {
        kind: "paragraph",
        text: "Resolvent Global is the trading name of Resolvent Global Energy Process & Carbon Ltd, a company registered in Nigeria. We provide engineering, sustainability, technology, industrial performance, environmental, carbon, advisory and professional training solutions.",
      },
      {
        kind: "paragraph",
        text: "For the personal information described in this Privacy Notice, Resolvent Global will generally act as the data controller where it determines why and how that information is processed.",
      },
    ],
  },
  {
    id: "section-2",
    number: 2,
    title: "Scope of This Privacy Notice",
    navLabel: "Scope",
    blocks: [
      {
        kind: "paragraph",
        text: "This Privacy Notice explains how we collect, use, store, disclose and otherwise process personal information when you visit resolventglobal.com, submit an enquiry or request for proposal, contact us by email, telephone, WhatsApp or social media, participate in our training or professional activities, or otherwise interact with Resolvent Global.",
      },
      {
        kind: "paragraph",
        text: "It is intended to operate alongside any additional privacy information that we may provide for a specific service, project, event, recruitment process or other activity.",
      },
    ],
  },
  {
    id: "section-3",
    number: 3,
    title: "Personal Information We May Collect",
    navLabel: "Information We Collect",
    blocks: [
      {
        kind: "list",
        intro:
          "Depending on how you interact with us, we may collect the following categories of personal information:",
        items: [
          "Identity and contact information, such as your name, email address, telephone or WhatsApp number, country and city.",
          "Professional and organisational information, such as your employer or organisation, job title, industry or sector and professional interests.",
          "Enquiry and project information, including the service you are interested in, project description, technical challenge, request for proposal and preferred contact method.",
          "Training and event information, where you enquire about, register for or participate in a Resolvent Global programme.",
          "Communications and correspondence, including information contained in emails, messages, telephone enquiries and other communications with us.",
          "Technical and usage information associated with your use of our website, such as browser or device information, approximate location derived from technical data, pages viewed, referral information and interaction data, where collected by our website or analytics tools.",
          "Any other information you choose to provide to us in connection with a legitimate business enquiry or relationship.",
        ],
      },
      {
        kind: "paragraph",
        text: "Please do not provide sensitive personal information through our general website enquiry form unless it is genuinely necessary for your interaction with us and you are authorised to provide it.",
      },
    ],
  },
  {
    id: "section-4",
    number: 4,
    title: "How We Collect Personal Information",
    navLabel: "How We Collect",
    blocks: [
      {
        kind: "list",
        intro: "We may collect personal information:",
        items: [
          "directly from you when you complete a website form, contact us, request a proposal, register an interest, communicate with us or engage our services;",
          "through our website and related technologies, including analytics tools;",
          "from your organisation or authorised representatives where this is relevant to a business relationship or project;",
          "from professional networks, public business sources and social-media platforms where lawful and relevant to our business activities; and",
          "from service providers that support our website, communications and business operations.",
        ],
      },
    ],
  },
  {
    id: "section-5",
    number: 5,
    title: "Why We Use Personal Information",
    navLabel: "How We Use Your Information",
    blocks: [
      {
        kind: "list",
        intro: "We may process personal information for purposes including:",
        items: [
          "responding to enquiries and requests for proposals;",
          "assessing project requirements and providing engineering, sustainability, environmental, carbon, technology, advisory or training services;",
          "communicating with clients, prospective clients, partners, suppliers, trainees and other stakeholders;",
          "preparing quotations, proposals, contracts and other business documentation;",
          "administering training programmes, events and professional activities;",
          "operating, maintaining, securing and improving our website and digital services;",
          "understanding website usage and improving content and user experience;",
          "maintaining appropriate business, project, financial, compliance and correspondence records;",
          "protecting our systems, personnel, clients and legitimate business interests; and",
          "complying with applicable laws, regulatory requirements and lawful requests.",
        ],
      },
    ],
  },
  {
    id: "section-6",
    number: 6,
    title: "Lawful Bases for Processing",
    navLabel: "Lawful Bases",
    blocks: [
      {
        kind: "paragraph",
        text: "Where applicable data-protection law requires a lawful basis, we will process personal information only where an appropriate basis applies. Depending on the circumstances, this may include your consent; steps taken at your request before entering into a contract; performance of a contract; compliance with a legal obligation; protection of vital interests; performance of a task carried out in the public interest where applicable; or our legitimate interests or those of another person, provided those interests are not overridden by your rights and interests.",
      },
      {
        kind: "paragraph",
        text: "Where we rely on consent, you may withdraw that consent at any time, subject to applicable law. Withdrawal does not affect the lawfulness of processing carried out before withdrawal.",
      },
    ],
  },
  {
    id: "section-7",
    number: 7,
    title: "Website Enquiries and Communications",
    navLabel: "Website Enquiries",
    blocks: [
      {
        kind: "paragraph",
        text: "Our website contact form may request information such as your full name, organisation, email address, telephone or WhatsApp number, country or city, preferred contact method, service of interest, industry or sector and a description of your project, challenge or enquiry.",
      },
      {
        kind: "paragraph",
        text: "Website submissions are transmitted to our business email environment so that authorised personnel can review and respond to the enquiry. We use this information primarily to respond to you, assess the requested service and, where appropriate, develop a proposal or next step.",
      },
    ],
  },
  {
    id: "section-8",
    number: 8,
    title: "Website Hosting, Analytics and Cookies",
    navLabel: "Cookies & Analytics",
    blocks: [
      {
        kind: "paragraph",
        text: "Our website is hosted using Vercel infrastructure. Our website also uses Google Analytics to help us understand how visitors interact with the site and to improve website performance and content.",
      },
      {
        kind: "paragraph",
        text: "Analytics and similar technologies may process technical or usage information such as device or browser information, pages visited, interaction events, referral information and approximate geographic information. The precise information collected depends on our website configuration and the relevant service settings.",
      },
      {
        kind: "paragraph",
        text: "Cookies and similar technologies may also be used for functionality, security, preferences and analytics. Where required by applicable law, non-essential cookies or similar technologies should be activated only after an appropriate choice or consent has been obtained. You may also control cookies through your browser settings, although disabling certain technologies may affect website functionality.",
      },
    ],
  },
  {
    id: "section-9",
    number: 9,
    title: "How We Share Personal Information",
    navLabel: "Information Sharing",
    blocks: [
      {
        kind: "list",
        intro:
          "We do not sell personal information. We may disclose personal information only where reasonably necessary for legitimate business or legal purposes, including to:",
        items: [
          "authorised employees, directors, consultants or representatives who need the information to perform their responsibilities;",
          "technology, website-hosting, analytics, email, communications, professional and other service providers acting on our behalf or supporting our operations;",
          "professional advisers such as lawyers, accountants, auditors or insurers where necessary;",
          "business partners, subcontractors or project collaborators where necessary for an agreed engagement and subject to appropriate confidentiality or data-protection arrangements;",
          "regulators, courts, law-enforcement authorities or other public bodies where disclosure is required or permitted by law; and",
          "a successor or relevant counterparty in connection with a legitimate corporate transaction, subject to appropriate safeguards.",
        ],
      },
    ],
  },
  {
    id: "section-10",
    number: 10,
    title: "International Data Processing and Transfers",
    navLabel: "International Transfers",
    blocks: [
      {
        kind: "paragraph",
        text: "Because we use internet-based service providers and may work with clients, partners and service providers across jurisdictions, personal information may be processed or stored outside the country in which it was originally collected. Where cross-border transfers are subject to legal restrictions, we will seek to use an appropriate transfer mechanism or other safeguard required by applicable law.",
      },
    ],
  },
  {
    id: "section-11",
    number: 11,
    title: "Data Security",
    navLabel: "Data Security",
    blocks: [
      {
        kind: "paragraph",
        text: "We take reasonable technical and organisational measures designed to protect personal information against unauthorised or unlawful access, alteration, disclosure, loss, misuse or destruction. Measures may include access controls, confidentiality requirements, secure technology practices, appropriate vendor management and limitation of access to personnel with a legitimate business need.",
      },
      {
        kind: "paragraph",
        text: "No internet transmission or electronic storage system can be guaranteed to be completely secure. Accordingly, while we take reasonable measures to protect information, absolute security cannot be guaranteed.",
      },
    ],
  },
  {
    id: "section-12",
    number: 12,
    title: "Data Retention",
    navLabel: "Data Retention",
    blocks: [
      {
        kind: "paragraph",
        text: "We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including to manage enquiries and business relationships, perform contractual obligations, maintain appropriate records, resolve disputes, establish or defend legal claims and satisfy legal, regulatory, tax, accounting or compliance requirements.",
      },
      {
        kind: "paragraph",
        text: "Retention periods may vary depending on the type of information, the nature of our relationship with you, legal requirements and legitimate operational needs. When information is no longer required, we will take reasonable steps to delete, anonymise or securely dispose of it, subject to applicable law.",
      },
    ],
  },
  {
    id: "section-13",
    number: 13,
    title: "Your Data-Protection Rights",
    navLabel: "Your Rights",
    blocks: [
      {
        kind: "paragraph",
        text: "Subject to the applicable law and any lawful limitations or exemptions, you may have rights concerning your personal information. These may include the right to be informed about processing; request access to your personal information; request correction of inaccurate or incomplete information; object to or request restriction of certain processing; request deletion where legally applicable; request data portability; withdraw consent where processing is based on consent; and raise a complaint with an appropriate data-protection authority.",
      },
      {
        kind: "paragraph",
        text: "The Nigeria Data Protection Commission identifies rights under the Nigeria Data Protection Act 2023 including rights to information, access, rectification, objection, restriction, portability, erasure and protections relating to automated decision-making.",
      },
      {
        kind: "paragraph",
        text: "To exercise a privacy right, contact us using the details in Section 18. We may need to verify your identity before acting on a request. We will handle valid requests within the period required by applicable law.",
      },
    ],
  },
  {
    id: "section-14",
    number: 14,
    title: "Marketing Communications",
    navLabel: "Marketing",
    blocks: [
      {
        kind: "paragraph",
        text: "Where we send marketing or promotional communications, we will do so in accordance with applicable law. Where consent is required, we will seek it before sending such communications. You may opt out of marketing communications at any time by using any unsubscribe mechanism provided or by contacting us. We may still send non-marketing communications that are necessary for an existing enquiry, project, contract or business relationship.",
      },
    ],
  },
  {
    id: "section-15",
    number: 15,
    title: "Third-Party Websites and Social Media",
    navLabel: "Third-Party Websites",
    blocks: [
      {
        kind: "paragraph",
        text: "Our website or communications may contain links to third-party websites, platforms or social-media services. Those third parties operate under their own privacy practices and policies. Resolvent Global is not responsible for the privacy practices of third-party websites or platforms that we do not control. We encourage you to review the relevant privacy information before providing personal information to them.",
      },
    ],
  },
  {
    id: "section-16",
    number: 16,
    title: "Children’s Privacy",
    navLabel: "Children’s Privacy",
    blocks: [
      {
        kind: "paragraph",
        text: "Our website and general business services are not directed to children, and we do not knowingly seek to collect personal information from children through our general enquiry channels. If an activity involving children requires personal information to be processed, we will seek to apply appropriate safeguards and comply with applicable legal requirements.",
      },
    ],
  },
  {
    id: "section-17",
    number: 17,
    title: "Changes to This Privacy Notice",
    navLabel: "Changes to This Notice",
    blocks: [
      {
        kind: "paragraph",
        text: "We may update this Privacy Notice from time to time to reflect changes in our operations, technology, legal requirements or privacy practices. The current version will be published on our website with an updated “Last updated” date. Material changes may be communicated through additional means where appropriate.",
      },
    ],
  },
  {
    id: "section-18",
    number: 18,
    title: "Contact Us",
    navLabel: "Contact Us",
    blocks: [
      {
        kind: "paragraph",
        text: "If you have questions about this Privacy Notice, wish to exercise a data-protection right, or wish to raise a privacy concern, please contact:",
      },
      { kind: "contact" },
      {
        kind: "paragraph",
        text: "If you believe your data-protection rights have been infringed and your concern is not resolved, you may also have the right to lodge a complaint with the Nigeria Data Protection Commission or another competent supervisory authority, depending on the circumstances.",
      },
    ],
  },
  {
    id: "section-19",
    number: 19,
    title: "Governing Data-Protection Framework",
    navLabel: "Governing Framework",
    blocks: [
      {
        kind: "paragraph",
        text: "This Privacy Notice is designed with reference to the Nigeria Data Protection Act 2023 and applicable guidance issued by the Nigeria Data Protection Commission. Where another jurisdiction’s data-protection law applies to a particular processing activity, Resolvent Global will seek to comply with the requirements applicable to that activity.",
      },
    ],
  },
]

export const PRIVACY_NOTICE: LegalDocument = {
  slug: "privacy-notice",
  title: "Privacy Notice",
  subtitle: "Your privacy matters to us.",
  metaDescription:
    "How Resolvent Global collects, uses, stores and protects your personal information, and the data-protection rights available to you.",
  heroLead:
    "This Privacy Notice explains how Resolvent Global collects, uses, stores and protects your personal information.",
  heroTagline: ["Cleaner processes", "Brighter tomorrows"],
  // No photograph in the library says "data protection", so this page uses
  // the drawn globe instead.
  heroMedia: { variant: "globe" },
  effectiveDate: "21 September 2026",
  lastUpdated: "21 September 2026",
  lastUpdatedIso: "2026-09-21",

  intro: {
    heading: "Introduction",
    // The source document's preamble plus the opening of "Scope of This
    // Privacy Notice", so the introduction summarises the notice rather than
    // adding new statements.
    paragraphs: [
      "Resolvent Global Energy Process & Carbon Ltd, trading as Resolvent Global (“Resolvent Global”, “we”, “us” or “our”), respects your privacy and is committed to handling personal information responsibly, transparently and securely.",
      "This Privacy Notice explains how we collect, use, store, disclose and otherwise process personal information when you visit our website, submit an enquiry, contact us or engage with our services.",
    ],
  },

  glance: {
    heading: "Key Information at a Glance",
    items: [
      {
        icon: "UsersRound",
        text: "We collect information you provide to us",
        sectionId: "section-3",
      },
      {
        icon: "Settings2",
        text: "We use it to respond to enquiries and deliver services",
        sectionId: "section-5",
      },
      {
        icon: "ChartColumn",
        text: "We use Google Analytics to understand website usage",
        sectionId: "section-8",
      },
      {
        icon: "Server",
        text: "Our website is hosted on Vercel",
        sectionId: "section-8",
      },
      {
        icon: "ShieldCheck",
        text: "We take reasonable steps to keep your data secure",
        sectionId: "section-11",
      },
      {
        icon: "Lock",
        text: "You have rights over your personal information",
        sectionId: "section-13",
      },
    ],
  },

  detail: {
    heading: "Detailed Information",
    lead: "For full details, please read the complete Privacy Notice below.",
    sections: SECTIONS,
  },

  sideCard: {
    icon: "Mail",
    title: "Have a question?",
    body: "We're here to help. If you have any questions about this Privacy Notice, please get in touch.",
    ctaLabel: "Contact Us",
  },

  callout: {
    icon: "ShieldCheck",
    title: "Our Commitment",
    body: "We are committed to protecting your personal information and maintaining your trust. If you have any questions about this Privacy Notice, please [contact us](/contact).",
  },
}
