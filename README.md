
# Demo for CSS Color Palettes

## oklch() Color Function Level 4

<p align="center">
    <img src="./assets/oklch-app.jpg?raw=true" alt="Screenshot of the app">
</p>


My personal start in order to try to simplify my workflow for creating color palettes by using the oklch() color function. Based on the Youtube GUI Challenge by **Adam Argyleink** ([Youtube-Link](https://www.youtube.com/watch?v=6aCsAMgwnjE)) and recommendations for color palettes by **Jordan Bowman** ([Youtube-Link](https://www.youtube.com/watch?v=yYwEnLYT55c)). This demo contains some dummy areas like a navbar, a hero section and several cards which are influenced by the color choice represented by the hue-value.
For now it is possible to check the prefered color scheme (light or dark) by toogling the common rendering emulations under the dev tools.



## What is oklch()?

One of the new CSS color Level 4 functions is the oklch() function which uses the Oklch cylindrical coordinate model. It is specified by Oklab Lightness in percent, by an radius representing chroma and an hue angle. The opacity can be set additionally.

`oklch(Lightness Chroma Hue / Opacity)`

- [W3 Specification](https://www.w3.org/TR/css-color-4/#funcdef-oklch)
- [OKLCH in CSS by Andrey Sitnik & Travis Turner](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)
- [OKLCH Color Picker & Converter by Andrey Sitnik & Roman Shamin](https://oklch.com/#70,0.1,340,100)


## Create Your Color-Palettes

As recommended by **Jordan Bowman**, colors used in webprojects are distinguished in brand, accent and supporting colors.

- **Brand Colors**: should be used for buttons, links, navigation and icons.
- **Accent Colors**: recommended for headlines and design elements.
- **Supporting Colors**: which should be used for feedbacks to an user like success or error messages.

Not mentioned, but very useful, are neutral colors like white and black and different shades of grey, which should be used as supporting colors to the design of an application.

Opacity was not taken into account in this project at this point.
