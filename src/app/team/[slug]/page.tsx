import { notFound } from "next/navigation";
import { TeamMemberProfile } from "@/components/sections/TeamMemberProfile";
import { isTeamMemberSlug, teamMembers } from "@/lib/team-members";

export const dynamicParams = false;

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!isTeamMemberSlug(slug)) notFound();

  return <TeamMemberProfile slug={slug} />;
}
