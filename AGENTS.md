# Project architecture

- Keep the Propertybase and Yume Resort presentation systems isolated by route and semantic styling because they are separate brands in one application.
- Store Yume Resort business copy, operational details, and media references in `src/data/content.ts` so every Yume page has one editable source.
- Build Yume interior pages from shared editorial sections while keeping route-specific content and metadata distinct to prevent visual drift and duplicated layout code.