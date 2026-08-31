import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getSeoPage } from "@/lib/seo";
import { SeoDetail } from "@/components/seo/SeoDetail";

export function generateStaticParams() {
  return services.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage("services", slug);
  if (!page) return { title: "Service not found" };
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    alternates: { canonical: `/services/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription },
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSeoPage("services", slug);
  if (!page) notFound();
  return <SeoDetail page={page} />;
}
