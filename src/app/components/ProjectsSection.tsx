import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Modal } from "./Modal";
import { ProjectDetailView, type ProjectDetail } from "./ProjectDetailView";

interface ProjectsSectionProps {
  darkMode: boolean;
}

const projects = [
  {
    id: 1,
    title: "Urban Mobility Dashboard",
    description:
      "Interactive dashboard for analyzing urban transportation patterns and commuter behaviors using real-time data.",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1659841064804-5f507b1b488a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwVUklMjBtb2NrdXB8ZW58MXx8fHwxNzczNDMwMTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    detail: {
      title: "Urban Mobility Dashboard",
      subtitle: "A comprehensive dashboard for city planners to monitor and predict traffic congestion. My role was Lead UI/UX Designer.",
      heroImage: "https://images.unsplash.com/photo-1659841064804-5f507b1b488a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwVUklMjBtb2NrdXB8ZW58MXx8fHwxNzczNDMwMTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "UI/UX",
      background: "Urban congestion costs NYC over $11 billion annually in lost productivity. City planners relied on outdated static reports and fragmented datasets from multiple agencies. There was no unified, real-time view of traffic patterns. Decision-making was reactive rather than predictive, and key stakeholders — from traffic engineers to elected officials — struggled to get the information they needed in a timely, understandable format.",
      goal: "To design and build a unified, real-time dashboard that aggregates multi-source transportation data into predictive visualizations, enabling city planners to proactively manage congestion and make data-driven infrastructure investment decisions.",
      process: {
        description: "We followed a participatory design approach, embedding with the Department of Transportation for two weeks to understand existing workflows. Our design strategy addressed three critical user needs:",
        features: [
          { title: "Real-Time Heatmap", desc: "A live, color-coded map of traffic density across all major corridors, updated every 30 seconds from sensor and camera data feeds." },
          { title: "Predictive Modeling", desc: "ML-powered 4-hour traffic forecasts displayed as animated trend overlays, helping planners anticipate and prevent bottlenecks." },
          { title: "Control Center UI", desc: "Optimized for large displays in traffic management centers, with customizable panel layouts and one-click incident reporting." },
        ],
      },
      userFlow: [
        { step: "Step 1: Overview", desc: "Operators see a city-wide traffic health score and color-coded map showing current conditions across all corridors." },
        { step: "Step 2: Identify Hotspots", desc: "Automated alerts flag emerging congestion; operators click hotspots to see affected routes and estimated delay impact." },
        { step: "Step 3: Predictive Analysis", desc: "Toggle the 4-hour forecast overlay to see predicted congestion patterns and compare with historical baselines." },
        { step: "Step 4: Take Action", desc: "Operators adjust signal timing, deploy resources, or issue public advisories directly from the dashboard interface." },
        { step: "Step 5: Review & Report", desc: "Automated daily/weekly performance reports track KPIs like average travel time and incident response metrics." },
      ],
      infoHierarchy: [
        { level: "Level 1 — Situational Awareness", items: ["City-wide health score", "Live traffic map", "Active incident count", "Alert feed"] },
        { level: "Level 2 — Analysis & Prediction", items: ["Corridor detail panels", "Time-series trends", "Predictive overlays", "Historical comparison"] },
        { level: "Level 3 — Action & Reporting", items: ["Signal control interface", "Incident management", "Public advisory tools", "Automated reports"] },
      ],
      accomplishments: [
        "Unified data streams from 8 different city agencies into a single, coherent real-time view for the first time in the department's history.",
        "Predictive model achieved 87% accuracy for 2-hour congestion forecasts, enabling proactive traffic management.",
        "Reduced average incident response time by 23% through automated alerting and streamlined operator workflows.",
        "Dashboard was demoed to city council and approved for department-wide deployment with a $2.1M implementation budget.",
      ],
      processImage: "https://images.unsplash.com/photo-1759510295429-755f1053dbb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFmZmljJTIwY29uZ2VzdGlvbiUyMGNpdHklMjBwbGFubmluZ3xlbnwxfHx8fDE3NzM0MzI3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      processImageCaption: "Traffic flow analysis used to inform the dashboard's prioritization algorithm and visual density mapping.",
      takeaway: "Working directly with traffic engineers taught me that the best dashboards don't just display data — they encode expert knowledge into the visual design itself. Every color, animation, and layout decision should reduce cognitive load and accelerate decision-making under pressure.",
      tools: ["React", "D3.js", "Mapbox", "Figma", "Python", "WebSocket"],
    } as ProjectDetail,
  },
  {
    id: 2,
    title: "GeoViz Platform",
    description:
      "A geospatial visualization platform for mapping environmental data across NYC boroughs.",
    category: "GIS",
    image:
      "https://images.unsplash.com/photo-1588859959601-12d5ecb1b354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHSVMlMjBnZW9ncmFwaGljJTIwbWFwJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzczNDMwMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    detail: {
      title: "GeoViz Platform",
      subtitle: "Built a robust GIS platform that aggregates open environmental data for community advocacy. My role was GIS Developer & UI Designer.",
      heroImage: "https://images.unsplash.com/photo-1588859959601-12d5ecb1b354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHSVMlMjBnZW9ncmFwaGljJTIwbWFwJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzczNDMwMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "GIS",
      background: "Community organizations across NYC's environmental justice neighborhoods lacked the technical tools to visualize the disproportionate environmental burdens they face. While open data portals existed, the data was scattered, in incompatible formats, and required GIS expertise to interpret. This created an information asymmetry: polluting facilities had sophisticated monitoring tools, while the communities most affected had none.",
      goal: "To democratize environmental data analysis by building an accessible GIS platform that aggregates air quality and noise pollution data into compelling, data-driven geographical stories that community organizers can use for policy advocacy.",
      process: {
        description: "We co-designed the platform with three community organizations in the South Bronx and Greenpoint, ensuring every feature directly supported their advocacy workflows. Our approach focused on three design principles:",
        features: [
          { title: "Data Aggregation Engine", desc: "Automated ETL pipeline that ingests data from 12 NYC open data sources, normalizes units, and performs spatial joins with census tract boundaries." },
          { title: "Story Map Builder", desc: "A guided tool that helps non-technical users create narrated, scrolling map experiences that combine their qualitative observations with quantitative data." },
          { title: "Equity Index Calculator", desc: "A composite scoring system that overlays environmental burden data with demographic and health data to quantify environmental injustice." },
        ],
      },
      userFlow: [
        { step: "Step 1: Select Area", desc: "User draws a polygon or selects a neighborhood/census tract to define their area of interest." },
        { step: "Step 2: Layer Data", desc: "User toggles data layers — air quality, noise, facility permits, health outcomes — to build a multi-dimensional view." },
        { step: "Step 3: Analyze", desc: "Platform generates equity scores, trend charts, and comparison tables for the selected area." },
        { step: "Step 4: Build Story", desc: "User creates a narrated story map by adding text annotations, photos, and highlighting key data points." },
        { step: "Step 5: Share & Advocate", desc: "Finished story maps are published as shareable URLs, embeddable widgets, or downloadable PDFs for policy meetings." },
      ],
      infoHierarchy: [
        { level: "Level 1 — Exploration", items: ["Interactive base map", "Data layer toggles", "Area selection tools", "Search by address"] },
        { level: "Level 2 — Analysis", items: ["Equity index scores", "Temporal trends", "Cross-area comparison", "Demographic overlays"] },
        { level: "Level 3 — Storytelling", items: ["Narrative editor", "Annotation tools", "Export options", "Embed generator"] },
      ],
      accomplishments: [
        "Platform was used by South Bronx Unite in their successful campaign to block a new waste transfer station, providing key data evidence for the Environmental Impact Statement review.",
        "Integrated 12 disparate open data sources into a unified spatial database with automated daily updates.",
        "Trained 45 community organizers across 8 organizations to independently create data-driven advocacy materials.",
        "Story maps created on the platform were cited in 3 city council hearing testimonies on environmental justice legislation.",
      ],
      processImage: "https://images.unsplash.com/photo-1744968777351-074cfcaae034?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9zcGF0aWFsJTIwbWFwJTIwZW52aXJvbm1lbnRhbCUyMHBvbGx1dGlvbnxlbnwxfHx8fDE3NzM0MzI3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      processImageCaption: "Environmental pollution mapping showing spatial distribution patterns across borough boundaries.",
      takeaway: "This project showed me that technology can be a powerful equalizer when designed with community participation from day one. The most important design decision was not any visual or interaction choice — it was the decision to build with communities, not for them. Every feature that survived to launch was one that organizers explicitly asked for.",
      tools: ["QGIS", "Python", "Turf.js", "PostGIS", "Mapbox", "React"],
    } as ProjectDetail,
  },
  {
    id: 3,
    title: "Smart City Monitor",
    description:
      "Real-time monitoring application for smart city infrastructure including sensors and IoT devices.",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1760553120312-2821bf54e767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHBsYW5uaW5nJTIwc21hcnQlMjBjaXR5fGVufDF8fHx8MTc3MzMyMTU3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    detail: {
      title: "Smart City Monitor",
      subtitle: "An interface for municipal engineers to track the health of 10,000+ IoT nodes in real-time. My role was UI/UX Designer & Frontend Developer.",
      heroImage: "https://images.unsplash.com/photo-1651170505785-dd26b355a586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBJb1QlMjBzZW5zb3JzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzM0MzI3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "UI/UX",
      background: "A metropolitan city deployed over 10,000 IoT sensors for smart lighting, waste management, traffic monitoring, and environmental tracking. However, the monitoring tools were fragmented across vendor-specific dashboards, each with different UIs, alert systems, and data formats. Engineers had to check 6 different platforms daily, leading to missed alerts, delayed maintenance, and sensor downtime averaging 72 hours before detection.",
      goal: "To design a unified monitoring interface that consolidates all IoT infrastructure into a single, intuitive dashboard with automated health scoring, predictive maintenance alerts, and role-based views for different engineering teams.",
      process: {
        description: "We shadowed field engineers for two weeks to understand their actual workflows, pain points, and the critical information they needed at a glance. The design strategy focused on three core capabilities:",
        features: [
          { title: "Health Scoring System", desc: "An automated, color-coded health score for each sensor node based on battery level, signal strength, data freshness, and error rates — visible at a glance." },
          { title: "Predictive Maintenance", desc: "ML models that predict sensor failures 48-72 hours in advance based on degradation patterns, enabling proactive field dispatch." },
          { title: "Role-Based Views", desc: "Customizable layouts for different engineering roles — field technicians see dispatch queues, supervisors see fleet health, executives see KPI summaries." },
        ],
      },
      userFlow: [
        { step: "Step 1: Fleet Overview", desc: "Engineer sees a city-wide sensor health dashboard with aggregate scores by district and sensor type." },
        { step: "Step 2: Alert Triage", desc: "Automated alerts are prioritized by severity; engineer reviews and assigns alerts to field teams." },
        { step: "Step 3: Sensor Detail", desc: "Deep dive into individual sensor telemetry — battery history, uptime, data quality, and maintenance log." },
        { step: "Step 4: Dispatch", desc: "Engineer creates a maintenance work order and assigns it to a field technician with GPS-optimized routing." },
        { step: "Step 5: Analytics", desc: "Monthly performance analytics showing fleet reliability trends, mean-time-to-repair, and cost-per-sensor metrics." },
      ],
      infoHierarchy: [
        { level: "Level 1 — Fleet Overview", items: ["City map with sensor status", "Health score heatmap", "Alert feed", "System uptime KPIs"] },
        { level: "Level 2 — Sensor Management", items: ["Individual sensor telemetry", "Maintenance history", "Firmware status", "Connectivity diagnostics"] },
        { level: "Level 3 — Operations", items: ["Work order management", "Dispatch optimization", "Inventory tracking", "Performance reports"] },
      ],
      accomplishments: [
        "Reduced average sensor downtime from 72 hours to 8 hours through unified monitoring and automated alerting.",
        "Predictive maintenance model achieved 91% accuracy in 48-hour failure predictions, reducing emergency dispatches by 40%.",
        "Consolidated 6 vendor-specific dashboards into a single interface, saving engineers an estimated 2.5 hours daily.",
        "System monitors 10,000+ nodes with sub-second data refresh and handles 100K+ telemetry events per minute.",
      ],
      takeaway: "Designing for operational environments taught me that reliability and speed trump aesthetics. Every millisecond of loading time matters when engineers are triaging critical alerts. I learned to prioritize information density without sacrificing clarity — the best monitoring UIs are the ones where the most important information is always the most visible.",
      tools: ["React Native", "TypeScript", "WebSocket", "UI/UX Design", "Grafana", "InfluxDB"],
    } as ProjectDetail,
  },
  {
    id: 4,
    title: "Mobile Transit App",
    description:
      "A mobile-first transit application for NYC commuters with real-time scheduling and route optimization.",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzczMzU3Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    detail: {
      title: "Mobile Transit App",
      subtitle: "Redesigned the core routing and UI for a local transit app, optimized for one-handed rush-hour use. My role was Product Designer.",
      heroImage: "https://images.unsplash.com/photo-1771227241320-8fc5388259c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB0cmFuc2l0JTIwY29tbXV0ZXJ8ZW58MXx8fHwxNzczNDMyNzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "UI/UX",
      background: "NYC commuters rely heavily on transit apps during their daily commute, often in crowded subway cars where only one hand is free. Competitive analysis of 5 leading transit apps revealed that key actions (viewing next departure, switching routes) required 4-6 taps and two-handed operation. User surveys with 200 daily commuters showed that 68% abandoned app-based planning during rush hour due to interface complexity.",
      goal: "To redesign the transit app's core experience around one-handed usability and minimal interaction — ensuring that the most common commuter actions (check next train, view service alerts, plan alternate routes) can be completed in 1-2 taps during the constraints of a rush-hour commute.",
      process: {
        description: "We conducted extensive contextual inquiry on subway platforms and inside crowded trains, observing how commuters physically interact with their phones. Our design strategy was built around three principles of 'rush-hour UX':",
        features: [
          { title: "Thumb-Zone Optimization", desc: "All primary actions placed within the natural thumb reach zone. Critical info displayed in the lower 60% of the screen for comfortable one-handed access." },
          { title: "Glanceable Interface", desc: "Countdown timers, color-coded service status, and progressive disclosure ensure users get essential info in under 2 seconds without scrolling." },
          { title: "Offline-First Architecture", desc: "Complete schedule data cached locally with smart pre-loading, so route information is available even in subway tunnels without connectivity." },
        ],
      },
      userFlow: [
        { step: "Step 1: Instant Launch", desc: "App opens directly to the user's most frequent route with a countdown to next departure — no navigation needed." },
        { step: "Step 2: Quick Glance", desc: "Large countdown timer, service status indicator, and next 3 departures are visible without any interaction." },
        { step: "Step 3: Route Change", desc: "Swipe gesture switches between saved routes; shake to refresh for latest real-time data." },
        { step: "Step 4: Disruption Handling", desc: "If there's a service alert, the app proactively suggests the fastest alternate route with time comparison." },
        { step: "Step 5: Trip Complete", desc: "Arrival notification with walking directions to final destination, accessible with one tap." },
      ],
      infoHierarchy: [
        { level: "Level 1 — At a Glance", items: ["Next departure countdown", "Service status", "Saved routes carousel", "Active alerts"] },
        { level: "Level 2 — Route Planning", items: ["Multi-modal routing", "Time comparison", "Walking directions", "Fare estimation"] },
        { level: "Level 3 — Preferences", items: ["Accessibility options", "Notification settings", "Saved stations", "Offline data management"] },
      ],
      accomplishments: [
        "Reduced average task completion time from 12 seconds to 3 seconds for the 'check next train' action through glanceable design.",
        "One-handed usability score improved from 34% to 92% in controlled thumb-reach testing with 30 participants.",
        "Offline mode ensured 100% schedule availability in subway tunnels, eliminating the #1 user complaint from the previous version.",
        "App retention rate increased by 41% in the 3 months following the redesign launch.",
      ],
      takeaway: "This project crystallized an important insight: designing for constraints makes better products for everyone. By optimizing for the most challenging use context — one hand, crowded train, no connectivity — we created an app that was faster and more delightful for all users, all the time. The constraint wasn't a limitation; it was our North Star.",
      tools: ["Figma", "Protopie", "User Testing", "SwiftUI", "Contextual Inquiry"],
    } as ProjectDetail,
  },
  {
    id: 5,
    title: "Data Analytics Portal",
    description:
      "Comprehensive analytics portal for processing and visualizing large-scale urban datasets.",
    category: "GIS",
    image:
      "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzMzNDEyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    detail: {
      title: "Data Analytics Portal",
      subtitle: "A secure internal portal for city researchers to query terabytes of census and demographic data. My role was Full-Stack Developer & UI Designer.",
      heroImage: "https://images.unsplash.com/photo-1648134859177-525771773915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwcmVzZWFyY2glMjBwb3J0YWx8ZW58MXx8fHwxNzczNDMyNzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "GIS",
      background: "City researchers at multiple agencies needed to query and cross-reference terabytes of census, demographic, and infrastructure data to support policy analysis. The existing workflow involved downloading raw datasets, writing SQL queries manually, and using desktop GIS software — a process that took experienced analysts 2-3 days per report and was entirely inaccessible to non-technical policy staff.",
      goal: "To build a secure, web-based analytics portal that allows both technical researchers and non-technical policy staff to explore, query, and visualize large-scale urban datasets through an intuitive interface — reducing report generation time from days to hours.",
      process: {
        description: "We conducted needs assessments with 15 researchers and 8 policy analysts across 4 city agencies to understand their query patterns and visualization needs. The platform was designed around three core modules:",
        features: [
          { title: "Visual Query Builder", desc: "A drag-and-drop interface that translates complex spatial and demographic queries into optimized SQL, making database analysis accessible to non-technical users." },
          { title: "Spatial Query Engine", desc: "Custom PostGIS-powered spatial tools for buffer analysis, point-in-polygon queries, and census tract aggregation with sub-second response times." },
          { title: "Report Generator", desc: "Automated report templates that combine charts, maps, and narrative text, exportable as branded PDF documents for policy meetings." },
        ],
      },
      userFlow: [
        { step: "Step 1: Select Dataset", desc: "User browses a curated catalog of available datasets with metadata descriptions, update frequency, and sample previews." },
        { step: "Step 2: Build Query", desc: "User constructs queries through the visual builder — selecting geographic areas, demographics, time ranges, and metrics." },
        { step: "Step 3: Visualize Results", desc: "Results are instantly rendered as interactive maps, charts, and data tables with drill-down capability." },
        { step: "Step 4: Refine & Compare", desc: "User iteratively refines queries, bookmarks interesting views, and creates cross-dataset comparisons." },
        { step: "Step 5: Export & Share", desc: "User generates a formatted report with selected visualizations or shares a live dashboard link with colleagues." },
      ],
      infoHierarchy: [
        { level: "Level 1 — Data Catalog", items: ["Dataset browser", "Metadata viewer", "Sample preview", "Access permissions"] },
        { level: "Level 2 — Query & Analysis", items: ["Visual query builder", "Spatial analysis tools", "Cross-dataset joins", "Temporal analysis"] },
        { level: "Level 3 — Output & Collaboration", items: ["Report generator", "Dashboard sharing", "Data export", "Annotation & comments"] },
      ],
      accomplishments: [
        "Reduced average report generation time from 2.5 days to 4 hours — a 93% improvement in analyst productivity.",
        "Made complex spatial queries accessible to non-technical policy staff, increasing the active user base from 12 to 67 across agencies.",
        "Portal handles 4TB+ of indexed data with average query response times under 3 seconds through optimized PostGIS indexing.",
        "Automated report templates saved an estimated 500+ analyst-hours per quarter across participating agencies.",
      ],
      takeaway: "The biggest lesson from this project was that the hardest design problems are often about abstraction, not aesthetics. Making a complex SQL query feel like a simple drag-and-drop required deep understanding of both the database structure and the mental models of non-technical users. The most elegant code and the most elegant UI both achieve the same thing: they hide complexity without losing power.",
      tools: ["React", "PostgreSQL", "ArcGIS", "Node.js", "PostGIS", "D3.js"],
    } as ProjectDetail,
  },
  {
    id: 6,
    title: "UX Research Toolkit",
    description:
      "A collaborative UX research toolkit for conducting user studies, surveys, and usability testing.",
    category: "UI/UX",
    image:
      "https://images.unsplash.com/photo-1622117515670-fcb02499491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMHJlc2VhcmNoJTIwd2lyZWZyYW1lJTIwZGVzaWdufGVufDF8fHx8MTc3MzQzMDExOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    detail: {
      title: "UX Research Toolkit",
      subtitle: "A centralized hub for UX researchers to organize qualitative data and streamline report generation. My role was Lead Product Designer.",
      heroImage: "https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMHJlc2VhcmNoJTIwdXNhYmlsaXR5JTIwdGVzdGluZ3xlbnwxfHx8fDE3NzM0MzI3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "UI/UX",
      background: "UX research teams at growing companies face a common scaling challenge: as the volume of user interviews, usability tests, and survey data grows, insights become siloed within individual researchers' local files. Our interviews with 20 UX researchers across 8 companies revealed that 73% spent more time organizing and searching for past research than conducting new studies. Knowledge was being lost with every team member transition.",
      goal: "To design a collaborative research repository that makes qualitative data — interview recordings, transcripts, annotations, and insights — searchable, taggable, and reusable across the entire UX research organization, transforming scattered individual knowledge into collective institutional memory.",
      process: {
        description: "We followed a dogfooding approach, using our own product to research our own users. Every design decision was validated through the same research methods we were building tools for. The platform was built around three breakthrough features:",
        features: [
          { title: "AI Auto-Tagging", desc: "NLP-powered automatic tagging of interview transcripts that identifies themes, pain points, feature requests, and emotional sentiment with 89% accuracy." },
          { title: "Collaborative Annotation", desc: "Real-time collaborative video annotation where multiple researchers can timestamp, tag, and discuss specific moments in interview recordings." },
          { title: "Insight Synthesis Engine", desc: "A guided workflow that helps researchers connect individual observations across studies into validated insights with evidence trails." },
        ],
      },
      userFlow: [
        { step: "Step 1: Upload & Ingest", desc: "Researcher uploads interview recordings, transcripts, or survey data; AI auto-transcribes and generates initial tags." },
        { step: "Step 2: Annotate & Code", desc: "Researcher reviews transcripts with collaborative highlighting, adding thematic codes and linking to existing patterns." },
        { step: "Step 3: Synthesize", desc: "Researcher uses the synthesis board to cluster related annotations across studies and identify emerging themes." },
        { step: "Step 4: Document Insights", desc: "Validated insights are documented with evidence trails — linked clips, quotes, and quantitative support data." },
        { step: "Step 5: Share & Reuse", desc: "Insights are published to the searchable repository where designers, PMs, and stakeholders can discover and reference them." },
      ],
      infoHierarchy: [
        { level: "Level 1 — Research Library", items: ["Study catalog", "Recording archive", "Transcript search", "Tag taxonomy"] },
        { level: "Level 2 — Analysis Tools", items: ["Annotation workspace", "Thematic coding", "Synthesis board", "Pattern detection"] },
        { level: "Level 3 — Knowledge Sharing", items: ["Insight repository", "Report generator", "Team dashboards", "Stakeholder digest"] },
      ],
      accomplishments: [
        "Reduced time spent searching for past research from 4.2 hours/week to 25 minutes/week per researcher through AI-powered search and tagging.",
        "AI auto-tagging achieved 89% accuracy after fine-tuning on domain-specific UX research vocabulary, reducing manual coding time by 65%.",
        "Collaborative annotation increased cross-researcher insight sharing by 340%, breaking down knowledge silos across teams.",
        "The streamlined report generation module reduced deliverable creation time from 8 hours to 2 hours per study.",
      ],
      takeaway: "Building tools for fellow researchers gave me a unique perspective: I was simultaneously the designer and the user. This project taught me that the most impactful research tools are the ones that reduce the friction between having an observation and documenting it. Every second of delay between insight and documentation is knowledge lost. Speed of capture is everything.",
      tools: ["React", "Firebase", "Figma", "UX Research", "NLP", "WebRTC"],
    } as ProjectDetail,
  },
];

