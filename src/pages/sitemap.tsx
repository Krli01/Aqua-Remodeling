import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Layout } from "@/components/layout";
import { SEOHead } from "@/components/common";

export default function SitemapPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEOHead
        title={t("sitemap.title")}
        description={t("sitemap.description")}
        pathname="/sitemap"
      />
      <section className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-(--color-primary) mb-4">
            {t("sitemap.title")}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t("sitemap.heading")}
          </h1>
          <p className="mt-5 text-(--color-text-muted) text-base leading-8">
            {t("sitemap.intro")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Link
            to="/"
            className="rounded-3xl border border-(--color-border-dark) bg-(--color-bg-surface) p-6 transition hover:border-(--color-primary) hover:bg-(--color-bg-light)"
          >
            <h2 className="text-lg font-semibold text-white">
              {t("common.home")}
            </h2>
            <p className="mt-2 text-(--color-text-muted) text-sm">
              {t("sitemap.home_description")}
            </p>
          </Link>

          <Link
            to="/services"
            className="rounded-3xl border border-(--color-border-dark) bg-(--color-bg-surface) p-6 transition hover:border-(--color-primary) hover:bg-(--color-bg-light)"
          >
            <h2 className="text-lg font-semibold text-white">
              {t("common.services")}
            </h2>
            <p className="mt-2 text-(--color-text-muted) text-sm">
              {t("sitemap.services_description")}
            </p>
          </Link>

          <Link
            to="/about"
            className="rounded-3xl border border-(--color-border-dark) bg-(--color-bg-surface) p-6 transition hover:border-(--color-primary) hover:bg-(--color-bg-light)"
          >
            <h2 className="text-lg font-semibold text-white">
              {t("common.about")}
            </h2>
            <p className="mt-2 text-(--color-text-muted) text-sm">
              {t("sitemap.about_description")}
            </p>
          </Link>

          <Link
            to="/faq"
            className="rounded-3xl border border-(--color-border-dark) bg-(--color-bg-surface) p-6 transition hover:border-(--color-primary) hover:bg-(--color-bg-light)"
          >
            <h2 className="text-lg font-semibold text-white">
              {t("common.faq")}
            </h2>
            <p className="mt-2 text-(--color-text-muted) text-sm">
              {t("sitemap.faq_description")}
            </p>
          </Link>

          <Link
            to="/contact"
            className="rounded-3xl border border-(--color-border-dark) bg-(--color-bg-surface) p-6 transition hover:border-(--color-primary) hover:bg-(--color-bg-light)"
          >
            <h2 className="text-lg font-semibold text-white">
              {t("common.contact")}
            </h2>
            <p className="mt-2 text-(--color-text-muted) text-sm">
              {t("sitemap.contact_description")}
            </p>
          </Link>

          <Link
            to="/sitemap"
            className="rounded-3xl border border-(--color-border-dark) bg-(--color-bg-surface) p-6 transition hover:border-(--color-primary) hover:bg-(--color-bg-light)"
          >
            <h2 className="text-lg font-semibold text-white">
              {t("sitemap.title")}
            </h2>
            <p className="mt-2 text-(--color-text-muted) text-sm">
              {t("sitemap.page_description")}
            </p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
