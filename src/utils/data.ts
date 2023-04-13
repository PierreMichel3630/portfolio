export interface Person {
  nom: string;
  prenom: string;
  metier: string;
  mail: string;
  telephone: string;
  description: string;
  photo?: string;
}

export const person: Person = {
  nom: "Pearson",
  prenom: "Billy",
  photo:
    "https://s3-alpha-sig.figma.com/img/7065/f9e9/979e69ae430b2e62edb3533925323ba0?Expires=1678665600&Signature=hl3UB9Lxt7kajHuARUYGwskM1we~EgkyaGLSSrGI0pvZLRc8WPpeZ8-vUJRE~dkuP~MtX3b1BhdRNYh-9YQs0cCep4byuCG1onxIH9XpNdIHN2Q59W2~2XZGJmYv6Pjfeo8KIwROUTT9Vu4akog3cv1cjtibJe9-Ig9OyscQybMuN5Zs0b3CAO4gCw7hlmOhlSY-hcVz1PBXsEG6RZzw9UuxyWGBHcW~l5Scta3jlw1QxKn4e2j7xf20jIrP~TgB2bNntA04zj81EzzMI3MHb6ArNdMbqgPmGm4FM1jJiT1RRrN59AyMeNy3v0UANb0nH7~yu8p6xPfFrki932ElGw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  metier: "Front-end developer",
  mail: "billy@example.com",
  telephone: "(+603) 546 624 342",
  description:
    "Self-motivated developer, who is willing to learn and create outstanding UI applications. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ",
};

export interface Competence {
  nom: string;
  niveau: number;
}

export const competences: Array<Competence> = [
  { nom: "React", niveau: 80 },
  { nom: "Javascript", niveau: 67 },
  { nom: "CSS", niveau: 95 },
  { nom: "Java", niveau: 57 },
];

export interface Hoobie {
  nom: string;
  description: string;
  photo?: string;
}

export const hoobies: Array<Hoobie> = [
  {
    nom: "Gaming",
    photo:
      "https://s3-alpha-sig.figma.com/img/46e7/fe1c/e0a3db86d475eb76c116602699fe1850?Expires=1679270400&Signature=DsPpxFLJrjyR~D-IOGTjVyFVO9NS2aD9iU5kDIzEMBmpAPFhRFim9PnuHNTMRyb~mW8YRjdHGA0x0MNJVpMpeQ1-gP9xsWK5gkEM20JFyVtS3dqv31XgMespjBkwY57nGKqkcjgWAESn12C2Vgk8wriXhy7p4Z-TLZDnmzpBfolhOigkAcR7CEI-jNq0LtU6sEWnPjbt2JmgT-aveuvvP~tEsSCjZjUVB83r3eiBvXJE4L2ZFYZsiTAGMT~VqhaCdzig5SrZ9YwIDsmZplnlQ74w3b~7XgZ3ELePwZUpxbgh1qYYl~nrNE6nQK~oiIouq57lcJd~0XN~7WRf1~MjZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    description: "Quisque feugiat malesuada molestie.",
  },
  {
    nom: "Cooking",
    photo:
      "https://s3-alpha-sig.figma.com/img/b9e5/9606/10bb7c38a5222f63ddf09c4734ab1f9a?Expires=1679270400&Signature=L1K~tknb1jC4tQc6Q59vF-MSiNKwqzC-tzu3bkrAhP3a~wnTVdLxUrCP5AoiO6AiLcHbvIB~hdtOVKY-FDpnVaUJCYdG0ASObqfZC1j~kbOlJVkI0YNmIWrNYEcDv7aqDx3vcbnNIYsWNBe2e8p7t0B3XKQV7u9IBb2O18w9iD41at3bX1jt5zvTX61ulfjlhMuT-MHwblfTbgsriLQgQQ-JwWSf58EGaINUugWAK2g4FG0mFD4D9wBILwvpHanGv9OUm42EWRQlh39haXqsB5w2jcHRRGIC~Fy3HITdt9bdeSHMuiSh-7gAnF9IqXkcSBPQRs7G5YPtNDGQvDL1tg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    description: "Quisque feugiat malesuada molestie.",
  },
  {
    nom: "Biking",
    photo:
      "https://s3-alpha-sig.figma.com/img/fa45/078a/1648154e48fc73385814f7242b54bfe3?Expires=1679270400&Signature=IvTFfTFi4fjV3uemK3oOytegAa-0~YKpKCUjO3Yw0-p5DrFMhSHFSW1S3ARg12Pxn-nApJyYrFZBgxBeBDOdGPIT-Te4etxOQZomTlEkUCSSdhS33hqV9OLkLOMbuVgHSuEcKUaArPcS5q33GUznC29jEV6htm59n1Go8wnm1LpzM2zV9NtDznUh-7nVRNXsriCf16xuAnQjdJFQX-YugYmnJtN8Gzmc60vO6E9RtIFdrTBw-Kigu5HLYQtvjXNlc2L8w9umyf-p9kr~qevktlI77l-ucyGyRpvpSNaHTigJmN9PYzM~GqyDQZJ62vvizRa~1Xbsv2vCDLYNy8dzzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    description: "Quisque feugiat malesuada molestie.",
  },
];

