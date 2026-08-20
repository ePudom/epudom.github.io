// ============================================================
//  EDIT YOUR PORTFOLIO CONTENT HERE
//  All text, numbers, projects, skills, and links live in this file.
// ============================================================

export const profile = {
  name: "Your Name",
  role: "Data Analyst",
  tagline: "Turning Data Into Actionable Insights",
  intro:
    "I use data analysis, visualization, and business intelligence to uncover insights and support better decision-making. I help teams ask the right questions, clean and structure their data, and turn raw numbers into stories that drive action.",
  location: "Available remotely · Worldwide",
  email: "you@example.com",
  resumeUrl: "#", // replace with a link to your PDF resume
  socials: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    email: "mailto:you@example.com",
  },
  profileImage: "https://media.base44.com/images/public/6a7eed06a9d4019d6fb60f63/3d3214849_generated_image.png",
};

// Hero statistics — animated counters. Edit the numbers freely.
export const stats = [
  { label: "Projects Completed", value: 12, suffix: "+" },
  { label: "Tools & Technologies", value: 15, suffix: "+" },
  { label: "Years Learning", value: 3, suffix: "+" },
  { label: "Datasets Analyzed", value: 40, suffix: "+" },
];

// About section
export const about = {
  paragraphs: [
    "I'm a data analyst who believes every dataset has a story waiting to be uncovered. My journey into analytics started with a simple curiosity — wanting to understand why numbers behave the way they do and how they can guide real decisions.",
    "What motivates me is the moment a messy spreadsheet transforms into a clear insight that changes how a team thinks. I enjoy solving problems where the answer isn't obvious — where you have to dig, question assumptions, and let the data lead.",
    "My approach is grounded in clarity: understand the business question first, then clean relentlessly, explore honestly, and communicate so that anyone — not just analysts — can act on what the data says.",
  ],
  interests: [
    "Exploratory data analysis",
    "Customer & revenue analytics",
    "Data storytelling for non-technical audiences",
    "Building dashboards that drive decisions",
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
    year: "2021",
    title: "First Spark",
    description:
      "Discovered a fascination with spreadsheets and patterns while working on a business project — the first hint that data was where I wanted to be.",
    icon: "Sparkles",
  },
  {
    year: "2022",
    title: "Foundations in Data",
    description:
      "Began formal study of statistics, Excel, and SQL. Built my first dashboards and realized how powerful clean data can be.",
    icon: "BookOpen",
  },
  {
    year: "2023",
    title: "Python & Advanced Analytics",
    description:
      "Dived into Python, Pandas, and visualization libraries. Completed analytics certifications and started tackling real-world datasets.",
    icon: "Code2",
  },
  {
    year: "2024",
    title: "First Analytics Projects",
    description:
      "Delivered end-to-end analysis projects — from data cleaning to dashboards — covering sales, customer behavior, and operations.",
    icon: "LineChart",
  },
  {
    year: "Now",
    title: "Current Goal",
    description:
      "Continuing to sharpen my skills in BI tools and statistical analysis, and seeking opportunities to turn data into decisions at scale.",
    icon: "Target",
  },
];

