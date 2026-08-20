// ============================================================
//  EDIT YOUR PORTFOLIO CONTENT HERE
//  All text, numbers, projects, skills, and links live in this file.
// ============================================================

import cyclisticUserType from "@/assets/projects/cyclistic-usertype-share.png";
import cyclisticWeekday from "@/assets/projects/cyclistic-rides-by-weekday.png";
import cyclisticBikeType from "@/assets/projects/cyclistic-bike-type.png";
import bellabeatActivityLevels from "@/assets/projects/bellabeat-activity-levels.png";
import bellabeatWeekday from "@/assets/projects/bellabeat-steps-per-weekday.png";
import bellabeatHourly from "@/assets/projects/bellabeat-hourly-intensity.png";
import bellabeatUsage from "@/assets/projects/bellabeat-device-usage.png";

export const profile = {
  name: "Bisola Ogunye",
  role: "Data Analyst",
  tagline: "Turning Data Into Actionable Insights",
  intro:
    "I'm a data-driven Application Support & Technical Analyst who turns operational and business data into decisions. I've queried and analyzed datasets of 1M+ records with SQL, built KPI dashboards that cut unplanned downtime by 20%, and completed the Google Data Analytics Professional Certificate — applying that foundation to end-to-end case studies in R, SQL, and Excel.",
  location: "Lagos, Nigeria · Open to remote work",
  email: "mo.ogunye@gmail.com",
  resumeUrl: "#", // replace with a link to your PDF resume (e.g. hosted on GitHub or Google Drive)
  socials: {
    linkedin: "https://www.linkedin.com/in/bisola-ogunye-81b706151",
    github: "https://github.com/",
    email: "mailto:mo.ogunye@gmail.com",
  },
  profileImage:
    "https://media.base44.com/images/public/6a7eed06a9d4019d6fb60f63/c37caff18_generated_2bf7489b.png",
};

// Hero statistics — animated counters. Edit the numbers freely.
export const stats = [
  { label: "Years in Application Support & Analytics", value: 4, suffix: "+" },
  { label: "Records Analyzed via SQL", value: 1, suffix: "M+" },
  { label: "Reduction in Unplanned Downtime", value: 20, suffix: "%" },
  { label: "End-to-End Case Studies", value: 2, suffix: "" },
];

// About section
export const about = {
  paragraphs: [
    "I lead application and technical support at Zanibal Cloud, where I spend my days deep in dashboards, logs, and datasets — using real-time metrics to keep systems reliable and translating what I find into reports leadership can act on.",
    "My path into analytics started on the support side: querying million-record datasets in SQL to explain why an incident happened, or where a process was breaking down. That habit of asking 'what does the data actually say' is what pulled me toward analytics more formally — the Google Data Analytics Professional Certificate, then Python and Excel-focused coursework.",
    "My approach is grounded in clarity: understand the business question first, then clean relentlessly, explore honestly, and communicate so that anyone — not just analysts — can act on what the data says.",
  ],
  interests: [
    "Exploratory data analysis",
    "KPI dashboards & operational monitoring",
    "Customer & usage behavior analytics",
    "Data storytelling for non-technical stakeholders",
  ],
  workflow: [
    "Ask",
    "Collect",
    "Clean",
    "Analyze",
    "Visualize",
    "Communicate",
    "Act",
  ],
};

// Journey timeline — add / edit milestones
export const journey = [
  {
    year: "2018",
    title: "First Spark",
    description:
      "Web Developer Intern at Hacklab Innovations — built responsive interfaces and supported database integration, my first real exposure to structured data handling.",
    icon: "Sparkles",
  },
  {
    year: "2021",
    title: "Into Data & Systems",
    description:
      "IT Assistant at the High Court of Justice, Osun. Improved data accessibility for court records by 20% through structured digital organisation, and developed SOPs that strengthened internal controls.",
    icon: "BookOpen",
  },
  {
    year: "2022",
    title: "SQL & Systems Monitoring",
    description:
      "Joined Zanibal Cloud as an Engineer Support Trainee, then Technical Support/Analyst — querying and analysing datasets of 1M+ records with SQL to generate operational and client performance reports.",
    icon: "Code2",
  },
  {
    year: "2023",
    title: "Formal Analytics Foundation",
    description:
      "Completed the Google Data Analytics Professional Certificate and Python for Everybody. Applied it in two end-to-end case studies — the Cyclistic bike-share and Bellabeat smart device analyses.",
    icon: "LineChart",
  },
  {
    year: "Now",
    title: "Head of Application & Technical Support",
    description:
      "Leading data-driven monitoring at Zanibal Cloud — built Grafana dashboards that cut unplanned downtime by 20% and increased client satisfaction scores by 15%, translating performance data into decisions for leadership.",
    icon: "Target",
  },
];

