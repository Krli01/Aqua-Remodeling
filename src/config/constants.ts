/**
 * Reusable constants and environmental variables access layer.
 * This is a standard template for landing pages.
 *
 * CENTRALIZED CONFIGURATION: Edit this file to update business info,
 * contact details, services, and SEO metadata across the entire site.
 */

// ============================================
// BUSINESS INFORMATION
// ============================================
export const BUSINESS_INFO = {
  /** Business name used across the site */
  NAME: "Aqua Remodeling LLC",
  /** Short tagline displayed in header/footer */
  TAGLINE: "We create dream spaces",
  /** Full business description for SEO and footer */
  DESCRIPTION:
    "Aqua Remodeling LLC delivers residential and commercial renovations across South Florida with full permit management, contractor coordination, and bilingual support.",
  /** Business logo path */
  LOGO: "/src/assets/images/Logo Aqua.png",
  /** Hero image for SEO and meta tags */
  HERO_IMAGE: "/src/assets/images/hero 1.jpg",
  /** Website URL (no trailing slash) */
  URL: "https://www.aquaremodeling.com",
  /** Copyright year auto-updates */
  COPYRIGHT_YEAR: "2022",
} as const;

// ============================================
// SEO DEFAULTS
// ============================================
export const SEO_DEFAULTS = {
  /** Default page title template: `{page} | {site}` */
  TITLE_TEMPLATE: (pageTitle: string) => `${pageTitle} | ${BUSINESS_INFO.NAME}`,
  /** Default meta description */
  DESCRIPTION: BUSINESS_INFO.DESCRIPTION,
  /** Default OG/Twitter image */
  IMAGE: BUSINESS_INFO.HERO_IMAGE,
  /** Default keywords */
  KEYWORDS:
    "south florida remodeling, bathroom remodeling, kitchen remodeling, general contractor, plumbing services, interior painting, exterior painting, residential remodeling, commercial remodeling",
  /** Author meta tag */
  AUTHOR: BUSINESS_INFO.NAME,
} as const;

// ============================================
// CONTACT INFORMATION
// ============================================
const phoneEnglishRaw = "+1 (754) 248-5034";
const phoneSpanishRaw = "+1 (754) 248-8958";
const whatsappRaw = "+1 (754) 248-5034";

export const CONTACT_INFO = {
  // Email
  EMAIL: "aquaremodelingllc@gmail.com",

  // Phone
  PHONE_DISPLAY: phoneEnglishRaw,
  PHONE_CALL: `tel:${phoneEnglishRaw.replace(/[^\d\+]/g, "")}`,
  PHONE_SPANISH_DISPLAY: phoneSpanishRaw,
  PHONE_SPANISH_CALL: `tel:${phoneSpanishRaw.replace(/[^\d\+]/g, "")}`,

  // WhatsApp
  WHATSAPP_DISPLAY: whatsappRaw,
  WHATSAPP_URL: `https://wa.me/${whatsappRaw.replace(/[^\d]/g, "")}`,

  // Social Media URLs
  SOCIAL: {
    INSTAGRAM: "https://www.instagram.com/aquaremodeling/",
    FACEBOOK: "https://www.facebook.com/Aqua-Remodeling-LLC-102576798917364/",
    GOOGLE: "https://linktr.ee/aquaremodeling",
  },

  // Physical Location
  LOCATION: "3831 SW 160th Ave, Miramar, FL 33027",

  // Business Hours
  HOURS: "Mon - Fri: 7:30 AM - 6:00 PM",

  // Supported Languages
  LANGUAGES: ["Inglés", "Español"] as const,

  // Marketing Agency
  AGENCY_URL: "https://crescendodigitalmarketingagency.com/en/",
  AGENCY_NAME: "CDM Marketing",
} as const;

// ============================================
// SERVICES CONFIGURATION
// ============================================
export interface ServiceConfig {
  key: string;
  image: string;
  /** Optional: override icon for service cards */
  icon?: string;
}

export const APP_SERVICES: ServiceConfig[] = [
  {
    key: "bathroom_remodeling",
    image: "/src/assets/images/bathroom renovation service.jpg",
  },
  {
    key: "kitchen_remodeling",
    image: "/src/assets/images/kitchen renovation service.jpg",
  },
  {
    key: "general_contractor",
    image: "/src/assets/images/General contractor service.jpg",
  },
  {
    key: "general_plumbing",
    image: "/src/assets/images/Plumbing service.jpg",
  },
  {
    key: "painting",
    image: "/src/assets/images/Interior exterior painting service.jpg",
  },
] as const;

// ============================================
// THIRD-PARTY INTEGRATIONS
// ============================================
export const REVIEWS_WIDGET_ID = "";

// ============================================
// NAVIGATION CONFIGURATION
// ============================================
export const NAV_LINKS = [
  { key: "home", path: "/" },
  { key: "services", path: "/services" },
  { key: "about", path: "/about" },
  { key: "faq", path: "/faq" },
  { key: "contact", path: "/contact" },
] as const;

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get service options for contact form select
 * Includes all services + "General Contact" + "Other"
 */
export const getServiceOptions = (t: (key: string) => string) => [
  ...APP_SERVICES.map((s) => ({
    value: s.key,
    label: t(`services.${s.key}.title`),
  })),
  { value: "info", label: t("contact.form.service_info") },
  { value: "other", label: t("contact.form.service_other") },
];

/**
 * Get navigation links with translated labels
 */
export const getNavLinks = (t: (key: string) => string) =>
  NAV_LINKS.map((link) => ({
    ...link,
    label: t(`common.${link.key}`),
  }));

/**
 * Get service links for dropdown navigation
 */
export const getServiceLinks = (t: (key: string) => string) =>
  APP_SERVICES.map((s) => ({
    key: s.key,
    label: t(`services.${s.key}.title`),
    path: `/services#${s.key}`,
  }));
