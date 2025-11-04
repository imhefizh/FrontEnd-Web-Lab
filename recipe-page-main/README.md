# Frontend Mentor - Recipe page solution

This is a solution to the [Recipe page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/recipe-page-KiTsR8QQKm). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

1. My Screen (1920 x 1080 pixels)

<img src='./screenshots/Screenshot 2025-10-29 170854.png' alt='my-screen' width='500'>

2.  4k Screen (3840 x 2160 pixels)

<img src='./screenshots/127.0.0.1_5500_recipe-page-main_index.html(4k Screen).png' alt='my-screen' width='500'>

3.  Mobile (375 x 667 pixels)

<img src='./screenshots/127.0.0.1_5500_recipe-page-main_index.html(iPhone SE).png' alt='my-screen' width='500'>

### Links

- Solution URL: [Solution URL here](https://github.com/imhefizh/FrontEnd-Lab/tree/main/recipe-page-main)
- Live Site URL: [Live site URL here](https://imhefizh.github.io/FrontEnd-Lab/recipe-page-main)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Media Queries

### What I learned

1. Apparently, I can set rem value by setting up font-size on html selector
2. Apparently, body element is not in `relative` position by default, it's in `static` position
3. `clamp()` is very useful for managing `font-size` property. I can set the minimal, ideal, and maximal value on it.
4. Apparently, I can use `font` property to set all I need for the font. So I combine it with CSS Variable value like `400 1rem "Inter", Arial;`. More efficient. Then, just overwrite the size with `font-size`.
5. Considering `list-style-position` property, either it's `inside` or `outside` is tricky when facing margin or padding. I did it on `outside` value and leverage `margin-left` property for setting up the left margin from the bullet.

### Useful resources

- Github Copilot - It really helped me for understanding specific problem.
- [Tailwind Doc](https://tailwindcss.com/docs/aspect-ratio) - For me checking how some styles works in Vanilla CSS

## Author

- Website - [Maulana Hafidz Ismail](https://maulanahafidz.com)
- Frontend Mentor - [@imhefizh](https://www.frontendmentor.io/profile/imhefizh)

## Acknowledgments

Thanks for FrontEnd Mentor
