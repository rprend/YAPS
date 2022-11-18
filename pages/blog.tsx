import Sidebar from "../components/sidebar";


export default function Blog(): JSX.Element {
  return (
    <main className="main">
      <Sidebar></Sidebar>
      <div className="content">
        <h1>Blog</h1>
        <p>Writings i think are worth sharing</p>
      </div>
    </main>
  )
}