export interface Experience {
  logo?: string;
  dateDebut: Date;
  dateFin?: Date;
  poste: string;
  description: string;
}

export const experiences: Array<Experience> = [
  {
    dateDebut: new Date("02/17/2017"),
    poste: "Front-end developer",
    description:
      "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    logo: "https://s3-alpha-sig.figma.com/img/0c39/799a/364c0a3410cba48399fd137e4ca19ccb?Expires=1678665600&Signature=KBRNoO5GHcCimsqaGf3uUiywj78vLeRisbQGrqCv7bncWblBbEqdYKB~aNqxyseOeFTqN~OG80cHZk-oM5NX~EUCYKGpiFn3RJBGFXo2aefJRrB3wWK1aL-3ZJuY7of-kjjR3ukliVxhMLA2vSLLfMYJtWBr6z~jFNfXUR8GTtQhdCd7XzoX4~v53FlBJtR4KQyIUTe40Hxu1cpXM52POa4WN1k8IX8CWpNBwc4YNVzBKk4DdXNYh2MZZXnADMZAZq1JvWuI4CKAkKuazEdsaBXwvV4~G6CMGty7chXcyL8oUMTSV3galEYqJ0XV4xSLIz5FabsKmTQhEGp7MThx3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    dateDebut: new Date("07/27/2012"),
    dateFin: new Date("02/09/2017"),
    poste: "Full-stack developer",
    description:
      "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.",
    logo: "https://s3-alpha-sig.figma.com/img/c514/7dec/4aa2b46ad286056145e65599afc858f0?Expires=1678665600&Signature=MkBingwBs7ZlFJN6KvhAd0jAa3PIc5FbFaErJn5~7hbelaZp766zYcXlbeQm~MR3yJyWFhGsIXA6awm83aMoDXuuAK-gtApEY2MqzYWAL9My2egCpDTUL~TewOwuaGIj~YtoEYSTrvWSMai8o~vaPc7uMSaM9otIHT8WNyLN-95BvthD2I6WM05ETSeDcNQDFNopZyoKau~QuaeFko3WTjesk9DSmfQM784GpTbzjnaQHSFuKnkhBRVm0yzz8UDPk30hFMH5XbDzDW1M-mTZBiTs2V~-MiUp41UCE6DEUEXmDvrRviM2OprLtPJTVETnyeuLIrCsKSpmNj1Gp4BtsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

export interface Projet {
  photo: string;
  technologies: Array<string>;
  nom: string;
  description: string;
  urlDemo: string;
  urlCode: string;
  type: string;
}

export const projets: Array<Projet> = [
  {
    photo:
      "https://www.figma.com/file/O7Omgz2iVR7Vox7shf7O8e/image/575f24ab51c6775fa270938a872eb94817ec2bdc?fuid=1211971314354710620",
    technologies: ["HTML", "CSS", "responsive"],
    nom: "Recipe Blog",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    urlDemo: "",
    urlCode: "",
    type: "React",
  },
  {
    photo:
      "https://s3-alpha-sig.figma.com/img/d418/d9c1/1de8f9ccea87f61adf285bb800e0e921?Expires=1678665600&Signature=IiltIAWyLiuI8GofSxNzzW2ginfVvBRAs7lTPoGtf1gHcvWC3KmkdEOj0vjji7vQe0EgoDOuAIVltdWeD-iT-S4cYDyOrXTK30mjbXW8Wpf8uxxmK2xXM9-g0UzvDHOibQBJdoWXYJqz-Rni5kKzWqhQR0NEAlMqEM72TXmr6bNXViEBLj9UwP0f2NGxZH~hAFDywCpa1D~UczF5lHmsjuX1ChaavWus6Uokxxat6-ngCvsORx8Ph4y-Uhz0PorEaE3dNkjLDRvZ1hw0im2T4y9-kDazeRUZuckepcFNcV1EesMYHcf8CJNIK6pU6xuPjcb0WcbHSPiUWAehnIJwdQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    technologies: ["HTML", "CSS", "responsive"],
    nom: "My Gallery",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    urlDemo: "",
    urlCode: "",
    type: "Vue",
  },
  {
    photo:
      "https://s3-alpha-sig.figma.com/img/dea1/6061/260ae601a0fbf4bacce17735a1f881e0?Expires=1678665600&Signature=HA5lPxAZJS0DCJShrons8dvI5ncG4ghCj8mje1PCkW18QHlnd7paxZTN~i4D9RAncEqtbIJIjF~cc9dU-1wBVIbiCwK~wOwGfK5Mm9orvJ8~hJpK7RjJhW5pyRSispXWzwrxjeSco~0O~uP-G3e3L-G2E5-YKLV3N53wA2WnqGwhG9rm5OYZxd~bT8SNspfBLOWBl4jr8xMQ0j5kWDK-bMPhhaR3oERJnX0~vgObGDJz3u20TxBm-ZD2k8ERmkZo~JYnN5YxKZApyPncizo~VLH77OElslx9P1sEujxdumwBnHDZ5t8WeSdVFs-pIf4GBhjdAxHlm7fLFFS9yp4ylQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    technologies: ["HTML", "CSS", "responsive"],
    nom: "Checkout",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    urlDemo: "",
    urlCode: "",
    type: "Responsive",
  },
  {
    photo:
      "https://s3-alpha-sig.figma.com/img/dea1/6061/260ae601a0fbf4bacce17735a1f881e0?Expires=1678665600&Signature=HA5lPxAZJS0DCJShrons8dvI5ncG4ghCj8mje1PCkW18QHlnd7paxZTN~i4D9RAncEqtbIJIjF~cc9dU-1wBVIbiCwK~wOwGfK5Mm9orvJ8~hJpK7RjJhW5pyRSispXWzwrxjeSco~0O~uP-G3e3L-G2E5-YKLV3N53wA2WnqGwhG9rm5OYZxd~bT8SNspfBLOWBl4jr8xMQ0j5kWDK-bMPhhaR3oERJnX0~vgObGDJz3u20TxBm-ZD2k8ERmkZo~JYnN5YxKZApyPncizo~VLH77OElslx9P1sEujxdumwBnHDZ5t8WeSdVFs-pIf4GBhjdAxHlm7fLFFS9yp4ylQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    technologies: ["HTML", "CSS", "responsive"],
    nom: "Checkout",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    urlDemo: "",
    urlCode: "",
    type: "Responsive",
  },
  {
    photo:
      "https://s3-alpha-sig.figma.com/img/dea1/6061/260ae601a0fbf4bacce17735a1f881e0?Expires=1678665600&Signature=HA5lPxAZJS0DCJShrons8dvI5ncG4ghCj8mje1PCkW18QHlnd7paxZTN~i4D9RAncEqtbIJIjF~cc9dU-1wBVIbiCwK~wOwGfK5Mm9orvJ8~hJpK7RjJhW5pyRSispXWzwrxjeSco~0O~uP-G3e3L-G2E5-YKLV3N53wA2WnqGwhG9rm5OYZxd~bT8SNspfBLOWBl4jr8xMQ0j5kWDK-bMPhhaR3oERJnX0~vgObGDJz3u20TxBm-ZD2k8ERmkZo~JYnN5YxKZApyPncizo~VLH77OElslx9P1sEujxdumwBnHDZ5t8WeSdVFs-pIf4GBhjdAxHlm7fLFFS9yp4ylQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    technologies: ["HTML", "CSS", "responsive"],
    nom: "Checkout",
    description:
      "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    urlDemo: "",
    urlCode: "",
    type: "Angular",
  },
];
