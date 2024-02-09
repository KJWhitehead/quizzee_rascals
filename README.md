<h1>Quizzee by Quizzie Rascals README.MD</h1>

<h2>Introduction</h2>

Quiz-E by Quizzie Rascals is an online quiz designed to allow users to test their general and subject-specific knowledge, across a range of personal devices. It encourages replayability and ensures a broad target audience (age 13+), by offering the user the chance to vary difficulty, quiz length, and subject matter. It also provides the option to share Quiz-E with friends and family on social media.

## Landing page for first time users

The landing page allows users to provide their name so that they are greeted by name on return visits to personalise and improve user engagement.

<h1>NEED SCREENSHOT OF LANDING / NAME PAGE</h1>

## Options page (landing page for repeat users) 

The Options page allows users to provide their name so that they are greeted by name on return visits. 

There are easily adjustable options for difficulty, category, and how many questions and question type. There is also a social media button to easily share Quiz-E. 

It displays the Quizzie Rascals brand logo clearly for easy brand recognition. It also provides the option to share Quiz-E with friends and family on social media.


<img src="assets/images/readMeImages/landingpage.png" alt="Options page across different devices">
 
<img src="assets/images/readMeImages/options/questions.png" alt="Options page showing dropdown menu with different quiz lengths">

<img src="assets/images/readMeImages/options/category.png" alt="Options page showing dropdown menu with different categories">

<img src="assets/images/readMeImages/options/difficulty.png" alt="Options page showing dropdown menu with different quiz difficulties">

<img src="assets/images/readMeImages/options/type.png" alt="Options page showing dropdown menu with different quiz type i.e. multiple choice or true or false">

 ## Quiz page

 The quiz page presents questions and possible answers, with buttons clearly delineated against their background. There is clear feedback when a user selects and then commits an answer. It lets you know the correct answer if you were wrong. There is also an updating score display. 
 There is a restart button in case the user decides they want to start again. 


<h1>NEED MOCKUP OF AMIRESPONSIVE</h1>

<img src="" alt="Quiz page across different devices">


<img src="assets/images/readMeImages/quizpage/quizpage2.png" alt="Quiz being played">

<img src="assets/images/readMeImages/quizpage/quizcomplete.png" alt="Quiz complete page">

## Design Choices

We selected a rich and colourful style, using bright high contrast colours. We want the user to feel immersed in the experience of visiting our website. We derived our colours from https://visme.co/blog/website-color-schemes/
“Bright Accent Colors”
#242582
#553D67
#F64C72
#99738E
#2F2FA2

We selected the font style Poppins 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap'. It works well as a fun, slightly futuristic, slightly unusual font; but not unusual enough to overpower the rest of the page.

## Wire Frames

### Landing and Options Page

We used Balsamiq to produce our Wireframes

<img src="assets/images/readMeImages/wireframes/wflandingpage.png" alt="Wireframe image of Insert name and Options page">

## Quiz page

We ensured that we provided wireframes to cover all the different stages of user experience and features

<img src="assets/images/readMeImages/wireframes/wfquiz.png" alt="Wireframe image of In-Quiz page">

## User Stories, features and bugs

<table>
  <tr>
    <th>User Story</th>
    <th>Features</th>
    <th>Bugs / Issues - tested across all viewports of all devices using Google Dev Tools</th>
  </tr>
   <tr>
    <td>As a user, I want a flowing user experience, without any bugs or glitches interrupting it</td>
    <td>No bugs in the site that that impede user interaction with site</td>
    <td>3 second delay between selecting answer and next question</td>
   
    
  </tr>
  <tr>
    <td>As a user, I want the questions and answers to be clear and unambiguous</td>
    <td>Questions clearly phrased. Text clearly delineated against background.</td>
    <td>Occasional spelling errors e.g. "Introduced" spelt 'introudced'.</td>
   
    
  </tr>
  <tr>

   <tr>
    <td>As a site owner, I want the logo clearly visible to increase brand recognition</td>
    <td>Logo clearly visible on landing page.</td>
    <td>None detected</td>
  <tr>
    <td>As a user, I want it to be obvious how to proceed with the game.</td>
    <td>Questions, and answer list clear, with feedback when answers clicked.</td>
    <td>None detected</td>
   
  </tr>
  <tr>
    <td>As a user, I want to be able to restart the game once I’ve finished.</td>
    <td>Play again button at bottom of page when quiz complete</td>
    <td>None deteced</td>
    
  </tr>
  <tr>
    <td>As a user, I want to be able to reset the game when I’ve made an error.</td>
    <td>Reset / restart quiz button</td>
    <td>None detected</td>
    
  </tr>
  <tr>
    <td>As a user, I want the site to be easily navigable.</td>
    <td>Different features of site are clearly identifiable</td>
    <td>None detected</td>
    
  </tr>
  <tr>
    <td>As a user, I want to be able to choose an answer from a pre-populated list.</td>
    <td>List of answers to be selected</td>
    <td>None detected</td>
    
  </tr>
  <tr>
    <td>As a user, I want to receive feedback on the answers.</td>
    <td>Clear signal of correct / incorrect answer</td>
    <td>None detected</td>
    
  </tr>
  <tr>
    <td>As a user, I want the site to be visually appealing.</td>
    <td> Select complementary colour scheme. <br>
    Different elements/features delineated.</td>
    <td>xxx</td>
    
  </tr>
  <tr>
    <td>As a user, I want to be able to start the quiz.</td>
    <td>Page loads and includes necessary event listeners</td>
    <td>None detected</td>
    
  </tr>
   <tr>
    <td>As a site owner, I want to use an API so that I can source questions from an outside repository.</td>
    <td>Questions load clearly in each different category and difficulty</td>
    <td>Sometimes quiz repeats questions, or includes them from higher difficulties.</td>
    
  </tr>
      <td>As a user, I want to sort the questions by categories so I can test myself on specific topics.</td>
    <td>Drop-down menu specifying topic category</td>
    <td>None detected</td>
    <tr>
      <td>As a user I want to challenge myself against different degrees of difficulty depending on my level of knowledge</td>
    <td>Drop-down menu specifying difficulty level</td>
    <td>Sometimes quiz repeats questions, or includes them from higher difficulties.</td>
    </tr>
    <tr>
    <td>As a user, I want to be greeted by name when I enter the website for personalisation and to feel welcome.</td>
    <td>Input Name field and have name saved when user returns (cookies required)</td>
    <td>None detected</td>
  </tr>
     <tr>
    <td>As a user I want to see my score</td>
    <td>Current score display to keep score updating</td>
    <td>None detected</td>
  </tr>
    <tr>
    <td>As a user I want to be able to share the fun I am having doing the quiz, and challenge my friends.</td>
    <td>"Share with friends" copy link button. Post to FB / Instagram / X clickable icons.</td>
    <td>Ran out of time to add Instagram and X icons</td>
  </tr>
    <tr>
     <td>As a site owner I want to increase the visibility and thus usership of our website.</td>
    <td>"Share with friends" copy link button. Post to FB / Instagram / X clickable icons.</td>
    <td>Ran out of time to add Instagram and X icons</td>
  </tr>
    <tr>
     <td>As a user, I want to be able to adjust the number of questions I am asked to try shorter or longer games.</td>
    <td>Dropdown menu providing game length options</td>
    <td>May be insufficient questions in some specific categories or types (i.e.true or false)</td>
  </tr>
  </table>

