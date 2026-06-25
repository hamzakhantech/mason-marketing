import React from "react";
import { useSEO } from "../../hooks/useSEO.js";
import BlogRFIConstruction from "../../marketing/blog-rfi-construction.jsx";

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an RFI in construction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An RFI (Request for Information) in construction is a formal written communication from a contractor or subcontractor to the architect, engineer, or owner requesting clarification about the project documents. RFIs create a documented record of what information was needed, when it was requested, what response was given, and when the response was received — documentation that matters when schedule impacts or change orders are disputed."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to get an RFI response?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most construction contracts specify a 7–14 calendar day response time for standard RFIs, with shorter timelines (3–5 days) for RFIs that threaten work stoppages. In practice, well-written RFIs with specific questions and proposed solutions average around 4 days for response. Vague or complex RFIs often take 11+ days. The quality of the RFI affects response time as much as the contract's required timeline."
        }
      },
      {
        "@type": "Question",
        "name": "What should an RFI include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An effective construction RFI should include: a sequential RFI number, the specific location (grid lines, room number, drawing reference), a clear description of the information gap or conflict, reference documents (drawing numbers, spec sections, detail references), a marked-up sketch if applicable, a proposed solution for the architect to confirm or reject, and the date by which a response is needed to avoid schedule impact."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between an RFI and a submittal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An RFI is a question from the contractor to the design team — it requests clarification about what the designer wants. A submittal is documentation from the contractor showing the design team what the contractor plans to provide — shop drawings, product data, samples, and test reports. RFIs flow when the contractor needs information; submittals flow when the contractor needs approval of what they're planning to install."
        }
      }
    ]
  }
];

export default function RFIConstruction() {
  useSEO({
    title: "What Is an RFI in Construction? Complete Guide to Requests for Information | MASON",
    description:
      "What an RFI is, when to submit one, how to write one that gets a fast response, how to manage the RFI log, and the field practices that reduce RFI volume without hiding information gaps.",
    canonical: "https://masononsite.com/blog/what-is-rfi-construction",
    schema: SCHEMA,
  });
  return <BlogRFIConstruction />;
}
