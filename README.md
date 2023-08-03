# adaptive-cards-test
This is the test application built in the weeks 2 and 3 of Microsoft Dublin 2023 internship.

# How to run?
Clone the repository on your computer. <br>
Open the project using your preferred IDE (I personally used Visual Studio Code). <br>
Open a new terminal and run command <code>npm start</code>. <br>
This will run the project locally on port 8080, so to access it open your preferred browser and go to "http://localhost:8080/". <br>

<br>
Congrats! Now you should be able too see the beautifully rendered and styled Adaptive Cards.

# How it works?
Using the adaptive cards framework (https://adaptivecards.io/), I have created two adaptive cards, one representing the default badge and one representing the Microsoft badge. Without any styling, they render like this: <br>

![image](https://github.com/alexandracarutasu2/adaptive-cards-test/assets/138585227/7b7bedf8-b542-4de7-8893-713cca43a5af)
*default badge* <br>

![image](https://github.com/alexandracarutasu2/adaptive-cards-test/assets/138585227/b80e147f-7a0b-49f8-9f9c-fee77e1bf625)
*Microsoft badge*<br>

<br>

For the JavaScript SDK, Adaptive Cards framework supports native styling using CSS. Using CSS, I was able to easily achieve the desired results: <br> 

![image](https://github.com/alexandracarutasu2/adaptive-cards-test/assets/138585227/83457017-f6d5-4e88-9f15-8b27b4b1cdf9) 
*default badge, styled using CSS* <br>


![image](https://github.com/alexandracarutasu2/adaptive-cards-test/assets/138585227/70a625f4-d30d-460c-944c-35dac73d827f)
*Microsoft badge, styled using CSS* <br>

The cards are populated with live data in JavaScript, another great advantage. <br>

<br>

# Summary

I have created for each type of card a "styles.css" file. However, it would not be impossible to use the same "styles.css" file for both of them, but that would imply carefully separating the elements by ID if we want to have different styling for each card. <br>
That being said, the Adaptive Cards framework proves to be very useful in creating a template for a card we would like to use, but shows lack of possibility of styling. However, using the JavaScript SDK, we are able to style them to our liking and achieve the desired design.

