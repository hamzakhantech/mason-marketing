// features-page.jsx -- Full Features deep-dive

// --- Page hero ----------------------------------------------------------------
const FeaturesHero = () => (
  <section className="page-hero">
    <div className="page-hero__glow" aria-hidden="true" />
    <div className="container page-hero__inner">
      <span className="eyebrow gsap-fade-up">Platform Features</span>
      <h1 className="display gsap-fade-up">
        Every tool a construction<br />team <span className="accent">actually needs</span>.
      </h1>
      <p className="lede gsap-fade-up">
        MASON is twelve tightly integrated modules -- not twelve loosely coupled apps.
        BIM viewer, schedule, RFIs, issues, daily logs, cost tracking, documents, and an
        AI Concierge that ties them all together. One login. One permission model.
        One source of truth for the office and the field.
      </p>
      <div className="hero__cta gsap-fade-up">
        <a href="https://app.masononsite.com/register" className="btn btn-primary">
          Start 30-day free trial <IconArrowRight size={16} stroke={2} />
        </a>
        <a href="pricing.html" className="btn btn-ghost">See pricing</a>
      </div>
    </div>
  </section>
);

// --- Module nav tabs ----------------------------------------------------------
const MODULE_TABS = [
  { id: "bim",       label: "BIM Viewer" },
  { id: "schedule",  label: "Schedule" },
  { id: "rfi",       label: "RFIs" },
  { id: "issues",    label: "Issues" },
  { id: "logs",      label: "Daily Logs" },
  { id: "cost",      label: "Cost Control" },
  { id: "docs",      label: "Documents" },
  { id: "submittals",label: "Submittals" },
  { id: "concierge", label: "AI Concierge" },
  { id: "reports",   label: "Reports" },
  { id: "mobile",    label: "Mobile" },
  { id: "admin",     label: "Admin & Access" },
];

