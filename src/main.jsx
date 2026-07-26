import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

const stories = [
  {
    category: 'Breaking',
    title: 'A New Voice for Digital News',
    summary: 'TacoBellMedia launches with bold reporting, sharp commentary, and stories that actually matter.',
    image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Politics',
    title: 'Inside the Decisions Shaping the Week',
    summary: 'A clear look at the debates, personalities, and policies driving the latest headlines.',
    image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80'
  },
  {
    category: 'Culture',
    title: 'Why Online Communities Are Becoming Real Institutions',
    summary: 'Digital spaces are creating identities, rivalries, and traditions all their own.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80'
  },
  {
    category: 'Opinion',
    title: 'News Should Be Interesting Again',
    summary: 'People do not need more noise. They need strong writing, clear facts, and a point of view.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80'
  }
]

function Header() {
  return (
    <>
      <div className="ticker">
        <span>LIVE</span>
        <p>Welcome to TacoBellMedia — independent news with extra sauce.</p>
      </div>
      <header>
        <a className="brand" href="#">
          <div className="logo-mark">TB</div>
          <div>
            <strong>TacoBellMedia</strong>
            <small>NEWS • CULTURE • OPINION</small>
          </div>
        </a>
        <nav>
          <a href="#latest">Latest</a>
          <a href="#politics">Politics</a>
          <a href="#culture">Culture</a>
          <a href="#opinion">Opinion</a>
        </nav>
        <button className="subscribe">Subscribe</button>
      </header>
    </>
  )
}

function App() {
  return (
    <div>
      <Header />

      <main>
        <section className="hero">
          <article className="hero-story">
            <img src={stories[0].image} alt="" />
            <div className="overlay"></div>
            <div className="hero-copy">
              <span className="tag">Top Story</span>
              <h1>{stories[0].title}</h1>
              <p>{stories[0].summary}</p>
              <a href="#latest">Read the story →</a>
            </div>
          </article>

          <aside className="briefing">
            <p className="eyebrow">THE DAILY CRUNCH</p>
            <h2>What you need to know</h2>
            <div className="brief-item">
              <span>01</span>
              <p>A faster, cleaner way to follow important stories.</p>
            </div>
            <div className="brief-item">
              <span>02</span>
              <p>Original reporting, explainers, and sharp opinions.</p>
            </div>
            <div className="brief-item">
              <span>03</span>
              <p>Built for readers who are tired of boring news sites.</p>
            </div>
          </aside>
        </section>

        <section id="latest" className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">JUST IN</p>
              <h2>Latest Stories</h2>
            </div>
            <a href="#">View all stories</a>
          </div>

          <div className="story-grid">
            {stories.slice(1).map((story, index) => (
              <article className="card" key={story.title} id={story.category.toLowerCase()}>
                <img src={story.image} alt="" />
                <div className="card-body">
                  <span className="category">{story.category}</span>
                  <h3>{story.title}</h3>
                  <p>{story.summary}</p>
                  <div className="meta">By TacoBellMedia • {index + 2} min read</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="newsletter">
          <div>
            <p className="eyebrow">NO SPAM. JUST NEWS.</p>
            <h2>Get the biggest stories in your inbox.</h2>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@example.com" aria-label="Email address" />
            <button>Join the list</button>
          </form>
        </section>
      </main>

      <footer>
        <div className="brand footer-brand">
          <div className="logo-mark">TB</div>
          <strong>TacoBellMedia</strong>
        </div>
        <p>Independent news with extra sauce.</p>
        <p>© 2026 TacoBellMedia</p>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
