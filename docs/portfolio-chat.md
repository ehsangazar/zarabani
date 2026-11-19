# Portfolio chat demo

Run `npm run dev` to try the homepage chat. It also works in the static production build and on GitHub Pages with no additional configuration.

Prepared replies live in `src/utils/portfolioChatDemo.ts`. Questions are matched to portfolio topics; short follow-ups use the previous topic. Suggested questions, typing feedback, source links, and Clear chat work locally. Unsupported questions receive a demo fallback rather than invented answers.

The visible Demo badge and composer note identify this as prepared content, not a live AI integration. Messages exist only in page memory and are never sent to an AI provider or backend. Refreshing, navigating away, or clearing the chat resets the conversation.

Only public portfolio facts are used. Update the demo replies alongside portfolio changes. Full password-protected case studies remain excluded.
