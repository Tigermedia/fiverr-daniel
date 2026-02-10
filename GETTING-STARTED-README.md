# Getting Started Form - CompanyCam Local SEO Automation

## Form URL
**Live Form:** https://docs.tigermedia.co.il/forms/companycam-daniel/

## Purpose
Collect all necessary information from Daniel T to begin Milestone 1 of the CompanyCam Local SEO automation project.

## Sections Covered

### 1. Contact Information
- Client name and email
- Business details (Air Titan AC Repair)
- Preferred communication method

### 2. Account Setup
- CompanyCam Elite purchase status and API key
- Make.com Pro account and email
- Metricool Advanced account and API token

### 3. WordPress Access
- WordPress admin access methods (invitation vs credentials)
- Page builder confirmation (Elementor)
- Service Areas page status

### 4. Google Business Profile
- GBP verification status and URL
- Website linking confirmation
- Metricool GBP connection status
- Service areas and business hours

### 5. Project Preferences
- Timeline preferences
- Expected monthly Showcase volume
- Testing preferences (live vs sample data)
- Draft post management approach

## Technical Details

### Webhook Integration
- **Endpoint:** `https://n8n.tigermedia.co.il/webhook/form-submit`
- **n8n Workflow:** `0iSjhsQcBx3lc7Rd` (Jawing - Form Submissions Handler)
- **Data Storage:** Notion DB `2f9ed90d-f00d-813c-8180-e779be8bbe2c`
- **Notification:** Telegram alerts to Jawing

### Form Features
- Progressive submission (section by section)
- Auto-save and resume capability
- Responsive design (mobile + desktop)
- Tiger Media branding with Heebo font
- Dark/light mode toggle
- Client-side validation

### Data Collected Per Section
Each section submission includes:
- Form ID: `companycam-getting-started`
- Section name and index
- All field values for that section
- Submission timestamp
- Project type and client business identifiers

## Usage Instructions for Client

1. **Access the form:** https://docs.tigermedia.co.il/forms/companycam-daniel/
2. **Complete sections in order** - each section can be submitted independently
3. **Progress is saved automatically** - can close and resume anytime
4. **All sections must be submitted** before project can begin
5. **Updates possible** - can revisit any section to make changes

## Next Steps After Form Completion

1. Review all submitted data in Notion
2. Verify tool purchases are complete
3. Test API credentials and access
4. Begin Milestone 1: Setup & Account Configuration
5. Schedule kickoff call if needed

## Files in This Repository
- `getting-started.html` - Complete form with all functionality
- `GETTING-STARTED-README.md` - This documentation
- `client-requirements.md` - Original technical specifications
- `conversation-summary.md` - Communication timeline
- `CLAUDE.md` - AI context and project overview
- `README.md` - Project architecture
- `CHANGELOG.md` - Progress tracking

## Design Pattern
Based on the successful LexVenn getting started form design, adapted for:
- CompanyCam project requirements
- Tiger Media branding (brand colors, Heebo font)
- Local SEO automation context
- HVAC industry specifics