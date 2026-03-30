import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/fhc-cms-guide/',
  title: "FHC CMS Guide",
  description: "Comprehensive Content Management Guide for FHC Website",
  srcDir: '.',
  
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/docs/getting-started/login" },
      { text: "FHC Website", link: "https://fhc.gov.et" }
    ],

    sidebar: [
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          { text: "Login to CMS", link: "/docs/getting-started/login" },
          { text: "Dashboard Overview", link: "/docs/getting-started/dashboard" }
        ]
      },
      {
        text: "Content Management",
        collapsed: false,
        items: [
          { text: "News", link: "/docs/content-management/news" },
          { text: "Events", link: "/docs/content-management/events" },
          { text: "Publications", link: "/docs/content-management/publications" },
          { text: "Tenders", link: "/docs/content-management/tenders" },
          { text: "Projects", link: "/docs/content-management/projects" },
          { text: "Progress Reports", link: "/docs/content-management/progress-reports" },
          { text: "Services", link: "/docs/content-management/services" },
          { text: "Partners", link: "/docs/content-management/partners" },
          { text: "Job Openings", link: "/docs/content-management/job-openings" },
          { text: "Leadership Team", link: "/docs/content-management/leadership" },
          { text: "About Page", link: "/docs/content-management/about-page" },
          { text: "FAQs", link: "/docs/content-management/faqs" },
          { text: "Legal & Policies", link: "/docs/content-management/legal-policies" },
          { text: "Language Switching", link: "/docs/content-management/language-switching" }
        ]
      },
      {
        text: "Media Management",
        collapsed: false,
        items: [
          { text: "Upload Images", link: "/docs/Media Management/images" },
          { text: "Manage Files", link: "/docs/Media Management/files" }
        ]
      },
      {
        text: "Organization Data",
        collapsed: false,
        items: [
          { text: "Manage Branches", link: "/docs/Organization Data/branches" },
          { text: "Update Contacts", link: "/docs/Organization Data/contacts" }
        ]
      },
      {
        text: "Deployment",
        collapsed: true,
        items: [
          { text: "Deploy Site", link: "/docs/Organization Data/deployment/deploy-site" }
        ]
      },
      {
        text: "Troubleshooting",
        collapsed: true,
        items: [
          { text: "Common Errors", link: "/docs/Organization Data/troubleshooting/common-errors" }
        ]
      }
    ],

    footer: {
      message: 'FHC Technical Team Documentation',
      copyright: 'Copyright © 2024 Federal Housing Corporation'
    }
  }
})
