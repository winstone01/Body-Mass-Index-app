# BMI Calculator

An interactive Body Mass Index calculator built with HTML, CSS and vanilla JavaScript. Move the weight and height sliders to calculate a BMI value and display its category instantly.

## Features

- Adjustable weight slider from 20 kg to 200 kg
- Adjustable height slider from 100 cm to 250 cm
- Live weight and height values
- Automatic BMI calculation while either slider moves
- BMI result rounded to one decimal place
- Classification as Underweight, Normal Weight, Over Weight or Obese
- Clean card layout with a green gradient background
- Custom-styled range sliders

## Built With

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts: Oswald and Smooch Sans

## How It Works

Each range input calls the `calculate()` function when its value changes. The function:

1. Reads the current weight and height from the DOM.
2. Updates the displayed values in kilograms and centimetres.
3. Converts height from centimetres to metres.
4. Calculates BMI with the formula:

```text
BMI = weight (kg) / height² (m)
```

5. Rounds the result to one decimal place.
6. Uses conditional statements to display the matching BMI category.

## BMI Categories

| BMI | Category |
| --- | --- |
| Below 18.5 | Underweight |
| 18.5–24.9 | Normal Weight |
| 25.0–29.9 | Over Weight |
| 30.0 and above | Obese |

## Run Locally

1. Download or clone the project.
2. Keep `index.html`, `style.css` and `script.js` in the same folder.
3. Open `index.html` in a web browser.
4. Move the sliders to calculate a BMI.

No installation or build tools are required.

## Project Structure

```text
bmi-calculator/
├── index.html
├── style.css
├── script.js
└── README.md
```

## What I Practised

- Selecting elements with `getElementById()`
- Reading input values from the DOM
- Responding to live `input` events
- Updating content with `textContent`
- Converting strings into numbers with `parseInt()`
- Using `Math.pow()` and `toFixed()`
- Applying `if...else if...else` conditions
- Styling range inputs and slider thumbs
- Building a centred interface with Flexbox

## Future Improvements

- Add a reset button
- Colour-code each BMI category
- Add keyboard-friendly labels and output announcements
- Display the healthy weight range for the selected height
- Improve the layout for very small mobile screens
- Separate event handling from the HTML

## Health Notice

This calculator is a learning project and provides a general BMI estimate only. BMI does not account for factors such as muscle mass, age or individual health circumstances, and it should not replace professional medical advice.

## Author

Created by [Winstone Anderson](https://github.com/winstone01).

## Licence

This project is available for learning and personal use.
