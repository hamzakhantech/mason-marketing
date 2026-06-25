import React, { useEffect } from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

const ChecklistItem = ({ n, text, sub }) => (
  <div style={{ display: "flex", gap: 16, padding: "12px 0", borderBottom: "1px solid var(--line)" }}>
    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--accent)", fontWeight: 700, minWidth: 28, paddingTop: 2 }}>{String(n).padStart(2,"0")}</span>
    <div>
      <p style={{ fontSize: 14, fontWeight: 600, margin: 0, lineHeight: 1.4 }}>{text}</p>
      {sub && <p style={{ fontSize: 12, color: "var(--text-muted)", margin: "4px 0 0", lineHeight: 1.5 }}>{sub}</p>}
    </div>
  </div>
);

const Article = () => (
  <article style={{ maxWidth: 740, margin: "0 auto", padding: "0 24px" }}>
    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 36, flexWrap: "wrap" }}>
      <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", background: "rgba(232,148,46,.1)", padding: "4px 10px", borderRadius: 4 }}>Closeout</span>
      <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", background: "rgba(232,148,46,.1)", padding: "4px 10px", borderRadius: 4 }}>Punch List</span>
      <span style={{ fontSize: 12, color: "var(--text-faint)" }}>15 min read · June 2026</span>
    </div>
    <div className="prose">

      <p className="lead-para">Closeout is where construction projects bleed margin. The work is done, the crew has moved on, the project manager is already fielding calls about the next job — and a slow, disorganized closeout process holds the final payment and retainage for weeks or months while the GC chases down missing O&M manuals, lien waivers from second-tier subs, and attic stock that the owner now says was never delivered.</p>

      <p>A structured construction project closeout checklist eliminates that bleeding. It replaces the end-of-project scramble with a documented, tracked process where every required item has an owner, a deadline, and a status. This guide walks through the full closeout process — the phases, the documents, and the 42-item checklist that covers what needs to happen between the last bolt being tightened and the final check clearing.</p>

      <h2>What is construction project closeout?</h2>

      <p>Construction project closeout is the final phase of a construction project, in which the team confirms all contracted work is complete, resolves remaining issues, finalizes costs, completes inspections and documentation, and transfers the project to the owner for occupancy and operation.</p>

      <p>Closeout is not a single event. It's a phase that begins before the last trade contractor leaves the site — ideally, closeout activities start 60–90 days before the anticipated substantial completion date — and ends when the final retainage payment clears and the warranty period begins.</p>

      <p>The closeout phase is also when a disproportionate amount of project profit either gets protected or lost. Final payment and retainage release are conditional on completing the closeout process. An incomplete closeout package delays payment. Extended retainage creates financing costs. And punch list disputes — items the owner claims are incomplete or deficient — can generate significant additional labor costs if they're not managed carefully.</p>

      <h2>The 8 phases of construction project closeout</h2>

      <h3>Phase 1: Pre-closeout planning (60–90 days before substantial completion)</h3>

      <p>Closeout planning starts during construction, not after. Sixty to ninety days before the anticipated substantial completion date, the project team should identify all closeout deliverables, assign responsibility for each, and build a closeout schedule. This is when you confirm: who is responsible for collecting O&M manuals from each sub? Who is collecting lien waivers from tier-2 subs? What are the owner's specific attic stock requirements? What commissioning activities are required, and who runs them?</p>

      <p>Starting this planning 60 days out means you have time to get ahead of the things that routinely create delays: manufacturers who take 4–6 weeks to produce O&M manuals in the required format, warranty certificates that need to be issued by a manufacturer and take time to process, commissioning activities that require a specialist to schedule and attend.</p>

      <h3>Phase 2: Punch list generation</h3>

      <p>The punch list documents incomplete, deficient, or damaged work identified during a joint owner-architect-GC walkthrough. A good punch list item is specific: it identifies the location (room number, grid line, elevation), the nature of the deficiency (missing, damaged, incorrect), and the responsible party. "Touch-up paint in Room 214 at door frame, east jamb, approximately 2 feet above floor — Painting sub" is a good punch list item. "Paint issues" is not.</p>

      <p>The GC's goal in the punch list walkthrough is twofold: identify everything the owner and architect will flag (so there's no list that comes back after you've demobilized), and establish that punch list items are minor incomplete items rather than major scope deficiencies. Major scope deficiencies — work that was never done, not work that has a minor cosmetic issue — require a different process than punch list resolution and shouldn't be treated as punch list items.</p>

      <p>Issue the punch list immediately after the walkthrough. Don't let it sit in someone's notes for a week. Every day of delay is a day the subs don't know what they need to fix.</p>

      <h3>Phase 3: Punch list completion</h3>

      <p>Assign every punch list item to the responsible subcontractor with a target completion date. Follow up daily. The natural tendency for subcontractors who've moved on to other jobs is to deprioritize punch list work — it's small scope, out of sequence, requires coordination to get access, and their crew would rather be working on the new project. Your leverage is their final payment: retainage isn't released until punch list is complete.</p>

      <p>Track punch list completion on a live log. Once a sub reports an item complete, verify it before marking it closed — don't take their word for it. Some GCs do a final architect walkthrough to verify punch list completion before issuing the Certificate of Substantial Completion. Others have the architect return for a separate verification walkthrough. Confirm the process with the architect at the start of the punch list phase.</p>

      <h3>Phase 4: Substantial completion</h3>

      <p>Substantial completion is the milestone at which the project is sufficiently complete that the owner can use it for its intended purpose — even if minor punch list items remain. It's documented through a Certificate of Substantial Completion, typically signed by the contractor, architect, and owner.</p>

      <p>Substantial completion matters for several reasons:</p>

      <p>It triggers the start of the warranty period. Most construction warranties run from substantial completion, not from the date of final payment or project occupancy. Missing the substantial completion date — or not documenting it formally — creates ambiguity about when warranties began.</p>

      <p>It triggers partial retainage release. Many contracts release 50% of held retainage at substantial completion, with the remainder held until final completion. Getting to substantial completion quickly and documenting it formally accelerates your cash position.</p>

      <p>It shifts the risk of loss. Under AIA A201, the owner bears the risk of loss for the work after substantial completion. Formally documenting the substantial completion date protects the GC from liability for damage to the completed work that occurs during the owner's use and occupancy period.</p>

      <h3>Phase 5: Final inspections</h3>

      <p>Final inspections cover both the building official's final inspection (required for the certificate of occupancy) and any discipline-specific inspections required by code or the contract (fire system acceptance testing, elevator inspection, mechanical commissioning, electrical inspection). The certificate of occupancy is what allows the owner to occupy the building; without it, the project isn't complete for the owner's purposes regardless of the construction status.</p>

      <p>Coordinate inspections proactively. Building departments have their own scheduling backlogs. Fire marshals and elevator inspectors often have limited availability. Starting the inspection scheduling process 30+ days before you expect to need it is standard practice. Last-minute inspection scheduling is one of the most common causes of substantial completion date slippage.</p>

      <h3>Phase 6: Documentation turnover</h3>

      <p>The documentation turnover package — sometimes called the closeout binder or O&M package — is what the owner receives to operate and maintain the building after the GC leaves. It typically includes: as-built drawings, operations and maintenance manuals for all installed systems, manufacturer warranties, spare parts and attic stock, training documentation, test and balance reports, commissioning reports, and approved submittals.</p>

      <p>This is often the most time-consuming part of closeout to complete. O&M manuals need to be compiled from dozens of subcontractors, each of whom submitted them in different formats, at different levels of completeness, sometimes months ago before the equipment was even installed. As-built drawings require the GC and subs to mark up the construction documents to reflect what was actually built — which requires time, access to the as-constructed conditions, and coordination with the design team to review and approve the as-builts.</p>

      <p>Start collecting O&M manuals and submittals from subs at the time of final equipment installation, not at the end of the project. Build O&M manual submission into your subcontract payment terms: final payment to each sub is conditioned on receipt of acceptable O&M documentation.</p>

      <h3>Phase 7: Financial closeout</h3>

      <p>Financial closeout covers everything required to zero out the contract financially: final change order reconciliation (confirming the final contract sum), final application for payment, lien waiver collection, contractor's final affidavit, and retainage release.</p>

      <p>Lien waivers deserve special attention. You need unconditional final lien waivers from every party who could potentially file a mechanic's lien on the project: every subcontractor, every material supplier to subs, every tier-2 sub. Missing a single lien waiver — from a drywall materials supplier who sold to your framing sub — can block the final payment while you track it down.</p>

      <p>The practical approach: require conditional lien waivers with each monthly pay application throughout the project. By the time you reach final closeout, you have a complete record of who has been paid, and converting conditional to unconditional final waivers is a matter of confirming receipt of final payment rather than starting from scratch.</p>

      <h3>Phase 8: Post-occupancy and warranty period</h3>

      <p>Warranty work doesn't end at final payment. Most construction warranties run 1 year from substantial completion (longer for structural elements, MEP systems, and roofing under most contracts). Establishing a clear warranty claim process — who the owner contacts, what response time the GC commits to, how warranty calls are documented — protects the GC from warranty claims that drift into scope disputes years later.</p>

    </div>

    {/* The Checklist */}
    <div style={{ margin: "48px 0" }}>
      <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 12, padding: "28px 28px 8px" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 6 }}>Complete checklist</p>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>42-Item Construction Project Closeout Checklist</h2>
        <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24 }}>Print this or track it in your project management system. Every item needs an assigned owner and a target completion date.</p>

        <p style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-muted)", margin: "20px 0 8px" }}>Pre-closeout planning</p>
        <ChecklistItem n={1} text="Assign a closeout coordinator" sub="PM or superintendent responsible for tracking all closeout items to completion" />
        <ChecklistItem n={2} text="Identify all closeout deliverables" sub="Review contract requirements, spec sections, and owner requirements for the complete list" />
        <ChecklistItem n={3} text="Build closeout schedule with target dates" sub="Work backwards from substantial completion — each item needs a deadline and an owner" />
        <ChecklistItem n={4} text="Notify subs of closeout requirements and deadlines" sub="Send written notice 60+ days before SC; include O&M manual requirements and lien waiver timeline" />
        <ChecklistItem n={5} text="Confirm inspection scheduling lead times" sub="Contact building department, fire marshal, elevator inspector — schedule now, not at the last minute" />

        <p style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-muted)", margin: "20px 0 8px" }}>Punch list</p>
        <ChecklistItem n={6} text="Complete GC pre-walkthrough before owner/architect walkthrough" sub="Catch and correct obvious items before the formal walkthrough reduces the punch list volume" />
        <ChecklistItem n={7} text="Conduct joint owner-architect-GC walkthrough" sub="Document every item with location, description, responsible party, and target date" />
        <ChecklistItem n={8} text="Issue punch list to subs within 24 hours of walkthrough" />
        <ChecklistItem n={9} text="Verify punch list completion — do not rely on sub self-reporting" />
        <ChecklistItem n={10} text="Conduct punch list verification walkthrough" sub="With architect or owner if required; document all cleared items" />

        <p style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-muted)", margin: "20px 0 8px" }}>Inspections and approvals</p>
        <ChecklistItem n={11} text="Building official final inspection" />
        <ChecklistItem n={12} text="Certificate of Occupancy issued" />
        <ChecklistItem n={13} text="Fire protection / sprinkler system acceptance test" />
        <ChecklistItem n={14} text="Fire alarm system acceptance test" />
        <ChecklistItem n={15} text="Elevator final inspection and certificate" />
        <ChecklistItem n={16} text="Mechanical commissioning and TAB (Test and Balance) report" />
        <ChecklistItem n={17} text="Electrical final inspection" />
        <ChecklistItem n={18} text="Plumbing / gas inspection and final" />
        <ChecklistItem n={19} text="Any specialty inspections (kitchen hood, pool, generator, etc.)" />

        <p style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-muted)", margin: "20px 0 8px" }}>Documentation turnover</p>
        <ChecklistItem n={20} text="As-built drawings — GC" sub="Mark up construction documents to reflect actual field conditions; get architect review" />
        <ChecklistItem n={21} text="As-built drawings — all subs" sub="Mechanical, electrical, plumbing, fire protection, and any specialty as-builts" />
        <ChecklistItem n={22} text="O&M manuals — mechanical systems" />
        <ChecklistItem n={23} text="O&M manuals — electrical systems" />
        <ChecklistItem n={24} text="O&M manuals — plumbing systems" />
        <ChecklistItem n={25} text="O&M manuals — specialty equipment" sub="Kitchen equipment, elevators, AV systems, security, access control, etc." />
        <ChecklistItem n={26} text="Manufacturer warranties — all systems and equipment" sub="Verify warranty period, warranty holder name, and required maintenance obligations" />
        <ChecklistItem n={27} text="Roofing warranty" sub="Most manufacturers require a separate inspection and registration; confirm before project completion" />
        <ChecklistItem n={28} text="Approved submittals binder" sub="Complete set of approved shop drawings, product data, and samples" />
        <ChecklistItem n={29} text="Attic stock / spare parts" sub="Per contract requirements: extra tile, paint, filters, bulbs, hardware, etc. — document quantities delivered" />
        <ChecklistItem n={30} text="Keys, keycards, access credentials, and lock combinations" />
        <ChecklistItem n={31} text="Training documentation and videos" sub="Owner/staff training on mechanical, electrical, and specialty systems — confirm contract requirements" />
        <ChecklistItem n={32} text="Commissioning report" sub="If commissioning agent was involved, final commissioning report signed by commissioning authority" />

        <p style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-muted)", margin: "20px 0 8px" }}>Financial closeout</p>
        <ChecklistItem n={33} text="Final change order reconciliation" sub="Confirm final contract sum; all change orders executed and reflected in AIA billing" />
        <ChecklistItem n={34} text="Final Application for Payment (AIA G702/G703)" sub="Shows 100% completion on all SOV line items; includes retainage balance" />
        <ChecklistItem n={35} text="Conditional lien waivers — all subs" sub="Collected with each monthly pay application throughout the project" />
        <ChecklistItem n={36} text="Unconditional final lien waivers — all subs and material suppliers" sub="Every tier of the payment chain — including supplier-to-sub relationships" />
        <ChecklistItem n={37} text="Contractor's Final Affidavit" sub="Certifies that all bills will be paid from the final payment and that no liens will be filed" />
        <ChecklistItem n={38} text="Certificate of Substantial Completion — executed" sub="Signed by contractor, architect, and owner; includes warranty start date" />
        <ChecklistItem n={39} text="Final retainage release" sub="Per contract terms — confirm conditions, amounts, and timing" />

        <p style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--text-muted)", margin: "20px 0 8px" }}>Post-occupancy</p>
        <ChecklistItem n={40} text="Establish warranty claim process with owner" sub="Define who to contact, response time commitment, and documentation requirements" />
        <ChecklistItem n={41} text="11-month warranty walkthrough" sub="Schedule now; walk the project at 11 months to identify any warranty items before the 1-year cutoff" />
        <ChecklistItem n={42} text="Final project documentation archive" sub="Project photos, submittals, RFI log, change order log, correspondence — archived for 7+ years" />
      </div>
    </div>

    <div className="prose">
      <h2>What delays closeout most often</h2>

      <p>In practice, the same handful of issues cause most closeout delays. Knowing them in advance lets you build mitigation into your process.</p>

      <h3>Missing O&M manuals from subcontractors</h3>
      <p>O&M manuals are the single most common closeout bottleneck. Subs who didn't track this requirement during the project scramble to collect manufacturer documentation at the end. Some equipment manufacturers take 4–6 weeks to produce O&M packages in the format specified by the contract. The solution is to start collecting O&M requirements at subcontract execution and build O&M submission into the sub's payment schedule — each monthly payment is conditioned on keeping O&M documentation current, not submitting everything at the end.</p>

      <h3>Lien waivers from second-tier suppliers</h3>
      <p>A framing sub's lumber supplier, a mechanical sub's equipment vendor, an electrical sub's wire and conduit distributor — these second-tier suppliers have lien rights on the project even though you never contracted with them directly. If any of them are unpaid when you go to close out, their lien waiver won't be available and your final payment is at risk. The only reliable solution is conditional lien waiver collection throughout the project: require your subs to submit lien waivers from their major suppliers with each monthly pay application.</p>

      <h3>Punch list disputes</h3>
      <p>Owners sometimes use the punch list process to expand scope — adding items that weren't in the contract or flagging as "punch list" items that the contractor believes are out-of-scope modifications. The GC's position should be clear from the start: punch list is for incomplete or deficient work within the contracted scope, not for new scope additions. New scope additions are change orders. Having a clear punch list definition agreed to at the pre-construction stage makes this conversation easier when it inevitably comes up.</p>

      <h3>Certificate of Occupancy delays</h3>
      <p>Building departments have their own timelines. A single failed inspection — a sprinkler system that needs pressure adjustment, a smoke detector that needs relocation, an exit sign that's wired incorrectly — can push the CO two weeks while the fix is made and a reinspection is scheduled. Proactive pre-inspection walkthroughs with your fire protection sub, electrical sub, and mechanical sub before the official inspection catches most of these before they become CO delays.</p>

      <h3>As-built drawing delays</h3>
      <p>Producing accurate as-built drawings requires the subs to have tracked their deviations from the drawings during construction — not to reconstruct from memory at the end of the project. Building as-built markup into the sub's monthly workflow (update as-builts as work is installed, submit current as-builts with each pay application) makes the closeout as-built package a compilation rather than an original work.</p>

      <h2>Tracking closeout with software</h2>

      <p>A closeout checklist in a spreadsheet is better than no checklist. But a spreadsheet doesn't send reminders when items are past due, doesn't give subs visibility into what they still owe you, doesn't connect the punch list to the payment process, and doesn't create an automatic audit trail of when items were completed and by whom.</p>

      <p>Construction PM software with integrated closeout tracking — where the punch list, the lien waiver log, the documentation checklist, and the final billing are all in one system — eliminates the multi-spreadsheet, multi-email-thread coordination that makes closeout feel like a second job. When the closeout package for the owner is generated directly from the project management system rather than assembled by hand from a dozen separate sources, the process is faster, the documentation is more complete, and the final payment comes sooner.</p>

      <p>MASON tracks punch list items, closeout documentation, and final billing in the same system you use for the rest of the project — so closeout isn't a separate scramble at the end but a continuous process that's been running alongside construction from the day the project started.</p>
    </div>

    <div style={{ margin: "48px 0", padding: "28px 32px", background: "rgba(232,148,46,.07)", border: "1px solid rgba(232,148,46,.25)", borderRadius: 12 }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 10 }}>MASON</p>
      <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Track closeout items, punch lists, and final billing in one place.</h3>
      <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>Punch list, lien waiver log, O&M documentation tracking, and AIA final billing — connected to your project from day one, not added at the end.</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a href="/contact" className="btn btn-primary">Book your 14-day pilot</a>
        <a href="/tools/retainage-calculator" className="btn btn-ghost">Calculate your retainage balance</a>
      </div>
    </div>

    <div style={{ marginBottom: 64 }}>
      <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--text-muted)", marginBottom: 16 }}>Related</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {[
          { label: "Retainage Calculator", href: "/tools/retainage-calculator" },
          { label: "AIA G702/G703 Generator", href: "/tools/aia-g702-generator" },
          { label: "How to Fill Out AIA G702/G703", href: "/blog/how-to-fill-out-aia-g702-g703" },
        ].map((l, i) => (
          <a key={i} href={l.href} style={{ fontSize: 13, color: "var(--accent)", textDecoration: "none", padding: "6px 14px", border: "1px solid rgba(232,148,46,.3)", borderRadius: 20 }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(232,148,46,.3)"}>
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </article>
);

const BlogCloseoutChecklist = () => {
  useEffect(() => {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray(".gsap-fade-up").forEach((el) => {
        gsap.from(el, { opacity: 0, y: 24, duration: 0.55, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top bottom-=60", toggleActions: "play none none none" } });
      });
    }
  }, []);
  return (
    <main>
      <InnerPageHero
        eyebrow="Closeout · Punch List"
        title={<>Construction Project Closeout<br /><span className="inner-hero__accent">Checklist (42 Items)</span></>}
        lead="The complete closeout process — 8 phases from pre-closeout planning through warranty period — plus a 42-item checklist covering every document, inspection, and approval required to get your final payment."
        meta={<><span>15 min read</span><span style={{margin:"0 8px",opacity:.4}}>·</span><span>June 2026</span></>}
      />
      <section className="section">
        <div className="container">
          <Article />
        </div>
      </section>
    </main>
  );
};

export default BlogCloseoutChecklist;
