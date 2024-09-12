export type MembersDetailCardProps = {
  avatar: string
  name: string
  position: string
  school: string
  team: string
  timelines: {
    period: string
    position: string
  }[]
  socials: {
    facebook: string
    instagram: string
    github: string
  }
}

export type MembersDetailCardSocialProps = {
  icon: string
  link: string
}

export type MembersDetailInformationProps = {
  about: string[]
  activities: string[]
  quote: string
}

export type MembersDetailAwardsProps = {
  awards: string[]
}

export type MembersBadge = {
  label: string
}

export type MembersCard = {
  avatar: string
  name: string
  position: string
  team: string
}
