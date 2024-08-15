import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'posts')

export function getPosts() {
  return fs.readdirSync(postsDirectory)
}

export function getPostMetadata(name: string) {
  const fullPath = join(postsDirectory, `${name}`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)

  return data
}

export function getPostBySlug(slug: string) {
  const fullPath = join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content, data } = matter(fileContents)

  return { content, data }
}

export function getAllPosts() {
  const postNames = getPosts()
  const posts = postNames
    .map((name) => getPostMetadata(name))

  posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })

  return posts
}