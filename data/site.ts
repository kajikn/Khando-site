
// data/site.ts

export type NavChild = {
  label: string
  href: string   // ✅ պարտադիր
}

export type NavItem = {
  label: string
  href?: string
  children?: NavChild[]
}



export const site = {
  name: "Khando",
  tagline: "մեր գյուղը, մեր արմատները",
  heroTitle:"...",
  heroAltTitle:"...",
} 


export const nav: NavItem[] = [
  { label: "Գլխավոր", href: "/" },

  {
    label: "Մեր գյուղը",
    children: [
      { label: "Պատմություն", href: "/soon" },
      { label: "Աշխարհագրություն", href: "/soon" },
      { label: "Տեսարժան վայրեր", href: "/soon" },
    ],
  },

  {
    label: "Գյուղի կյանքը",
    children: [
      { label: "Նորություններ", href: "/soon" },
      { label: "Միջոցառումներ", href:"/soon" },
      { label: "Մարդիկ", href: "/soon" },
    ],
  },

  {
    label: "Համայնք",
    children: [
      { label: "Դպրոց", href: "/soon" },
      { label: "Մշակույթ", href: "/soon" },
      { label: "Գյուղատնտեսություն", href: "/soon" },
    ],
  },

  {
    label: "Սփյուռք",
    children: [
      { label: "Մեր միավորումը", href: "/soon" },
      { label: "Աջակցություն", href: "/soon" },
    ],
  },

  {
    label: "Մեդիա",
    children: [
      { label: "Լուսանկարներ", href: "/soon" },
      { label: "Տեսանյութեր", href: "/soon" },
      { label: "Խաչկավանք-Խանդո հանդես", href: "/media/magazine" }, // ✅
    ],
  },

  {
    label: "Կապ",
    children: [
      { label: "Հետադարձ կապ", href: "/soon" },
      { label: "Մասնակցիր", href: "/soon" },
    ],
  },
]
