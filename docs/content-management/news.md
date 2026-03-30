# News Management

Manage all news articles published on the FHC website from this section.

---

## Required Fields

::: warning Before you publish, these fields are mandatory
- **Title** — the article headline
- **Excerpt** — a short 1–2 sentence summary
- **Content** — the full article body
- **Category** — the topic area
:::

---

## Creating a News Article

1. Go to **Content Manager** → **News Article**.
2. Click **+ Create new entry**.
3. Fill in the required fields (see table below for details).
4. Upload a **Featured Image** (recommended: 1200 × 630 px).
5. Set **Workflow Status** to `approved` when ready for review.
6. Click **Save**, then **Publish**.

---

## Field Reference

| Field | Translated? | Options / Notes |
|-------|-------------|-----------------|
| **Title** | ✅ Translate | Keep under 80 characters |
| **Excerpt** | ✅ Translate | 1–2 sentences, used as the meta description on the website |
| **Content** | ✅ Translate | Rich text editor — supports headings, lists, images |
| **Tag** | ✅ Translate | Optional custom label (e.g., "Spotlight") |
| **Category** | ✅ Translate | infrastructure / policy / technology / community / project |
| **Priority** | ✅ Translate | normal / high / breaking |
| **Workflow Status** | ✅ Translate | draft → in_review → approved → published |
| **Is New badge** | ✅ Translate | Toggle to show a "NEW" badge on the card |
| **Featured Image** | ❌ Shared | One image used in all languages |
| **Publish Date** | ❌ Shared | When the article appears on the site |
| **Media Embed** | ❌ Shared | YouTube or Vimeo video (see below) |
| **Is Livestream** | ❌ Shared | Toggle for live broadcasts |
| **Livestream Scheduled** | ❌ Shared | Date/time of the scheduled live event |

---

## Adding a Video or Live Embed

The **Media Embed** field accepts any YouTube or Vimeo link. The video will be displayed inside the article on the website.

**Steps:**
1. Copy the full URL of the YouTube or Vimeo video (e.g., `https://www.youtube.com/watch?v=XXXXXX`).
2. Paste it into the **Media Embed** field — the system fetches and displays it automatically.

**For live broadcasts:**
1. Toggle **Is Livestream** to `ON`.
2. Set **Livestream Scheduled** to the date and time of the broadcast.
3. The website will show a live indicator at the scheduled time.

::: tip
You do not need to embed a `<iframe>` manually. Paste the plain video URL and the system handles the rest.
:::

---

## Article Workflow

| Status | Meaning |
|--------|---------|
| `draft` | Being written — not visible on the website |
| `in_review` | Submitted for editorial review |
| `approved` | Review complete — ready to publish |
| `published` | Live on the website |

---

## Best Practices

| ✅ Do | ❌ Don't |
|------|---------|
| Keep titles concise and descriptive | Use clickbait or vague headlines |
| Write a 1–2 sentence excerpt (under 160 chars) | Leave the excerpt empty |
| Upload a 1200×630 px cover image | Use blurry or low-resolution images |
| Translate all localized fields | Publish an empty translation |
| Set a Publish Date for scheduled releases | Leave Publish Date blank unless publishing immediately |

---

## Video Tutorial

<iframe
  src="https://drive.google.com/file/d/1JkDuOzzeKRHA-ZAWlKlhHzuTGd9PF-YB/preview"
  width="100%"
  height="450"
  frameborder="0"
  allowfullscreen
></iframe>
