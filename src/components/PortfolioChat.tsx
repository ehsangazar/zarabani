import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './portfolio-chat.css'
import { getDemoReply, type DemoTopic } from '../utils/portfolioChatDemo'

type Source = { id: string; title: string; url: string }
type Message = { role: 'user' | 'assistant'; content: string; sources?: Source[] }
const suggestions = ['What is Zara’s experience with AI?', 'Tell me about her Altrata work', 'How does she approach a design problem?']

export default function PortfolioChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [question, setQuestion] = useState('')
  const [busy, setBusy] = useState(false)
  const input = useRef<HTMLTextAreaElement>(null)
  const conversation = useRef<HTMLDivElement>(null)
  const pending = useRef<number | null>(null)
  const topic = useRef<DemoTopic | undefined>(undefined)
  useEffect(() => () => { if (pending.current !== null) window.clearTimeout(pending.current) }, [])
  useEffect(() => {
    if (conversation.current) conversation.current.scrollTop = conversation.current.scrollHeight
  }, [messages, busy])

  function send(value: string) {
    const content = value.trim()
    if (!content || content.length > 1000 || pending.current !== null) return
    const reply = getDemoReply(content, topic.current)
    topic.current = reply.topic
    setMessages(previous => [...previous, { role: 'user', content }])
    setQuestion(''); setBusy(true)
    pending.current = window.setTimeout(() => {
      setMessages(previous => [...previous, { role: 'assistant', content: reply.answer, sources: reply.sources }])
      pending.current = null; setBusy(false); input.current?.focus()
    }, 650)
  }

  return <section className="portfolio-chat ms-section" aria-labelledby="chat-title">
    <div className="portfolio-chat__intro">
      <p className="ms-eyebrow"><span aria-hidden="true">✳</span> A different way to explore</p>
      <h2 id="chat-title">Curious about<br /> my work? Just ask.</h2>
      <p>Get to know my experience, projects and approach through a conversation with my AI portfolio assistant.</p>
      <Link to="/contact" className="ms-text-link">Prefer a human? Let’s talk <span aria-hidden="true">↗</span></Link>
    </div>
    <div className="portfolio-chat__panel">
      <div className="portfolio-chat__header"><div><span className="portfolio-chat__mark" aria-hidden="true">✳</span><strong>Zara’s portfolio assistant</strong><span className="portfolio-chat__badge">Demo</span></div>
        {messages.length > 0 && <button type="button" disabled={busy} onClick={() => { setMessages([]); topic.current = undefined; setQuestion(''); input.current?.focus() }}>Clear chat</button>}
      </div>
      <div className="portfolio-chat__conversation" ref={conversation} role="log" aria-label="Conversation with portfolio assistant" aria-live="polite" aria-relevant="additions text">
        {messages.length === 0 && <div className="portfolio-chat__welcome"><p>Hi, I’m Zara’s portfolio assistant.</p><p>Ask me about her work, how she thinks, or the experience she could bring to your team.</p></div>}
        {messages.map((message, index) => <article key={index} className={`portfolio-chat__message portfolio-chat__message--${message.role}`}><span className="portfolio-chat__speaker">{message.role === 'user' ? 'You' : 'Portfolio assistant'}</span><p>{message.content}</p>
          {!!message.sources?.length && <div className="portfolio-chat__sources" aria-label="Portfolio sources">{message.sources.map(source => <Link key={source.id} to={source.url}>{source.title} ↗</Link>)}</div>}
        </article>)}
        {busy && <p className="portfolio-chat__thinking" role="status">Preparing a reply…</p>}
      </div>
      {messages.length === 0 && <div className="portfolio-chat__suggestions">{suggestions.map(suggestion => <button type="button" key={suggestion} disabled={busy} onClick={() => void send(suggestion)}>{suggestion} <span aria-hidden="true">↗</span></button>)}</div>}
      <form className="portfolio-chat__form" onSubmit={event => { event.preventDefault(); void send(question) }}>
        <label htmlFor="portfolio-question">Your question</label>
        <div className="portfolio-chat__composer"><textarea id="portfolio-question" ref={input} rows={2} maxLength={1000} value={question} readOnly={busy} placeholder="Ask about my work…" aria-describedby="chat-privacy" onChange={event => setQuestion(event.target.value)} onKeyDown={event => { if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); void send(question) } }} /><button type="submit" disabled={busy || !question.trim()} aria-label="Send question">{busy ? '…' : '↑'}</button></div>
        <p id="chat-privacy">Demo with prepared answers from my public portfolio. Messages stay in this page and aren’t sent to an AI service.</p>
      </form>
    </div>
  </section>
}
