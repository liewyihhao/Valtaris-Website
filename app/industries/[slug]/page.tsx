import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, getSeoPage } from "@/lib/seo";
import { SeoDetail } from "@/components/seo/SeoDetail";

export function generateStaticParams() {
  return industries.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage("industries", slug);
  if (!page) return { title: "Industry not found" };
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    alternates: { canonical: `/industries/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription },
  };
}

export default async function IndustryDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSeoPage("industries", slug);
  if (!page) notFound();
  return <SeoDetail page={page} />;
}