const categories = ["All", "GIS", "UI/UX"];

export function ProjectsSection({ darkMode }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-16 transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#503282" : "#ede4f7",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <h2
            className="font-['Jaro',sans-serif] text-7xl md:text-8xl m-0 transition-colors duration-500"
            style={{ color: darkMode ? "#fffa74" : "#503282" }}
          >
            Projects
          </h2>

          {/* Filter tabs */}
          <div className="flex gap-3 flex-wrap bg-white/5 p-2 rounded-full backdrop-blur-sm border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-['Jaro',sans-serif] px-8 py-2 rounded-full border-2 text-lg md:text-xl transition-all cursor-pointer relative overflow-hidden group"
                style={{
                  borderColor:
                    activeCategory === cat
                      ? "#fffa74"
                      : darkMode
                      ? "transparent"
                      : "transparent",
                  backgroundColor:
                    activeCategory === cat
                      ? "rgba(255, 250, 116, 0.2)"
                      : "transparent",
                  color:
                    activeCategory === cat
                      ? darkMode
                        ? "#fcf896"
                        : "#503282"
                      : darkMode
                      ? "#d1e6fa"
                      : "#7a5cb0",
                }}
              >
                {cat}
                {activeCategory !== cat && (
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="rounded-[32px] overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl flex flex-col cursor-pointer border border-white/10 backdrop-blur-sm"
                style={{
                  backgroundColor: darkMode ? "rgba(252, 248, 150, 0.95)" : "rgba(255, 255, 255, 0.9)",
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden group">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-110"
                    style={{ width: "100%", borderRadius: "32px 32px 0 0" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span
                    className="absolute top-4 right-4 font-['Jaro',sans-serif] text-sm px-5 py-1.5 rounded-full border shadow-lg backdrop-blur-md"
                    style={{
                      backgroundColor: "rgba(80, 50, 130, 0.9)",
                      borderColor: "#94c4f5",
                      color: "#94c4f5",
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3
                      className="font-['Jaro',sans-serif] text-3xl mb-3"
                      style={{ color: darkMode ? "#1a1a2e" : "#503282" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-base mb-6 opacity-75 font-medium leading-relaxed line-clamp-3"
                      style={{ color: darkMode ? "#1a1a2e" : "#333" }}
                    >
                      {project.description}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="font-['Jaro',sans-serif] text-xl hover:opacity-80 transition-opacity flex items-center gap-2 mt-auto"
                    style={{ color: darkMode ? "#503282" : "#503282" }}
                  >
                    View More 
                    <motion.span
                      whileHover={{ x: 5 }}
                    >{"\u2192"}</motion.span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Modal for View More - Full Detail Page */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        darkMode={darkMode}
      >
        {selectedProject && (
          <ProjectDetailView
            project={selectedProject.detail}
            darkMode={darkMode}
            onBack={() => setSelectedProject(null)}
          />
        )}
      </Modal>
    </section>
  );
}
