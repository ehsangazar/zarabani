import type { ReactNode } from 'react'
import Icon from '../../../components/Icon'

export interface BlogPostMetadata {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: number
  tags: string[]
  featuredImage?: string
}

export interface BlogPostComponent {
  metadata: BlogPostMetadata
  content: ReactNode
}

// Blog post: The Psychology Behind TikTok's Irresistible Notifications
export const TikTokNotificationsPersuasiveDesign: BlogPostComponent = {
  metadata: {
    slug: 'tiktok-notifications-persuasive-design',
    title: 'The Psychology Behind TikTok\'s Irresistible Notifications: A UX Designer\'s Analysis',
    excerpt: 'I started paying attention to TikTok\'s notifications and realized they\'re not just alerts—they\'re carefully crafted psychological triggers. Here\'s what I learned as a UX designer about persuasive design, FOMO, and the fine line between engagement and manipulation.',
    author: 'Zara Bani',
    date: '2026-01-09',
    readTime: 10,
    tags: ['UX Design', 'Persuasive Design', 'Psychology', 'Social Media', 'Dark Patterns'],
    featuredImage: '/blog/tiktok-thumbnail.png'
  },
  content: (
    <div className="blog-content">
      <section className="mb-12">
        <p className="text-xl leading-relaxed text-primary-dark/80 mb-6">
          I've been getting TikTok notifications for months. Like most people, I'd glance at them, swipe them away, or tap to open the app. But recently, as a UX designer, I started paying closer attention—and I realized something unsettling.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/70 mb-6">
          These aren't just notifications. They're carefully engineered psychological triggers designed to pull you back into the app, no matter what you're doing. And they're really, <em>really</em> good at it.
        </p>
        <p className="text-lg leading-relaxed text-primary-dark/70 mb-6">
          So I started collecting examples. I documented every notification I received for a week, and what I found was a masterclass in persuasive design—for better or worse.
        </p>
      </section>

      <section className="mb-12" id="personalization">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">1. Personalization That Feels Like a Friend</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <img 
            src="/case-studies/Article/tiktok-post/Screenshot 2026-01-09 at 21.07.50.png" 
            alt="TikTok notification saying 'Good afternoon, Zara f...'"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-sm text-primary-dark/60 italic text-center">
            "Good afternoon, Zara f..." - TikTok greets you like a friend
          </p>
        </div>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          The first thing I noticed: TikTok addresses me by name. Not just in the notification content, but in the greeting itself. "Good afternoon, Zara" or "Good night, Zara frame."
        </p>
        
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          This isn't new—email marketing has done this for years. But when it appears on your lock screen, mixed in with messages from actual friends, it <em>feels</em> different. It feels personal. It feels like someone is talking to you, not <em>at</em> you.
        </p>

        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6">
          <h3 className="font-bold text-primary-dark mb-2">The Psychology:</h3>
          <p className="text-primary-dark/80">
            When we see our own name, our brain lights up. It's called the "cocktail party effect"—even in a noisy room, we'll hear someone say our name. By personalizing notifications with your first name and matching them to the time of day, TikTok creates a sense of intimacy that makes the notification harder to ignore.
          </p>
        </div>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          As designers, we know personalization increases engagement. But there's a line between helpful customization and manufactured intimacy. TikTok walks that line carefully—and sometimes crosses it.
        </p>
      </section>

      <section className="mb-12" id="curiosity-gaps">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">2. Curiosity Gaps You Can't Resist</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <img 
            src="/case-studies/Article/tiktok-post/Screenshot 2026-01-09 at 21.07.36.png" 
            alt="TikTok notification: CAUGHT ON CAMERA! Something strange is happening..."
            className="w-full rounded-lg mb-4"
          />
          <p className="text-sm text-primary-dark/60 italic text-center">
            "CAUGHT ON CAMERA! Something strange is happening in th..." - The text cuts off at just the right moment
          </p>
        </div>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          This one got me. "CAUGHT ON CAMERA! Something strange is happening in th..."
        </p>
        
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Notice how the text cuts off? That's not an accident. It's a deliberate use of what's called a "curiosity gap"—the space between what you know and what you want to know.
        </p>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-4">
          TikTok uses several curiosity tactics:
        </p>
        <ul className="space-y-3 mb-8 text-primary-dark/80 ml-6">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span><strong>Incomplete information:</strong> The text cuts off mid-sentence, creating a cliffhanger</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span><strong>Sensationalized language:</strong> "CAUGHT ON CAMERA!" uses all caps and urgent phrasing</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span><strong>Mystery framing:</strong> "Something strange" is vague enough to apply to anyone's interests</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span><strong>Visual preview:</strong> The thumbnail shows just enough to intrigue, not enough to satisfy</span>
          </li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6">
          <h3 className="font-bold text-primary-dark mb-2">The Psychology:</h3>
          <p className="text-primary-dark/80">
            Our brains hate incomplete information. Psychologist George Loewenstein called this the "information gap theory"—when we perceive a gap between what we know and what we want to know, we feel compelled to close that gap. TikTok weaponizes this by deliberately withholding just enough information to make you tap.
          </p>
        </div>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          From a UX perspective, this is brilliant—and ethically questionable. Yes, it gets clicks. But is the content ever as interesting as the notification promised? Usually not. That's the bait-and-switch that starts to feel manipulative.
        </p>
      </section>

      <section className="mb-12" id="social-proof">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">3. Social Proof and FOMO</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <img 
            src="/case-studies/Article/tiktok-post/Screenshot 2026-01-09 at 21.07.44.png" 
            alt="TikTok notification: 5 boys 2 girls - Search for this you may like"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-sm text-primary-dark/60 italic text-center">
            "5 boys 2 girls" - "Search for this you may like"
          </p>
        </div>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          This notification is deceptively simple: "5 boys 2 girls" with the message "Search for this you may like."
        </p>
        
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          What TikTok is really saying is: <em>"Other people are watching this. You might be missing out."</em>
        </p>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          This leverages two powerful psychological principles:
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-warm/10 p-6 rounded-lg">
            <h3 className="font-bold text-primary-dark mb-3">Social Proof</h3>
            <p className="text-primary-dark/80">
              If other people are interested in something, it must be worth our attention. TikTok doesn't explicitly say "millions are watching this," but by suggesting you search for it, they imply it's trending or popular.
            </p>
          </div>

          <div className="bg-warm/10 p-6 rounded-lg">
            <h3 className="font-bold text-primary-dark mb-3">FOMO (Fear of Missing Out)</h3>
            <p className="text-primary-dark/80">
              The phrase "you may like" is key. It's not "you <em>will</em> like"—it's "may." That uncertainty keeps you guessing. What if you miss something everyone else is talking about? What if this is the next viral trend?
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          As a designer, I've used social proof in my work—showing how many people have signed up, highlighting trending items. But there's a difference between transparent social proof ("1,234 people viewed this") and implied FOMO that's designed to make you feel like you're behind.
        </p>
      </section>

      <section className="mb-12" id="emotional-triggers">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">4. Emotional Triggers That Hit Different</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <img 
              src="/case-studies/Article/tiktok-post/Screenshot 2026-01-09 at 21.07.57.png" 
              alt="TikTok notification with emotional reunion content"
              className="w-full rounded-lg mb-3"
            />
            <p className="text-sm text-primary-dark/60 italic text-center">
              "After 2 years, we finally reunited in our home country ❤️🇱🇰😭"
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <img 
              src="/case-studies/Article/tiktok-post/Screenshot 2026-01-09 at 21.08.04.png" 
              alt="TikTok notification with humor"
              className="w-full rounded-lg mb-3"
            />
            <p className="text-sm text-primary-dark/60 italic text-center">
              "😂😂😂That one friend"
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          TikTok doesn't just send you content—it sends you <em>feelings</em>.
        </p>
        
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Look at these notifications. One is about a reunion after 2 years (❤️🇱🇰😭)—heartwarming, nostalgic, emotional. The other is relatable humor ("😂😂😂That one friend"). Both are designed to trigger specific emotional responses:
        </p>

        <ul className="space-y-4 mb-8 text-primary-dark/80 ml-6">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">→</span>
            <span><strong>Emotional content:</strong> Reunions, milestones, touching moments make you feel something</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">→</span>
            <span><strong>Relatable humor:</strong> "That one friend" speaks to shared experiences—you probably know exactly what they mean</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">→</span>
            <span><strong>Liberal emoji use:</strong> Emojis amplify emotion and make the notification feel more human, less robotic</span>
          </li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6">
          <h3 className="font-bold text-primary-dark mb-2">The Psychology:</h3>
          <p className="text-primary-dark/80">
            Emotions drive action more than logic. When we're moved by something—whether it's joy, nostalgia, or laughter—we're more likely to engage. TikTok's algorithm learns what emotions get <em>you</em> specifically to click, then serves up more notifications that hit those same emotional buttons.
          </p>
        </div>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          This is where personalization gets really sophisticated. TikTok isn't just learning what topics you like—it's learning what <em>feelings</em> make you open the app.
        </p>
      </section>

      <section className="mb-12" id="timing">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">5. Perfect Timing, Every Time</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <img 
            src="/case-studies/Article/tiktok-post/Screenshot 2026-01-09 at 21.08.10.png" 
            alt="TikTok notification at night"
            className="w-full rounded-lg mb-4"
          />
          <p className="text-sm text-primary-dark/60 italic text-center">
            "Good night, Zara frame" - Sent at 21:52, right when you're winding down
          </p>
        </div>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Notice the timestamps on these notifications? "Good afternoon, Zara" at 19:04. "Good night, Zara" at 21:31 and 21:52.
        </p>
        
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          TikTok doesn't just send notifications randomly—it learns <em>when</em> you're most likely to engage. If you usually check TikTok during your lunch break, that's when you'll get notifications. If you tend to scroll before bed, you'll get "Good night" messages with calming travel content or feel-good stories.
        </p>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          This is behavioral conditioning at its finest. The app is training you to associate certain times of day with TikTok. Over time, you might start reaching for the app at those times <em>even without a notification</em>.
        </p>

        <div className="bg-blue-50 border-l-4 border-primary p-6 mb-6">
          <h3 className="font-bold text-primary-dark mb-2">The Psychology:</h3>
          <p className="text-primary-dark/80">
            This is operant conditioning—the same principle used to train animals. By consistently rewarding behavior (scrolling TikTok) at specific times with dopamine hits (entertaining content), the app creates habits. Eventually, the behavior becomes automatic.
          </p>
        </div>
      </section>

      <section className="mb-12" id="designer-reflection">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">So... Is This Ethical?</h2>
        
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Here's where I struggle as a designer.
        </p>
        
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Everything I've described is <em>effective</em>. TikTok's notifications work. They get people to open the app. They drive engagement. They build habits.
        </p>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          But effectiveness isn't the same as ethics.
        </p>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          When I design products, I ask myself:
        </p>

        <ul className="space-y-4 mb-8 text-primary-dark/80 ml-6">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span>Am I helping users achieve their goals, or my business's goals?</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span>Am I being transparent about what I'm doing, or am I manipulating behavior?</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span>Would users still choose this if they understood how it works?</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold mt-1">•</span>
            <span>Am I respecting users' time and attention, or exploiting their psychological vulnerabilities?</span>
          </li>
        </ul>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          TikTok's notification design is a masterclass in persuasion. But persuasion becomes manipulation when it prioritizes business metrics over user wellbeing. And honestly? A lot of these notifications cross that line.
        </p>

        <div className="bg-warm/20 border-l-4 border-warm p-6 mb-6">
          <h3 className="font-bold text-primary-dark mb-3">The Dark Pattern Question</h3>
          <p className="text-primary-dark/80 mb-3">
            Dark patterns are design tricks that make you do things you didn't mean to do. TikTok's notifications aren't quite dark patterns—you <em>can</em> turn them off—but they exist in a gray area.
          </p>
          <p className="text-primary-dark/80">
            They're designed to exploit psychological vulnerabilities (FOMO, curiosity, habit formation) in ways that benefit TikTok more than they benefit you. That's uncomfortable to acknowledge as a designer, but it's important that we do.
          </p>
        </div>
      </section>

      <section className="mb-12" id="what-designers-can-learn">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">What We Can Learn (Without Crossing the Line)</h2>
        
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          I'm not saying we should never use these techniques. Personalization, emotional design, and well-timed engagement can all be used ethically. But we need to be intentional about <em>how</em> and <em>why</em> we use them.
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-green-50 border-l-4 border-green-600 p-6">
            <h3 className="font-bold text-primary-dark mb-3 flex items-center gap-2"><Icon name="check_circle" size={1.5} className="text-green-600" /> Good Use: Personalization That Helps</h3>
            <p className="text-primary-dark/80">
              <strong>Example:</strong> A meditation app sends you a notification at the time you usually meditate: "Ready for your evening practice?"
            </p>
            <p className="text-primary-dark/80 mt-2">
              <strong>Why it works:</strong> It supports a habit the user <em>wants</em> to build, using personalization to make the product more useful.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6">
            <h3 className="font-bold text-primary-dark mb-3 flex items-center gap-2"><Icon name="cancel" size={1.5} className="text-red-600" /> Bad Use: Personalization That Exploits</h3>
            <p className="text-primary-dark/80">
              <strong>Example:</strong> A shopping app notices you browse late at night when you're tired and vulnerable, so it sends notifications at 11 PM with "LAST CHANCE!" messaging.
            </p>
            <p className="text-primary-dark/80 mt-2">
              <strong>Why it's problematic:</strong> It exploits a moment of weakness to drive impulse purchases, not genuine need.
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          The difference? <strong>Intent</strong> and <strong>respect</strong>. Are you using psychology to help users achieve their goals, or to override their judgment?
        </p>
      </section>

      <section className="mb-12" id="final-thoughts">
        <h2 className="text-3xl font-bold text-primary-dark mb-6">Final Thoughts</h2>
        
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          TikTok's notifications are incredibly well-designed. They use personalization, curiosity gaps, emotional triggers, social proof, and perfectly timed delivery to create an experience that's almost impossible to resist.
        </p>
        
        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          As a designer, I'm impressed by the execution. But as a human, I'm concerned about the implications.
        </p>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          We have the power to shape behavior through design. That's a responsibility, not just a skill. Every time we add a notification, write microcopy, or tune an algorithm, we're making choices about what kind of relationship our product will have with its users.
        </p>

        <p className="text-lg leading-relaxed text-primary-dark/80 mb-6">
          Let's choose to build products that respect people's time, attention, and autonomy—not products that exploit their vulnerabilities for engagement metrics.
        </p>

        <div className="bg-gradient-to-br from-warm/20 to-primary/10 p-8 rounded-xl border border-primary/20 mt-8">
          <h3 className="text-xl font-bold text-primary-dark mb-4">Questions for Reflection</h3>
          <ul className="space-y-3 text-primary-dark/80">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>What notifications do you find yourself unable to ignore? What makes them effective?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>As designers, where do we draw the line between persuasion and manipulation?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>How can we use these psychological principles ethically in our own work?</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-16 bg-gradient-to-br from-primary to-primary-dark text-white p-10 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Let's discuss this</h2>
        <p className="text-xl mb-8 text-white/90">
          I'd love to hear your thoughts on persuasive design and ethical UX
        </p>
        <a
          href="https://www.linkedin.com/in/zara-bani-95a0991a8/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-warm/40 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Connect on LinkedIn
        </a>
      </section>
    </div>
  )
}