// Skills — only list tools you actually use
export const skillCategories = [
  {
    name: "Data Analysis",
    icon: "Table",
    skills: ["SQL", "Excel (Pivot Tables, XLOOKUP)", "R", "Python", "Google Sheets"],
  },
  {
    name: "Data Visualization & BI",
    icon: "BarChart3",
    skills: ["Tableau", "Grafana", "Excel Dashboards"],
  },
  {
    name: "Systems & Tools",
    icon: "Database",
    skills: ["Linux", "Docker", "REST APIs", "Graylog", "Command-Line Tools"],
  },
  {
    name: "Core Skills",
    icon: "Brain",
    skills: [
      "KPI Tracking",
      "Data Cleaning & Transformation",
      "Trend & Anomaly Detection",
      "Stakeholder Reporting",
      "SOP Development",
    ],
  },
];

// Analytical process
export const process = [
  {
    step: 1,
    title: "Understand the Problem",
    description:
      "Define the business question and what a useful answer looks like before touching any data.",
  },
  {
    step: 2,
    title: "Collect the Data",
    description:
      "Gather data from databases, files, and APIs — documenting sources and freshness.",
  },
  {
    step: 3,
    title: "Clean & Prepare",
    description:
      "Handle missing values, duplicates, types, and outliers so the analysis can be trusted.",
  },
  {
    step: 4,
    title: "Explore the Data",
    description:
      "Profile distributions and relationships to form hypotheses worth testing.",
  },
  {
    step: 5,
    title: "Analyze",
    description:
      "Apply statistical and quantitative methods to answer the original questions.",
  },
  {
    step: 6,
    title: "Visualize",
    description:
      "Choose chart types that reveal the insight — not decorate the page.",
  },
  {
    step: 7,
    title: "Communicate Insights",
    description:
      "Translate findings into a clear narrative for decision-makers.",
  },
  {
    step: 8,
    title: "Recommend Action",
    description: "Turn insights into concrete, prioritized recommendations.",
  },
];

// Certifications & education
export const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    institution: "Coursera / Google",
    date: "Sep 2023",
    url: "#", // replace with your Coursera credential link
  },
  {
    name: "Python for Everybody Specialization",
    institution: "Coursera / University of Michigan",
    date: "Sep 2023",
    url: "#",
  },
  {
    name: "Introduction to Data Analysis Using Excel",
    institution: "Rice University (Coursera)",
    date: "Feb 2023",
    url: "#",
  },
  {
    name: "B.Sc. (Hons.) Computer Science",
    institution: "University of Lagos",
    date: "2019",
    url: "#",
  },
];

