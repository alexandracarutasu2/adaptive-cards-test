# adaptive-cards-test
This is the application built in the weeks 2 and 3 of Microsoft Dublin 2023 internship for the purpose of testing the feasibility of using Adaptive Cards as a way to introduce personalized cards for Verifiable Credentials. For the purpose of the project, it was necessary to try out two types of cards: a Microsoft badge-like card and a default card. <br>

# How to run?
Clone the repository on your computer. <br>
Open the project using your preferred IDE (I personally used Visual Studio Code). <br>
Open a new terminal and run command <code>npm start</code>. <br>
This will run the project locally on port 8081, so to access it open your preferred browser and go to "http://localhost:8081/". <br>

<br>
Congrats! Now you should be able too see the beautifully rendered and styled Adaptive Cards.

# How it works?
Using the adaptive cards framework (https://adaptivecards.io/), I have created two Adaptive Cards templates, one representing the default badge and one representing the Microsoft badge. Without any styling, they render like this: <br>

![image](https://github.com/alexandracarutasu2/adaptive-cards-test/assets/138585227/7b7bedf8-b542-4de7-8893-713cca43a5af)
*default badge* <br>

![image](https://github.com/alexandracarutasu2/adaptive-cards-test/assets/138585227/b80e147f-7a0b-49f8-9f9c-fee77e1bf625)
*Microsoft badge*<br>

<br>

For the JavaScript SDK, Adaptive Cards framework supports native styling using CSS. Using CSS, I was able to easily achieve the desired results: <br> 

![image](https://github.com/alexandracarutasu2/adaptive-cards-test/assets/138585227/83457017-f6d5-4e88-9f15-8b27b4b1cdf9) 
<br>
*default badge, styled using CSS* <br>


![image](https://github.com/alexandracarutasu2/adaptive-cards-test/assets/138585227/70a625f4-d30d-460c-944c-35dac73d827f)
<br>
*Microsoft badge, styled using CSS* <br>

<br>

# How can you create your own type of card?

Everything related to the styling, creation and rendering of the card is found in the `index.html` file. Navigate to that file and find the `<body>`, where the creation and rendering of the card takes place in the `<script>` tage, using JavaScript and the `<head>`, with the `<style>`, which uses CSS and will apply styling to your card. <br>
## Creation of template
Firstly, you will have to create a template for you card using the Adaptive Cards Designer (https://adaptivecards.io/designer/). This template will replace the previously declared template in the code, as shown below:
![image](https://github.com/alexandracarutasu2/adaptivecards/assets/138585227/dee91df0-ad7a-47af-8150-fc086846e194)
<br>

## Styling the template
Secondly, if you wish you can introduce styling to make your card more attractive. To do so, you can either use the specific classes created in CSS for Adaptive Cards (https://learn.microsoft.com/en-us/adaptive-cards/sdk/rendering-cards/javascript/native-styling) or you can uniquely identify each item from your card through ID and introduce unique styling for each element. <br>

An example of this: <br>
![image](https://github.com/alexandracarutasu2/adaptivecards/assets/138585227/cf6c197e-ab2f-4eb9-b38c-09c378517fe0)

To render the card and see how it looks like with the introduced styling, run the project and open the `index.html` file.

# Summary
The Adaptive Cards framework proves to be very useful in creating a template for a card we would like to use, but shows lack of possibility of styling. However, using the JavaScript SDK, we are able to style them to our liking and achieve the desired design.

