// Challenge 1.1: Access the HTML section element with the id "container" using the getElementbyId method and change the background color of it.
document.getElementById('container').style.color = 'blue';

// Challenge 1.2: Access the div with the id "header" using the querySelector method and change the text content to "These are the DOM Methods".
var div = document.querySelector('#header');
console.log(div);
div.textContent = 'These are the DOM Methods';
// Challenge 1.3: Access all the elements with the class "dom-methods" using the method getElementsByClassName and change the text color to "red". Hint: Use for loop
var element = document.getElementsByClassName('dom-methods');
console.log(element);
for (var i = 0; i < element.length; i++) {
  element[i].style.color = 'red';
}

// Challenge 1.4: Access all the elements with the class "dom-methods" using the method querySelectorAll and change the font size to 20px". Hint: Use for loop
var E = document.querySelectorAll('#dom-methods');
console.log(E);
for (var i = 0; i < E.length; i++) {
  E[i].style.fontsize = '20px';
}

// Challenge 2.1: Create a new element <div> and append it to the body tag and append the string "Division" inside the newly created <div> using textContent.
var C = document.createElement('div');
document.body.appendChild(C);
console.log(C);
C.textContent = 'Division';
console.log(C);

// Challenge 2.2: Add id "main" using setAttribute method to the newly created <div> element. Print the id "main" using the getAttribute method.
C.setAttribute('id', 'main');
console.log(C.getAttribute('id'));

// Challenge 2.3: Add the text content "This is a division" inside the div with id "main" using innerHTML.
var A = document.getElementById('main');
A.innerHTML = 'This is a division';
console.log(A);

// Challenge 2.4: Create a new element <p> and append it to the div with id "main" and append the string "This is a paragraph tag" inside the <p> tag using the innerText.
// Hint: First access the id "main" using document.getElementById and then append the new element <p> tag.

var P = document.getElementById('main');
var CreateP = document.createElement('p');
CreateP.innerText = 'This is a paragraph tag';
P.appendChild(CreateP);

// Challenge 2.5: Remove the class "footer" using classList and add the new class "dom-method-footer". If your footer text color changes to aqua blue you are right.
var footerElement = document.querySelector('.footer');
footerElement.classList.remove('footer');
footerElement.classList.add('dom-method-footer');

// Challenge 2.6: Set the color of the <p> text as red using DOM manipulation.
CreateP.style.color = 'red';
// Challenge 2.7: Remove the div with a class "copyright" using the removeAttribute method.
var d = document.querySelector('.copyright');
d.removeAttribute('class');
