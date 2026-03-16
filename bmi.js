"use strict";
/*******************************************************
 *     bmi.js
 *
 *     Write a small program that calculates the Body Mass Index according to parameters,
 *     given by the user. It should generate a textbased representation like the following:
 *
 *     -----------------------------------------------------
 *     Name:		         :LAST NAME:, :First name:
 *     -----------------------------------------------------
 *     Age:                  :age: Years
 *     Height:		         :size:m (i.e. 1,81m)
 *     Weight:	             :weight: kg
 *     Basal Metabolic Rate: <bmr> kcal
 *     Body Mass Index:	     <bmi>
 *     Normal Weight:        <Yes/No>
 *     Danger:		         <Yes/No>
 *     -----------------------------------------------------
 *
 *     To do so, collect data from your users. Values within :colons: are (formatted) user-inputs;
 *     values within <angle brackets> have to be calculated by your software.
 *
 *     Schachnosa Viertbauer - 2026-03-16
 *******************************************************/

/*
 * TODO: Declare and assign all necessary constants and variables with user input.
 * Make sure, to help your users understand what they need to type in, by using clear prompt-instructions.
 */

const LINE = "-----------------------------------------------------";
let bmr, bmi, normal, danger;

/**
 * Formulas:
 *
 * BMR = A + B × weight [kg] + C × height [cm] − D × age [years]
 *      For women: A=655, B=10, C=2, D=6
 *      For men: A=66, B=14, C=5, D=7
 *
 * BMI = (10000 * weight [kg]) / height² [cm]
 *
 * Normal Weight = Any BMI between 18 and 25 (including 18 and 25).
 * Danger = Any BMI lower than 16 or 30+.
 **/

/*
 * TODO: To calculate the bmr; ask your users which calculation method they would prefer (male or female).
 * Be careful. Users make typos. Make sure that you have a valid answer before moving on.
 */

// TODO: To calculate the bmi, use the given formula with all the input you have collected.
// TODO: Once you have the bmi, determine whether or not the weight is normal and if the condition is dangerous.

/*
 * TODO: Create the correct output from all your data. Make sure to stick to the promised format! NO EXCEPTIONS!
 * You can use \t to add a Tab-Space. Once your program is completed, the output in the browser console should
 * look EXACTLY like the Example-Output above (with different data, of course).
 *
 *  Valid Example:
 *   -----------------------------------------------------
 *   Name:		           NEUWERSCH, Matthias
 *   -----------------------------------------------------
 *   Age:                  35 Years
 *   Height:               1,78m
 *   Weight:               77 kg
 *   Basal Metabolic Rate: 1789 kcal
 *   Body Mass Index:      24.302487059714682
 *   Normal Weight:        Yes
 *   Danger:               No
 *   -----------------------------------------------------
 */

console.log(LINE); // Logs the dashed-line.

/*
 * TODO: Make sure to TEST YOUR SOFTWARE! Does it work, when People are smaller than 1 meter? Or taller than 2?
 * Tip: An 18-Year old Woman, sized 160cm with 60 kg should have a BMR of 1467 kcal and a BMI of 23.4375.
 */

// SOFTWARE :) Start

console.log(LINE);

const sex = prompt("Enter your sex (male/female):").toLowerCase();
const lastName = prompt("Enter your last name:");
const firstName = prompt("Enter your first name:");
const ageInput = prompt("Please enter your age:");
const heightMeters = Number(prompt("Enter your height in meters:"));
const weight = Number(prompt("Enter your weight in kg:"));


if (
    ageInput === null || isNaN(Number(ageInput)) || isNaN(heightMeters) || isNaN(weight) || Number(ageInput) <= 0 || heightMeters <= 0 || weight <= 0
) {
    alert("Invalid input! Please enter valid numbers greater than 0.");
} else {
    const age = Number(ageInput);
    const heightCm = heightMeters * 100; // convert to cm for formulas

    // BMR
    const women = {A: 655, B: 10, C: 2, D: 6};
    const men = {A: 66, B: 14, C: 5, D: 7};

    const {A, B, C, D} = (sex === "female") ? women : men;

    const BMR = A + B * weight + C * heightCm - D * age;

    // BMI
    const BMI = (10000 * weight) / (heightCm * heightCm);

    // Normal
    const normal = (BMI >= 18 && BMI <= 25) ? "Yes" : "No";

    // Danger
    const danger = (BMI < 16 || BMI >= 30) ? "Yes" : "No";

    alert(
        `${LINE}
Name:                   \t\t\t${lastName}, ${firstName}
${LINE}
Age:                    \t\t\t${age} Years
Height:                \t\t\t${heightMeters.toFixed(2)}m
Weight:                 \t\t\t${weight} kg
Basal Metabolic Rate:   \t\t\t${BMR.toFixed(0)} kcal
Body Mass Index:        \t\t\t${BMI.toFixed(2)}
Normal Weight:          \t\t\t${normal}
Danger:                 \t\t\t${danger}
${LINE}`
    );
}