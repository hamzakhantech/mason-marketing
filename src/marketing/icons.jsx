import React from "react";
// All 24?24 viewBox, currentColor stroke.

const Icon = ({ children, size = 22, stroke = 1.6, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
  >
    {children}
  </svg>
);

// Module icons -- keep them feeling "drafted" / engineering-grade
const IconDashboard = (p) => (<Icon {...p}><path d="M4 4h7v9H4z"/><path d="M13 4h7v5h-7z"/><path d="M13 11h7v9h-7z"/><path d="M4 15h7v5H4z"/></Icon>);
const IconProjects = (p) => (<Icon {...p}><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 12l9 4 9-4"/><path d="M3 17l9 4 9-4"/></Icon>);
const IconSchedule = (p) => (<Icon {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 3v4M16 3v4"/><path d="M7 14h4M13 17h6"/></Icon>);
const IconBIM = (p) => (<Icon {...p}><path d="M12 3l9 5v8l-9 5-9-5V8z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/><path d="M7.5 5.5l9 5"/></Icon>);
const IconIssues = (p) => (<Icon {...p}><path d="M12 3l10 18H2z"/><path d="M12 10v5"/><circle cx="12" cy="18" r=".6" fill="currentColor"/></Icon>);
const IconRFI = (p) => (<Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 4 2c-1 .7-1.5 1.3-1.5 2.5"/><circle cx="12" cy="17.5" r=".6" fill="currentColor"/></Icon>);
const IconSubmittals = (p) => (<Icon {...p}><path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h7M9 17h5"/></Icon>);
const IconDocuments = (p) => (<Icon {...p}><path d="M5 4h10l4 4v12H5z"/><path d="M14 4v5h5"/></Icon>);
const IconLogs = (p) => (<Icon {...p}><path d="M5 4h11l3 3v13H5z"/><path d="M9 9h7M9 13h7M9 17h4"/></Icon>);
const IconConcierge = (p) => (<Icon {...p}><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="9"/><path d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21"/></Icon>);
const IconCost = (p) => (<Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M14.5 9c-.5-1-1.5-1.5-2.7-1.5-1.5 0-2.6.8-2.6 2 0 1.3 1.1 1.7 2.7 2.1 1.7.4 2.9.9 2.9 2.3 0 1.3-1.2 2.1-2.7 2.1-1.4 0-2.5-.6-3-1.6"/><path d="M12 6v2M12 16.5V18.5"/></Icon>);
const IconReports = (p) => (<Icon {...p}><path d="M4 20V8M9 20V12M14 20V5M19 20V14"/><path d="M3 20h18"/></Icon>);
const IconTeam = (p) => (<Icon {...p}><circle cx="9" cy="9" r="3.2"/><circle cx="17" cy="10" r="2.5"/><path d="M3 19c.8-3 3.2-4.5 6-4.5s5.2 1.5 6 4.5"/><path d="M15 14.5c2 .2 3.7 1.4 4.5 3.5"/></Icon>);
const IconBell = (p) => (<Icon {...p}><path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2H4.5z"/><path d="M10 20.5a2.2 2.2 0 0 0 4 0"/></Icon>);
const IconMobile = (p) => (<Icon {...p}><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></Icon>);
const IconSearch = (p) => (<Icon {...p}><circle cx="11" cy="11" r="6"/><path d="M16 16l4 4"/></Icon>);
const IconHelp = (p) => (<Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 4 2c-1 .7-1.5 1.3-1.5 2.5"/><circle cx="12" cy="17.5" r=".6" fill="currentColor"/></Icon>);
const IconMessages = (p) => (<Icon {...p}><path d="M4 5h16v11H8l-4 4z"/><path d="M8 10h8M8 13h5"/></Icon>);
const IconMeetings = (p) => (<Icon {...p}><rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/></Icon>);
const IconQuality = (p) => (<Icon {...p}><path d="M5 12l4 4 10-10"/><path d="M3 19h18"/></Icon>);
const IconSafety = (p) => (<Icon {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></Icon>);
const IconAR = (p) => (<Icon {...p}><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M21 7V5a2 2 0 0 0-2-2h-2"/><path d="M3 17v2a2 2 0 0 0 2 2h2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M12 8l5 3v4l-5 3-5-3v-4z"/></Icon>);
const IconArrowRight = (p) => (<Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>);
const IconCheck = (p) => (<Icon {...p}><path d="M5 12l4 4 10-10"/></Icon>);
const IconShield = (p) => (<Icon {...p}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/></Icon>);
const IconLock = (p) => (<Icon {...p}><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 1 1 8 0v3"/></Icon>);
const IconKey = (p) => (<Icon {...p}><circle cx="8" cy="14" r="4"/><path d="M11 12l9-9M16 5l3 3M14 7l3 3"/></Icon>);
const IconAudit = (p) => (<Icon {...p}><path d="M5 4h11l3 3v13H5z"/><path d="M9 11l2 2 4-4"/><path d="M9 16h6"/></Icon>);
const IconSun = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5" />
  </Icon>
);
const IconMoon = (p) => (
  <Icon {...p}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </Icon>
);


export {
  Icon, IconDashboard, IconProjects, IconSchedule, IconBIM, IconIssues, IconRFI,
  IconSubmittals, IconDocuments, IconLogs, IconConcierge, IconCost, IconReports,
  IconTeam, IconBell, IconMobile, IconSearch, IconHelp, IconMessages, IconMeetings,
  IconQuality, IconSafety, IconAR, IconArrowRight, IconCheck, IconShield, IconLock,
  IconKey, IconAudit, IconSun, IconMoon,
};
