---
layout: default
title: The guide
---

# The guide
## 1. HTML
### 1.1 Use as less elements as possible
Rendering an element takes time. The lower the amount of elements to render, the faster the page will load. Simple, right?

### 1.2 Avoid nesting to many elements
Deep nesting elements does have several disadvantages. It makes your code more complex and thus less readable. On the other hand it decreases performance on page loading and animations. Animations triggers a reflow which will make the browser re-render each parent. And rendering an element takes time.

### 1.3 Keep your scripts at the bottom
Loading scripts while the page isn't entirely loaded blocks a page from displaying correctly. Since scripts are used to enhance the users experience, they shouldn't block the page from loading fast.

Scripts like Modernizr, Selectivizr and Respond.js actually enhance the user expierence, so this actually counts as an exception on this rule.

### 1.4 Don't ever use inline styles
Styles should be placed in a separate layer, you should set all your styles in a separate CSS-file. There is no real life situation where inline style actually make sense.

## 2. CSS
### 2.1 Keep selectors as small as possible
3 items is an ideal maximum length for a CSS selector. For LESS and Sass this means not indenting more then 3 times. This avoids complex CSS and improves performance.

## 3. Javascript