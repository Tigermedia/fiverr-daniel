# CLAUDE.md - CompanyCam Local SEO Automation (Daniel T) - REVISED SCOPE

## Project Context
This is a Fiverr Pro milestone-based project for client Daniel T. We are building a Local SEO "Proof of Work" automation system that flows GPS-tagged job-site photos from CompanyCam to Google Business Profile with intelligent neighborhood geo-matching and keyword optimization.

**⚠️ SCOPE REVISED:** Project significantly expanded after original acceptance.

## Client Info
- **Client:** Daniel T (Fiverr) - Primary contact
- **Technical Contact:** Ryan Landry <airtitanac@gmail.com> - Google Sheets owner
- **Business:** Air Titan AC Repair - airtitanacrepair.com
- **Industry:** HVAC / AC Repair (Service Area Business) 
- **Location:** Baton Rouge, Louisiana area
- **Platform:** Fiverr milestone offer
- **Budget:** $3,000 (REVISED from $2,200) - fixed price, 4 milestones
- **Timeline:** 20 days, no hard deadline

## Tech Stack (REVISED)
- **Source:** CompanyCam (Elite Plan) - GPS-tagged job-site photos, webhooks
- **Middleware:** Make.com (Pro Plan) - automation scenarios with Haversine Formula
- **Data:** Google Sheets - MasterNeighborhoods + Keyword Buckets (8×10 structure)
- **Social/GBP:** Metricool (Advanced Plan) - draft posts to Google Business Profile
- **Image Processing:** CloudConvert (via Make.com module) with GPS EXIF preservation
- **Schema:** LocalBusiness JSON-LD (code delivery only)

## Milestones & Pricing (REVISED)
1. **Setup & Account Configuration** - 5 days - $500
2. **Core Scenario - Webhook, Privacy Filter & Image Processing** - 5 days - $950
3. **Geo-Matching & Keyword Logic** - 5 days - $850
4. **Metricool Output, Schema & Testing** - 5 days - $700

## Key Technical Requirements (REVISED)

### Core Pipeline
```
CompanyCam Elite → Make.com Pro → Metricool Advanced → Google Business Profile
```

### NEW: Haversine Geo-Matching
- Implement Haversine Formula in Make.com Script module
- Compare GPS coords from CompanyCam against Google Sheet neighborhoods
- Match within configurable radius per neighborhood (default 1.5 miles)
- Default to "Greater Baton Rouge" for orphan jobs outside all radii

### NEW: Keyword Bucket Automation
- 8 keyword categories mapped to suffix numbers in Showcase titles
- Least-recently-used rotation strategy with usage tracking
- Privacy filter: exclude CompanyCam Description/Notes fields
- Caption format: "[Keyword] in [Neighborhood] by Air Titan! See our latest work: [URL]"

### Technical Pipeline
- CompanyCam "New Showcase Published" webhook trigger
- Parse suffix number from title (e.g., "Unit Fix - 3" → bucket 3)
- Privacy filter: exclude Description/Notes from CompanyCam
- Image optimization: JPEG, 1200px, 90% sharpness, preserve GPS EXIF
- Haversine geo-matching against neighborhood coordinates
- Keyword selection from mapped bucket using least-recently-used
- Metricool draft post creation (manual publish for quality control)
- Review Queue logging for client visibility

## Google Sheets Structure
### MasterNeighborhoods
- **Location:** https://docs.google.com/spreadsheets/d/1JZ2-A7RkbHpUCMq7Rfg17Yz73b_BgrikVuvE6j76Ekw/edit
- **Columns:** Neighborhood Name, Center Latitude, Center Longitude, Radius, GBP ID, City
- **Coverage:** 50+ neighborhoods across Baton Rouge, Prairieville, Denham Springs

### Keyword Buckets
- **Location:** https://docs.google.com/spreadsheets/d/1kOPM2n-f8_VltxDBOT6OQPZdPU--BtDHwE822B9QixI/edit
- **Structure:** 8 categories × 10 keywords = 80 total keywords
- **Categories:** AC Repair, Emergency Service, Installs/Replacements, Maintenance, Specialized/IAQ, Local High Tier, Commercial HVAC, Heater Repair

## Volume & Operations (UPDATED)
- ~20 Showcases/month, 3-5 photos each
- ~300-400 Make.com operations/month (increased due to geo-matching complexity)
- Interactive map on WordPress: zero Make.com operations (direct HTML embed)

## REMOVED from Original Scope
- ❌ **WordPress page setup** (client already built /service-areas/ page)
- ❌ **WordPress admin access** (only need schema code delivery)
- **Cost reduction:** -$300 from original scope

## ADDED to Revised Scope  
- ✅ **Haversine Formula geo-matching** (+$400)
- ✅ **Google Sheets integration** with neighborhood/keyword data (+$350)
- ✅ **Keyword bucket randomization** with usage tracking (+$200)
- ✅ **Privacy filter & dynamic captions** (+$150)
- ✅ **Review Queue logging sheet** (our recommendation) (+$200)
- **Cost increase:** +$1,300 total

## Important Notes
- ✅ **Google Sheets Access:** All 3 sheets shared with info@tigermedia.co.il (Editor permissions)
- ⏳ **Tool Purchases:** Client has NOT purchased required tools yet
- ⏳ **API Credentials:** Waiting for CompanyCam, Make.com, Metricool access
- **Client Research:** Heavy ChatGPT usage - verify all technical claims against actual platform capabilities
- **Boundary Set:** Implementation decisions are ours, AI suggestions welcome but not binding
- **Error Handling:** Orphan jobs, missing suffixes, notification protocols established

## Edge Cases & Defaults
- **No geo-match:** Default to "Greater Baton Rouge" + email notification
- **Missing suffix:** Default to bucket 1 + email notification  
- **Image processing:** Preserve GPS EXIF metadata (critical requirement)
- **Post management:** Draft-only for client quality control

## Client Profile
- **Communication:** Thorough researcher, prefers detailed written updates
- **Tech savvy:** Moderate - understands concepts, needs implementation guidance
- **Decision making:** Open to expert recommendations after clear explanation
- **Learning oriented:** Genuinely interested in understanding the technology

## Current Status
- **Documentation:** 95% complete with full project context
- **Requirements:** Milestone 1 checklist prepared (daniel-milestone1-requirements.md)
- ⚠️ **Critical Issue:** WordPress.com platform limits SEO optimization potential
- **Recommendation:** Self-hosted WordPress migration for maximum project value
- **Next Step:** Address platform limitations + client tool purchases + API credentials

## Repository Files
- `daniel-milestone1-requirements.md` - Complete client checklist for project start
- `getting-started.html` - Updated requirements form (deployed)
- `CLAUDE.md` - This project context file
- `client-requirements.md` - Original + revised scope documentation

## Formatting Rules
- Never use em dashes (—), only standard hyphens (-)
- Client communications under 2,500 characters  
- Technical documentation can be longer for accuracy
- Always verify platform capabilities before promising features