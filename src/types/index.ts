export type TypeNavLink = {
    id: string,
    title: string,
}

export type NavLinksType = TypeNavLink[]

export type TypeFeature = {
    id: string,
    icon: string,
    title: string,
    content: string,
}

export type FeaturesType = TypeFeature[]

export type TypeFeedback = {
    id: string,
    content:
      string,
    name: string,
    title: string,
    img: string,
  }

export type FeedbacksType = TypeFeedback[]

export type TypeStats = {
    id: string,
    title: string,
    value: string,
  }

export type StatsType = TypeStats[]

export type LinkInsideFooter =  {
    name: string,
    link: string,
}
export type TypeFooterLink = {
    title: string,
    links: LinkInsideFooter[],
  }

export type FooterLinksType = TypeFooterLink[]

export type TypeSocialMedia = {
    id: string,
    icon: string,
    link: string,
  }

export type SocialMediaType = TypeSocialMedia[]

export type TypeClient = {
    id:string,
    logo:string,
}

export type ClientsType = TypeClient[]

