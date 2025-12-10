# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

1. My Screen (1920 x 1080 pixels)

<img src='./screenshots/127.0.0.1_5500_newsletter-sign-up-with-success-message-main_index.html(Laptop HD).png' alt='my-screen' width='500'>

2.  4k Screen (3840 x 2160 pixels)

<img src='./screenshots/127.0.0.1_5500_newsletter-sign-up-with-success-message-main_index.html(4K UHD Monitor).png' alt='my-screen' width='500'>

3.  Mobile (375 x 667 pixels)

<img src='./screenshots/127.0.0.1_5500_newsletter-sign-up-with-success-message-main_index.html(iPhone 6_7_8).png' alt='my-screen' width='300'>

### Links

- Solution URL: [Solution URL](https://github.com/imhefizh/FrontEnd-Lab/tree/main/newsletter-sign-up-with-success-message-main)
- Live Site URL: [Live site URL](https://imhefizh.github.io/FrontEnd-Lab/newsletter-sign-up-with-success-message-main)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

1. Apparently, I could custom autofill browser behavior with state `-webkit-autofill`. But I still can't custom the background, the only thing I can custom is just making the background transparent with `transition: background-color 5000s ease-in-out 0s;` trick
2. Using `dialog` element to make pop-up notification. It is better than using plain `div` because it has better accessibility feature, default API for notification, etc.
3. Apparently, applying `display` style to `<dialog>` would overwrite it's default behavior on `open` attribute. I was suggested to make wrapper element fot the content to address this.

### Useful resources

- Github Copilot - It really helped me for understanding specific problem.
- [Tailwind Doc](https://tailwindcss.com/docs/aspect-ratio) - For me checking how some styles works in Vanilla CSS

## Author

- Website - [Maulana Hafidz Ismail](https://maulanahafidz.com)
- Frontend Mentor - [@imhefizh](https://www.frontendmentor.io/profile/imhefizh)

## Acknowledgments

Thanks for FrontEnd Mentor
