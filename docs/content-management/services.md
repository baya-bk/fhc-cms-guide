# Services Management

Manage the list of services offered by FHC shown on the website services page.

---

## Creating a Service

1. Go to **Content Manager** → **Service**.
2. Click **+ Create new entry**.
3. Fill in the **Title**, **Description**, **Category**, and **Icon**.
4. Set the **Order** number to control display position.
5. Click **Save**, then **Publish**.

---

## Field Reference

| Field | Translated? | Notes |
|-------|-------------|-------|
| **Title** | ✅ Translate | Service name |
| **Description** | ✅ Translate | Short explanation of the service |
| **Category** | ✅ Translate | citizens / institutions / partners |
| **Icon** | ✅ Translate | Icon name from the list below |
| **Link Page** | ✅ Translate | Internal page path (e.g., `/services`) |
| **Order** | ✅ Translate | Lower number = shown first |

---

## Available Icons

Use one of the following names exactly in the **Icon** field:

| Icon Name | Represents |
|-----------|-----------|
| `Home` | Housing / accommodation |
| `RefreshCw` | Renewal / updates |
| `CreditCard` | Payments / finance |
| `Wrench` | Maintenance / repairs |
| `FileText` | Documents / applications |

::: warning Use exact icon names
Icon names are case-sensitive. A typo will cause no icon to display on the website.
:::

---

## Best Practices

| ✅ Do | ❌ Don't |
|------|---------|
| Use short, clear service titles | Write long paragraph-style descriptions |
| Set the **Order** field to control sequence | Leave all services at Order 0 |
| Translate all fields including the icon name | Leave Amharic/Oromo fields in English |
