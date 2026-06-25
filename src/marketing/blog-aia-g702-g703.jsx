import React, { useEffect } from "react";
import { InnerPageHero } from "../components/InnerPageHero.jsx";

const Article = () => (
  <article style={{ maxWidth: 740, margin: "0 auto", padding: "0 24px" }}>
    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 36, flexWrap: "wrap" }}>
      <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", background: "rgba(232,148,46,.1)", padding: "4px 10px", borderRadius: 4 }}>Billing</span>
      <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", background: "rgba(232,148,46,.1)", padding: "4px 10px", borderRadius: 4 }}>AIA</span>
      <span style={{ fontSize: 12, color: "var(--text-faint)" }}>14 min read · June 2026</span>
    </div>
    <div className="prose">

      <p className="lead-para">Every month, general contractors across the country sit down to fill out the same two-page form — AIA G702 and its companion G703 — and request payment from their owner or construction lender. It's the most important document a GC produces on a monthly basis. Get it right and payment flows. Get it wrong — a mismatched retainage figure, an overstated line item, a missing signature — and payment stalls while the architect sends it back for corrections.</p>

      <p>This guide covers exactly how to fill out AIA G702 and G703 forms, from setting up your initial Schedule of Values through to submitting your final application at project closeout. We'll work through every column, every line, every field that trips up contractors who haven't done it a hundred times yet.</p>

      <h2>What are AIA G702 and G703?</h2>

      <p>The <strong>AIA G702</strong> is the Application and Certificate for Payment — the summary cover sheet of a construction pay application. It's a single page that shows the total contract sum, approved change orders, work completed to date, retainage withheld, previous payments received, and the net amount due for the current billing period. The architect reviews the G702, certifies the amount they agree is due, and forwards it to the owner for payment.</p>

      <p>The <strong>AIA G703</strong> is the Continuation Sheet — the itemized backup that supports the G702 summary. It breaks the project down line by line through a Schedule of Values, tracking scheduled value, previous completion, current period work, materials stored on site, percentage complete, and balance to finish for every line item in the contract. The G703 is where the actual billing math happens. The G702 is where it's summarized for signature.</p>

      <p>Together, they're the standard billing mechanism on most commercial, institutional, healthcare, and public construction projects in the United States — embedded in AIA A101 (Standard Form of Agreement) and AIA A201 (General Conditions) contracts and referenced in virtually every standard owner-contractor agreement on projects where an architect is involved.</p>

      <h2>Before your first pay application: setting up the Schedule of Values</h2>

      <p>Your Schedule of Values (SOV) is the foundation of every pay application you'll submit on a project. Before you submit your first G702/G703, you and the architect need to agree on the SOV. Do this wrong and you'll fight with it every month for the life of the project.</p>

      <h3>What goes in the Schedule of Values?</h3>

      <p>The SOV is a breakdown of your contract sum into line items, each representing a distinct portion of scope. There's no universal rule for how many line items to include — different architects and owners have different preferences — but the goal is enough granularity that completion percentages are meaningful, without so much detail that maintaining the SOV becomes its own full-time job.</p>

      <p>Common approaches for commercial GC work:</p>

      <p><strong>CSI division-based:</strong> Organize by MasterFormat CSI divisions — Division 03 Concrete, Division 04 Masonry, Division 05 Metals, Division 07 Thermal and Moisture Protection, and so on. This aligns with how design specifications are organized and makes it easy to verify that the SOV covers the full scope. It works well on projects where the GC is self-performing multiple scopes.</p>

      <p><strong>Subcontractor-based:</strong> One line per major subcontractor or trade package, plus lines for general conditions, GC overhead, and GC profit. This is simpler to maintain and aligns your billing directly with your subcontractor pay apps — each sub bills you, you roll their billing into your line item. It works well on projects where most work is subcontracted.</p>

      <p><strong>Hybrid:</strong> Major CSI divisions for self-performed work, one line per sub for subcontracted work. This is the most common approach on mid-size commercial projects.</p>

      <h3>The front-loading problem</h3>

      <p>Every GC knows that billing early in the project — claiming higher percentages in the first months — improves cash flow. And every architect knows contractors try to do this. Front-loading the SOV means assigning inflated values to early-completing line items (mobilization, general conditions, site work) while undervaluing later-completing items (finishes, commissioning, closeout). The result is a billing curve that runs ahead of actual cost.</p>

      <p>Architects push back on SOVs they believe are front-loaded, and they're right to. Front-loading creates problems at closeout: the billing runs out before the work is done, leaving you trying to bill for scope that the SOV says is 100% complete. Get your SOV approved as a reasonable reflection of cost distribution, not an exercise in cash flow optimization. Save the cash flow improvement for other levers: negotiating lower retainage, accelerating stored materials billings, or shortening the pay application review period.</p>

      <h3>General conditions as a separate line item</h3>

      <p>General conditions costs — supervision, site office, temporary facilities, site utilities, safety, small tools, project management — should appear as their own line item in the SOV. Some owners want general conditions broken into sub-lines (field supervision, project management, temporary facilities separately). Some are fine with a single line. Confirm with the architect before submitting your SOV.</p>

      <p>General conditions typically bill on a pro-rata basis: if the project is 40% complete by time elapsed, you bill 40% of your general conditions. Some contracts allow general conditions to be billed based on actual monthly cost rather than percentage — if your contract allows this and your actual monthly general conditions costs are higher early in the project (as they often are, when you're fully staffed for peak construction), this is worth clarifying with the architect before the first pay app.</p>

      <h2>How to fill out the G703 Continuation Sheet</h2>

      <p>The G703 has seven standard columns (A through G, plus a retainage column). Here's what each one requires:</p>

      <h3>Column A — Item No.</h3>
      <p>A sequential number for each line item. Once your SOV is set, these numbers don't change. Item 01 stays Item 01 through the entire project, even if its description changes slightly due to a change order.</p>

      <h3>Column B — Description of Work</h3>
      <p>The description of each line item — what scope this line covers. Keep descriptions specific enough to be meaningful but concise enough to fit the form. "Mechanical — HVAC rough-in and finish" is better than "Mechanical" alone or a two-sentence description of everything the HVAC sub is doing.</p>

      <h3>Column C — Scheduled Value</h3>
      <p>The contract value of each line item — the dollar amount you agreed to with the architect when the SOV was approved. Column C totals should match your current contract sum (original contract plus approved change orders). This column doesn't change during the project unless a change order adjusts the scope of a specific line item.</p>

      <h3>Column D — Work Completed from Previous Applications</h3>
      <p>The dollar amount of work completed in all previous pay applications. On your first pay application, Column D is zero for every line. On your second application, Column D carries forward whatever you billed in Application No. 1. On subsequent applications, Column D is the sum of all previous billings — the running total of everything billed before the current period. This column is calculated, not entered manually (your software or previous G703 drives it).</p>

      <h3>Column E — Work Completed This Period</h3>
      <p>This is what you're billing in the current pay application. For each line item, estimate the dollar value of work completed during the billing period. This is a judgment call — you're estimating what percentage of the line item was completed during the period and converting that to a dollar amount.</p>

      <p>The judgment call is real: "25% complete" is your estimate of what was accomplished, not a calculation from actual costs. That's why the architect reviews and certifies pay applications — they're verifying that your completion estimates are reasonable based on what they observe during site visits. The honest approach is to be conservative: bill what's clearly done, not what you think might be done or what you hope to finish before the pay period closes. Overbilling now creates problems on the next application when the architect checks whether the percentage you claimed last month matches site progress this month.</p>

      <h3>Column F — Materials Presently Stored</h3>
      <p>The value of materials that have been delivered to the project site (or an approved off-site storage location) but not yet incorporated into the work. Stored materials billing is valuable for cash flow — you can bill for materials the moment they arrive on site rather than waiting until they're installed — but it requires documentation. For every dollar billed in Column F, you need a supplier invoice showing the material was delivered and payment is due, plus evidence the material is on site (a delivery receipt, a stored materials schedule, or photographic documentation).</p>

      <p>Not all owners and architects allow stored materials billing without additional procedures. Some require a stored materials log. Some require materials to be stored in a specific location, tagged, and separately insured. Confirm the requirements with the architect before your first stored materials claim.</p>

      <h3>Column G — Total Completed and Stored to Date</h3>
      <p>The sum of Column D (previous completion), Column E (this period), and Column F (stored materials). This is the total value the project has billed through the current application. Column G divided by Column C gives you the percentage complete for each line item, shown in the adjacent percentage column.</p>

      <h3>Retainage column</h3>
      <p>The retainage withheld on each line item. Multiply Column G by the retainage rate specified in your contract. Standard commercial retainage is 10% through 50% completion, reducing to 5% for the back half. If your contract has a retainage reduction provision, you need to track which line items have crossed the 50% threshold and apply the reduced rate accordingly — this is one of the most common errors in monthly pay applications.</p>

      <h2>How to fill out the G702 Application for Payment</h2>

      <p>Once your G703 is complete, the G702 cover sheet draws directly from the G703 totals. Here's each section:</p>

      <h3>Project information block (top of form)</h3>
      <p>Application number, application date, period to (the end date of the billing period), project name and address, contract date, and the name and address of owner, contractor, and architect. The contract date is the date of your prime contract with the owner — not the project start date, not the date you signed the subcontracts. Check your contract if you're unsure.</p>

      <h3>Line 1 — Original Contract Sum</h3>
      <p>The original contract amount before any change orders. This never changes, even after change orders are approved. If your original contract was $4,500,000, Line 1 is $4,500,000 on every pay application from first to last.</p>

      <h3>Line 2 — Net Change by Change Orders</h3>
      <p>The net total of all approved change orders to date. This is the sum of all positive change orders (scope additions) minus any deductive change orders (scope reductions). Only include change orders that have been fully executed — signed by both the contractor and the owner (and sometimes the architect). Pending or disputed change orders don't belong in Line 2 until they're approved.</p>

      <h3>Line 3 — Contract Sum to Date</h3>
      <p>Line 1 plus Line 2. This is your current contract sum — the total amount you're entitled to bill over the life of the project. Your G703 Column C totals must equal Line 3. If they don't, something is wrong: either a change order was added to the G702 without updating the SOV, or the SOV lines don't add up to the contract sum.</p>

      <h3>Line 4 — Total Completed and Stored to Date</h3>
      <p>Pull the grand total from the bottom of Column G on your G703. This is the total value billed through the current application across all line items. Some contractors manually re-enter this number; most PM software pulls it automatically from the G703.</p>

      <h3>Lines 5a and 5b — Retainage</h3>
      <p>5a shows the retainage withheld on work completed (Columns D + E of G703). 5b shows retainage withheld on stored materials (Column F of G703). Most contracts apply retainage to completed work but not to stored materials — confirm with your contract. The total of 5a and 5b is your total retainage held to date.</p>

      <h3>Line 6 — Total Earned Less Retainage</h3>
      <p>Line 4 minus the sum of Lines 5a and 5b. This is the net amount earned after the owner applies the retainage withholding.</p>

      <h3>Line 7 — Less Previous Certificates for Payment</h3>
      <p>The total amount paid on all previous pay applications — the sum of Line 6 from all prior months. Your contract administrator should have this number. If it doesn't match your records, reconcile before submitting the current application.</p>

      <h3>Line 8 — Current Payment Due</h3>
      <p>Line 6 minus Line 7. This is what you're requesting in the current pay application. It should equal the work you've done this period minus the retainage on that work. If it's negative — which happens when stored materials are depleted or retainage percentages change — there's an error somewhere in the chain.</p>

      <h3>Line 9 — Balance to Finish, Including Retainage</h3>
      <p>Line 3 minus Line 6. The total remaining value of the contract, including all retainage that's been held but not released. This line should track downward as the project progresses and reach zero (or a small number representing holdback for incomplete items) at final completion.</p>

      <h2>Common mistakes that delay payment</h2>

      <h3>Retainage rate mismatch</h3>
      <p>If your contract reduces retainage from 10% to 5% at 50% completion but you continue applying 10% through the back half of the project, you're under-billing yourself by 5% of the remaining work. The inverse — accidentally applying 5% from the start — will get caught by the architect immediately and require a corrected application. Pull out your contract before completing Lines 5a and 5b on every application and confirm the rate that applies.</p>

      <h3>Billing for unapproved change orders</h3>
      <p>Adding change order work to the G703 before the change order is signed and returned is a fast way to get your pay app rejected. Owners and architects catch this immediately — Line 3 won't match the approved contract sum if you've added unapproved work to the SOV. Bill only for work that's covered by an executed change order or a written change order directive authorizing you to proceed.</p>

      <h3>Missing stored materials documentation</h3>
      <p>Claiming Column F without backup documentation — invoices, delivery receipts, or a stored materials schedule — gives the architect justification to reduce or reject that portion of your application. Have the documentation ready before submitting, not after the architect asks for it.</p>

      <h3>Math errors in Column G</h3>
      <p>Column G is Column D + Column E + Column F. On a G703 with 30 line items, manually entered numbers compound errors fast. An error in one month's Column E flows into next month's Column D, which carries through every subsequent application. If you're maintaining G703 in Excel, protect the formula cells. If you're using PM software, verify that the software is calculating Column G correctly and not allowing manual overrides that break the formula chain.</p>

      <h3>Submitting late in the pay period</h3>
      <p>Most contracts specify a pay application submission date — typically the 25th or the last day of the month — with payment due 30 days after the architect certifies the application. Missing your submission date by even a day can push your payment into the following cycle. Know your contract's billing dates and build the pay app preparation into your monthly schedule, not as a deadline-day scramble.</p>

      <h2>Stored materials: maximizing your billing without overstepping</h2>

      <p>Column F stored materials billing is one of the most underused tools for construction cash flow. On a project with significant material procurement — structural steel, glazing systems, mechanical equipment, specialty materials with long lead times — the ability to bill for materials the moment they're delivered rather than when they're installed can meaningfully improve your monthly billing amounts.</p>

      <p>On a project with $500,000 of rooftop mechanical equipment delivered in Month 4 but not installed until Month 6, billing that equipment in Column F in Month 4 provides two months of interest-free financing from the owner — money in your account that you'd otherwise be waiting for. At prime rate financing on that $500,000, that's real money.</p>

      <p>The requirements to bill stored materials correctly: the materials must be clearly identified, stored safely, protected from damage, and covered by the property insurance required under the contract. The supplier invoice must show the material was delivered and that you've been billed for it (i.e., you have a payable obligation for these materials). Off-site storage is allowed under some contracts but requires additional steps: a stored materials agreement, potentially a UCC filing to protect the owner's interest, and coordination with the architect on the approved storage location.</p>

      <h2>The application timeline: from submission to payment</h2>

      <p>Under AIA A201, the payment timeline works as follows: the contractor submits the pay application, the architect has 7 days to review and issue a Certificate for Payment (or return the application with exceptions), and the owner has 7 days after that to pay. Total: 14 days from submission to payment, in theory.</p>

      <p>In practice, the timeline usually runs longer. Architects often take 10–14 days to review and certify. Owners take longer than 7 days to process payment after receipt. The effective payment cycle on most commercial projects is 30–45 days from submission date to funds received. On public projects, payment timelines are governed by state prompt payment laws, which vary significantly — some require payment within 30 days of certification, others allow 45–60 days.</p>

      <p>Understanding the actual payment timeline on your project — not the AIA form's ideal timeline — lets you plan cash flow realistically. Talk to your owner and architect at project kickoff: when will they commit to certifying? When will payment be issued after certification? Build that cycle into your subcontractor payment schedule, which is typically 7–10 days after you receive payment from the owner.</p>

      <h2>Final pay application and retainage release</h2>

      <p>Your final pay application is the most important billing package you submit. It includes: the final G702/G703 showing 100% completion on all line items, a final change order summary reconciling the contract sum, all conditional and unconditional lien waivers from every subcontractor and material supplier on the project, the punch list completion confirmation, your contractor's final affidavit (confirming all bills are paid or will be paid from the final payment), and any other closeout documentation required by your contract.</p>

      <p>Retainage release typically happens in two stages. Partial retainage (often 50% of the total held) releases at substantial completion. Final retainage releases after the final pay application is approved, all punch list items are complete, and all required documentation is received. Some contracts require a separate retainage invoice — a final application that covers only the retainage balance — rather than including retainage in the last regular G702. Check your contract for the specific mechanism.</p>

      <p>The fastest way to delay final payment is to have incomplete closeout documentation. An unconditional lien waiver that's missing from a tier-2 sub's material supplier, an O&M manual that wasn't submitted, a warranty certificate that doesn't cover the right warranty period — any of these can hold up the final payment while the architect waits for a corrected document. Assign closeout documentation responsibility early, track it on a dedicated log, and start collecting closeout documents before substantial completion, not after.</p>

      <h2>Digital G702/G703 — what to use</h2>

      <p>The AIA sells official G702 and G703 PDFs through their AIA Contract Documents portal. These are the legally appropriate forms if your contract references AIA documents. Do not use photocopied versions of old AIA forms — the forms have been updated over the years, and submitting an outdated form version can create issues if there's ever a dispute about what form was contractually required.</p>

      <p>Most GC PM software — and the free AIA G702/G703 generator we built at MASON — handles the G703 math automatically, carries forward Column D from the previous application, calculates Column G and percentage complete, and populates the G702 summary lines from the G703 totals. Using software for this eliminates the manual math errors that cause delayed pay applications. Once your SOV is set up correctly, the monthly process becomes: enter Column E for each line item, verify Column F, review the G702 summary, attach backup documentation, and submit.</p>

    </div>

    {/* Tool CTA */}
    <div style={{ margin: "48px 0", padding: "28px 32px", background: "rgba(232,148,46,.07)", border: "1px solid rgba(232,148,46,.25)", borderRadius: 12 }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 10 }}>Free tool</p>
      <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Generate your G702/G703 pay application in minutes.</h3>
      <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>Enter your Schedule of Values in the G703, and the G702 summary is calculated automatically. Copy to clipboard and paste into your pay app package. No signup required.</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a href="/tools/aia-g702-generator" className="btn btn-primary">Use the free generator</a>
        <a href="/contact" className="btn btn-ghost">See MASON's automated billing</a>
      </div>
    </div>

    <div style={{ marginBottom: 64 }}>
      <p style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--text-muted)", marginBottom: 16 }}>Related</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {[
          { label: "Retainage Calculator", href: "/tools/retainage-calculator" },
          { label: "How to Write a Construction Change Order", href: "/blog/how-to-write-construction-change-order" },
          { label: "Construction Project Closeout Checklist", href: "/blog/construction-project-closeout-checklist" },
        ].map((l, i) => (
          <a key={i} href={l.href} style={{ fontSize: 13, color: "var(--accent)", textDecoration: "none", padding: "6px 14px", border: "1px solid rgba(232,148,46,.3)", borderRadius: 20, transition: "border-color .15s" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(232,148,46,.3)"}>
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </article>
);

const BlogAIAG702G703 = () => {
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
        eyebrow="Billing · AIA"
        title={<>How to Fill Out<br /><span className="inner-hero__accent">AIA G702 and G703</span></>}
        lead="A step-by-step walkthrough of every column, every line, and every field on the G703 Schedule of Values and G702 Application for Payment — including the mistakes that delay payment."
        meta={<><span>14 min read</span><span style={{margin:"0 8px",opacity:.4}}>·</span><span>June 2026</span></>}
      />

      {/* Blog hero image */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 48px" }}>
        <img
          src="/images/blog/aia-g702-g703.svg"
          alt="AIA G702 G703 Schedule of Values billing grid with orange highlighted totals"
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

export default BlogAIAG702G703;
