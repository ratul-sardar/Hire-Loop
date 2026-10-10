<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# UI & Code Architecture Guidelines

## 1. shadcn/ui Component Rules & Composition
* **Use Existing Components First:** Check `@/components/ui` or run `npx shadcn@latest search` before building custom UI.
* **Compose, Don't Reinvent:** 
  * Use `Separator` instead of `<hr>` or styled border `div`s.
  * Use `Badge` instead of custom styled `<span>` tags.
  * Use `Skeleton` for loading states and `Alert` for callouts.
  * Use `sonner` (`toast()`) for toast notifications.
* **Full Card Composition:** Always use full composition (`CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`). Never dump everything inside `CardContent`.
* **Button Loading States:** `Button` has no `isPending` or `isLoading` prop. Compose using `<Spinner />` (or Lucide loader icon) + `disabled`.
* **Required Wrappers & Fallbacks:**
  * `TabsTrigger` MUST be rendered inside `TabsList`.
  * `Avatar` MUST always include an `AvatarFallback`.
  * Items (`SelectItem`, `DropdownMenuItem`, `CommandItem`) MUST be inside their respective Group containers.
* **Accessibility Titles:** `Dialog`, `Sheet`, and `Drawer` MUST always include a `Title` component (`DialogTitle`, etc.) for screen readers. Use `className="sr-only"` if visually hidden.

## 2. Styling & Tailwind CSS Best Practices
* **Semantic Theme Tokens:** Never hardcode raw color utilities like `bg-blue-500` or `text-gray-400`. Use semantic tokens (`bg-primary`, `text-muted-foreground`, `bg-background`, `border-border`, etc.) to support light and dark mode out of the box.
* **Flexbox Gap over Space Utilities:** Do NOT use `space-x-*` or `space-y-*` (they break on flex-wrap and conditional rendering). Use `flex flex-col gap-*` or `flex gap-*` instead.
* **Sizing Utilities:** Use `size-*` when width and height are equal (e.g., `size-4`, `size-10`) instead of `w-4 h-4`.
* **Class Merging (`cn` Utility):** Always wrap dynamic or merged tailwind classes using the project's utility `cn(...)` from `@/lib/utils`.
* **Icons:** Do not pass hardcoded sizing utilities to icons inside shadcn components that already manage icon sizes via CSS. Prefer `lucide-react` icons.

## 3. Overlay Component Choice Guide
| Use Case | Component |
| :--- | :--- |
| Focused task or input requiring user action | `Dialog` |
| Destructive action confirmation | `AlertDialog` |
| Contextual side panel with details or filters | `Sheet` |
| Mobile-first bottom drawer panel | `Drawer` |
| Quick contextual info on hover / click | `HoverCard` / `Popover` |

## 4. Code Quality & Token Efficiency
* **Concise Diffs:** Provide clean, actionable code updates instead of outputting entire unmodified files.
* **TypeScript Rigor:** Use strict typing, proper props interfaces, and no implicit `any`.
* **Server vs. Client Components:** Default to Next.js React Server Components (RSC). Only mark components with `"use client"` when interactivity (`useState`, `useEffect`, event listeners) is required.
