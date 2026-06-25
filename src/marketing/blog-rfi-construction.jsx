import React, { useEffect } from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

const Article = () => (
  <article style={{ maxWidth: 740, margin: "0 auto", padding: "0 24px" }}>
    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 36, flexWrap: "wrap" }}>
      <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", background: "rgba(232,148,46,.1)", padding: "4px 10px", borderRadius: 4 }}>RFIs</span>
      <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", background: "rgba(232,148,46,.1)", padding: "4px 10px", borderRadius: 4 }}>Workflow</span>
      <span style={{ fontSize: 12, color: "var(--text-faint)" }}>16 min read · June 2026</span>
    </div>
    <div className="prose">

      <p className="lead-para">An average commercial construction project generates 10–15 RFIs per $1 million in project value. On a $10 million project, that's 100–150 requests for information — each one requiring someone to write it, route it, wait for a response, distribute that response, and track whether the information reached everyone who needed it. Research puts the cost of managing an average RFI at $1,000–$1,500 in combined time across the GC team, design team, and owner. On that $10 million project, the fully-loaded administrative cost of the RFI process runs $100,000–$225,000.</p>

      <p>That number is before accounting for the schedule impact of RFIs that go unanswered long enough to stop work. It's before accounting for field errors that happen because an RFI response never reached the crew doing the work. And it's before the cost of disputes that emerge at project closeout when the parties disagree about what decisions were made and when.</p>

      <p>The RFI is the most important document in construction project management. This guide covers what an RFI is, when to submit one, how to write one that gets a fast response, how to manage the RFI log effectively, and the field practices that reduce RFI volume without hiding information gaps that cause field errors.</p>

      <h2>What is an RFI in construction?</h2>

      <p>An RFI (Request for Information) is a formal written communication from a contractor or subcontractor to the architect, engineer, or owner requesting clarification about the project documents — drawings, specifications, geotechnical reports, or any other contract document. RFIs are the formal mechanism for resolving information gaps that can't be resolved by reading the existing documents more carefully.</p>

      <p>The key word is formal. An RFI creates a documented record of: what information was needed, who requested it, when it was submitted, what response was given, and when the response was received. That documentation matters when schedule impacts need to be justified, when change orders are disputed, and when someone at closeout asks why a detail was built differently than it appears on the drawing.</p>

      <h2>When to submit an RFI (and when not to)</h2>

      <p>An RFI is appropriate when:</p>

      <p><strong>The drawings conflict:</strong> Two drawings show different conditions for the same location — different dimensions, different materials, different elevations. Without a formal clarification, one of the conflicting drawings gets followed and the other gets ignored, usually without anyone knowing which decision was made or why.</p>

      <p><strong>A specification requires clarification:</strong> The specification calls for a product "or approved equal" without defining what equal means. The spec requires installation "per manufacturer's recommendations" but the manufacturer's recommendations conflict with the project conditions. The spec lists an obsolete product that's no longer manufactured.</p>

      <p><strong>A field condition differs from the drawings:</strong> Existing conditions discovered during demolition or excavation don't match what the drawings show. Utility locations differ from the utility as-built drawings provided at bidding. Structural member sizes or locations discovered during framing don't match the structural drawings.</p>

      <p><strong>A design decision hasn't been made:</strong> Finish selections aren't confirmed. Fixture specifications are noted as "TBD." A design element is shown schematically on the drawings without dimensions or specifications.</p>

      <p>An RFI is NOT appropriate when:</p>

      <p><strong>The answer is in the documents:</strong> Reading the relevant specification section, checking the detail drawings, or reviewing the project manual would answer the question. Submitting an RFI for something that's clearly stated in the documents wastes everyone's time and builds a reputation for not reading the documents before asking questions.</p>

      <p><strong>The question is about construction means and methods:</strong> How the work gets done is the contractor's domain. "What size crane should we use?" is not an RFI. "Where is the designated crane pick zone?" might be, if the drawings don't show it clearly.</p>

      <p><strong>You're using the RFI as a paper trail for something that should be a change order:</strong> "RFI-ing" scope additions or scope changes to create a record of extra work is misusing the process. Changed scope belongs in a change order or change directive, not an RFI.</p>

      <h2>RFI vs. submittal: the difference</h2>

      <p>RFIs and submittals are both formal communication documents, but they serve opposite purposes:</p>

      <p>An <strong>RFI</strong> is information flowing from the contractor TO the design team — a question requesting clarification about what the design team wants.</p>

      <p>A <strong>submittal</strong> is information flowing from the contractor TO the design team for review and approval — the contractor demonstrating that the product, material, or method they plan to use meets the specification requirements. Shop drawings, product data sheets, samples, and test reports are all submittals.</p>

      <p>The relationship between RFIs and submittals is important: RFI responses sometimes change what submittals are required (if the response modifies the specification), and submittal reviews sometimes generate RFIs (if the design team's review comments raise new questions). Keep the two processes separate and don't use submittals to ask questions that belong in RFIs.</p>

      <h2>RFI vs. change order: when an RFI becomes something else</h2>

      <p>RFIs that reveal scope changes need to be elevated to the change order process. The typical sequence:</p>

      <p>RFI identifies a field condition → architect's response confirms the condition changes the scope or cost of the work → contractor submits a Potential Change Order based on the RFI response → PCO is negotiated and executed as a change order.</p>

      <p>The RFI creates the documented record of when the scope change was identified and communicated, which protects the contractor's notice position. The change order is where the cost and schedule impact are priced and agreed. Don't try to price extra work in the RFI itself — the RFI is for information, not for compensation claims.</p>

      <h2>How to write an effective RFI</h2>

      <p>The quality of the RFI directly affects the speed and quality of the response. A well-written RFI gets a clear answer fast. A vague RFI gets a request for clarification, adds a week to the response cycle, and sometimes comes back with an answer that doesn't actually resolve the question.</p>

      <h3>One question per RFI</h3>

      <p>Combining multiple unrelated questions in a single RFI creates routing problems (different questions go to different people), delays the response (the RFI can't be closed until all questions are answered), and makes it harder to track which questions have been resolved and which are still open. Write one RFI per issue. If you have three questions arising from the same drawing, submit three RFIs.</p>

      <h3>Be specific about location and scope</h3>

      <p>"There is a conflict on Sheet A-302" is not a useful RFI. "Sheet A-302 shows the column centerline at 12'-6" from grid A, while Sheet S-201 shows the same column centerline at 12'-0" from grid A. Please confirm the correct dimension for this column location." That RFI can be answered in five minutes by someone who has access to both drawings.</p>

      <p>Include: the drawing number(s) involved, the specific detail or section reference, the grid lines or room number establishing the location, and the specific information that's conflicting or missing.</p>

      <h3>Propose a solution</h3>

      <p>RFIs that propose a specific resolution — "Contractor proposes to install Column B4 at 12'-0" from Grid A per Sheet S-201 unless directed otherwise by the Architect" — get faster responses than open-ended questions. The architect can simply confirm the proposal rather than designing a response from scratch. They can reject it if it's wrong. But most of the time, the contractor's proposed solution is reasonable, and a "confirmed, proceed as proposed" response takes 90 seconds to write.</p>

      <p>Proposing a solution also demonstrates that the contractor has thought through the issue, not just flagged it and passed the problem upstream. That builds trust with the design team and accelerates the overall RFI cycle time.</p>

      <h3>Mark up the drawings</h3>

      <p>A marked-up sketch attached to the RFI — showing the conflict, the proposed solution, or the field condition — is worth a thousand words of description. Architects process spatial information better from drawings than from text descriptions. If you can sketch it, sketch it.</p>

      <h3>State the response needed date</h3>

      <p>Include when you need the response to avoid impacting the project schedule. "Response required by [date] to avoid work stoppage in Area 4B" is clear and actionable. It also creates a record: if the response comes after that date and work was delayed, you have the documentation to support a schedule impact claim.</p>

      <h2>RFI response times: what's standard and what's enforceable</h2>

      <p>AIA A201 doesn't specify a required RFI response time. Most construction contracts do specify one — typically 7–14 calendar days for standard RFIs, with shorter timelines (3–5 days) for RFIs that threaten imminent work stoppages. Some public contracts have specific statutory response time requirements.</p>

      <p>Industry data on actual response times tells a different story. Well-written, specific RFIs with proposed solutions average around 4 days for response. Vague or complex RFIs average 11+ days. The quality of the RFI matters as much as the contract's required response time.</p>

      <p>When the contract specifies response times, the GC has the right to include late RFI responses in schedule impact claims. If an RFI response arrives after the contractual deadline and work was delayed waiting for the answer, document the delay carefully: daily logs noting work was unable to proceed in the affected area, RFI log showing submission date and response date, and a calculation of labor, equipment, and general conditions costs for the delay period.</p>

      <p>Late RFI responses are a legitimate basis for schedule extension claims and sometimes cost claims. Contractors who track RFI cycle times systematically and document delays caused by late responses have a much stronger position when schedule disputes arise at project closeout.</p>

      <h2>The RFI log: how to manage RFIs at scale</h2>

      <p>A project with 100+ RFIs can't be managed by memory or by searching email threads. The RFI log is the master tracking document for the entire RFI process.</p>

      <p>At minimum, the RFI log should capture:</p>

      <p><strong>RFI Number:</strong> Sequential, with no gaps. If RFI-047 is withdrawn, the number is still logged as "withdrawn" — the sequence maintains the audit trail.</p>

      <p><strong>Date Submitted:</strong> The date the RFI was formally submitted to the architect or engineer — not the date it was drafted internally.</p>

      <p><strong>Date Response Required:</strong> The date you need the response to avoid schedule impact. This triggers follow-up action when the date approaches without a response.</p>

      <p><strong>Date Response Received:</strong> Logged immediately when the response arrives. The gap between submitted and received dates is your response cycle time — track this by architect or engineer to identify who responds quickly and who doesn't.</p>

      <p><strong>Status:</strong> Open / Responded / Closed / Withdrawn. An RFI is closed when the information has been distributed to everyone who needs it and confirmed as received. A responded RFI that hasn't been distributed to the field isn't closed.</p>

      <p><strong>Cost Impact:</strong> Does the RFI response suggest scope change? Flag it immediately and open a PCO.</p>

      <p><strong>Schedule Impact:</strong> Has work in the affected area been delayed waiting for the response? Document the delay period.</p>

      <h3>Updating the log</h3>

      <p>The log must be updated the same day RFIs are submitted or responses received. A log that's two weeks out of date is worse than no log — it creates false confidence that things are being tracked when they're not. Assign one person to maintain the RFI log and make it part of their daily routine, not a weekly filing task.</p>

      <h3>Distributing responses</h3>

      <p>An RFI response that sits in the PM's inbox hasn't solved the problem. The response needs to reach the field — the superintendent, the foreman, and any subcontractor whose work is affected. Track distribution as part of the RFI closure process: "Response distributed to [names/parties] on [date]." The most common cause of a field error that "should have been fixed by the RFI" is an RFI response that was received but never made it to the people doing the work.</p>

      <h2>Reducing RFI volume: pre-construction coordination</h2>

      <p>The best RFI management strategy is generating fewer RFIs in the first place. The single highest-leverage activity for reducing RFI volume is pre-construction coordination — a thorough review of the contract documents before construction begins, with the goal of identifying ambiguities, conflicts, and information gaps before they become field questions.</p>

      <p>A pre-construction coordination review typically covers:</p>

      <p><strong>Drawing coordination:</strong> Do the architectural, structural, and MEP drawings agree at key interface points? Where beams land on columns, where penetrations occur, where mechanical equipment is shown — these are the areas where cross-discipline conflicts are most common. BIM coordination and clash detection, covered in depth in our guide to <a href="/blog/what-is-clash-detection-bim" style={{ color: "var(--accent)" }}>BIM clash detection</a>, systematically identifies these conflicts before construction.</p>

      <p><strong>Specification review:</strong> Are there "or approved equal" clauses without criteria? Products specified by single manufacturer without substitution language? Performance specifications without testing criteria? These become RFIs during construction. Resolving them before construction — by submitting RFIs during the pre-construction phase — means you enter the project with answers rather than questions.</p>

      <p><strong>Site condition verification:</strong> Do the as-built drawings for existing conditions (existing utilities, existing structure for renovation work, survey data) match actual field conditions? A site visit during the pre-construction phase to verify existing conditions often catches discrepancies that would otherwise surface as RFIs (and potential change orders) during construction.</p>

      <p>Projects that invest in thorough pre-construction coordination consistently generate fewer RFIs during construction. The correlation is direct and well-documented in project retrospectives: coordination investment up front translates to fewer information requests, fewer delays, and fewer change orders downstream.</p>

      <h2>Common RFI management mistakes</h2>

      <h3>Submitting RFIs too late</h3>
      <p>The most expensive RFI is one submitted the day before work is needed. If you need information about a detail that affects work starting in three weeks, submit the RFI now, not in two and a half weeks. Build RFI lead time into your look-ahead schedule: identify the information you'll need three to four weeks before each work activity and confirm the RFIs are either already answered or submitted with adequate time for response.</p>

      <h3>Not following up on overdue RFIs</h3>
      <p>Submitting an RFI and then waiting passively for a response is not managing RFIs. The RFI log should trigger automatic follow-up action when the required response date approaches without a response. A simple weekly review of the log — "which RFIs are within 3 days of the required response date without a response?" — with a follow-up email to the architect is the minimum. For RFIs that will cause work stoppages, follow up by phone and document the call in writing.</p>

      <h3>Letting email replace the formal RFI process</h3>
      <p>Email conversations with the architect about drawing questions are not RFIs. They don't have numbers, they're not in the log, responses aren't distributed to the field, and they don't create a clean audit trail. The temptation to resolve questions informally via email is understandable — it's faster in the moment — but it creates information management problems and evidentiary gaps if those email conversations become relevant in a dispute. Use the formal RFI process for anything that rises to the level of a document change or an interpretation of contract requirements.</p>

      <h3>Treating RFI responses as final without confirming with the field</h3>
      <p>An RFI response tells you what the architect wants. It doesn't confirm that the field team knows what the architect wants. The last step of every RFI — after logging the response, after assessing cost and schedule impact — is confirming that the response has reached the people doing the affected work and that they understand it. The RFI log should track this distribution, not just the response receipt.</p>

      <h2>RFI management and construction software</h2>

      <p>At low RFI volume — 20–30 per project — a shared spreadsheet manages the log adequately. At 100+ RFIs across multiple concurrent projects, the spreadsheet approach breaks down: multiple people update simultaneously and create conflicts, responses get filed in email threads that aren't connected to the log, field distribution of responses becomes ad hoc, and generating a status report for an owner meeting requires manual assembly from multiple sources.</p>

      <p>Construction PM software handles RFI management by connecting the log to the document management system, automating follow-up reminders when response dates approach, distributing responses to the field automatically as part of the RFI closure process, and giving the whole project team — including the owner and architect — visibility into RFI status through a shared portal rather than email threads.</p>

      <p>The compounding benefit: when RFI responses are stored in the project management system rather than in email, they're linked to the drawings and specifications they reference. A superintendent in the field who needs to know what was decided about Column B4 can pull up the relevant RFI in the project app, see the marked-up sketch from the original submission, and read the architect's response — without a phone call to the PM asking which email thread has the answer.</p>

      <p>MASON's RFI module tracks every request from submission through response to field distribution, with automatic follow-up reminders, cost and schedule impact flags, and a complete audit trail. The RFI log connects directly to the project schedule and AIA billing, so when an RFI generates a change order, the PCO opens automatically and the change order billing flows into the next pay application without manual re-entry.</p>

    </div>

    <div style={{ margin: "48px 0", padding: "28px 32px", background: "rgba(232,148,46,.07)", border: "1px solid rgba(232,148,46,.25)", borderRadius: 12 }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 10 }}>MASON RFI module</p>
      <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>RFI submission, tracking, and field distribution — in one system.</h3>
      <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>Log RFIs, track response times, distribute responses to the field, and flag cost and schedule impacts — without switching between email and a spreadsheet. Connected to your schedule and AIA billing.</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a href="/contact" className="btn btn-primary">Book your 14-day pilot</a>
        <a href="/platform" className="btn btn-ghost">See the platform</a>
      </div>
    </div>

    <div style={{ marginBottom: 64 }}>
      <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--text-muted)", marginBottom: 16 }}>Related</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {[
          { label: "What Is Clash Detection in BIM?", href: "/blog/what-is-clash-detection-bim" },
          { label: "How to Write a Construction Change Order", href: "/blog/how-to-write-construction-change-order" },
          { label: "MASON vs Procore", href: "/vs-procore" },
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

const BlogRFIConstruction = () => {
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
        eyebrow="RFIs · Workflow"
        title={<>What Is an RFI<br /><span className="inner-hero__accent">in Construction?</span></>}
        lead="The request for information is the most important document in construction project management. Here's what it is, when to use one, how to write one that gets a fast response, and how to manage RFIs at scale without drowning in email threads."
        meta={<><span>16 min read</span><span style={{margin:"0 8px",opacity:.4}}>·</span><span>June 2026</span></>}
      />
      <section className="section">
        <div className="container">
          <Article />
        </div>
      </section>
    </main>
  );
};

export default BlogRFIConstruction;
