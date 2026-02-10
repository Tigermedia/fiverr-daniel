# CLAUDE.md - CompanyCam Local SEO Automation (Daniel T)

## Project Context
This is a Fiverr Pro milestone-based project for client Daniel T. We are building a Local SEO automation system that connects CompanyCam job-site photos to his WordPress website and Google Business Profile via Make.com and Metricool.

## Client Info
- **Client:** Daniel T (Fiverr)
- **Business:** Air Titan AC Repair - airtitanacrepair.com
- **Industry:** HVAC / AC Repair (Service Area Business)
- **Platform:** Fiverr milestone offer
- **Budget:** $2,000 (fixed price, 4 milestones)
- **Timeline:** 9 days, no hard deadline

## Tech Stack
- **Source:** CompanyCam (Elite Plan) - GPS-tagged job-site photos, webhooks, HTML embed
- **Middleware:** Make.com (Pro Plan) - automation scenarios
- **Social/GBP:** Metricool (Advanced Plan) - draft posts to Google Business Profile
- **Website:** WordPress + Elementor on airtitanacrepair.com
- **Image Processing:** CloudConvert (via Make.com module)
- **Schema:** LocalBusiness JSON-LD

## Milestones & Pricing
1. **Setup & Account Configuration** - 2 days - $500
2. **Make.com Automation Scenario** - 3 days - $700
3. **WordPress Page & Schema Setup** - 2 days - $500
4. **Testing, Documentation & Handoff** - 2 days - $300

## Key Technical Requirements
- CompanyCam "New Showcase Published" webhook trigger
- Extract: project title, description, GPS coordinates, showcase URL, cover photo URL
- Image resizing under 5MB with GPS metadata preservation
- Automated Metricool draft post creation for GBP
- CompanyCam interactive map embed on /service-areas/ page
- LocalBusiness JSON-LD schema in footer with sameAs to GBP
- End-to-end processing within 60 seconds
- Error handling and logging in Make.com scenario

## Volume & Operations
- ~20 Showcases/month, 3-5 photos each
- ~300 Make.com operations/month (well within Pro plan's 10,000)
- Interactive map uses zero Make.com operations (direct HTML embed)

## Important Notes
- Client has NOT purchased tools yet - will purchase after project starts
- Client used ChatGPT extensively to research and write scope - verify all technical claims
- Verify Metricool Make.com module supports draft post creation before starting
- GPS metadata preservation during image compression is critical for local SEO
- Client prefers written communication
- 7 days post-delivery support included

## Getting Started Form
- **Live Form:** https://docs.tigermedia.co.il/forms/companycam-daniel/
- **Purpose:** Collect all setup information before Milestone 1 begins
- **Sections:** Contact Info, Account Setup, WordPress Access, Google Business, Project Preferences
- **Integration:** n8n webhook → Notion DB → Telegram notifications
- **Status:** Deployed and tested ✅

## Formatting Rules
- Never use em dashes (--), only standard hyphens (-)
- Client communications under 2,500 characters
- Offer descriptions under 1,500 characters
- Milestone descriptions under 500 characters
