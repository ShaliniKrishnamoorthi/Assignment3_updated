/* 
 * Assignment 3 : My Own Website
 * Author: Shalini Krishnamoorthi
 * Filename: script.js (version 2)
 * Version 1 : 01/27/2015. 
 */


/*Part 1*/
var header_handle = document.querySelector('header');
var footer_handle = document.querySelector('footer');

header_handle.textContent = "Welcome to my website";
footer_handle.textContent = " \u00A9 2015 Shalini Krishnamoorthi. All Rights Reserved"

header_handle.setAttribute('style', 'position:absolute;top:0;color:white;');
footer_handle.setAttribute('style', 'color: white;bottom: 0;position: fixed;z-index:-1;text-align: center;');


/*Part 2*/
console.log("part2");

var job_roles = document.querySelectorAll('.job-roles');
console.log(job_roles.length);

var job_sections = document.querySelectorAll('.job-section');  
var button = [];
var isVisible = [];
for (var i = 0; i < job_sections.length; i++)
{
	button[i] = document.createElement('button');
	button[i].textContent = "Collapse";
	isVisible[i] = true;
	console.log("button created");

	job_sections[i].appendChild(button[i]);
	console.log("button appended");


 	/*Add Event for all the buttons at one shot*/
	(function(n)
	{
		button[n].addEventListener('click',function(evt)
	 	{
	 		console.log('button #'+(n+1)+' was clicked');
	 		console.log("inside add listener : "+isVisible[n]);
	 	 	if(isVisible[n] === true)
	 		{
	 			console.log("collapse now");

	 			job_roles[n].classList.add('hidden');
	 			button[n].textContent = "Expand";
	 			isVisible[n] = false;
	 		}
	 		else
	 		{
	 			console.log("expand now");

	 			job_roles[n].classList.remove('hidden');
	 			button[n].textContent = "Collapse";
	 			isVisible[n] = true;
	 		}
	 	},false);
	})(i);
}
console.log("Outside for loop "+i);

/*Add a Collapse All button, hide all the experiences*/

var buttonAll = document.createElement('button');
buttonAll.textContent="Collapse All";
var isVisibl = true;
console.log("buttonAll created");

var prof_exp = document.querySelector('.hide-experience');
prof_exp.appendChild(buttonAll);
console.log("buttonAll appended");

var all_exp = document.querySelector('.all-experiences');


buttonAll.addEventListener('click',function(evt)
{
	console.log("inside loop");
	if(isVisibl === true)
	{
		console.log("collapse now");
		all_exp.classList.add('hidden');
		buttonAll.textContent = "Expand All";
		isVisibl = false;
	}
	else
	{
		console.log("expand now");
		all_exp.classList.remove('hidden');
		buttonAll.textContent = "Collapse All";
		isVisibl = true;
	}
});