# CompanyCam Local SEO Automation - Air Titan AC Repair

## Overview
Automated local SEO system that flows job-site photos from CompanyCam to Google Business Profile and an interactive website map, expanding local ranking radius for a service-area HVAC business.

## Client
**Daniel T** - Air Titan AC Repair (airtitanacrepair.com)

## Project Goal
Automate the flow of GPS-tagged job-site photos from CompanyCam to:
1. Google Business Profile (via Metricool draft posts)
2. Interactive map on the WordPress Service Areas page

This creates a "Proof of Work" system that signals to Google where the business actively operates, expanding the local ranking radius on Google Maps.

## Architecture

```
CompanyCam (Elite)
    |
    | Webhook: "New Showcase Published"
    v
Make.com (Pro)
    |
    |- Extract: title, description, GPS, URLs, cover photo
    |- Resize image (CloudConvert) with GPS metadata preserved
    |
    v
Metricool (Advanced)
    |
    |- Create draft GBP post
    v
Google Business Profile
```

**Separately (zero Make.com operations):**
```
CompanyCam Portfolio HTML Embed --> WordPress /service-areas/ page (interactive map)
```

## Tech Stack
| Tool | Plan | Purpose |
|------|------|---------|
| CompanyCam | Elite | Source - GPS photos, webhooks, map embed |
| Make.com | Pro | Middleware - automation scenarios |
| Metricool | Advanced | Distribution - GBP draft posts |
| WordPress + Elementor | - | Website - Service Areas page |
| CloudConvert | Via Make.com | Image resizing with metadata preservation |

## Milestones
| # | Milestone | Days | Cost |
|---|-----------|------|------|
| 1 | Setup & Account Configuration | 2 | $500 |
| 2 | Make.com Automation Scenario | 3 | $700 |
| 3 | WordPress Page & Schema Setup | 2 | $500 |
| 4 | Testing, Documentation & Handoff | 2 | $300 |
| - | **Total** | **9** | **$2,000** |

## Deliverables
- Active Make.com scenario (CompanyCam -> Metricool)
- Live interactive map on /service-areas/ page
- LocalBusiness JSON-LD schema in site footer
- Showcase-to-draft-post processing within 60 seconds
- Documentation and walkthrough video
- 7 days post-delivery support

## Volume
- ~20 Showcases/month
- 3-5 photos per Showcase
- ~300 Make.com operations/month
