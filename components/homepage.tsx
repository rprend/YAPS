export function HomePage(): JSX.Element {
  return (
    <article className="prose prose-slate">
      <h3>Ryan&apos;s homepage</h3>
      <p>Hi, I&apos;m Ryan. I&apos;m a software engineer at <a href="https://www.bubble.io/" target="_blank" rel="noreferrer">Bubble</a> in New York.</p>
      <h3>Projects</h3>
      <p>Here are some of the things I&apos;ve worked on:</p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4">
          <h4>prendergast.dev</h4>
          <p>This site! It&apos;s built with <a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>.</p>
        </div>
        <div className="bg-gray-100 p-4">
          <h4>calvino editor</h4>
          <p>This site! It&apos;s built with <a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>.</p>
        </div>
        <div className="bg-gray-100 p-4">
          <h4>prendergast.dev</h4>
          <p>This site! It&apos;s built with <a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>.</p>
        </div>
        <div className="bg-gray-100 p-4">
          <h4>prendergast.dev</h4>
          <p>This site! It&apos;s built with <a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a>.</p>
        </div>
      </div>
      <h3>Blog</h3>
      <p>I write about things.</p>
    </article>
  )
}