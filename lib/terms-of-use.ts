/**
 * Terms of Use content, transcribed from the approved source document
 * (`docs/Resolvent_Global_Terms_of_Use.docx`).
 *
 * The source document's "Implementation Notes for the Web Developer" and
 * "Drafting and Legal Review Note" sections are deliberately excluded — the
 * document itself states those notes are operational instructions and should
 * not form part of the public-facing Terms. See `lib/legal.ts` for why this
 * lives in code and for the shape the page renders from.
 *
 * One of those notes *is* implemented here: the document requires section 13
 * to link to the Privacy Notice, which the `[label](/href)` markup below does.
 */

import type { LegalDocument, LegalSection } from "@/lib/legal"

const SECTIONS: LegalSection[] = [
  {
    id: "section-1",
    number: 1,
    title: "About These Terms",
    navLabel: "About These Terms",
    blocks: [
      {
        kind: "paragraph",
        text: "These Terms of Use (“Terms”) apply to the website operated by Resolvent Global Energy Process & Carbon Ltd, trading as Resolvent Global (“Resolvent Global”, “we”, “us” or “our”). They govern your access to and use of resolventglobal.com, including its pages, materials, information, forms and other website content.",
      },
      {
        kind: "paragraph",
        text: "These Terms relate primarily to use of the website. Specific services, projects, training programmes, proposals, quotations, technology arrangements or other engagements may be subject to separate written terms, contracts or conditions. If a separately executed agreement conflicts with these Terms in relation to that engagement, the separate agreement will prevail to the extent of the conflict.",
      },
    ],
  },
  {
    id: "section-2",
    number: 2,
    title: "About Resolvent Global",
    navLabel: "About Resolvent Global",
    blocks: [
      {
        kind: "paragraph",
        text: "Resolvent Global provides engineering, sustainability, technology, industrial performance, environmental, water, energy, carbon, advisory, training and related professional solutions. Information on this website describes our capabilities and areas of interest at a general level and may be updated as our business develops.",
      },
    ],
  },
  {
    id: "section-3",
    number: 3,
    title: "Permitted Use of the Website",
    navLabel: "Permitted Use",
    blocks: [
      {
        kind: "list",
        intro:
          "You may use this website for lawful informational and legitimate business purposes. You agree not to:",
        items: [
          "use the website in violation of applicable law or regulation;",
          "attempt to gain unauthorised access to the website, servers, systems, accounts or data;",
          "introduce malware, malicious code, automated attacks or other material intended to disrupt or compromise the website;",
          "scrape, harvest, systematically extract or reproduce substantial website content using automated means without our prior written permission, except where such activity cannot lawfully be restricted;",
          "impersonate another person or organisation, misrepresent your identity or submit false or misleading information;",
          "use the website or its content to infringe intellectual-property, confidentiality, privacy or other rights; or",
          "interfere with the security, integrity, availability or proper operation of the website.",
        ],
      },
      {
        kind: "paragraph",
        text: "We may take reasonable steps to restrict or block access where we believe the website is being misused or its security or integrity is at risk.",
      },
    ],
  },
  {
    id: "section-4",
    number: 4,
    title: "Website Information Is General Information",
    navLabel: "General Information Only",
    blocks: [
      {
        kind: "paragraph",
        text: "The website may contain information about engineering, process optimisation, water and environmental systems, energy, carbon management, sustainability, technology, innovation, training and other technical or commercial subjects. Unless expressly stated otherwise in a separate professional engagement, website content is provided for general information only and is not project-specific engineering, technical, environmental, financial, investment, legal, regulatory, safety or other professional advice.",
      },
      {
        kind: "paragraph",
        text: "Technical decisions should be based on the relevant project conditions, data, standards, specifications, risks, regulatory requirements and professional assessment. You should not implement a technical or commercial decision solely because information appearing on this website appears relevant to your circumstances.",
      },
    ],
  },
  {
    id: "section-5",
    number: 5,
    title: "Accuracy and Availability",
    navLabel: "Accuracy & Availability",
    blocks: [
      {
        kind: "paragraph",
        text: "We aim to present useful and accurate information, but website content may contain errors, omissions or information that becomes outdated. We may change, correct, remove or update content without prior notice.",
      },
      {
        kind: "paragraph",
        text: "We do not promise that the website will always be available, uninterrupted, error-free, secure or compatible with every device or system. Maintenance, technical failures, cybersecurity events, third-party infrastructure issues or other circumstances may affect availability.",
      },
    ],
  },
  {
    id: "section-6",
    number: 6,
    title: "Enquiries, Requests for Proposal and Website Forms",
    navLabel: "Enquiries & Proposals",
    blocks: [
      {
        kind: "paragraph",
        text: "Submitting a contact form, enquiry, project description or request for proposal does not by itself create a client, consultant, contractor, partnership, agency, fiduciary or other professional relationship with Resolvent Global.",
      },
      {
        kind: "paragraph",
        text: "Any engagement is subject to appropriate scoping, technical and commercial review and, where applicable, acceptance of a proposal, quotation, purchase order, contract or other written agreement. Unless expressly stated otherwise, information displayed on the website is not a binding offer to provide services at a particular price, scope, schedule or outcome.",
      },
      {
        kind: "paragraph",
        text: "When submitting information, you confirm that the information is accurate to the best of your knowledge and that you are authorised to provide it. Personal information submitted through the website is handled in accordance with our [Privacy Notice](/privacy-notice).",
      },
    ],
  },
  {
    id: "section-7",
    number: 7,
    title: "Proposals, Quotations and Commercial Information",
    navLabel: "Quotations & Commercials",
    blocks: [
      {
        kind: "paragraph",
        text: "Proposals, quotations, scopes, schedules, budgets, commercial assumptions and other materials supplied by Resolvent Global outside the public website may be subject to their own validity periods, assumptions, exclusions, confidentiality requirements and contractual terms. Public website content does not amend or override those documents.",
      },
      {
        kind: "paragraph",
        text: "Prices, service descriptions or indicative information appearing on the website, if any, may change and should not be treated as a final quotation unless expressly identified as such in an authorised written communication.",
      },
    ],
  },
  {
    id: "section-8",
    number: 8,
    title: "Intellectual Property",
    navLabel: "Intellectual Property",
    blocks: [
      {
        kind: "paragraph",
        text: "Unless otherwise stated, the website and its original content — including text, graphics, branding, logos, layouts, illustrations, documents, training descriptions, technical materials and other original materials — are owned by or licensed to Resolvent Global and are protected by applicable intellectual-property laws.",
      },
      {
        kind: "paragraph",
        text: "You may view and make reasonable personal or internal-business use of publicly available website content. You may not reproduce, republish, distribute, sell, license, modify, create derivative commercial materials from, or otherwise exploit substantial portions of our protected content without prior written permission, except as permitted by law.",
      },
      {
        kind: "paragraph",
        text: "The names “Resolvent Global”, associated logos, branding and other source identifiers may not be used in a manner that suggests sponsorship, endorsement, partnership or affiliation without our prior written permission.",
      },
    ],
  },
  {
    id: "section-9",
    number: 9,
    title: "Proprietary Technologies and Confidential Information",
    navLabel: "Proprietary Technologies",
    blocks: [
      {
        kind: "paragraph",
        text: "References on the website to proprietary technologies, methodologies, concepts, know-how, research, processes or innovation activities do not grant any licence, ownership interest or other right in those assets.",
      },
      {
        kind: "paragraph",
        text: "The public website is not intended as a channel for exchanging confidential technical information. If a proposed project requires confidential or proprietary information to be exchanged, appropriate confidentiality arrangements should be established where necessary before sensitive information is disclosed.",
      },
      {
        kind: "paragraph",
        text: "Nothing on the website requires Resolvent Global to disclose trade secrets, unpublished technical information, proprietary methods, research data or other confidential intellectual property.",
      },
    ],
  },
  {
    id: "section-10",
    number: 10,
    title: "Training and Educational Materials",
    navLabel: "Training Materials",
    blocks: [
      {
        kind: "paragraph",
        text: "Information describing training courses, professional development programmes or educational offerings is provided for general programme information. Course availability, curriculum, delivery format, duration, fees, facilitators, assessment arrangements and schedules may change.",
      },
      {
        kind: "paragraph",
        text: "Training materials supplied to participants may be subject to additional intellectual-property and use restrictions. Unless expressly authorised, enrolment in a programme does not permit a participant to reproduce, resell, redistribute or commercially deliver Resolvent Global course materials.",
      },
      {
        kind: "paragraph",
        text: "Any certificate or record of participation is subject to the applicable programme requirements and does not constitute a professional licence, statutory accreditation or regulated qualification unless expressly stated.",
      },
    ],
  },
  {
    id: "section-11",
    number: 11,
    title: "User-Submitted Material",
    navLabel: "Your Submissions",
    blocks: [
      {
        kind: "paragraph",
        text: "If you submit project information, documents, comments or other material through the website, you retain ownership of your material. You grant us permission to use, reproduce and internally share that material to the extent reasonably necessary to evaluate and respond to your enquiry, administer a potential engagement, protect our legitimate interests or comply with law.",
      },
      {
        kind: "paragraph",
        text: "You must not knowingly submit material that is unlawful, malicious, defamatory, infringing, misleading, or that you do not have authority to disclose.",
      },
    ],
  },
  {
    id: "section-12",
    number: 12,
    title: "Third-Party Websites and Services",
    navLabel: "Third-Party Links",
    blocks: [
      {
        kind: "paragraph",
        text: "The website may contain links to third-party websites, platforms or services. A link does not necessarily mean that Resolvent Global endorses or controls the third party or its content. Third-party services are governed by their own terms and privacy practices.",
      },
      {
        kind: "paragraph",
        text: "To the extent permitted by applicable law, we are not responsible for the content, availability, security or practices of third-party websites or services that we do not control.",
      },
    ],
  },
  {
    id: "section-13",
    number: 13,
    title: "Privacy, Analytics and Cookies",
    navLabel: "Privacy & Cookies",
    blocks: [
      {
        kind: "paragraph",
        text: "Our collection and handling of personal information is described in our [Privacy Notice](/privacy-notice). The website currently uses Google Analytics and is hosted using Vercel infrastructure. Cookies and similar technologies may be used for website functionality, security, preferences and analytics.",
      },
      {
        kind: "paragraph",
        text: "Where applicable law requires consent or another choice before non-essential technologies are used, we will seek to implement an appropriate mechanism. Please refer to the [Privacy Notice](/privacy-notice) for further information.",
      },
    ],
  },
  {
    id: "section-14",
    number: 14,
    title: "No Guarantee of Specific Results",
    navLabel: "No Guaranteed Results",
    blocks: [
      {
        kind: "paragraph",
        text: "Engineering, sustainability, technology and advisory outcomes depend on project-specific facts, data quality, operating conditions, implementation, third parties, regulatory requirements and other variables. General descriptions, examples, case studies, projections or statements of capability on the website do not guarantee that the same or any particular result will be achieved in another project.",
      },
    ],
  },
  {
    id: "section-15",
    number: 15,
    title: "Limitation of Liability",
    navLabel: "Limitation of Liability",
    blocks: [
      {
        kind: "paragraph",
        text: "Nothing in these Terms excludes, restricts or modifies any right, remedy, guarantee, warranty or liability that cannot lawfully be excluded, restricted or modified under applicable law, including applicable consumer-protection law.",
      },
      {
        kind: "paragraph",
        text: "Subject to the preceding paragraph, and to the extent permitted by law, Resolvent Global will not be liable for loss arising solely from reliance on general website information as a substitute for project-specific professional advice, or for loss caused by circumstances outside our reasonable control in connection with website availability or third-party services.",
      },
      {
        kind: "paragraph",
        text: "Any liability arising from separately contracted professional services will be governed by the applicable proposal, contract or other written engagement terms rather than this website clause.",
      },
    ],
  },
  {
    id: "section-16",
    number: 16,
    title: "Indemnity for Unlawful Website Misuse",
    navLabel: "Indemnity",
    blocks: [
      {
        kind: "paragraph",
        text: "To the extent permitted by applicable law, you are responsible for losses or claims resulting from your unlawful or deliberately harmful misuse of the website, infringement of third-party rights through material you submit, or breach of these Terms. This provision does not require a consumer to waive rights or assume liabilities that cannot lawfully be waived or imposed.",
      },
    ],
  },
  {
    id: "section-17",
    number: 17,
    title: "Suspension or Termination of Access",
    navLabel: "Suspension of Access",
    blocks: [
      {
        kind: "paragraph",
        text: "We may suspend, restrict or terminate access to all or part of the website where reasonably necessary for security, maintenance, legal compliance, protection of rights or response to misuse. We may also discontinue or materially change the website or particular features.",
      },
    ],
  },
  {
    id: "section-18",
    number: 18,
    title: "Changes to These Terms",
    navLabel: "Changes to These Terms",
    blocks: [
      {
        kind: "paragraph",
        text: "We may update these Terms to reflect changes in our website, services, business practices or legal requirements. The current version will be published on this page with an updated “Last updated” date. Your continued use of the website after an updated version is published constitutes acceptance of the revised Terms to the extent permitted by law.",
      },
    ],
  },
  {
    id: "section-19",
    number: 19,
    title: "Governing Law and Disputes",
    navLabel: "Governing Law",
    blocks: [
      {
        kind: "paragraph",
        text: "These Terms and use of this website are governed by the laws of the Federal Republic of Nigeria, without prejudice to any mandatory rights or protections that apply to you under another applicable law.",
      },
      {
        kind: "paragraph",
        text: "Before commencing formal proceedings, we encourage users to contact us so that concerns can be considered and, where appropriate, resolved promptly. Subject to mandatory law and any separate contractual dispute-resolution arrangement, disputes relating specifically to these Terms or use of the website will be subject to the jurisdiction of the competent courts of Nigeria.",
      },
    ],
  },
  {
    id: "section-20",
    number: 20,
    title: "Severability and No Waiver",
    navLabel: "Severability",
    blocks: [
      {
        kind: "paragraph",
        text: "If a provision of these Terms is held to be invalid, unlawful or unenforceable, it will be interpreted or limited to the minimum extent necessary, and the remaining provisions will continue in effect where legally permissible.",
      },
      {
        kind: "paragraph",
        text: "A failure or delay by Resolvent Global in enforcing a provision does not by itself constitute a waiver of that provision or of any other right.",
      },
    ],
  },
  {
    id: "section-21",
    number: 21,
    title: "Contact Us",
    navLabel: "Contact Us",
    blocks: [
      {
        kind: "paragraph",
        text: "Questions about these Terms of Use may be directed to:",
      },
      { kind: "contact" },
    ],
  },
]

