# Asioso Microsite

This project is a small React-based microsite focused on digital experience, brand storytelling, and lightweight content exploration.

It was built as part of a frontend technical task, with the goal of keeping the implementation clean, simple, and close to how a real MVP would be structured.

---

## Tech stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Query
- React Router
- Lucide Icons

---

## Getting started

### Clone the repository

```bash
git clone <repo-url>
cd project
Install dependencies
npm install
Create .env file
VITE_NEWS_API_KEY=your_newsapi_key
Run the project
npm run dev

-----


### Landing page
Hero section with a small animated counter
Focus section highlighting key ideas

### News & Trends section

Data fetched from an external API
Category filtering
Load more / load less interaction
Proper handling of loading, error, and empty states
Newsletter form (UI-only with basic validation)
Footer with navigation and basic info

### Article detail page

Each article opens in a separate view
Data is reused from the same query
Shows image, title, metadata, and description
Includes a link to the original article

### Implementation notes
Data handling

The news feed is fetched from an external API and mapped into a custom internal type.
This avoids relying directly on the API response shape and makes the UI easier to control.

### No fallback data

I decided not to include mock or fallback data.
Instead, the UI handles loading, error, and empty states explicitly.
This keeps the behavior straightforward and closer to a real live feed.

### Progressive loading

Only a limited number of articles are shown initially.
More content can be revealed on demand using a “Load more” button, with an option to collapse back.

This helps keep the section easier to scan and avoids overwhelming the user.

### Detail page approach

The detail page reuses the same data query instead of introducing a separate fetch or global state.
For this scope, it keeps things simple while still covering the requirement.

### UI decisions

Cards are structured to keep equal height even with different content lengths
Primary and secondary actions are visually distinct
Sections alternate between light and dark to create some rhythm
Small interactions (hover states, counter animation) were added to make the UI feel more alive

### AI usage

I used AI tools in a controlled way to speed up certain parts of development.

### GitHub Copilot

Used mostly for initial scaffolding of:

Focus cards
News cards
Tabs
News section
Counter component

In all cases, the generated code was adjusted and adapted to fit the design, structure, and behavior needed for this project.

### ChatGPT

Used as a helper for:

Discussing styling decisions and layout consistency
Validating approaches and best practices
Thinking through trade-offs and UX improvements

All final decisions and implementation details were done manually.

### What could be improved

If this was extended further:

Add real backend support for newsletter submissions
Improve article relevance (better filtering or a custom API layer)
Add caching or persistence
Improve accessibility (keyboard navigation, ARIA roles)
Add basic analytics tracking

###Notes

The goal of this project was to keep things clean and realistic for an MVP, without overcomplicating the solution.

-----

## Consulting perspective

From a product and business perspective, this microsite could be further improved in a few key areas:

- **Content relevance**  
  The current news feed relies on a general external API, which results in mixed-quality content.  
  In a real scenario, I would introduce a curated or domain-specific content source to better align with the brand.

- **Newsletter value proposition**  
  The current newsletter is a UI-only feature.  
  In a real product, it should be connected to a backend system and offer clear value (e.g. curated insights, weekly digest).

- **Personalization**  
  The experience is currently static for all users.  
  Introducing basic personalization (e.g. preferred categories or recent interactions) could improve engagement.

- **Analytics and tracking**  
  Adding tracking (e.g. clicks, article engagement, conversions) would provide useful insights for product decisions.

- **Scalability of content**  
  If the amount of content grows, pagination or infinite scroll with better filtering would be needed.

These improvements would move the project from a simple MVP toward a more production-ready product.