// Skills — only list tools you actually use
export const skillCategories = [
  {
    name: "Data Analysis",
    icon: "Table",
    skills: ["Excel", "SQL", "Python", "Pandas", "NumPy"],
  },
  {
    name: "Data Visualization",
    icon: "BarChart3",
    skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
  },
  {
    name: "Databases",
    icon: "Database",
    skills: ["MySQL", "PostgreSQL", "SQL Server"],
  },
  {
    name: "Other Skills",
    icon: "Brain",
    skills: [
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Statistical Analysis",
      "Dashboard Development",
      "Data Storytelling",
      "Business Intelligence",
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
    date: "2023",
    url: "#",
  },
  {
    name: "Microsoft Power BI Data Analyst (PL-300)",
    institution: "Microsoft",
    date: "2024",
    url: "#",
  },
  {
    name: "B.Sc. in [Your Field]",
    institution: "[Your University]",
    date: "2022",
    url: "#",
  },
];

// Projects — featured on homepage + full case studies
export const projects = [
  {
    id: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    category: "Power BI",
    categories: ["Power BI", "Excel"],
    shortDescription:
      "An interactive dashboard analyzing revenue trends, regional performance, and product category growth.",
    businessProblem:
      "Leadership lacked a single view of sales performance across regions and product lines, making it hard to spot where growth was coming from and where to invest.",
    objectives: [
      "Identify top and underperforming regions",
      "Measure year-over-year revenue growth by category",
      "Surface the customer segments driving the most value",
    ],
    dataset: {
      source: "Internal sales records (sample dataset)",
      rows: "≈ 48,000 transactions",
      columns:
        "Date, Region, Product Category, Segment, Sales, Quantity, Discount, Profit",
      period: "2019–2022",
      limitations:
        "Sample data used for portfolio demonstration; not linked to live systems.",
    },
    cleaning: [
      "Removed 312 duplicate transaction rows",
      "Imputed missing postal codes from city mappings",
      "Corrected data types (dates, numeric fields)",
      "Flagged and reviewed outlier discounts above 70%",
    ],
    analysis: [
      "Built DAX measures for YoY revenue, profit margin, and segment contribution",
      "Used SQL window functions to rank regions by quarterly growth",
      "Segmented customers by revenue and order frequency",
    ],
    tools: ["Power BI", "DAX", "SQL", "Excel"],
    thumbnail:
      "https://media.base44.com/images/public/6a7eed06a9d4019d6fb60f63/94ad09182_generated_2a05d3f8.png",
    keyInsights: [
      {
        metric: "+18%",
        label: "Year-over-year revenue growth in the West region",
      },
      {
        metric: "62%",
        label: "Of total profit came from the Corporate segment",
      },
      {
        metric: "Technology",
        label: "Highest-growth product category over the period",
      },
    ],
    recommendations: [
      "Reallocate marketing budget toward the West region and Technology category",
      "Build a retention program for high-value Corporate segment customers",
      "Review discount policy on low-margin categories",
    ],
    links: {
      github: "#",
      dashboard: "#",
      report: "#",
      dataset: "#",
    },
  },
  {
    id: "customer-segmentation-analysis",
    title: "Customer Segmentation Analysis",
    category: "Python",
    categories: ["Python"],
    shortDescription:
      "RFM-based segmentation of customers to identify high-value groups and churn risk.",
    businessProblem:
      "The marketing team treated all customers the same, leading to wasted spend and weak retention among the most valuable segments.",
    objectives: [
      "Segment customers by recency, frequency, and monetary value",
      "Identify churn-risk segments for targeted retention",
      "Quantify revenue contribution per segment",
    ],
    dataset: {
      source: "E-commerce transaction log (public sample)",
      rows: "≈ 25,000 orders",
      columns: "Customer ID, Invoice Date, Quantity, Unit Price, Country",
      period: "12 months",
      limitations:
        "Demographic data not available; segmentation is behavioral only.",
    },
    cleaning: [
      "Dropped cancelled orders and negative quantities",
      "Engineered RFM features per customer",
      "Standardized features before clustering",
    ],
    analysis: [
      "Computed RFM scores and applied K-Means clustering (k=4)",
      "Profiled each cluster by average order value and frequency",
      "Ranked segments by revenue contribution and churn risk",
    ],
    tools: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    thumbnail:
      "https://media.base44.com/images/public/6a7eed06a9d4019d6fb60f63/b869f0346_generated_37e27b3b.png",
    keyInsights: [
      { metric: "Top 20%", label: "Of customers generated 65% of revenue" },
      {
        metric: "4 segments",
        label: "Identified, including a high-value loyal cluster",
      },
      { metric: "23%", label: "Of customers showed churn-risk behavior" },
    ],
    recommendations: [
      "Launch a loyalty program for the high-value segment",
      "Target churn-risk customers with re-engagement offers",
      "Personalize campaigns by segment rather than blasting all customers",
    ],
    links: {
      github: "#",
      dashboard: "#",
      report: "#",
    },
  },
  {
    id: "sql-churn-analysis",
    title: "Customer Churn Analysis (SQL)",
    category: "SQL",
    categories: ["SQL"],
    shortDescription:
      "A SQL-driven investigation into churn drivers and at-risk customer cohorts.",
    businessProblem:
      "The business was losing customers without understanding why, and had no systematic way to flag at-risk accounts.",
    objectives: [
      "Calculate overall and cohort churn rates",
      "Identify features correlated with churn",
      "Build a reusable SQL view of at-risk customers",
    ],
    dataset: {
      source: "Telecom customer records (public sample)",
      rows: "≈ 7,000 customers",
      columns:
        "Customer ID, Tenure, Monthly Charges, Contract Type, Churn Flag",
      period: "Snapshot",
      limitations: "No time-series usage data available.",
    },
    cleaning: [
      "Standardized contract type labels",
      "Handled missing values in Total Charges",
      "Created tenure cohorts for grouping",
    ],
    analysis: [
      "Wrote CTEs to compute churn rate by contract and tenure cohort",
      "Used window functions to rank high-risk customers",
      "Built a view surfacing at-risk accounts for the operations team",
    ],
    tools: ["SQL", "PostgreSQL", "Excel"],
    thumbnail:
      "https://media.base44.com/images/public/6a7eed06a9d4019d6fb60f63/450de43b9_generated_a953fc92.png",
    keyInsights: [
      {
        metric: "Month-to-month",
        label: "Contracts had 3x the churn rate of annual plans",
      },
      {
        metric: "First 12 mo",
        label: "Highest churn risk occurred in the first year of tenure",
      },
      {
        metric: "1 view",
        label: "Reusable at-risk customer view delivered to ops",
      },
    ],
    recommendations: [
      "Incentivize annual contracts for new signups",
      "Focus retention efforts on first-year customers",
      "Automate weekly at-risk customer reports from the SQL view",
    ],
    links: {
      github: "#",
      report: "#",
    },
  },
];

export const projectFilters = [
  "All",
  "SQL",
  "Excel",
  "Power BI",
  "Tableau",
  "Python",
];