export const TERMS_OF_USE: LegalDocument = {
  slug: "terms-of-use",
  title: "Terms of Use",
  subtitle: "Guidelines for using our website and services.",
  metaDescription:
    "The rules, responsibilities and important information for anyone accessing or using the Resolvent Global website.",
  heroLead:
    "These Terms of Use set out the rules, responsibilities and important information for anyone accessing or using the Resolvent Global website.",
  heroTagline: [
    "Engineering solutions",
    "for a cleaner",
    "brighter",
    "tomorrow",
  ],
  heroMedia: {
    variant: "image",
    src: "/images/hero-image.png",
    alt: "",
  },
  effectiveDate: "21 September 2026",
  lastUpdated: "21 September 2026",
  lastUpdatedIso: "2026-09-21",

  intro: {
    heading: "Welcome to Resolvent Global",
    // The source document's preamble verbatim, split at a sentence boundary
    // into the two paragraphs the design reference shows. The reference's own
    // paraphrase of this passage is deliberately not used — this is operative
    // legal text, so the approved wording wins over the mock-up's.
    paragraphs: [
      "These Terms of Use govern access to and use of resolventglobal.com and its content. By using this website, you agree to these Terms.",
      "If you do not agree, please discontinue use of the website.",
    ],
  },

  glance: {
    heading: "Key Points at a Glance",
    items: [
      {
        icon: "FileText",
        text: "Use the website responsibly",
        sectionId: "section-3",
      },
      {
        icon: "UsersRound",
        text: "Respect our intellectual property",
        sectionId: "section-8",
      },
      {
        icon: "Info",
        text: "Information on the website is for general guidance only",
        sectionId: "section-4",
      },
      {
        icon: "ShieldCheck",
        text: "Do not misuse or attempt to harm our website",
        sectionId: "section-3",
      },
      {
        icon: "Handshake",
        text: "Separate contracts apply for our services",
        sectionId: "section-6",
      },
      {
        icon: "Globe",
        text: "Contact us if you have any questions",
        sectionId: "section-21",
      },
    ],
  },

  detail: {
    heading: "Detailed Terms",
    lead: "Please read the full Terms of Use below.",
    sections: SECTIONS,
  },

  sideCard: {
    icon: "MessageSquare",
    title: "Questions about these terms?",
    body: "If you have any questions about our Terms of Use, please get in touch.",
    ctaLabel: "Contact Us",
  },

  callout: {
    icon: "BadgeCheck",
    title: "Responsible Use",
    body: "By using this website, you agree to use it in a lawful, professional and responsible manner, and in a way that supports our mission to deliver practical solutions for a cleaner, more sustainable tomorrow.",
  },
}
