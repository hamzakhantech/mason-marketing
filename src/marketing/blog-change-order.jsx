import React, { useEffect } from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

const Article = () => (
  <article style={{ maxWidth: 740, margin: "0 auto", padding: "0 24px" }}>
    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 36, flexWrap: "wrap" }}>
      <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", background: "rgba(232,148,46,.1)", padding: "4px 10px", borderRadius: 4 }}>Change Orders</span>
      <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", background: "rgba(232,148,46,.1)", padding: "4px 10px", borderRadius: 4 }}>Project Finance</span>
      <span style={{ fontSize: 12, color: "var(--text-faint)" }}>13 min read · June 2026</span>
    </div>
    <div className="prose">

      <p className="lead-para">Change orders get lost, disputed, and unpaid more often than any other billing category in construction. Not because contractors don't do the work — the work gets done. But because the documentation wasn't there when the owner pushed back, the notice wasn't given on time, the markup wasn't justified, or the change order was submitted three months after the work was complete.</p>

      <p>A construction change order is only as valuable as the process behind it. This guide covers how to write a change order that gets approved and paid — the notice requirements, the pricing formula, the documentation package, and the common mistakes that turn legitimate extra work into unpaid claims.</p>

      <h2>What is a construction change order?</h2>

      <p>A construction change order (CO) is a written amendment to an existing construction contract that modifies the scope of work, the contract sum, the project schedule, or some combination of the three. Change orders are the formal mechanism for acknowledging and pricing work that falls outside the original contract scope.</p>

      <p>Change orders are a normal part of construction. Projects change. Owners add scope. Field conditions differ from what the drawings showed. Design errors emerge during construction. RFI responses reveal assumptions in the original scope that need correction. A well-run construction project expects change orders and has a process to manage them. A poorly-run project treats every change order as a crisis.</p>

      <p>The financial stakes are significant. On a $5 million commercial project, change orders commonly add 5–15% to the final contract sum. That's $250,000–$750,000 in work that doesn't exist in the original drawings, priced under time pressure, often without the documentation needed to defend the cost if it's disputed. Getting change order management right isn't optional — it's one of the primary levers on job profitability.</p>

      <h2>Change order vs. change directive: know the difference</h2>

      <p>Under AIA A201 (the General Conditions most commercial contracts reference), there are two distinct ways an owner can direct a change in the work:</p>

      <p>A <strong>Change Order (CO)</strong> is a mutual agreement — all three parties (owner, contractor, and architect) agree on the scope, the cost, and any schedule impact, and all three sign. Payment for a change order is unambiguous once it's executed.</p>

      <p>A <strong>Construction Change Directive (CCD)</strong> is a unilateral owner instruction to perform work when the parties haven't reached agreement on price or scope. Under AIA A201, if the contractor disagrees with the price in a CCD, they must still perform the work but are entitled to dispute the compensation. A CCD is not a change order — it's a directive to proceed pending agreement. If you receive a CCD, perform the work and document your actual costs meticulously, because you'll need that documentation to negotiate the final price.</p>

      <p>In practice, many "change orders" in the field are actually change directives — a verbal or email instruction from an owner's representative to perform extra work, with price to be discussed later. These carry significant risk: they're hard to dispute if the owner later claims the work was included in the base scope, and they generate zero legal protection until they're reduced to writing and signed.</p>

      <h2>Notice requirements: the clock starts immediately</h2>

      <p>The most expensive change order mistake is a procedural one: missing the notice requirement.</p>

      <p>AIA A201 Section 15.1.3 requires the contractor to provide written notice to the owner and architect within 21 days of first recognizing the changed condition that may entitle them to additional compensation or time. Many subcontracts require notice within 7–14 days. Some public contracts require same-day or 48-hour notice for certain categories of changed conditions.</p>

      <p>Missing this window — performing the work, billing for it, and then getting a denial based on late notice — is one of the most preventable losses in construction. Courts and arbitrators regularly uphold notice defenses even when the underlying work was clearly out of scope and clearly performed. The logic is straightforward: timely notice allows the owner and architect to verify conditions, approve alternatives, and manage their budget. Notice after the fact denies them that opportunity.</p>

      <p>The practical implication: the moment a project engineer, superintendent, or foreman encounters a field condition that might be out of scope, they need to document it and initiate a formal notice — before the work starts, if at all possible. "We'll figure out the price later" is fine. The notice creates the record that you identified the condition and claimed entitlement before performing the work.</p>

      <p>Build a daily documentation habit that catches these moments. Daily logs with photographs, field notes that identify where work deviates from the drawings, and a consistent standard for escalating potential COs to the PM — these are the field habits that protect change order entitlement.</p>

      <h2>How to price a construction change order</h2>

      <p>The standard change order pricing formula is:</p>

      <p style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 8, padding: "16px 20px", fontFamily: "var(--font-mono)", fontSize: 14, lineHeight: 1.8 }}>
        Direct Cost × (1 + Overhead%) × (1 + Profit%) + Bond Premium = Total CO Value
      </p>

      <p>Let's walk through each component.</p>

      <h3>Direct cost</h3>

      <p>Direct cost is everything you can tie directly to the changed scope: labor, materials, equipment, and subcontractor costs.</p>

      <p><strong>Labor:</strong> Use burdened labor rates — not the hourly wage you pay the worker. The burdened rate includes payroll taxes (FICA, FUTA, SUTA), workers' compensation insurance, general liability insurance, health insurance, and other fringe benefits. A carpenter earning $40/hour typically costs the GC $55–$65/hour all-in. Using unburdened rates means you're eating a significant portion of every labor change order.</p>

      <p><strong>Materials:</strong> Actual supplier cost plus applicable sales tax. Don't use estimated unit prices from the original bid — get a current quote for the change order scope. Material prices move, lead times change, and using stale pricing is both inaccurate and easy for an owner to challenge.</p>

      <p><strong>Equipment:</strong> For contractor-owned equipment, most contracts allow you to bill at published rental rates (Blue Book, AED Schedule) rather than your actual ownership cost. For rented equipment, use actual rental invoices. Include operator time in labor, not in equipment cost, unless your contract specifies otherwise.</p>

      <p><strong>Subcontractor costs:</strong> The amount your sub bills you for the change order work. Subcontractor change orders need to be priced using the same rigor as GC change orders — labor, materials, equipment, overhead, and profit. A sub who submits a single lump-sum number for extra work is giving you a difficult time getting that approved by the owner.</p>

      <h3>Overhead markup</h3>

      <p>Overhead covers the indirect costs of running a construction company that aren't directly attributable to any single project: home office expenses, project management salaries beyond what's billed directly to the project, insurance premiums not captured in the labor burden, bonding costs, vehicles, equipment maintenance, legal and accounting costs, and the general cost of keeping the lights on.</p>

      <p>Standard overhead markup on change orders ranges from 10–20%. AIA A201 and most standard subcontracts specify that the overhead markup allowed on change order work is consistent with what was included in the original bid — which typically means 10–15%. Some contracts cap overhead and profit combined at 15%.</p>

      <p>Here's the industry reality: many construction companies bid work at 10–12% overhead, which is thin. When they apply the same percentage to change orders, they're often not fully recovering their actual indirect costs on that work. Change order work is typically less efficient than base contract work — it's done out of sequence, in areas that are partially complete, with crews that weren't originally planned for. A 10–15% overhead markup that was reasonable for planned, sequenced work often undersells change order work. Know your actual overhead rate and understand what your contract allows before agreeing to markup caps during contract negotiation.</p>

      <h3>Profit markup</h3>

      <p>Profit is applied on top of direct cost plus overhead — not just on direct cost alone. Standard profit markup on change orders is 5–15%. AIA A201 traditionally allows 10% profit on change order work. The distinction between applying profit to direct cost alone versus direct cost plus overhead matters:</p>

      <p>On a $50,000 direct cost CO with 15% overhead and 10% profit:</p>
      <p>$50,000 × 1.15 = $57,500 (cost + overhead) × 1.10 = $63,250 total</p>

      <p>Versus incorrectly applying profit only to direct cost:</p>
      <p>$50,000 + ($50,000 × 0.15) + ($50,000 × 0.10) = $62,500</p>

      <p>The difference is $750 on a $63,000 change order — small but worth getting right, and it compounds over dozens of change orders on a large project.</p>

      <h3>Bond premium</h3>

      <p>If your project requires a performance and payment bond, the bond premium applies to the full contract sum including approved change orders. As change orders increase the contract sum, the bond premium increases proportionally. Most bonds are priced at 0.5–1.5% of the contract sum depending on the contractor's bonding capacity and the project risk profile.</p>

      <p>Bond premium is a legitimate change order cost that many GCs forget to include. On a $100,000 change order with a 1% bond rate, that's $1,000 you're leaving on the table.</p>

      <h2>What to include in a construction change order</h2>

      <p>A complete change order document contains:</p>

      <p><strong>Change Order Number and Date:</strong> Sequential numbering is essential for tracking and referencing in correspondence, AIA billing, and disputes. The date should be the date of submission, not the date work was performed.</p>

      <p><strong>Contract Reference:</strong> The prime contract number and date, project name, and names and addresses of all parties. This ties the change order to the specific contract it modifies.</p>

      <p><strong>Scope Description:</strong> A clear, specific description of what work is being added, deleted, or modified. "Electrical revisions per RFI 047" is inadequate — RFI 047 might not be attached, might have been superseded, or might be subject to interpretation. "Install 200 linear feet of 4-inch EMT conduit from Panel LP-3 to new server room per revised drawing E-204 Rev 3, including all associated wire, connections, and devices as described in the attached pricing detail" is a scope description that can be compared to a drawing and verified in the field.</p>

      <p><strong>Pricing Breakdown:</strong> A line-item cost breakdown showing direct cost (labor hours and rates, material quantities and unit prices, equipment), overhead, profit, and bond premium. Lump-sum change orders without backup pricing get rejected more often than detailed, justified change orders. An owner who can see exactly where the money goes is more likely to approve than one facing a black-box number.</p>

      <p><strong>Schedule Impact:</strong> If the change order affects the project schedule — adds days to the critical path, delays a milestone, or requires additional crew mobilization — the schedule impact needs to be stated in calendar days and referenced to specific schedule activities. Schedule impacts are often more valuable than cost impacts: liquidated damages on a delayed substantial completion date can easily exceed the cost of the extra work that caused the delay.</p>

      <p><strong>Reference Documents:</strong> RFI number, drawing revision, specification section, field directive number, or whatever document triggered or authorizes the change. References create a paper trail that proves the change is real, authorized, and out of scope.</p>

      <p><strong>Signature blocks:</strong> Contractor, owner, and architect signature lines with date fields. All three signatures are required for a fully executed change order. A CO signed only by the contractor is not executed. A CO signed by the architect but not the owner may not be binding depending on the contract's authority delegation provisions — confirm who has signing authority for change orders before the project starts, not during a dispute.</p>

      <h2>The Potential Change Order: your early-warning process</h2>

      <p>A Potential Change Order (PCO) is an internal document that captures a possible scope change before it becomes a formal change order. PCOs serve as:</p>

      <p>The notice vehicle: a PCO can document that you identified a changed condition and communicated it to the architect, satisfying the AIA A201 notice requirement even before price is agreed.</p>

      <p>A tracking mechanism: PCOs let you monitor the total value of unapproved change orders — "pending exposure" in construction accounting — so you have visibility into cash flow risk before it becomes a problem.</p>

      <p>An approval trigger: once a PCO is priced, submitted, and approved by the owner, it converts to an executed change order that's billed in the next pay application.</p>

      <p>A robust PCO process looks like this: field identifies potential CO → PM opens PCO in project management system → PCO is submitted to architect with notice of claim for additional compensation → architect responds, scope is confirmed, pricing is negotiated → executed change order is returned → CO is added to AIA Schedule of Values → billed in next G702/G703 pay application.</p>

      <p>Every step is documented with dates. Every communication is in writing. No work falls through the cracks, and no approved scope change disappears without a billing record.</p>

      <h2>Oral approvals, email approvals, and the documentation hierarchy</h2>

      <p>A text message from the owner's representative saying "go ahead" is not a change order. An email from the architect saying "proceed with the additional electrical work" is better — it's in writing, it's dated, it shows authorization — but it's still not an executed change order. Email approvals are routinely disputed at closeout by owners who claim the email was conditional, didn't authorize the specific price, or wasn't sent by someone with signing authority.</p>

      <p>The documentation hierarchy for change orders, from strongest to weakest:</p>

      <p>1. Fully executed change order signed by all required parties — best protection, unambiguous.<br/>
      2. Construction Change Directive (CCD) — written, signed by owner and architect, authorizes work pending price agreement.<br/>
      3. Written change directive from owner's authorized representative — less formal than a CCD but still written and dated.<br/>
      4. Email authorization from person with contract authority — admissible but disputable.<br/>
      5. Text message or verbal authorization — risky, requires corroborating documentation of conditions.</p>

      <p>The practical standard: never start change order work worth more than a few thousand dollars without written authorization that references the scope and your claimed entitlement to additional compensation. For work worth tens of thousands of dollars, push for a signed change order before you mobilize.</p>

      <h2>Billing change orders in your AIA G702/G703</h2>

      <p>Once a change order is executed, it needs to be incorporated into your AIA billing. The process:</p>

      <p><strong>Update the contract sum:</strong> Line 2 of the G702 (Net Change by Change Orders) increases by the CO amount. Line 3 (Contract Sum to Date) reflects the new total.</p>

      <p><strong>Add a line to the G703:</strong> Each approved change order typically gets its own line item in the G703 Schedule of Values — or is added to an existing line item if it's truly an extension of existing scope. Adding a new line item is cleaner: it keeps the change order billing separate from base contract billing, makes it easy to track CO completion percentages independently, and gives the architect and owner clear visibility into what's being billed under each CO.</p>

      <p><strong>Bill the CO at the appropriate completion percentage:</strong> Change order work bills the same way as base contract work — at the percentage of the change order scope that's complete in the billing period. A CO for $80,000 of electrical work that's 50% installed in the current month bills at $40,000 in Column E of the G703, subject to the same retainage as the rest of the work.</p>

      <h2>Disputed change orders: your rights and your options</h2>

      <p>When an owner rejects or disputes a change order, you have options. Under AIA A201, the contractor has the right to refer disputes to the Initial Decision Maker (typically the architect), and from there to mediation, arbitration, or litigation depending on what the contract specifies. Most contracts require formal notice of dispute within a specific timeframe — typically 21 days of the disputed determination — or the right to dispute is waived.</p>

      <p>Practically speaking, most change order disputes are negotiated, not litigated. The owner wants the project completed; the contractor wants to be paid. The leverage on both sides — the owner's ability to withhold payment, the contractor's ability to stop work for nonpayment — usually produces a negotiated resolution faster and cheaper than arbitration.</p>

      <p>Your negotiating position is exactly as strong as your documentation. A disputed change order backed by photographs of the field condition, written notice submitted before the work started, a detailed cost breakdown with backup receipts, and a clear reference to the contract clause or drawing revision that authorized the change is a much stronger position than a disputed CO backed by verbal instructions and a lump-sum invoice submitted three months after the work was done.</p>

      <h2>Tracking change orders: the CO log</h2>

      <p>Every project needs a change order log that tracks every potential, pending, and executed CO from identification to final billing. At minimum, the log should capture: PCO number, description, date identified, date submitted, date responded, status (pending/approved/rejected/disputed), approved amount, billed in which pay application, and current billing status.</p>

      <p>The log has several functions beyond tracking individual COs. It gives you real-time visibility into the total value of pending change orders — your unpriced exposure. It documents the timeline of each CO's progression, which is critical if a dispute arises about notice timing. It connects change orders to the pay application where they were first billed, which matters at closeout when you're reconciling the final contract sum.</p>

      <p>Running a CO log in a spreadsheet works for small projects. For projects with 20+ change orders — which is most commercial projects over $5 million — dedicated construction PM software that connects the CO workflow to the AIA billing workflow saves significant administrative time and eliminates the errors that come from maintaining two disconnected systems.</p>

    </div>

    <div style={{ margin: "48px 0", padding: "28px 32px", background: "rgba(232,148,46,.07)", border: "1px solid rgba(232,148,46,.25)", borderRadius: 12 }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 10 }}>Free tool</p>
      <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Price your change orders correctly — overhead, profit, and bond included.</h3>
      <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>Enter direct cost, set your overhead and profit rates, and get the total CO value instantly. Free change order calculator — no signup required.</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a href="/tools/change-order-calculator" className="btn btn-primary">Use the free calculator</a>
        <a href="/contact" className="btn btn-ghost">See MASON's CO workflow</a>
      </div>
    </div>

    <div style={{ marginBottom: 64 }}>
      <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--text-muted)", marginBottom: 16 }}>Related</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {[
          { label: "AIA G702/G703 Generator", href: "/tools/aia-g702-generator" },
          { label: "What Is an RFI in Construction?", href: "/blog/what-is-rfi-construction" },
          { label: "Construction Project Closeout Checklist", href: "/blog/construction-project-closeout-checklist" },
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

const BlogChangeOrder = () => {
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
        eyebrow="Change Orders · Project Finance"
        title={<>How to Write a<br /><span className="inner-hero__accent">Construction Change Order</span></>}
        lead="Notice requirements, the pricing formula, what to include in the document, and the documentation habits that protect entitlement when owners push back."
        meta={<><span>13 min read</span><span style={{margin:"0 8px",opacity:.4}}>·</span><span>June 2026</span></>}
      />

      {/* Blog hero image */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 48px" }}>
        <img
          src="/images/blog/change-order.svg"
          alt="Construction change order pricing formula: Direct Cost times Overhead times Profit"
          width="1200"
          height="630"
          style={{ width: "100%", height: "auto", borderRadius: 12, border: "1px solid var(--line)", display: "block" }}
          loading="eager"
        />
      </div>
      <section className="section">
        <div className="container">
          <Article />
        </div>
      </section>
    </main>
  );
};

export default BlogChangeOrder;
