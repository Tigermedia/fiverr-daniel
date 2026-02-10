# Client Requirements - CompanyCam Local SEO Automation

## Client
- **Name:** Daniel T
- **Business:** Air Titan AC Repair
- **Website:** airtitanacrepair.com
- **Industry:** HVAC / AC Repair
- **Business Type:** Service Area Business (no storefront, serves multiple locations)

---

## Business Objective
Expand local ranking radius on Google Maps by automating "Proof of Work" - flowing GPS-tagged job-site photos from the field to GBP and the website, signaling to Google where the business actively operates.

---

## Functional Requirements

### FR1: CompanyCam Webhook Integration
- Trigger on "New Showcase Published" event
- Extract from each Showcase:
  - Project Title
  - Photo Description
  - GPS Coordinates (Latitude/Longitude) from project/photo metadata
  - Public Showcase URL
  - Cover Photo Original Resolution URL

### FR2: Image Optimization
- Resize images to under 5MB for GBP compliance
- Use CloudConvert module in Make.com
- **Critical:** Preserve GPS EXIF metadata during compression
- GPS metadata integrity is essential for local SEO "Heat Map" signals

### FR3: Metricool Draft Post Creation
- Push processed data to Metricool via API/Make.com module
- Create a "Draft" post (not auto-publish) for the Air Titan GBP
- Draft must include:
  - Photo (optimized, GPS-tagged)
  - Caption from project title and/or photo description
- Client reviews and publishes drafts manually

### FR4: WordPress Service Areas Page
- Rename "Area's Serviced" page to "Service Areas"
- Set slug to /service-areas/
- Embed CompanyCam Website Map (HTML embed code)
- Map must auto-plot a pin for every new CompanyCam Showcase
- Page built with Elementor

### FR5: Schema Markup
- Add LocalBusiness JSON-LD to the site footer
- Include sameAs field linking to verified GBP URL
- Validate with Google Rich Results Test

### FR6: Processing Time
- New Showcase in CompanyCam must create a Draft Post in Metricool within 60 seconds

---

## Non-Functional Requirements

### NFR1: Error Handling
- Make.com scenario must include error handling and logging
- Failed operations should not break the automation pipeline
- Notifications on failure (email or Make.com built-in)

### NFR2: Documentation
- Written documentation covering full system architecture
- Walkthrough video demonstrating the automation flow
- Instructions for client to manage/troubleshoot basic issues

### NFR3: Ownership
- All automations built in client's own accounts
- Client retains full ownership and access
- No dependency on external accounts or platforms

### NFR4: Post-Delivery Support
- 7 days of support after final milestone completion

---

## Technical Specifications

### Platforms & Plans
| Platform | Plan | Status |
|----------|------|--------|
| CompanyCam | Elite | Not yet purchased |
| Make.com | Pro (10,000 ops/month) | Not yet purchased |
| Metricool | Advanced (API access) | Not yet purchased |
| WordPress | Elementor | Active - airtitanacrepair.com |
| Google Business Profile | - | Verified, URL linked |

### Volume Estimates
| Metric | Value |
|--------|-------|
| Showcases per month | ~20 |
| Photos per Showcase | 3-5 |
| Estimated Make.com ops/month | ~300 |
| Interactive map ops/month | 0 (direct HTML embed) |

### Access Required
- [ ] WordPress admin access (invitation from client)
- [ ] CompanyCam API key
- [ ] Make.com account access
- [ ] Metricool API token (Account Settings > API tab)
- [ ] GBP access (via Metricool connection)

---

## Risks & Verification Needed

| Risk | Impact | Mitigation |
|------|--------|------------|
| Metricool Make.com module may not support draft posts | High - core feature | Verify before client purchases. Fallback: direct API via HTTP module |
| CompanyCam webhook may differ from ChatGPT's description | Medium | Test webhook on Elite plan immediately after purchase |
| GPS metadata stripped during CloudConvert processing | High - defeats SEO purpose | Test with sample image before full build |
| Elementor may conflict with raw HTML embed | Low | Test embed in Elementor HTML widget |

---

## Acceptance Criteria
1. New Showcase published in CompanyCam triggers Make.com scenario automatically
2. Draft post appears in Metricool within 60 seconds with correct photo and caption
3. Processed images retain GPS EXIF metadata
4. Interactive map on /service-areas/ displays pins for all Showcases
5. LocalBusiness JSON-LD validates in Google Rich Results Test
6. Documentation and walkthrough video delivered
