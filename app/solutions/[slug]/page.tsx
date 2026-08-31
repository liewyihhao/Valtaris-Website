import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { solutions, getSeoPage } from "@/lib/seo";
import { SeoDetail } from "@/components/seo/SeoDetail";

export function generateStaticParams() {
  return solutions.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage("solutions", slug);
  if (!page) return { title: "Solution not found" };
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    alternates: { canonical: `/solutions/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription },
  };
}

export default async function SolutionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSeoPage("solutions", slug);
  if (!page) notFound();
  return <SeoDetail page={page} />;
}
