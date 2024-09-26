"use strict";
// Function to sum MajorCredits
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MajorCredits'
    };
}
// Function to sum MinorCredits
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MinorCredits'
    };
}
// Example usage:
var major1 = { credits: 30, brand: 'MajorCredits' };
var major2 = { credits: 20, brand: 'MajorCredits' };
var minor1 = { credits: 10, brand: 'MinorCredits' };
var minor2 = { credits: 5, brand: 'MinorCredits' };
var totalMajorCredits = sumMajorCredits(major1, major2);
var totalMinorCredits = sumMinorCredits(minor1, minor2);
console.log('Total Major Credits:', totalMajorCredits); // { credits: 50, brand: 'MajorCredits' }
console.log('Total Minor Credits:', totalMinorCredits); // { credits: 15, brand: 'MinorCredits' }
