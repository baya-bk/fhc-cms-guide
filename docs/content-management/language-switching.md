# Language Management (Multi-Language Content)

The FHC website supports **three languages**. Every piece of content that is visible to the public must be managed for each active language.

| Language | Code | Role |
|----------|------|------|
| **English** | `en` | Default — always create content here first |
| **Amharic** | `am-ET` | Required translation |
| **Oromo** | `om-ET` | Required translation |

---

## Golden Rule

::: warning Always start in English
Create and **publish the English version first**. Translations can only be added after the original entry exists.
:::

---

## How to Add a Translation

1. Open an existing entry (e.g., a News article in English).
2. In the **top-right locale dropdown**, select the target language (e.g., `Amharic`).
3. The system will ask if you want to **fill in from English** — click **Yes** to copy content as a starting template.
4. Translate all highlighted (localized) fields.
5. Click **Save**, then **Publish**.

---

## Which Fields Need to Be Translated?

Not all fields are language-specific. The table below shows the general rule:

| Field Type | Translated per language? | Example |
|------------|--------------------------|---------|
| Title, Description, Content | ✅ **Yes — translate** | News title, article body |
| Category, Status enums | ✅ **Yes — translate label** | Category name shown in the UI |
| Slug | ✅ **Yes — must be unique per locale** | `housing-news` vs `housing-news-am` |
| Images & Media | ❌ **No — shared** | Cover photo is the same for all languages |
| Dates & Deadlines | ❌ **No — shared** | Tender deadline is the same everywhere |
| Reference numbers | ❌ **No — shared** | Tender reference FHC/2026/001 |

### Per Content Type Summary

| Content Type | Fields to Translate |
|--------------|---------------------|
| News Article | title, excerpt, content, tag, priority |
| Tender | title, description, category |
| Event | title, description, location, category |
| Project | title |
| Job Opening | title, department, description, requirements |
| Service | title, description, icon, category |
| FAQ | question, answer, category |
| Branch | name, address |
| Leadership | name, title (job title) |
| Gallery | title, description, category |

---

## Slug Naming

Slugs **must be unique** within a locale but can share the same base across locales:

| Locale | Slug example |
|--------|--------------|
| English | `federally-funded-homes-2026` |
| Amharic | `federally-funded-homes-2026-am` |
| Oromo | `federally-funded-homes-2026-om` |

::: danger Do not duplicate slugs within the same locale
Two entries of the same content type cannot share the same slug in the same language. The system will throw a validation error.
:::

---

## Common Mistakes

| ❌ Don't | ✅ Do instead |
|---------|--------------|
| Publish Amharic before English | Publish English first |
| Leave a translation as an empty copy of English | Always translate all text fields |
| Use the same slug for all locales | Append a locale suffix (e.g., `-am`) |
| Forget to publish the translation | Always click **Publish** for each locale separately |

---

## Video Tutorial

::: tip
*Video tutorial coming soon.*
:::