// Projects — featured on homepage + full case studies
export const projects = [
  {
    id: "cyclistic-bike-share",
    title: "Cyclistic Bike-Share Conversion Analysis",
    category: "R",
    categories: ["R", "SQL", "Excel"],
    shortDescription:
      "Analyzed 12 months of Chicago bike-share trip data to uncover how casual riders and annual members differ — and what would convert casual riders into members.",
    businessProblem:
      "Cyclistic's finance team found annual memberships far more profitable than single-ride and day passes. Marketing needed to understand how casual riders and annual members actually use the service differently, in order to design a conversion strategy grounded in real behavior rather than assumptions.",
    objectives: [
      "Identify the key differences in usage between casual riders and annual members",
      "Determine peak days, bike-type preferences, and station patterns for each group",
      "Translate the behavioral differences into concrete conversion recommendations",
    ],
    dataset: {
      source: "Cyclistic historical trip data (Divvy public bike-share dataset)",
      rows: "Millions of individual trip records",
      columns:
        "ride_id, ride_type, membership (casual/member), start/end station, start/end time",
      period: "2022 – 2023 (12 months)",
      limitations:
        "No demographic data available; segmentation is based on ride behavior only.",
    },
    cleaning: [
      "Selected and renamed the columns relevant to the analysis for clarity",
      "Removed rows with missing values to ensure consistency",
      "Engineered 'trip_duration' and 'day_of_week' columns to support usage-pattern analysis",
      "Identified and removed outlier rides — including negative durations and trips lasting up to 23 days",
      "Checked for and removed duplicate entries after cleaning",
    ],
    analysis: [
      "Compared ride volume and duration between casual riders and members by day of week",
      "Analyzed bike-type preference (classic vs. docked) across both user groups",
      "Tracked quarterly ride volume trends across 2022–2023 to surface seasonal patterns",
      "Identified the top start/end stations for each user type",
    ],
    tools: ["R", "SQL", "Excel", "ggplot2"],
    thumbnail: cyclisticUserType,
    keyInsights: [
      {
        metric: "61.15%",
        label: "Of all rides were taken by annual members vs. 38.85% by casual riders",
      },
      {
        metric: "Thursday",
        label: "Peak ride day for members; casual rides peak on Saturdays",
      },
      {
        metric: "23 days",
        label: "Longest outlier trip duration found and removed during cleaning",
      },
    ],
    recommendations: [
      "Offer weekend membership discounts to convert casual weekend riders",
      "Ensure strong docked-bike availability at high-traffic casual stations like Streeter Dr & Grand Ave",
      "Run user-centric marketing: emphasize discovery and enjoyment for casual riders, dependability and convenience for members",
      "Introduce weather-specific promotions (e.g. winter discounts) to smooth seasonal ridership drops",
    ],
    links: {
      github: "https://www.kaggle.com/code/bisolaogunye/cyclistic-bike-sharing-analysis",
      report: "#", // add a link to CYCLISTIC_BIKE-SHARING_ANALYSIS.docx/PDF if you host it
    },
    gallery: [cyclisticWeekday, cyclisticBikeType],
  },
  {
    id: "bellabeat-smart-device",
    title: "Bellabeat Smart Device Usage Analysis",
    category: "R",
    categories: ["R", "Excel"],
    shortDescription:
      "Processed multi-table fitness tracker data to uncover engagement, activity, and sleep trends that could shape Bellabeat's marketing and product strategy.",
    businessProblem:
      "Bellabeat, a growing wellness-tech company, wanted to understand how consumers use smart devices more broadly, and how those trends could apply to its own customer base — to guide product and marketing decisions in a competitive smart-device market.",
    objectives: [
      "Identify trends in smart device usage — activity, sleep, and engagement",
      "Determine how those trends align with Bellabeat's target customers",
      "Recommend marketing and feature strategies based on the findings",
    ],
    dataset: {
      source: "FitBit Fitness Tracker Data (public third-party dataset)",
      rows: "Multiple linked tables — daily activity, sleep, and hourly logs",
      columns:
        "Id, ActivityDate, TotalSteps, Calories, TotalMinutesAsleep, and related activity/sleep metrics",
      period: "~1 month of tracked usage",
      limitations:
        "Small, self-selected sample with no demographic data; may not generalize to Bellabeat's full customer base.",
    },
    cleaning: [
      "Merged multiple FitBit tables (activity, sleep, intensity) on user ID and date",
      "Checked for and removed duplicate records",
      "Standardized date/time formats across tables for joining",
      "Reviewed for incomplete device-usage days before analysis",
    ],
    analysis: [
      "Classified users into activity levels (sedentary, light, moderate, very active) using the 10,000-steps-a-day benchmark",
      "Ran correlations between daily steps, calories burned, and minutes asleep to quantify each relationship",
      "Broke down steps, sleep, and calories by day of week to find weekday/weekend patterns",
      "Analyzed hourly logs to find peak-usage windows for intensity, calories, and steps",
      "Segmented users by number of days logged and minutes worn per day to measure device engagement",
    ],
    tools: ["R", "Excel", "ggplot2"],
    thumbnail: bellabeatActivityLevels,
    keyInsights: [
      {
        metric: "r = 0.82",
        label: "Strong positive correlation between daily steps and calories burned",
      },
      {
        metric: "Sat / Sun",
        label: "Steps peak on Saturday (9,871 avg) and dip on Sunday (7,298 avg) — which also has the most sleep",
      },
      {
        metric: "5–7pm",
        label: "Peak hours for activity intensity, calories burned, and steps",
      },
      {
        metric: "50%",
        label: "Of users are 'high use' (device logged on 25+ of 31 days); only 12.5% are moderate users",
      },
    ],
    recommendations: [
      "Schedule app notifications and promotions during the 5–7pm peak engagement window",
      "Introduce step challenges on Saturdays and wind-down/sleep content on Sundays, when steps drop but sleep still runs short of the recommended amount",
      "Since Moderately Active users are the single largest group (37.5%) but no group dominates, avoid a one-size-fits-all activity feature — segment nudges by activity level",
      "Grow the 12.5% 'moderate use' segment toward high use with light engagement nudges, since half of users are already high-frequency loggers",
      "Address the negative steps–sleep relationship (r = −0.42) with content that helps users balance activity and rest, not just push more steps",
    ],
    links: {
      github: "https://www.kaggle.com/code/bisolaogunye/bellabeat-smart-device-usage",
      report: "#", // add a link to BELLABEAT_SMART_DEVICE_USAGE_ANALYSIS.docx/PDF if you host it
    },
    gallery: [bellabeatWeekday, bellabeatHourly, bellabeatUsage],
  },
];

export const projectFilters = ["All", "R", "SQL", "Excel"];
