class Publication {
  title: string
  slug: string
  body: string
  category: string
  subCategory: string
  tags: Array<string> | null

  constructor(
    title: string,
    body: string,
    slug: string,
    category: string,
    subCategory: string,
    tags: Array<string> | null,
  ) {
    this.title = title
    this.body = body
    this.slug = slug
    this.category = category
    this.subCategory = subCategory
    this.tags = tags
  }
}

export default Publication
