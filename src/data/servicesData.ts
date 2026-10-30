import { ServiceItem } from "../types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "seo",
    slug: "seo-services",
    title: "Search Engine Optimization (SEO)",
    shortDescription:
      "Comprehensive full-funnel organic search strategies engineered to enhance visibility, organic market share, and revenue across international search engines.",
    longDescription:
      "Our core Search Engine Optimization methodology combines deep technical hygiene, strategic topical architecture, and qualitative off-page authority. We construct bespoke roadmaps based on your commercial landscape, eliminating blind spots and driving compounding search performance across high-intent queries.",
    iconName: "Globe",
    bestFor: "Growing businesses, SaaS, and enterprises seeking compounding organic traffic.",
    keyBenefits: [
      "Holistic approach integrating technical, on-page, and off-page dimensions",
      "Prioritization on commercial intent queries that generate pipeline",
      "Transparent reporting with zero algorithmic shortcut risks",
      "Continuous algorithmic tracking and adaptive roadmap refinement",
    ],
    deliverables: [
      "Custom 12-Month SEO Growth Roadmap",
      "Topical Keyword Architecture & Cluster Mapping",
      "Monthly Organic Attribution & Performance Reports",
      "Executive Bi-Weekly Strategy Syncs",
    ],
    process: [
      "Market and competitive landscape assessment",
      "Crawl diagnostics and technical remediation",
      "Topical authority and gap prioritization",
      "Iterative monthly sprints and KPI measurement",
    ],
    faqs: [
      {
        question: "How does your full-service SEO differ from standalone link building?",
        answer:
          "Full-service SEO aligns site architecture, internal linking, on-page metadata, content quality, and off-page authority into a synchronized campaign, whereas standalone link building focuses strictly on acquiring editorial placements.",
      },
      {
        question: "How long does it take to see positive organic movements?",
        answer:
          "Most clients begin seeing early indexing and impression shifts within 8 to 12 weeks, with substantive organic traffic and qualified inquiry expansion compounding steadily over 6 to 12 months.",
      },
    ],
  },
  {
    id: "on-page-seo",
    slug: "on-page-seo",
    title: "On-Page SEO",
    shortDescription:
      "Precision optimization of heading hierarchies, semantic metadata, internal linking structures, and editorial relevancy to maximize search engine comprehension.",
    longDescription:
      "On-Page SEO transforms your existing and future URLs into distinct authoritative answers. We optimize information architecture, header tag hierarchies, keyword proximity, Schema markup, search snippet CTRs, and internal page equity distribution without keyword stuffing.",
    iconName: "FileText",
    bestFor: "Websites with valuable content that is underperforming in search rankings.",
    keyBenefits: [
      "Enhanced topical relevance and semantic keyword coverage",
      "Increased click-through rates from search engine results pages",
      "Elimination of internal keyword cannibalization",
      "Strategic internal link equity distribution to high-priority URLs",
    ],
    deliverables: [
      "Page-by-page metadata and structural blueprints",
      "Internal linking architecture audit and mapping",
      "Search intent content refinement briefs",
      "Structured data (Schema.org) code snippets",
    ],
    process: [
      "URL-level intent and ranking status evaluation",
      "Content depth and competitor semantic gap analysis",
      "On-page metadata and markup implementation guidelines",
      "Post-deployment indexing and CTR tracking",
    ],
  },
  {
    id: "technical-seo",
    slug: "technical-seo",
    title: "Technical SEO",
    shortDescription:
      "Deep infrastructure auditing, crawl budget optimization, Core Web Vitals remediation, and robust structured data integration for flawless indexation.",
    longDescription:
      "Search engine bots must be able to discover, crawl, and render your pages without friction. We resolve JavaScript rendering hurdles, server response latencies, faceted navigation duplication, canonical conflicts, XML sitemap errors, and hreflang misconfigurations across international locales.",
    iconName: "Cpu",
    bestFor: "Complex web applications, SaaS platforms, and large e-commerce catalogs.",
    keyBenefits: [
      "Optimized crawl budget efficiency for fast indexation",
      "Excellence across Core Web Vitals (LCP, INP, CLS)",
      "Resolution of index bloat and duplicate content traps",
      "Seamless multi-regional and multilingual hreflang implementation",
    ],
    deliverables: [
      "Comprehensive Technical Crawl Audit (Screaming Frog / Log Analysis)",
      "Core Web Vitals Remediation Action Plan for Dev Teams",
      "Robots.txt & XML Sitemap Architecture Revision",
      "JSON-LD Advanced Structured Data Schema Specifications",
    ],
    process: [
      "Deep raw crawler simulation and server log file analysis",
      "Identification of critical render-blocking scripts and redirects",
      "Prioritized engineering backlog creation with code examples",
      "Verification testing in Google Search Console inspection tools",
    ],
    faqs: [
      {
        question: "Do you coordinate directly with our engineering or developer teams?",
        answer:
          "Yes. We deliver clear engineering-ready tickets complete with code snippets, reproduction steps, and testing criteria, and can collaborate directly via GitHub, Jira, or Linear.",
      },
    ],
  },
  {
    id: "off-page-seo",
    slug: "off-page-seo",
    title: "Off-Page SEO",
    shortDescription:
      "Strategic digital PR, genuine editorial outreach, and brand mention acquisition to build domain trust and industry-recognized authority.",
    longDescription:
      "Off-page search performance requires genuine external validation. We build authoritative digital footprints through thoughtful media relations, expert commentary placements, podcast mentions, and authoritative resource citations that withstand algorithmic scrutiny.",
    iconName: "Share2",
    bestFor: "Brands seeking to establish domain authority and outcompete entrenched market incumbents.",
    keyBenefits: [
      "Diversified backlink profile with natural anchor text distribution",
      "Enhanced brand query volume and authoritative co-citations",
      "Referral traffic from targeted industry audiences",
      "Protection against algorithmic link devaluation penalties",
    ],
    deliverables: [
      "Backlink Profile Health and Anchor Text Distribution Audit",
      "Digital PR Angle Formulation & Outreach Blueprint",
      "Monthly Editorial Link Placements in Target Vertical",
      "Competitor Backlink Intersect Matrix",
    ],
    process: [
      "Existing backlink profile diagnostic and risk audit",
      "Identification of authoritative unlinked brand mentions",
      "Targeted journalist and publication editorial pitching",
      "Live placement verification and index status monitoring",
    ],
  },
  {
    id: "guest-posting",
    slug: "guest-posting-services",
    title: "Guest Posting Services",
    shortDescription:
      "High-authority editorial article placements on thoroughly vetted publisher websites with real organic traffic and strict editorial guidelines.",
    longDescription:
      "We secure premium guest contribution opportunities on recognized industry publications. Every publisher is rigorously vetted for genuine organic search traffic, editorial independence, clean domain histories, and contextual thematic alignment with your brand.",
    iconName: "BookOpen",
    bestFor: "Companies needing prominent thought-leadership mentions and natural contextual backlinks.",
    keyBenefits: [
      "100% manual outreach with individualized editorial pitches",
      "Strict vetting: minimum 5,000+ monthly organic traffic verified via third-party tools",
      "No private blog networks (PBNs) or spammy link farms",
      "Professionally written editorial content produced by native English subject specialists",
    ],
    deliverables: [
      "Target Publisher Prospect List with Metrics for Approval",
      "Original 1,200+ Word Editorial Content Aligned with Publication Standards",
      "Contextually Integrated Natural Anchor Text Placement",
      "Live Published URL Report with Indexation Confirmation",
    ],
    process: [
      "Niche and target market qualification (US, UK, CA, AU)",
      "Publisher vetting across organic trends and backlink health",
      "Editorial topic pitch and client approval",
      "Article creation, editorial submission, and live publication tracking",
    ],
    faqs: [
      {
        question: "Can we review and approve the publisher websites before outreach begins?",
        answer:
          "Yes. We offer pre-approval workflows where you can review domain metrics, organic traffic graphs, and editorial tone before any article is pitched.",
      },
      {
        question: "What are your minimum publisher quality standards?",
        answer:
          "We never place links on sites built exclusively for selling links. Every publication must demonstrate continuous organic search traffic, authentic editorial moderation, and thematic relevance to your vertical.",
      },
    ],
  },
  {
    id: "link-insertion",
    slug: "link-insertion-services",
    title: "Link Insertion Services",
    shortDescription:
      "Contextual backlink placements strategically embedded into existing, indexed articles that already hold search authority and relevant keyword rankings.",
    longDescription:
      "Link insertion (niche edits) capitalizes on established web pages that search engines already trust. We identify existing, age-seasoned articles relevant to your niche and coordinate editorial additions of relevant context, supplementary statistics, and natural references back to your site.",
    iconName: "Link2",
    bestFor: "Fast-acting backlink acquisition leveraging pages with established historical authority.",
    keyBenefits: [
      "Immediate authority: placed on URLs with existing search impressions and age",
      "Faster indexation and bot crawl frequency than newly published URLs",
      "Seamless contextual relevance integrated into existing article paragraphs",
      "Strict evaluation to confirm the hosting page has positive organic performance",
    ],
    deliverables: [
      "Vetted Existing URL List Matching Your Target Anchor Topics",
      "Contextual Paragraph Integration Copy for Editorial Insertion",
      "Live Link Verification and Anchor Text Integrity Assurance",
      "Monitoring for Placement Longevity and Dofollow Status",
    ],
    process: [
      "Target keyword and URL mapping for destination pages",
      "Discovery of high-ranking, index-stable articles in your niche",
      "Negotiation with site editors for genuine contextual paragraph additions",
      "Verification of permanent placement and crawl status",
    ],
    faqs: [
      {
        question: "How do you ensure link insertions look natural to search engines?",
        answer:
          "We craft comprehensive sentences or short paragraphs that provide genuine value to the existing article (e.g., adding a relevant research citation or helpful tool reference), ensuring editors and algorithms see the update as an editorial improvement.",
      },
    ],
  },
  {
    id: "quality-link-building",
    slug: "link-building-services",
    title: "Quality Link Building",
    shortDescription:
      "Bespoke, white-hat backlink campaigns focusing on niche relevance, domain trust, and sustainable equity over vanity link quantity.",
    longDescription:
      "Sustainable organic growth is driven by link quality, not bulk link packages. We execute targeted link building campaigns utilizing digital PR, resource page link building, skyscraper content updates, and unlinked brand reclamation to build a durable backlink moat around your website.",
    iconName: "ShieldCheck",
    bestFor: "Businesses requiring a safe, dependable link profile that survives algorithmic core updates.",
    keyBenefits: [
      "Zero automated spam tools, forum profiles, or blog comment spam",
      "Balanced anchor text distribution adhering to natural profile ratios",
      "Continuous domain monitoring for toxic link accumulation",
      "Tailored strategies customized for US, UK, Canadian, and Australian markets",
    ],
    deliverables: [
      "Bespoke Link Acquisition Strategy Document",
      "Monthly Live Link Report with Domain Authority & Traffic Metrics",
      "Anchor Text Ratio Health Assessment",
      "Quarterly Link Velocity and Competitor Gap Rebalancing",
    ],
    process: [
      "Competitor backlink gap and velocity study",
      "Asset ideation (data studies, calculators, comprehensive guides)",
      "Personalized publisher and webmaster outreach",
      "Monthly reporting and quality assurance checks",
    ],
  },
  {
    id: "keyword-research",
    slug: "keyword-research",
    title: "Keyword Research & Topical Mapping",
    shortDescription:
      "In-depth query intent analysis, search volume verification, and topical authority architecture to capture ready-to-buy prospective clients.",
    longDescription:
      "We identify the exact search vernacular your prospective buyers use when evaluating solutions. By categorizing keywords by commercial intent, search volume, SERP feature opportunities, and ranking difficulty, we build comprehensive topical content maps that guide your editorial investment.",
    iconName: "Search",
    bestFor: "New websites or established brands launching new products or entering international regions.",
    keyBenefits: [
      "Clear differentiation between informational, navigational, and transactional intent",
      "Topical cluster architecture that satisfies Google's Helpful Content criteria",
      "Identification of low-competition, high-conversion long-tail opportunities",
      "Localization considerations for US vs. UK vs. AU spelling and phrasing",
    ],
    deliverables: [
      "Categorized Master Keyword Database (CSV & Interactive Sheet)",
      "Topical Content Cluster Map with Recommended Parent-Child URL Structures",
      "SERP Competitor Difficulty and Opportunity Matrix",
      "Content Editorial Calendar with Target Primary & Secondary Keywords",
    ],
    process: [
      "Discovery interviews on target audience and service margins",
      "Algorithmic keyword extraction across regional search databases",
      "Intent categorization and prioritization based on conversion value",
      "Mapping keywords to dedicated URL templates and landing pages",
    ],
  },
  {
    id: "competitor-analysis",
    slug: "competitor-analysis",
    title: "Competitor SEO Analysis",
    shortDescription:
      "Deep-dive reverse engineering of your top organic rivals to uncover content gaps, backlink sources, and untapped market opportunities.",
    longDescription:
      "Discover exactly why competitors outrank you and where their organic strategies are vulnerable. We dissect their backlink acquisition velocity, top-performing landing pages, internal linking mechanics, and paid vs. organic overlap to construct a clear blueprint to capture their market share.",
    iconName: "TrendingUp",
    bestFor: "Companies in competitive niches seeking clear tactical roadmaps to overtake market leaders.",
    keyBenefits: [
      "Direct visibility into competitor backlink acquisition networks",
      "Identification of high-performing competitor content you can replicate and outperform",
      "Uncovering keyword niches where competitors have weak or outdated content",
      "Benchmarking organic market share across specific geographic regions",
    ],
    deliverables: [
      "Comprehensive Competitor Intelligence Dossier",
      "Backlink Gap Analysis (Links Competitors Have That You Lack)",
      "Content Topic Gap Matrix",
      "Actionable 90-Day Tactical Battleplan",
    ],
    process: [
      "Identification of true organic search competitors vs. direct business rivals",
      "Full crawl and backlink matrix cross-referencing",
      "Comparative analysis of content depth, site speed, and trust metrics",
      "Synthesis into prioritized offensive and defensive recommendations",
    ],
  },
  {
    id: "content-marketing",
    slug: "content-marketing",
    title: "Content Marketing & SEO Copywriting",
    shortDescription:
      "Authoritative, helpful, human-written content engineered to educate buyers, satisfy search intent, and earn organic citations naturally.",
    longDescription:
      "Search engines favor deep, experienced, and well-structured content that solves searcher queries thoroughly. We develop comprehensive guides, comparison pages, case studies, and industry research that establish your brand as a definitive topical authority while driving inbound organic leads.",
    iconName: "Layers",
    bestFor: "SaaS companies, B2B services, and e-commerce stores wanting to build long-term compounding assets.",
    keyBenefits: [
      "100% human-written content authored by domain-familiar specialists",
      "Built with natural readability, clear visual hierarchy, and actionable advice",
      "Optimized for modern search features, AI overviews, and featured snippets",
      "Structured to naturally attract passive editorial backlinks over time",
    ],
    deliverables: [
      "Comprehensive Content Briefs with Heading Frameworks & Semantic Terms",
      "Polished, Publication-Ready Articles with Formatting and Imagery Suggestions",
      "Custom Graphic and Data Visualization Recommendations",
      "Conversion Rate Optimization (CRO) Calls-to-Action within Content",
    ],
    process: [
      "Search intent research and SERP top-result benchmarking",
      "Outline creation focusing on original insights and depth",
      "Draft production with rigorous factual verification and editing",
      "On-page publishing, formatting, and internal link integration",
    ],
  },
  {
    id: "seo-audits",
    slug: "seo-audits",
    title: "Comprehensive SEO Audits",
    shortDescription:
      "Exhaustive 150+ point diagnostic examinations covering technical architecture, crawl health, content quality, and backlink safety.",
    longDescription:
      "Stop guessing why your organic performance has plateaued or dropped. Our comprehensive audits analyze server response health, rendering bottlenecks, crawl waste, duplicate metadata, thin content, orphaned pages, and toxic backlink footprints to give you a prioritized, step-by-step roadmap for recovery and growth.",
    iconName: "CheckCircle2",
    bestFor: "Websites preparing for redesigns, recovering from traffic declines, or auditing agency work.",
    keyBenefits: [
      "Prioritized, color-coded action items categorized by impact and developer effort",
      "Zero automated fluff reports; every finding is validated by senior SEO specialists",
      "Clear separation between quick wins and long-term structural overhauls",
      "Includes executive summary walkthrough call with your leadership team",
    ],
    deliverables: [
      "40+ Page Tailored Audit Document with Annotated Screenshots",
      "Executive Summary Slide Deck for Leadership and Stakeholders",
      "Actionable Engineering Punch List in CSV / Notion format",
      "60-Minute Video Consultation and Q&A Session",
    ],
    process: [
      "Deep crawl data capture and Google Search Console / GA4 audit",
      "Manual architecture, content quality, and link profile evaluation",
      "Impact vs. effort scoring for all identified vulnerabilities",
      "Presentation of findings and implementation guidance",
    ],
  },
  {
    id: "local-seo",
    slug: "local-seo",
    title: "Local SEO & Multi-Location Strategy",
    shortDescription:
      "Geo-targeted search visibility, Google Business Profile optimization, and authoritative local citation building to capture regional customers.",
    longDescription:
      "Dominate local map packs and high-intent local search queries. We optimize Google Business Profiles, standardize name-address-phone (NAP) citations across trusted business directories, build localized landing pages, and foster localized link opportunities for single-location or multi-regional enterprises.",
    iconName: "MapPin",
    bestFor: "Multi-location service businesses, clinics, legal firms, and regional retail operations.",
    keyBenefits: [
      "Higher placement in Google Maps 3-Pack for regional commercial queries",
      "Consistent NAP citation distribution across top tier directories",
      "Dedicated geo-optimized landing pages targeting high-converting towns and cities",
      "Local link acquisition through regional chambers, sponsorships, and local press",
    ],
    deliverables: [
      "Google Business Profile Optimization and Audit",
      "Local Citation Clean-Up and Expansion Campaign (50+ Verified Citations)",
      "Local Landing Page Architecture & Schema Markup (LocalBusiness)",
      "Local Competitor Map Pack Audit & Monthly Geo-Rank Tracking",
    ],
    process: [
      "Verification and cleanup of duplicate or inconsistent local listings",
      "Optimization of primary categories, services, and visual media on GBP",
      "Creation of localized content and regional schema markup",
      "Monthly geo-grid tracking and citation health audits",
    ],
  },
];
