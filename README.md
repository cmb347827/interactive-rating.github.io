# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgement](#ackknowledgement)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Project screenshot](https://i.postimg.cc/vTr0vMPJ/Capture.png)

### Links

- Solution URL: [Project github solution](https://github.com/cmb347827/interactive-rating.github.io)
- Live Site URL: [Project live github](https://cmb347827.github.io/interactive-rating.github.io/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Bootstrap
- Sass
- Mobile-first workflow
- Javascript

### What I learned

- I'm new to using SVG graphics, and had to learn how to alter it's size so it made sense with the radio button sizes. It took a while, but eventually figured out how to change the size while maintaining ratio.

- I also struggled with how to access the radio button data in the <em>index.html</em> page from the <em>thanks.html</em> page. First I tried accessing the data from within <em>thanks.html</em> by using classes, but that proved too cumbersome. 

- Then I tried using <code>Jquery.get()</code> as described here: [How to use JS to access another page](https://stackoverflow.com/questions/12899047/how-to-use-javascript-to-access-another-pages-elements)

- but I would get a >"Cross origin requests are only supported for HTTP." message. 

- I looked into using `JSON.stringify`, but that didn't work well either as it returned an empty HTML collection.

- Using `document.querySelector` solved my problem.



### Continued development


### Useful resources

- [SVG stackoverflow](https://stackoverflow.com/questions/8639383/how-do-i-center-an-svg-in-a-div) - Helpful with SVG resizing while maintaing aspect ratios.
- [Pass variables to another HTML page](https://lage.us/Javascript-Pass-Variables-to-Another-Page.html) - Helped figuring out how to access date in one HTML page from another.

## Author

- Website - [One of my codepen projects](https://codepen.io/cynthiab72/pen/oNybYON)
- Frontend Mentor - [cmb347827](https://www.frontendmentor.io/profile/cmb347827)

## Acknowledgement

- [Freecodecamp help](https://forum.freecodecamp.org/t/how-to-access-an-htmlobject-properties-using-json/578428) - Helped me figure out how to access the HTLM data collection.



