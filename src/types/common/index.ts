export type CommonVerticalNavigationProps = {
  isNavigationOpen: boolean
}

export type CommonSearchProps = {
  filtersOption?: string[]
  placeholder?: string
  loading?: boolean
}

export type CommonTitleTextProps = {
  prefix?: string
  text: string
  suffix?: string
}

type RoundedIconSize = 'md' | 'lg'

export type CommonRoundedIconProps = {
  icon: string
  color: string
  size: RoundedIconSize
  onlyView?: boolean
}

type badgeType = 'solid' | 'soft'

export type CommonBadgeProps = {
  team: string
  type: badgeType
}