<br>


### User Stories and Features (to be implelemented next Sprint) 


  <table>
  <tr>
    <th>User Story</th>
    <th>Features</th>
    <th>Bugs / Issues</th>
  </tr>


  <tr>
    <td>As a user I want to be able to store my highest score to see if I can beat it on my future visits.</td>
    <td>Highest score from previous use visible (cookies required)</td>
    <td>N/A</td>
  </tr>
  

  </table>

### Won't haves

  <table>
  <tr>
    <th>User Story</th>
    <th>Features</th>
    <th>Bugs / Issues</th>
  </tr>
    <td>As a user, I want to have a countdown timer to challenge myself to answer more quickly.</td>
    <td>A countdown timer to display either how long I have left to answer the question before it assigns to wrong</td>
    <td>N/A</td>
  </tr>
    
  </tr>
  <td>As a site-owner I want to have a questions backup in case the API  stops working.</td>
    <td>A secondary API or source of questions in case the first API breaks down</td>
    <td>N/A</td>
  </table>


## Unfixed Bugs / Issues
<br>
<table>
  <tr>
    <th>Bug/Issue</th>
    <th>Image</th>
    <th>Resolution</th>
  </tr>
    <td>Sometimes quiz repeats questions, or includes them from higher difficulties. As an example of both, this question came up twice in a quiz set to easy.</td>
    <td><img src="assets/images/readMeImages/bugs/repeatdifficultforbugpage.png" alt="Image showing difficult question"></td>
    
  <td>Unfortunately none available as source of questions is the API. The only fix would have been to change the API from a paid provider but this would be costly and we would have had to change too much code by the time we realised</td>
  </tr>
    
  </tr>
  <td>Three second delay between answer and next question</td>
    <td><img src="assets/images/readMeImages/bugs/delay.png" alt="Quiz page showing selected option and timer displaying 2.5 seconds"></td>
    <td>The delay was a fix to a bug of the site crashing when too many requests were made from the API in too small a space of time. The only fix would have been to change the API from a paid provider but this would be costly and we would have had to change too much code by the time we realised</td>
      <tr>
    </tr>
    <>
    
  </
    <td>Spelling errors on website <h1>IMAGE TO BE SENT TO PETER</h1></td>
    <td><img src="assets/images/readMeImages/bugs/delay.png" alt="Question with a spelling error on it"></td>
    <td>Unfortunately none available as source of questions is the API. The only fix would have been to change the API from a paid provider.</td>
  </tr> 
  </table>

### Validator Testing 

For HTML validation https://validator.w3.org/

<img src="assets/images/readMeImages/html-validation.png" alt="html validation screenshot">

For CSS validation  https://jigsaw.w3.org/css-validator/

<img src="assets/images/readMeImages/css-validation.png" alt="css validation screenshot">
  



## Deployment

Site successfully deployed on https://kjwhitehead.github.io/quizzee_rascals/

## Credits 

Color Scheme: “Bright Accent Colors” https://visme.co/blog/website-color-schemes/

### Content 

Timer used to display delay issue https://www.online-stopwatch.com/

Responsiveness displayed on https://ui.dev/amiresponsive

API Questions taken from https://opentdb.com/

Code initially inspired by and re-written https://opentdb.com/

Logo from Canva https://www.canva.com/

For validation in HTML https://validator.w3.org/

For validation in CSS https://jigsaw.w3.org/css-validator/

For ReadME table https://www.shecodes.io/athena/2362-creating-a-table-with-4-columns-and-4-rows-in-html

Wireframes produced using Balsamiq WireFrames https://balsamiq.com/wireframes/?gad_source=1&gclid=CjwKCAiA44OtBhAOEiwAj4gpOexFh0z3peWS6wolbjlJt_fLq7cZGNu99YeMSIpU89wlL2p6ZluXiRoCOSUQAvD_BwE

Timer used to display delay issue https://www.online-stopwatch.com/


## Other General Project Advice

Enjoy the Quiz!