const ModuleTabs = ({ active, onChange }) => (
  <div className="module-tabs-wrap">
    <div className="module-tabs container" role="tablist">
      {MODULE_TABS.map(t => (
        <button
          key={t.id}
          role="tab"
          aria-selected={active === t.id}
          className={"module-tab" + (active === t.id ? " is-active" : "")}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  </div>
);

// --- Module detail panels -----------------------------------------------------

const MODULE_DATA = {
  bim: {
    eyebrow: "Module 01 -- BIM Viewer",
    headline: "Browser-native BIM. No plugin. No Autodesk account.",
    intro: `MASON's BIM viewer loads IFC 2x3 and IFC4 models directly in your browser -- desktop or Android. There is nothing to install, no desktop licence to purchase, and no Autodesk Construction Cloud subscription required. Your federated model -- architectural, structural, MEP combined -- renders in under 30 seconds on a modern device.`,
    body: [
      {
        heading: "What you can do",
        copy: `Navigate any floor, discipline layer, or building system through the tree panel on the left. Click any element to inspect its full IFC property set: material, fire rating, classification, cost code, and every attribute your BIM author exported. Use the Isolate command to zero in on a single system. Use Section to slice through slabs and walls. The viewer remembers your camera angle between sessions so you can pick up exactly where you left off.`
      },
      {
        heading: "Federated models",
        copy: `Upload separate discipline IFCs and MASON federates them into a single scene. Trade conflicts light up automatically. Each discipline is colour-coded and can be toggled independently. Your structural team can hide MEP to see only their steel; your MEP coordinator can isolate HVAC and check clearances. Clashes detected during federation are written directly into the Issues register with element IDs, grid references, and elevation -- so an RFI can be drafted in two clicks.`
      },
      {
        heading: "Markups and pinned issues",
        copy: `Tap or click any element and choose "Pin Issue". A geo-located pin drops on the model and links bidirectionally to an Issue card. Walk the building digitally, spot a clearance problem at gridline E/4 +12.40m, pin it, assign it to the MEP sub, set a due date -- all without leaving the viewer. The pin stays visible to every permissioned user until the issue is closed.`
      },
      {
        heading: "Supported formats",
        copy: `MASON natively parses IFC 2x3 and IFC4. Revit users export via the standard Revit IFC exporter or open-BIM plugins. ArchiCAD, ALLPLAN, Tekla, and Vectorworks all export to IFC out of the box. We do not support proprietary RVT, NWC, or DWG in the viewer -- those require an Autodesk licence. The IFC open standard is the right long-term choice for interoperability and you will never be locked into a single CAD vendor.`
      },
      {
        heading: "Performance",
        copy: `Models up to 300 MB load in under 30 seconds on a standard laptop (tested on 2022 MacBook Pro M2 and 2021 Dell XPS 15). Very large federated models above 500 MB may take 45-90 seconds on initial load; subsequent loads pull from the indexed scene cache and are near-instant. On Android (tested on Samsung Galaxy A52 and Pixel 7), models up to 80 MB load in under 20 seconds. Larger models on Android are supported but performance varies by device RAM.`
      }
    ],
    stats: [
      { value: "30s", label: "Avg. BIM load time" },
      { value: "IFC 2x3 + 4", label: "Supported standards" },
      { value: "300 MB", label: "Tested model size" },
      { value: "0", label: "Plugins to install" },
    ]
  },

  schedule: {
    eyebrow: "Module 02 -- Schedule",
    headline: "Gantt, milestones, and look-ahead -- in one view.",
    intro: `The MASON Schedule module is a proper interactive Gantt chart, not a spreadsheet masquerading as one. Tasks have durations, predecessors, float, and critical-path highlighting. Project managers can drag bars to adjust dates; the engine recalculates dependencies automatically. Field supervisors see a clean 3-week look-ahead on their phone without needing to interpret the full programme.`,
    body: [
      {
        heading: "Creating and managing tasks",
        copy: `Add tasks individually or import from an Excel/CSV template. Each task has a name, WBS code, responsible party, planned start, planned finish, actual start, actual finish, percentage complete, and predecessor list. Tasks can be grouped into phases or activity codes. The critical path is highlighted in amber -- your accent colour -- so you see risk at a glance.`
      },
      {
        heading: "Look-ahead views",
        copy: `Switch to 2-week, 3-week, or 4-week look-ahead mode. The view collapses to only tasks active or starting in that window, colour-coded by crew or subcontractor. Print or export to PDF for weekly site meetings. Field supervisors can mark tasks started or completed directly from the look-ahead on their Android device -- the update reflects in the full programme in real time.`
      },
      {
        heading: "Delay tracking",
        copy: `When a task slips, MASON records the actual start/finish, computes the variance, and cascades delay impacts through successors. You see at a glance which downstream tasks are now at risk. The AI Concierge can summarise the delay chain in plain language: "Task G is 4 days late due to concrete pour delay on E. This pushes steel erection to 15 June, putting the structural handover milestone at risk."`
      },
      {
        heading: "Baseline comparison",
        copy: `Save a baseline at contract award. MASON overlays planned vs. actual bars in a dual-bar view so you always know where you planned to be versus where you are. Export a baseline comparison report -- useful for Extension of Time claims and monthly progress reports to the client.`
      }
    ],
    stats: [
      { value: "Gantt", label: "Interactive chart" },
      { value: "CPM", label: "Critical path engine" },
      { value: "3-week", label: "Default look-ahead" },
      { value: "EOT", label: "Baseline export ready" },
    ]
  },

  rfi: {
    eyebrow: "Module 03 -- RFIs",
    headline: "Log, route, chase, and close RFIs without email threads.",
    intro: `Requests for Information are the lifeblood of construction communication -- and the graveyard of project schedules when they slip through inboxes. MASON's RFI module gives every RFI a number, a due date, an assignee, and a full audit trail. Responses are versioned. Nothing gets lost. Overdue RFIs surface automatically on the dashboard.`,
    body: [
      {
        heading: "Drafting an RFI",
        copy: `Click New RFI and fill in the subject, description, discipline (architectural, structural, MEP, civil), priority, and required response date. Attach drawings, photos, or clash extracts from the BIM viewer. Assign it to the responsible party -- an architect, engineer, or owner's rep -- and MASON sends them a notification. They receive a direct link to the RFI form; no MASON account is required for external reviewers using the Guest Reviewer access level.`
      },
      {
        heading: "Status workflow",
        copy: `Every RFI moves through: Draft -> Submitted -> Under Review -> Responded -> Closed. At each stage the right people are notified and the timestamp is logged. If a response is received but the originator disagrees, they can Reject the response and add clarifying comments -- triggering a second review cycle. All exchanges are captured in a threaded conversation view below the RFI header.`
      },
      {
        heading: "AI-assisted drafting",
        copy: `MASON's AI Concierge can draft the body of an RFI from a clash pin or an issue card. It reads the element data, the project specification section, and your previous RFIs for tone and format, then produces a professional first draft. You review, edit, and submit. What used to take 20 minutes takes 2.`
      },
      {
        heading: "Reporting and metrics",
        copy: `The RFI dashboard shows average response time by assignee, open RFIs by age bucket (0-7 days, 7-14, 14-28, 28+), and RFI volume by discipline and phase. Export the full register to Excel for owner reporting. MASON automatically flags RFIs that have exceeded their response date so nothing hides in a "Submitted" status indefinitely.`
      }
    ],
    stats: [
      { value: "Full audit trail", label: "Every exchange logged" },
      { value: "Guest access", label: "External reviewers" },
      { value: "AI drafting", label: "From clash to RFI in 2 min" },
      { value: "Auto-alerts", label: "Overdue flagging" },
    ]
  },

  issues: {
    eyebrow: "Module 04 -- Issues",
    headline: "Punch, defects, NCRs, and safety observations -- one register.",
    intro: `Whether it's a punch list item, a defect on practical completion, a non-conformance report, or a safety near-miss -- they're all tracked in the same Issues register with the same workflow. Filter by type, trade, location, priority, or date. Nothing falls through the cracks between spreadsheet tabs.`,
    body: [
      {
        heading: "Raising an issue",
        copy: `Issues can be raised from three places: the Issues list, the BIM viewer (pin to model element), or the Daily Log (auto-link from observation). Fill in type, title, description, location (level + grid reference + BIM element if applicable), responsible trade, priority (Critical / High / Medium / Low), and due date. Attach photos from your phone camera -- MASON geotags and timestamps them automatically.`
      },
      {
        heading: "Assignment and escalation",
        copy: `Issues are assigned to a subcontractor or individual. They receive a notification and can view, comment, and mark the issue Resolved directly from their phone. The originator reviews the response and either Closes or Rejects the closure. Overdue issues escalate to the assignee's line manager (configurable per project). Critical issues appear in red on the project dashboard.`
      },
      {
        heading: "Photo evidence workflow",
        copy: `Before-and-after photo pairs are a first-class concept in MASON Issues. When a subcontractor marks an issue resolved, they upload the "after" photo. MASON places it side-by-side with the original "before" photo so the project manager can verify completion without walking the site. For remote-managed projects this eliminates a full site visit per issue.`
      },
      {
        heading: "NCR and formal defects",
        copy: `For Non-Conformance Reports, MASON generates a formatted PDF with the issue details, all comments, all photos, and the full audit trail. This is the document your QA/QC system needs. Digital signatures from the subcontractor and PM can be captured on the PDF before export. The export is named with the project code and issue number so it files cleanly.`
      }
    ],
    stats: [
      { value: "4 types", label: "Punch / Defect / NCR / Safety" },
      { value: "Photo pairs", label: "Before + after evidence" },
      { value: "PDF NCR", label: "Formal export with signatures" },
      { value: "BIM-linked", label: "Pinned to model elements" },
    ]
  },

  logs: {
    eyebrow: "Module 05 -- Daily Logs",
    headline: "The most complete site diary your project has ever had.",
    intro: `The daily log is the field team's primary interface with MASON. Site supervisors and foremen open it each morning, log weather, attendance, work performed, equipment on site, materials delivered, and any observations or safety matters. The log builds a timestamped, immutable record of everything that happened on site -- invaluable for disputes, delay claims, and contract management.`,
    body: [
      {
        heading: "What goes in a daily log",
        copy: `Each entry has: date, weather (temperature + conditions with auto-fill from weather API based on site coordinates), work areas active, manpower by trade (worker counts per subcontractor), equipment on site (plant and machinery), materials delivered (supplier, quantity, delivery note reference), work completed (free text + linked WBS task), instructions given or received, visitors, and general observations. The form is quick -- a practiced supervisor can complete it in under 5 minutes.`
      },
      {
        heading: "Mobile-first entry",
        copy: `The daily log is designed for a phone or tablet. Tapping through sections is fast. Voice-to-text works in the description fields. Photos can be added from your gallery or taken live. On the Android app, it works fully offline -- entries queue locally and sync when connectivity resumes, with a visual indicator showing how many entries are pending sync.`
      },
      {
        heading: "Linking to other modules",
        copy: `Observations raised in the log can be one-tap converted to Issues. Instructions received can be linked to RFIs. Material deliveries can be linked to Documents (delivery notes uploaded via phone camera). Work completed links back to Schedule tasks -- enabling automatic progress tracking. The daily log is the connective tissue of the project record.`
      },
      {
        heading: "Reports and legal value",
        copy: `Export the full daily log history as a chronological PDF -- accepted by most jurisdictions as a contemporaneous site record in disputes and Extension of Time claims. Entries are immutable once the supervisor marks the day as Submitted. The project manager can add a countersignature. Filter by date range, work area, or trade for targeted extracts.`
      }
    ],
    stats: [
      { value: "Offline", label: "Works without signal" },
      { value: "< 5 min", label: "Daily entry time" },
      { value: "Legal quality", label: "Contemporaneous record" },
      { value: "Auto weather", label: "GPS-based fill" },
    ]
  },

  cost: {
    eyebrow: "Module 06 -- Cost Control",
    headline: "Budget vs. actual, change orders, and forecast -- one screen.",
    intro: `MASON's Cost Control module is not a replacement for your accounting software. It is the layer that captures cost events -- variations, change orders, provisional sums, PC items -- and gives you a live forecast-at-completion. Export to your accounting system; MASON handles the construction-specific logic that QuickBooks and Xero do not understand.`,
    body: [
      {
        heading: "Budget setup",
        copy: `Import your contract budget as a CSV with cost codes and amounts, or enter line items manually. Group by WBS phase, trade package, or cost centre. MASON tracks Original Budget, Approved Changes, Revised Budget, Committed Costs, Actual Costs, and Forecast-at-Completion for every line item. Variance to budget is shown in absolute and percentage terms, colour-coded red/amber/green.`
      },
      {
        heading: "Change orders and variations",
        copy: `Raise a Potential Change Order (PCO) when scope changes are identified. The PCO workflow: Identify -> Quote -> Review -> Approve / Reject -> Incorporate. Approved changes update the Revised Budget automatically. Change orders link back to the variation event -- an RFI, an instruction, or a site condition -- so you have the full paper trail from cause to cost impact.`
      },
      {
        heading: "Forecast-at-completion",
        copy: `MASON computes Forecast-at-Completion (FAC) as: Actual + Committed + Estimated-to-Complete. Enter your Estimated-to-Complete for each work package -- or let MASON estimate it from the schedule percentage complete and unit rates from previous packages. The project contingency is tracked separately and consumed as PCOs are approved.`
      },
      {
        heading: "Reporting",
        copy: `Export a Cost Report in the standard format expected by most owner/developer clients: budget, actual, committed, forecast, variance, trend. The report respects the cost code hierarchy and can be filtered to any level of detail. MASON also generates a Change Order Log -- the document subcontractors and clients ask for at every progress meeting.`
      }
    ],
    stats: [
      { value: "FAC", label: "Live forecast-at-completion" },
      { value: "PCO workflow", label: "Full change order register" },
      { value: "CSV import", label: "Budget upload" },
      { value: "Accounting export", label: "QuickBooks / Xero ready" },
    ]
  },

  docs: {
    eyebrow: "Module 07 -- Documents",
    headline: "The one place your drawings, specs, and submittals live.",
    intro: `Construction projects generate thousands of documents. MASON's Document Control module organises them into a structured folder hierarchy -- by discipline, drawing set, specification section, or whatever naming convention your project uses. Every upload is version-controlled. The current revision is always surfaced. Old revisions are retained and accessible.`,
    body: [
      {
        heading: "Upload and version control",
        copy: `Drag and drop files into the document register or upload via the mobile app. MASON extracts the revision from the filename if it follows a standard convention (e.g. A-100-Rev3.pdf), or you specify it manually. When a new revision is uploaded, MASON links it to the previous version and marks the old one superseded -- visible with a strikethrough in the folder view. Users who downloaded the old revision get a notification that a new version exists.`
      },
      {
        heading: "Issue for construction (IFC) workflow",
        copy: `Documents flow through a formal issue workflow: Internal Draft -> Internal Review -> Approved for Construction / Approved with Comments / Rejected. Approved revisions are stamped with the approval date and approver name. This is the IFC stamp that contractors and subcontractors need to proceed with work -- and MASON issues it digitally, with a full audit trail.`
      },
      {
        heading: "Access control",
        copy: `Document access is permission-based. Subcontractors see only the documents relevant to their package. The architect sees their own drawings and can comment on structural drawings. The owner's representative has read-only access to the full set. Sensitive commercial documents (cost reports, legal correspondence) are locked to project management only. Permissions are set per role, not per user, so onboarding new team members takes seconds.`
      },
      {
        heading: "Search and retrieval",
        copy: `Full-text search across document titles, revision numbers, and manually-entered metadata. Filter by discipline, status, revision date, uploader, or file type. Bulk download a full drawing set for offline review. The mobile app syncs your most recently viewed documents for offline access -- useful in basements, plant rooms, and remote sites with no signal.`
      }
    ],
    stats: [
      { value: "Version control", label: "Full revision history" },
      { value: "IFC stamp", label: "Digital approval workflow" },
      { value: "Role-based", label: "Granular access control" },
      { value: "Full-text search", label: "Across all documents" },
    ]
  },

  submittals: {
    eyebrow: "Module 08 -- Submittals",
    headline: "Track shop drawings and product data without losing the thread.",
    intro: `Submittals are one of the most administratively painful parts of construction. Subcontractors submit shop drawings and product data sheets; the design team reviews and marks them up; comments go back and forth; eventually an Approved or Approved as Noted stamp is issued. MASON makes this cycle fast and traceable.`,
    body: [
      {
        heading: "Submittal register",
        copy: `The submittal register is a living list of every item the contract requires -- imported from the specification sections or built manually. Each item has a required submission date, actual submission date, required response date, actual response date, status, and current revision. The dashboard shows at a glance how many submittals are outstanding, overdue, or approved.`
      },
      {
        heading: "Submission workflow",
        copy: `Subcontractors upload their shop drawings and product data directly to MASON, linked to the relevant submittal item. The upload triggers a notification to the design team reviewer. The reviewer opens the document in-browser (or downloads for markup), enters their comment, and selects: Approved / Approved as Noted / Revise and Resubmit / Rejected. The stamped document is returned to the submitter.`
      },
      {
        heading: "Markup and comments",
        copy: `Comments are structured -- you tag the specific sheet and area, not just add a general note. Multiple reviewers can comment in sequence (structural engineer, then architect, then owner's rep) and MASON collates all comments before returning. The subcontractor sees all comments in one place, not scattered across emails.`
      },
      {
        heading: "Specification traceability",
        copy: `Each submittal item links to the specification section that requires it (e.g. Section 09 30 00 -- Tiling). When an approved shop drawing diverges from the specification, MASON flags it and requires a formal deviation acknowledgment. This protects the PM and design team from scope creep entering through the submittal process.`
      }
    ],
    stats: [
      { value: "Register-driven", label: "Every spec section tracked" },
      { value: "4 statuses", label: "Approved / Noted / Revise / Reject" },
      { value: "Multi-reviewer", label: "Sequential or parallel" },
      { value: "Spec-linked", label: "Deviation flagging" },
    ]
  },

  concierge: {
    eyebrow: "Module 09 -- AI Concierge",
    headline: "An AI that actually knows your project.",
    intro: `The MASON AI Concierge is not a general-purpose chatbot pasted onto a construction app. It is grounded in your project data: your RFIs, your issues, your schedule, your documents, your specifications. It can answer questions about your project in plain language, draft construction correspondence, and surface connections between data points that a human would miss.`,
    body: [
      {
        heading: "What it can answer",
        copy: `"What are the open RFIs on Level 23?" -- it retrieves them, summarises them, and shows due dates. "Which subcontractors have overdue issues this week?" -- it runs the query and shows the list. "Summarise the delay position as of today" -- it reads the schedule, computes variances, and writes a paragraph you can paste into a client update. "What does the spec say about fire-stopping penetrations through the L23 slab?" -- it reads the relevant specification section and quotes the requirement. These are not demos; they are live queries on your actual project data.`
      },
      {
        heading: "Drafting construction documents",
        copy: `Provide a brief and the Concierge drafts: RFI bodies (from clash data), variation notices (from change events), daily log summaries (from structured log data), progress report sections (from schedule and cost data), NCR bodies (from issue cards), and formal letters to subcontractors or owners. Every draft cites the source data so you can verify before sending. You always review and send -- the AI never takes action without your confirmation.`
      },
      {
        heading: "Grounding and citations",
        copy: `The Concierge only speaks from your project data. It does not invent figures, dates, or clauses. Every statement is cited: "As per RFI-204, submitted 12 May..." or "Per Section 12.3 of the Project Management Plan..." If it cannot find the answer in your documents, it says so. This is not a limitation -- it is the correct behaviour for a construction tool where accuracy matters.`
      },
      {
        heading: "8 languages",
        copy: `The Concierge works in English, Arabic (RTL), French, Spanish, Portuguese, German, Urdu, and Mandarin. Your project team can interact in their native language. A Pakistani site supervisor can ask questions in Urdu and receive answers in Urdu while the Australian PM is interacting in English -- simultaneously, on the same project. The underlying project data is language-neutral; the Concierge translates queries and responses.`
      }
    ],
    stats: [
      { value: "8 languages", label: "Including Arabic RTL" },
      { value: "Cited", label: "Every answer sourced" },
      { value: "Never invents", label: "Grounded in your data" },
      { value: "Always human-approved", label: "AI drafts, you send" },
    ]
  },

  reports: {
    eyebrow: "Module 10 -- Reports",
    headline: "Client-ready reports generated in seconds, not hours.",
    intro: `A construction project manager spends 10-20% of their time producing reports that synthesise information from five different systems. MASON generates the same reports in seconds because all the source data -- schedule, cost, RFIs, issues, daily logs -- is already in one place. Templates match the formats your clients and owners expect.`,
    body: [
      {
        heading: "Progress reports",
        copy: `The Monthly Progress Report template pulls: executive summary (AI-generated from project status), schedule progress by phase (Gantt extract), cost summary (budget vs. actual vs. forecast), RFI metrics (open, closed, average response time), issue metrics (open by priority and trade), key events in the period, and look-ahead for the next period. The report takes 20 seconds to generate. You spend your time reviewing and adding qualitative context -- not compiling data.`
      },
      {
        heading: "Schedules of condition and handover",
        copy: `At Practical Completion, MASON generates a Defects and Outstanding Works schedule from the Issues register -- a list of every open item, its location, responsible trade, and target close date. This is the document that drives the retention release process. As subcontractors close items, the schedule updates live. The owner or employer's agent can access it directly with Guest access.`
      },
      {
        heading: "Custom report builder",
        copy: `Beyond the standard templates, the Custom Report builder lets you choose which data fields to include, define the row/column structure, and set the sort and filter criteria. Save a custom report as a template -- it will run on a new project instantly. Share the template across your organisation so all project managers produce reports to the same format.`
      },
      {
        heading: "Export and delivery",
        copy: `All reports export to PDF (formatted) or Excel (raw data). PDF reports include your organisation's logo and colour scheme. Schedule a report to run automatically and email to a distribution list each week -- useful for client status updates that need to go out on Friday afternoon whether the PM is in the office or not.`
      }
    ],
    stats: [
      { value: "< 30 sec", label: "Progress report generation" },
      { value: "5 templates", label: "Built-in report types" },
      { value: "Scheduled delivery", label: "Auto-email to stakeholders" },
      { value: "PDF + Excel", label: "Export formats" },
    ]
  },

  mobile: {
    eyebrow: "Module 11 -- Mobile & Android App",
    headline: "The full platform. On the phone in your pocket.",
    intro: `MASON's mobile experience is not a stripped-down companion app. Every module available on desktop is accessible on mobile -- because field staff need the same information the office has. The Android app supports full offline operation. The iOS-compatible browser app has the same feature set. BIM, issues, logs, RFIs, documents -- all on the device in the site hut.`,
    body: [
      {
        heading: "Android native app",
        copy: `MASON ships a native Android app (APK distributed via the dashboard; Play Store listing in progress) built with Capacitor on top of the same React codebase as the desktop version. This means one codebase, two surfaces -- and features released on desktop appear on Android simultaneously. The native app has access to the camera, GPS, file system, and offline database -- capabilities not available in a browser.`
      },
      {
        heading: "Offline mode",
        copy: `When an Android device goes offline (basements, plant rooms, remote sites), MASON queues all changes locally in an SQLite database. Daily log entries, issue photos, RFI comments, document downloads -- all work without signal. When connectivity resumes, the sync queue processes in the background. A visual indicator in the top bar shows sync status and how many items are pending. No data is ever lost.`
      },
      {
        heading: "BIM on mobile",
        copy: `The BIM viewer runs on Android devices with 4 GB RAM or more. Models up to 80 MB load in under 20 seconds. On less powerful devices, MASON automatically switches to a lightweight 2D floor plan view extracted from the IFC -- still geo-referenced, still showing element properties, still linkable to issues. AR mode (Android only) uses the device camera to overlay the digital model on the physical building.`
      },
      {
        heading: "Designed for the field",
        copy: `The mobile UI uses large tap targets, high-contrast text readable in direct sunlight, and minimal typing (dropdowns, toggles, and photo capture wherever possible). Key actions are reachable in two taps. Voice-to-text is available in all text fields. The app keeps the screen awake during active use so it doesn't lock while you're carrying it around the site.`
      }
    ],
    stats: [
      { value: "Full offline", label: "Zero data loss" },
      { value: "Android APK", label: "Native app, Capacitor" },
      { value: "BIM on device", label: "Models up to 80 MB" },
      { value: "AR mode", label: "Android camera overlay" },
    ]
  },

  admin: {
    eyebrow: "Module 12 -- Admin, Access & Integrations",
    headline: "Permission-aware from the ground up.",
    intro: `MASON's permission model is role-based at the project level -- not a simple toggle between admin and non-admin. A structural engineer on Project A should not see Project B's cost data. A subcontractor on the earthworks package should not see the mechanical package's documents. MASON enforces this automatically across every module and every API endpoint.`,
    body: [
      {
        heading: "Roles and permissions",
        copy: `Default roles: Owner, Project Manager, Site Manager, Engineer, Subcontractor, Guest Reviewer. Each role has a curated permission set across every module: create, read, update, delete, export, approve. Custom roles can be created for organisations with specific access requirements (e.g. a BIM Coordinator who can view and pin issues in the BIM module but cannot edit cost data). Role assignments are per-project -- a user can be Project Manager on one and Subcontractor on another.`
      },
      {
        heading: "Organisation and portfolio",
        copy: `The Organisation level sits above projects. Organisation Admins can see all projects, manage users across the portfolio, set organisation-wide report templates, and access the aggregated portfolio dashboard. The portfolio dashboard shows all active projects, their health status, open RFI and issue counts, and schedule progress at a glance. Principal contractors and programme managers live here.`
      },
      {
        heading: "Integrations",
        copy: `MASON connects to: Google Drive and OneDrive for document storage backup, Xero and QuickBooks for cost data export, any email client via SMTP for notification routing, and your corporate SSO provider via SAML 2.0 (Scale tier). A REST API is available on the Professional and Scale tiers -- use it to push MASON data into your BI tool, your ERP, or a custom dashboard. Webhooks fire on key events (new RFI, issue closed, document approved) for real-time integration.`
      },
      {
        heading: "Security and compliance",
        copy: `Data is encrypted at rest (AES-256) and in transit (TLS 1.3). User sessions are JWT-based with configurable expiry. All actions are logged to an immutable audit trail -- who did what, when, from which IP address. Files are stored on Cloudflare R2 (globally distributed, 99.99% availability SLA). MASON does not sell user data or use project data to train AI models. Enterprise customers can request a Data Processing Agreement and infrastructure on a dedicated tenant.`
      }
    ],
    stats: [
      { value: "6 roles", label: "Default + custom" },
      { value: "AES-256", label: "Encryption at rest" },
      { value: "SAML SSO", label: "Scale tier" },
      { value: "REST API", label: "Pro + Scale tiers" },
    ]
  }
};

const ModuleDetail = ({ moduleId }) => {
  const mod = MODULE_DATA[moduleId];
  if (!mod) return null;
  return (
    <div className="module-detail container">
      <div className="module-detail__header gsap-fade-up">
        <span className="eyebrow">{mod.eyebrow}</span>
        <h2 className="h2">{mod.headline}</h2>
        <p className="lede">{mod.intro}</p>
      </div>

      {mod.stats && (
        <div className="stats-row gsap-fade-up">
          {mod.stats.map((s, i) => (
            <div key={i} className="stat-cell">
              <span className="stat-cell__value accent">{s.value}</span>
              <span className="stat-cell__label">{s.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="module-detail__body">
        {mod.body.map((b, i) => (
          <div key={i} className={"split-sect gsap-slide-" + (i % 2 === 0 ? "left" : "right")}>
            <div className="split-copy">
              <h3 className="split-copy__heading">{b.heading}</h3>
              <p className="split-copy__body">{b.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Platform overview --------------------------------------------------------
const PlatformOverview = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up">
        <span className="eyebrow">Cross-platform</span>
        <h2 className="h2">Three surfaces. One platform.</h2>
        <p className="section__sub">
          MASON runs everywhere your team works. The same project data, the same permission model,
          the same real-time sync -- whether you're at a desktop workstation, on a browser in the
          site hut, or walking the floor with an Android device.
        </p>
      </div>

      <div className="feature-grid">
        <div className="feature-card gsap-scale-in">
          <div className="feature-card__icon"><IconBIM size={28} /></div>
          <h3 className="feature-card__title">Desktop Browser</h3>
          <p className="feature-card__body">
            Full platform access on Chrome, Edge, Firefox, and Safari. No download required.
            BIM viewer, Gantt chart, full cost control, report generation -- all in the browser.
            Optimised for 1920?1080 and above with a multi-panel layout that keeps context
            visible. Works on Mac, Windows, and Linux.
          </p>
          <ul className="feature-card__list">
            <li>All 12 modules available</li>
            <li>Multi-panel layout</li>
            <li>BIM up to 300 MB</li>
            <li>Report generation</li>
            <li>Full cost control</li>
          </ul>
        </div>

        <div className="feature-card gsap-scale-in">
          <div className="feature-card__icon"><IconSchedule size={28} /></div>
          <h3 className="feature-card__title">Mobile Browser</h3>
          <p className="feature-card__body">
            The mobile web interface adapts to phones and tablets without needing an app install.
            Perfect for visiting stakeholders and owners' representatives who need read access.
            Full feature set available on responsive design -- including BIM viewer (models under 50 MB
            load well on 4G).
          </p>
          <ul className="feature-card__list">
            <li>Responsive to any screen</li>
            <li>No install required</li>
            <li>Camera access via browser</li>
            <li>Offline limited (service worker cache)</li>
            <li>iOS + Android browsers supported</li>
          </ul>
        </div>

        <div className="feature-card gsap-scale-in">
          <div className="feature-card__icon"><IconAR size={28} /></div>
          <h3 className="feature-card__title">Android Native App</h3>
          <p className="feature-card__body">
            The Android APK delivers the full MASON experience as a native app.
            Full offline support, native camera, AR mode, GPS tagging, and background sync.
            Distributed as an APK from the MASON dashboard. Play Store listing in progress.
            Minimum Android 10, 4 GB RAM recommended.
          </p>
          <ul className="feature-card__list">
            <li>Full offline with queue sync</li>
            <li>AR camera overlay</li>
            <li>GPS-tagged photos</li>
            <li>BIM on device (up to 80 MB)</li>
            <li>Background sync indicator</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// --- MASON vs. alternatives ---------------------------------------------------
const CompareTable = () => {
  const rows = [
    { feature: "BIM viewer (no Autodesk)", mason: true,  procore: false, asite: false, fieldwire: false },
    { feature: "AR on Android",           mason: true,  procore: false, asite: false, fieldwire: false },
    { feature: "AI Concierge (grounded)", mason: true,  procore: "add-on", asite: false, fieldwire: false },
    { feature: "Offline Android app",     mason: true,  procore: true,  asite: "limited", fieldwire: true },
    { feature: "8-language interface",    mason: true,  procore: "partial", asite: "partial", fieldwire: false },
    { feature: "Flat per-project pricing",mason: true,  procore: false, asite: false, fieldwire: false },
    { feature: "30-day full trial",       mason: true,  procore: false, asite: false, fieldwire: "14 days" },
    { feature: "No per-user seat fees",   mason: true,  procore: false, asite: false, fieldwire: false },
    { feature: "Schedule (Gantt + CPM)",  mason: true,  procore: true,  asite: true,  fieldwire: "basic" },
    { feature: "Submittal register",      mason: true,  procore: true,  asite: true,  fieldwire: false },
    { feature: "Cost control + FAC",      mason: true,  procore: true,  asite: true,  fieldwire: false },
    { feature: "REST API",                mason: true,  procore: true,  asite: true,  fieldwire: "limited" },
  ];

  const renderCell = (v) => {
    if (v === true) return <span className="compare-yes"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>;
    if (v === false) return <span className="compare-no">?</span>;
    return <span className="compare-partial">{v}</span>;
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section__header gsap-fade-up">
          <span className="eyebrow">Comparison</span>
          <h2 className="h2">How MASON stacks up.</h2>
          <p className="section__sub">
            Compared against Procore, Asite, and Fieldwire -- the most common alternatives
            in the mid-market construction segment.
          </p>
        </div>
        <div className="compare-table-wrap gsap-fade-up">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="compare-mason">MASON</th>
                <th>Procore</th>
                <th>Asite</th>
                <th>Fieldwire</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>{r.feature}</td>
                  <td className="compare-mason">{renderCell(r.mason)}</td>
                  <td>{renderCell(r.procore)}</td>
                  <td>{renderCell(r.asite)}</td>
                  <td>{renderCell(r.fieldwire)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="compare-note">
            Data based on published feature lists as of May 2026.
            Procore BIM requires Autodesk integration. Procore AI requires separate Copilot licence.
          </p>
        </div>
      </div>
    </section>
  );
};

// --- Integration ecosystem ----------------------------------------------------
const IntegrationsSection = () => (
  <section className="section bg-subtle">
    <div className="container">
      <div className="section__header gsap-fade-up">
        <span className="eyebrow">Integrations</span>
        <h2 className="h2">Connects to the tools you already use.</h2>
        <p className="section__sub">
          MASON doesn't replace your accounting software, your email, or your file storage.
          It integrates with them -- so your project data flows in both directions without
          manual data entry.
        </p>
      </div>

      <div className="feature-grid">
        {[
          { title: "Google Drive", body: "Sync project documents to Drive folders automatically. Your team can access MASON documents from Drive and vice versa. Folder structure mirrors the MASON document register." },
          { title: "OneDrive / SharePoint", body: "Push approved documents and completed reports to your corporate SharePoint library. For enterprises with M365 as the standard, MASON writes directly to your document management layer." },
          { title: "Xero", body: "Export cost codes, variation amounts, and invoice matching data to Xero. Saves double-entry for contract administrators who use Xero as the project accounting system." },
          { title: "QuickBooks", body: "Two-way cost code sync with QuickBooks Online. Committed costs in MASON flow to QuickBooks for cash-flow forecasting. Actuals from QuickBooks pull back into MASON for variance analysis." },
          { title: "SMTP Email", body: "MASON notifications can route through your corporate email server. Subcontractors and reviewers receive RFI, issue, and submittal notifications from your email domain, not mason@masononsite.com." },
          { title: "REST API + Webhooks", body: "Available on Professional and Scale tiers. Push MASON data to Power BI, Tableau, Looker Studio, or any custom dashboard. Webhooks fire on issue close, document approval, and RFI response -- integrate with Slack, Teams, or any tool that accepts webhooks." },
          { title: "SAML SSO", body: "Scale tier customers can configure SAML 2.0 single sign-on with any IdP: Okta, Azure AD, Google Workspace, Ping Identity. Users log in with their corporate credentials and are auto-provisioned in MASON." },
          { title: "Revit + IFC Export", body: "Not a plugin -- you export IFC from Revit using the standard exporter and upload to MASON. We support IFC 2x3 and IFC4. The integration is standards-based so it works with ArchiCAD, Tekla, and any BIM tool that exports IFC." },
        ].map((item, i) => (
          <div key={i} className="feature-card gsap-scale-in">
            <h3 className="feature-card__title">{item.title}</h3>
            <p className="feature-card__body">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Feature FAQ -------------------------------------------------------------
const FeaturesFAQ = () => {
  const [open, setOpen] = React.useState(null);
  const items = [
    { q: "Does MASON replace Procore completely?", a: "For most SMB and mid-market general contractors managing projects up to $200M, yes -- MASON covers every workflow Procore covers (and adds BIM and AR that Procore doesn't include in base pricing). For very large programmes (multiple concurrent $500M+ projects) with deep Procore integrations and custom configurations, a migration assessment is worthwhile before switching. We offer a Migration Consultation as part of the onboarding process." },
    { q: "How does BIM work if we use Autodesk Revit?", a: "You continue using Revit for model authoring. When you're ready to share a model in MASON, you export IFC from Revit (File > Export > IFC -- it takes about 2 minutes for a typical floor model) and upload the IFC to MASON. You do not need an Autodesk Construction Cloud subscription. The Revit IFC export is free and included with every Revit licence." },
    { q: "Can subcontractors use MASON without paying?", a: "Yes. Subcontractors are added to projects by the main contractor. They consume a user seat on the main contractor's subscription. They do not need their own MASON subscription. The number of users is unlimited on all tiers -- pricing is per project, not per user." },
    { q: "How does offline mode work exactly?", a: "On the Android app, MASON keeps an SQLite copy of the data for your active projects locally. When you go offline, you read from this local copy and write changes to a local queue. When you reconnect, the queue syncs to the server. Conflicts (two people editing the same record offline) are resolved using a last-write-wins rule with a conflict log shown to the PM. Documents you've viewed recently are cached for offline reading. Documents you haven't viewed are not available offline -- you need to explicitly pin them for offline access before losing connectivity." },
    { q: "Does the AI Concierge train on our project data?", a: "No. MASON does not use your project data to train AI models. The Concierge uses your data to answer your queries and then discards it. We use Anthropic's Claude API with enterprise data protection terms that prohibit training on customer data. You can verify this in the MASON Data Processing Agreement available on request." },
    { q: "What happens to our data if we cancel?", a: "You own your data. On cancellation, MASON gives you 90 days of read-only access to export everything -- all documents, reports, RFIs, issues, photos, cost data. We provide a bulk export tool that packages everything into a structured ZIP. After 90 days, data is deleted from our servers. We can also provide a data export at any time during your subscription on request." },
    { q: "Is there a limit on the number of projects?", a: "The Starter tier includes 3 concurrent projects. Professional includes 15. Scale is unlimited. A 'project' is a distinct site or contract. Sub-phases of the same contract (e.g. Stage 1 and Stage 2 of the same building) can be managed as a single project using MASON's phase structure -- they don't need to be separate projects." },
    { q: "Do you have a Gantt chart or just a task list?", a: "A proper interactive Gantt chart -- not a task list styled to look like a Gantt. Bars are draggable. Dependencies are drawn as arrows. The critical path is highlighted. You can zoom from programme level (all phases) down to week view (daily tasks). Look-ahead views are pre-built. Import from P6 (XER), MS Project (XML), or a CSV template. This was one of the most-requested features during our beta and we built it properly." },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section__header gsap-fade-up">
          <span className="eyebrow">Feature FAQ</span>
          <h2 className="h2">Common questions about the platform.</h2>
        </div>
        <div className="faq-list">
          {items.map((item, i) => (
            <div key={i} className={"faq-item gsap-fade-up" + (open === i ? " is-open" : "")}>
              <button className="faq-item__btn" onClick={() => setOpen(open === i ? null : i)}>
                <span>{item.q}</span>
                <span className="faq-item__chevron">{open === i ? "-" : "+"}</span>
              </button>
              {open === i && <div className="faq-item__body"><p>{item.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Features page CTA --------------------------------------------------------
const FeaturesCTA = () => (
  <section className="cta-band">
    <div className="container cta-band__inner">
      <h2 className="cta-band__heading">
        Ready to see it on your project?
      </h2>
      <p className="cta-band__sub">
        30-day free trial, all features unlocked, no credit card required.
        Import your IFC, invite your team, and see MASON on your actual project data.
      </p>
      <div className="cta-band__actions">
        <a href="https://app.masononsite.com/register" className="btn btn-primary btn-lg">
          Start free trial <IconArrowRight size={18} stroke={2} />
        </a>
        <a href="contact.html" className="btn btn-ghost btn-lg">Request a demo</a>
      </div>
    </div>
  </section>
);

// --- Root Features page component --------------------------------------------
const FeaturesPage = () => {
  const [activeModule, setActiveModule] = React.useState("bim");

  // GSAP ScrollTrigger animations
  React.useEffect(() => {
    document.body.classList.add('gsap-ready'); // CSS fallback: elements visible even if GSAP fails
    if (typeof gsap === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const animateEls = (selector, vars) => {
      document.querySelectorAll(selector).forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, ...vars.from },
          {
            opacity: 1, ...vars.to,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top bottom", toggleActions: "play none none none" }
          }
        );
      });
    };

    animateEls(".gsap-fade-up", { from: { y: 40 }, to: { y: 0 } });
    animateEls(".gsap-fade-in", { from: {}, to: {} });
    animateEls(".gsap-slide-left", { from: { x: -50 }, to: { x: 0 } });
    animateEls(".gsap-slide-right", { from: { x: 50 }, to: { x: 0 } });
    animateEls(".gsap-scale-in", { from: { scale: 0.92 }, to: { scale: 1 } });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [activeModule]);

  return (
    <div className="site">
      <Header />
      <FeaturesHero />
      <ModuleTabs active={activeModule} onChange={setActiveModule} />
      <section className="section">
        <ModuleDetail moduleId={activeModule} />
      </section>
      <PlatformOverview />
      <CompareTable />
      <IntegrationsSection />
      <FeaturesFAQ />
      <FeaturesCTA />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<FeaturesPage />);
