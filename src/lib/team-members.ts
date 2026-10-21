export const teamMembers = [
  {
    slug: "jargalan-byambatsogt",
    image: "/images/team-avatar-jargalan.png",
  },
  {
    slug: "dulguun-erdenebulgan",
    image: "/images/team-avatar-dulguun.png",
  },
  {
    slug: "byambadorj-dorjsuren",
    image: "/images/team-avatar-byambadorj.png",
  },
  {
    slug: "badamsuren-urtnasan",
    image: "/images/team-avatar-badamsuren.png",
  },
] as const;

export type TeamMemberSlug = (typeof teamMembers)[number]["slug"];

export function isTeamMemberSlug(value: string): value is TeamMemberSlug {
  return teamMembers.some((member) => member.slug === value);
}
