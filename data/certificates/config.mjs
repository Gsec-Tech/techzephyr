/* =========================================================
   CERTIFICATE CONFIG
   ---------------------------------------------------------
   • COMPETITIONS maps the short names used in the sheet's
     "Competition" column to the full name printed on the
     certificate. Add a line here if the sheet uses a new label.
   • SITE_URL: the public website address encoded in every QR
     code, e.g. "https://techzephyr.iitbbs.ac.in".
     Leave "" to use the address the certificate is downloaded
     from (correct once the site is live on its real domain).
   After editing sheet1.csv or this file run:  npm run certs
========================================================= */

export const SITE_URL = "techzephyr.org";

export const EVENT_NAME = "TechZephyr 4.0";

export const COMPETITIONS = {
    "agentic ai": { code: "AAI", slug: "agentic-ai-hackathon", title: "Agentic AI Hackathon" },
    "ml": { code: "MLH", slug: "machine-learning-hackathon", title: "Machine Learning Hackathon" },
    "web": { code: "WEB", slug: "web-hackathon", title: "Web Hackathon" },
    "case comp": { code: "CSC", slug: "case-study-competition", title: "Case Study Competition" },
    "b-plan": { code: "BPC", slug: "b-plan-competition", title: "Business Plan Competition" },
    "cadathon": { code: "CAD", slug: "cadathon", title: "CADathon" },
};

/* Labels that mean "no certificate" */
export const SKIP_LABELS = ["not found", ""];

/* Changing this changes every certificate ID — set once, never edit */
export const ID_SALT = "techzephyr-4.0-iitbbs";
