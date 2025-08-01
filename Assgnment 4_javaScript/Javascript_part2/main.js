/**
 * Name: Hamza Mohamed
 * File: Assignment 4 Part 2
 * Description:Image gallary part 2 Assignment 4 
 * Date:July 2025
 */


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"];
/* Declaring the alternative text for each image file */
const imgAlts = [
  {"pic1": "Closeup of a blue human eye"},
  {"pic2": "A Rock in the shape of a wave"}, 
  {"pic3": "White and purple pansies"}, 
  {"pic4": "section of a wall from pharoah's tomb"}, 
  {"pic5": "closeup of moth on a leaf"}

];
/* Looping through images */




const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
