# Milestone 1 Delivery - Air Titan CompanyCam to GBP Automation

**Client:** Daniel Thibodeaux - Air Titan AC Repair LLC
**Project:** CompanyCam Local SEO Automation
**Milestone:** M1 - Setup & Account Configuration ($500)
**Date:** February 19, 2026

---

## What Was Delivered

### Full Automation Pipeline (End-to-End Working)

The complete automation is live and tested. When a new photo is uploaded to CompanyCam, the following happens automatically:

1. **Webhook Trigger** - CompanyCam fires a `photo.created` event to Make.com
2. **Photo Details** - Fetches full photo data including GPS coordinates from CompanyCam API
3. **Project Lookup** - Gets project coordinates as fallback if photo GPS is missing
4. **Neighborhood Matching** - Reads your MasterNeighborhoods Google Sheet (50+ neighborhoods) and uses Haversine formula to find the closest neighborhood within radius
5. **Keyword Selection** - Reads your Keyword Buckets Google Sheet (8 categories, 80 keywords) and selects a keyword using rotation logic
6. **Draft GBP Post** - Creates a draft post in Metricool with the matched keyword + neighborhood + photo, ready for your review before publishing

### Technical Setup Completed

- ✅ **CompanyCam API** - Token verified, webhook registered
- ✅ **CompanyCam Webhook** - Fires on every new photo upload
- ✅ **Make.com Scenario** - 7-module pipeline, scenario ID 4170018
- ✅ **Google Sheets (Neighborhoods)** - Reading 50+ neighborhoods with lat/lon/radius
- ✅ **Google Sheets (Keywords)** - Reading 8 keyword buckets (80 keywords)
- ✅ **Haversine Geo-Matching** - Matches photos to nearest neighborhood by GPS
- ✅ **Keyword Rotation** - Rotates through keyword buckets automatically
- ✅ **Metricool GBP Integration** - Native module, creates draft posts
- ✅ **Metricool Draft Posts** - Posts appear in Metricool scheduler as drafts

### Scenario Architecture

```
CompanyCam Photo Upload
    ↓
[Webhook] Module 2 - Receives photo.created event
    ↓
[HTTP] Module 10 - GET photo details (GPS, image URL)
    ↓
[HTTP] Module 35 - GET project details (fallback coordinates)
    ↓
[HTTP] Module 30 - GET Neighborhoods CSV from Google Sheets
    ↓
[HTTP] Module 31 - GET Keyword Buckets CSV from Google Sheets
    ↓
[Code] Module 13 - Haversine geo-matching + keyword selection
    ↓
[Metricool] Module 37 - Create draft GBP post
```

### Haversine Code Module (Module 13)

The code module performs:
- **GPS Priority** - Uses photo GPS first, falls back to project coordinates
- **Distance Calculation** - Haversine formula (miles) against all neighborhoods
- **Radius Matching** - Each neighborhood has a configurable radius
- **Best Match** - Selects closest neighborhood within radius
- **Orphan Handling** - Defaults to "Greater Baton Rouge" if no match
- **Keyword Rotation** - Cycles through 8 keyword buckets based on date

**Output format:**
```json
{
  "neighborhood": "Wimbledon",
  "keyword": "Air Conditioning Installation",
  "distance": "0.834",
  "isOrphan": false,
  "postText": "Air Conditioning Installation in Wimbledon | Air Titan AC Repair LLC",
  "photoUrl": "https://img.companycam.com/..."
}
```

### GBP Draft Post Format

Each draft post in Metricool includes:
- **Text** - `[Keyword] in [Neighborhood] | Air Titan AC Repair LLC`
- **Image** - Original CompanyCam photo
- **Network** - Google Business Profile (GBP)
- **Status** - Draft (you publish manually after review)
- **Location** - Your GBP profile

---

## Key IDs & Access

- **Make.com Scenario** - 4170018
- **Webhook URL** - `https://hook.us2.make.com/vqlga5dmnpbu9t6p79visorz69w9bl1r`
- **CompanyCam Webhook ID** - 197854
- **Metricool Blog ID** - 5846447
- **GBP Location** - accounts/117077766338555713257/locations/6579302660743071083
- **Neighborhoods Sheet** - 1JZ2-A7RkbHpUCMq7Rfg17Yz73b_BgrikVuvE6j76Ekw
- **Keyword Buckets Sheet** - 1kOPM2n-f8_VltxDBOT6OQPZdPU--BtDHwE822B9QixI

---

## How to Use

1. **Take a photo** in CompanyCam at any job site in the Baton Rouge area
2. **Wait ~10 seconds** for the automation to process
3. **Open Metricool** scheduler - you'll see a new draft post
4. **Review** the text, neighborhood match, and keyword
5. **Publish** when ready (or edit first)

---

## Files Included

- `MILESTONE-1-DELIVERY.md` - This delivery document
- `make/module-13-haversine-keyword.js` - Haversine geo-matching code
- `make/module-13-input-variables.md` - Code module variable mappings
- `make/metricool-post-body.json` - Metricool API payload template

---

## What's Next (Milestone 2)

- Error handling routes (orphan photos, API failures)
- Email alerts for edge cases
- Router module for conditional logic
- Review Queue logging to Google Sheets
- Full pipeline stress testing with multiple photos
