# **'Focal' Spelling Game**

Focal is a fun interactive game for children aged approximately 4-6 who would are beginning to learn how to spell small words and enjoy guessing challenges. It is based loosely on the popular NYTimes 5-letter word guessing game called 'Wordle'. In 'Focal', players must use the clue image to guess what 3-letter word needs to be spelled and then they have three chances to spell it. The title 'Focal' refers to the Irish word for 'word' and so is a good play on 'Wordle'.  
<br>

![Focal represented on different devices](documents/focal-am-i-responsive.png)

<br>

[View the Focal site on GitHub Pages](https://brionico.github.io/focalpp2/)

<br>

## **CONTENTS**

* [User Experience (UX)](#user-experience-ux)
    * [Strategy](#strategy)
        * [Project Goals](#project-goals)
        * [User Stories](#user-stories)
    * [Design](#design)
        * [Wireframes](#wireframes)
        * [Features](#features)
        * [Colour Palette](#colour-palette)
        * [Typography](#typography)
        * [Imagery](#imagery)
* [Technologies Used](#technologies-used)
    * [Languages Used](#languages-used)
    * [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programs-used)
* [Deployment and Local Development](#deployment-and-local-development)
    * [How to Fork](#how-to-fork)
    * [How to Clone](#how-to-clone)
* [Testing](#testing)
    * [Automated Testing](#automated-testing)
        * [W3C Validator](#w3c-validator)
        * [JSHint](#JSHint)
        * [Lighthouse](#lighthouse)
    * [Manual Testing](#manual-testing)
        * [Testing User Stories](#testing-user-stories)
        * [Further Testing](#full-testing)
* [Bugs](#bugs)
    * [Known Bugs](#known-bugs)
    * [Solved Bugs](#solved-bugs)
* [Credits](#credits)
    * [Code Used](#code-used)
    * [Content](#content)
    * [Media](#media)
    * [Acknowledgements](#acknowledgements)

# **User Experience (UX)**

## **STRATEGY**
___

## **Project Goals**

<br>

To help young children, aged circa 3-6 years old with their spelling by providing a simple and engaging game.  The game was designed with my own early school age child's needs in mind. He is currently learning to sound out and spell small words and so I wanted to create something that he could use to make his learning more fun and interactive. It is informed by the written materials his school uses to teach the children their first words. 
 
Similar to the NYTimes's popular Wordle game, Focal guides the user towards the solution by displaying a green colour block on the game grid if the user has placed the correct letter in the correct place, an orange block if a correct letter has been chosen but put in the wrong place, and a red block if the letter does not feature in the word. 
It is designed to be played along with with full or partial supervision by a child's parents, much in the way homework is overseen by parents.

<br>

## **User Stories**

<br>

### Visitor Goals:

<br>

* * As a visitor, I want a fun and engaging educational experience that helps with my spelling.
* As a visitor, I want to be engaged and encouraged to hit certain spelling targets to keep the experience interesting and challenging.
* As a visitor, I need the game to be responsive over a range of device sizes.
* As a visitor, I want to be able to keep track of my incorrect and correct guesses. 
* As a visitor, I want clear and concise feedback each time I submit a correct or incorrect answer.
*  As a visitor, I want easy intuitive access to an explanation of how to play the game.

[* As a first time visitor, I am looking for a fun and interactive way to practice and improve my spelling.
* As a first time visitor, I want clear feedback about how close I am to reaching my target number of correct answers.
* As a first time visitor, I want clear feedback to let me know I have completed the challenge and how to proceed.]

<br>

## **DESIGN**
___

## **Wireframes**

<br>

I used a mobile first approach when planning for this project...

<br>

![Mobile wireframe for...](docs/wireframes/#.png)

<br>

The wireframe above shows how the game was conceptualized, but....
These have been added to the [Future Implementations](#future-implementations) section below.

<br>

## **Features**

<br>

### **Navigation Bar:**

<br>

![Navigation Bar](docs/features/focal-nav-bar.png)

The game is designed for simplicity of navigation and so the only navigation option is to the home by clicking the page title. This ensures that it is possible for young children to play the game without much knowledge of how words are spelt. 

[[Add this back in if you end up including a clickable modal to reopen instructions page! -Clicking on the information icon presents the player with instructions on how to play the game.  The page can be hidden by re-clicking the information icon or clicking the cross icon.]]

<br>

### **Game Instructions Modal:**

<br>

![Instructions Modal](docs/features/focal-landing-modal.png)

On loading the site, players are greeted with a modal that explains  how the game should be played. This modal pops up automatically at page load using the Bootstrap method and JQuery. 

<br>

### **Another Feature:**

<br>

![#](docs/features/focal#.png)

<br>

The player is presented with an image that provides the user with a clue to what 3-letter word needs to be spelt. The user must guess the word and spell it correctly by clicking on each letter in the right order.  
Once the player is happy with their spelling of the word, they can submit their answer with the 'enter' button.  This is then checked against the correct spelling of the word and the player is provided feedback. The boxes bounce and each turns a particular colour. The colour green means ....., the colour orange means and the colour red means that none of the letters are in the word. 
If the player answer matches, all squares turn green and the score is incremented by 1.  A new scrambled word is then generated and the answer boxes are cleared, ready for the next spelling attempt.
The wrong answer span is only incremented by 1 when all 3 tries to spell the word have been used up, so that young children are not disheartened by the existence of too many red X's. 

![Correct answer submitted](documents/#.jpg)

If the user's answer is incorrect, all squares turn red.

![Incorrect answer submitted](.jpg)

On the keyboard, the delete key gives the player the opportunity to delete unchecked inputs. 

![Clear answer](docs/features/gifs/spelling-bee-clear-answer.gif)

<br>

### **Keyboard:**

<br>

![#](.jpg)

Introduces child to concept of keyboard layout but set in alphabetic order so that it is not too difficult for younger users to locate letters. 

<br>

### **Game Outcome Feedback:**

<br>

If the player spells 6 words successfully within the time limit, players are greeted with a message of congratulations.

![#](documents/#.jpg)

<br>

![#](docs/#.jpg)

<br>

If the player is 

<br>

### **Another Feature**

<br>

The intention of the game is to use as little written navigation elements as possible so that it is more intuitive for young users. I chose a recycle button rather than a 'new word' button for this reason. This button generates a new word and clue image when clicked. 
The styling of the recycle word button is consistent with the rest of the game and has a hover effect applied to the clickable icon. 

![#](docs/#.jpg)

<br>

### **Another Feature:**

<br>





<br>

### **Feature Eile:**

<br>

Maybe include this- flex grow etc- set heights and widths were avoided and flex used throughout instead. 
Keyboard and Gameboard tiles have been made responsive so they get larger as the screen width increases, but also remain square.

![#](docs/#.png)

<br>

When testing the game on smaller devices such as phones, I noticed that game play was less user friendly when the device was rotated to landscape orientation, as the player is not able to view all the necessary elements of score/ timer, answer boxes, picture, scramble boxes and controls without scrolling up and down.  I considered using a media query to shrink everything to fit the screen in these situations or removing some elements, but none of these solutions were workable as there is too much information to fit in that space.  

![#](docs/#.jpg)

<br>

| Responsiveness |    |           |            |           |                         |                  |       | Notes  |
| :---: | :---:        | :---:     | :---:      | :---:     | :---:                   | :---:            | :---: | :---:  |
| ---   | iPhone 6/7/8 | iPhone 11 | Galaxy S8+ | iPad Mini | iPad | Macbook Pro 2021 | Desktop > 1200px | 1Phone 6/7/8. Galaxy S8+ & iPad Mini tested virtually using Chrome DevTools. |   
| Site responsive >= 700px | n/a | n/a | n/a | Good | Good | Good | Good |
| Site responsive < 699px | Good | Good | Good | n/a | n/a | n/a | n/a |
| Images display as expected | Pass | Pass | Pass | Pass | Pass | Pass | Pass |
| Renders as expected | Pass | Pass | Pass | Pass | Pass | Pass | Pass |

<br>

### **Accessibility:**

To ensure that the game is as accessible as possible for all users and compatible with screen readers, I included the following:

* Semantic markup has been used where possible to structure the HTML code.
* I checked that the colour contrast ratio across the site meets acceptable standards.  When choosing the colour palette, I experimented using the [W3 colour chart](https://w3.com/#) to check that the contrast between background colours and text would be acceptable and provide enough contrast.
* I have used aria labels for interactive elements such as buttons where no accessible name is provided.
* Descriptive alt attributes have been given to all images. The alt description for each picture is stored within each object in the wordCollection array. 
* 
### **Future Implementations:**

* Sound FX could be used as an additional form of feedback for players to understand whether they have submitted a correct or incorrect answer.  This could also add an extra element of fun to the game for kids.
* Longer word challenges and levels.
* A countdown timer.
* A congratulations modal at the end with animated falling confetti as per my original wireframes idea. 
* A lot more words and images can eventually be stored in the wordCollection array to keep the challenges varied and reduce the amount of times the same word appears.

<br>

## **Colour Palette**

Colours used are bright, vivid and fun to appeal to the target audience. 
A rainbow colour palette was chosen as this is my son's favourite colour combination. 
I used a rainbow palette of colours suggested by ____ on this info page. 

![Focal colour palette](docs/focal-color-palette.jpg)

<br>

## **Typography**

Spacing and typography is consistent throughout the game and I have aimed to use something playful and appealing to children.  

* Headings: .  This is a sans-serif font.
* Body: This is a sans-serif font.

## **Imagery**

As this is a game aimed at children, I have used imagery appropriate for this goal.  The picture hints were sourced royalty free from [uxwing](https://uxwing.com/).  
The images are simple, clear and appealing to children. 
The bee hive image displayed on the landing modal ties in with the traditional theme of a Spelling Bee.

The styling of the answer grid is simple and reminiscent of Wordle- this familiar imagery should mean that the game is intuitive to parents guiding young users and the purpose of the game becomes apparent without even reading the instructions.

Player controls are kept minimal and styled in a way that makes game play intuitive.  The pink recycle button invites the player to generate a new word, communicating its purpose to the young player without any need for text.

<br>

# **Technologies Used**

## **Languages Used**

<br>

HTML, CSS and JavaScript were used to create the game.

<br>

## **Frameworks, Libraries and Programs Used**

<br>

* Git -  Version control.
* GitHub - All files for the website stored and saved in a repository.
* GitHub Pages - Used to deploy the final version of the website.
* Figma - Used to create wireframes.
* Font Awesome - Used for all icons throughout the website.
* Google Fonts - Used to import required fonts for the website via the css style page.
* Google Developer Tools - Used throughout build of website for debugging, checking responsiveness and trialing new features/ styling.
* Google Lighthouse - Used at testing stage to show statistics for performance, accessibility,  best practices and SEO.
* Am I Responsive? - For displaying images of how the website looks across a range of devices.


<br>

# **Deployment and Local Development**

<br> 

## **Deployment**

<br>

The live website has been deployed using GitHub Pages, following the steps below:

1. Log in (or sign up) to GitHub.
2. Click on the required repository, in this case: brioniCo/focal
3. Go to the "Settings" menu.
4. Select the "Pages" tab in the left hand menu - this will jump you to a section called "GitHub Pages".
5. Under the Build and deployment section, select "main" from the select branch menu.  Select "root" from the dropdown select folder menu.
6. Click save.  The URL for your live site which has been deployed on GitHub pages is shown at the top of the GitHub pages section.  This sometimes does not display immediately or may require a browser refresh.

The live link can be found [here](https://#)

<br>

## **Local Development**

<br>

### **How to fork:**

<br>

1. Log in (or sign up) to GitHub.
2. Find the required repository, in this case: brioniCo/spelling-bee-scramble
3. Click on the "fork" button at the top right of the page.

<br>

### **How to clone:**

<br>

1. Log in (or sign up) to GitHub.
2. Find the required repository, in this case: brioniCo/focal.
3. Click on the green code button.  This will give you the choice of cloning the repository using HTTPS, an SSH key or GitHub CLI.  Make your selection and copy the provided URL link.
4. Open Terminal
5. Change the current working directory to the location where you want the cloned directory.
6. Type 'git clone' and then paste the URL you copied earlier.
7. Press enter.

<br>

# **Testing**

## **Automated Testing**

<br>

### **W3C Validator:**

<br>

I used the [W3C](https://validator.w3.org/) Markup Validation Service to validate the index.html page. It returned one warning: "Warning: The type attribute is unnecessary for JavaScript resources." After some research I learned that this is a problem that stems directly from the developer of the Bootstrap code that allows the pop-up modal to function. Unfortunately I could not find a solution that allows the rest of my code to function unhindered. See discussion: [W3C Validator error discussion on Wordpress](https://wordpress.org/support/topic/how-to-remove-unnecessary-type-attribute-for-javascript/)

![html validator pass](documents/w3-validator-warning.png)

<br>

I used the [W3C jigsaw](https://jigsaw.w3.org/css-validator/) CSS Validation Service to validate my CSS stylesheet. It passed with no errors:

![css validator pass](documents/w3c-validator-pass.png)

![css validator pass](docs/testing/w3c/w3c-jigsaw-css-validated.png)

The following warnings were raised, which relate to the vendor extensions I am using for browser cross compatibility:



<br>

### **JSHint:**

<br>

I passed my JavaScript code through the linter JSHint to validate and check for any syntax errors.  The only remaining warning relates to the variable wordCollection as this is defined in the words.js file.

![Jshint validation](documents/focal-jshint-validation.png)

<br>

The words.js file was also validated in JSHint. 

### **Lighthouse:**

<br>

I used Lighthouse within Google Chrome developer tools as a way of testing performance, accessibility, best practices and SEO of the site.

<br>

### **Desktop Results**

<br>

![desktop index.html page results](documents/lighthouse/focal-lighthouse-desktop.png)


<br>

### **Mobile Results**

<br>

![mobile index.html page results](documents/focal-lighthouse-mobile.png)

<br>

## **Manual Testing**

<br>

### **Testing User Stories:**

<br>

| Goals | How are goals achieved? |
| --- | --- | 
| **Site User** |     
|        |   
| I want to offer an educational experience to help children with their spelling. | This is achieved by offering 3-letter spelling challenges to help younger children with their learning without discouraging them. | 
| I want to make sure that the user has an enjoyable, engaging experience so they continue playing and return to the site in the future. | The site has been designed to be simple and intuitive and the aesthetics of the game align with the target user by being bright, bold and fun. | 
| # | #. |
| I want to set targets for the user, to keep the experience interesting and challenging. | Targets are set by requiring the player to achieve 5 correct answers to successfully complete the challenge. |
| I want to make the game responsive over a range of device sizes. | The site has been tested over a range of devices and is responsive while retaining the same structural layout throughout. |
|        |                                                  
| **First Time Visitors** |         
|        | 
| I am looking for a fun and interactive way to practice and improve my spelling. |  The site is fully interactive and control of the game is intuitive. The fun aspect is brought by design elements such as cartoon images and feedback to let the player know how they are progressing. |
| I want clear and concise feedback each time I submit a correct or incorrect answer. | Green ticks / answer boxes for correct answers and red crosses/ answer boxes for incorrect answers are used to give players feedback about each spelling they submit. | 
| I want clear feedback about how close I am to reaching my target number of correct answers. | The score counter displayed in the middle of the screen provides this continual feedback during game play. |
| I want clear feedback to let me know I have completed the challenge and how to proceed. | Bespoke messages are displayed to the player at the end of each challenge providing feedback and next steps. |
| I want easy intuitive access to an explanation of how to play the game. | The instructions page providing this information is easily accessible at page load. |
|        |

<br>

### **Further Testing:**

<br>

Full testing has been carried out on the following devices:

* Macbook Pro 2021 14 inch M1 Pro
* MacBook Air 
* iPhone 11
* iPad 9th generation A2602

The following browsers were used to test on each device:

* Google Chrome
* Firefox
* Safari

<br>

| Browser Compatibility |  |        |       |                        
| :---: | :---:  | :---:   | :---:  |
|       | Chrome | Firefox | Safari |  
| Appearance | Good | Good | Good |
| Responsiveness | Good | Good | Good |

<br>

## **Bugs**

<br>

### **Known Bugs:**

<br>

**1.**  I noticed that the following error is logged on the console page of Google Dev Tools when loading the site:

![#](documents/focal-console-error.png)

<br>

**2.**  Sometimes after the modal box is closed after page load, it pops up a second time. This does not effect the game play but is something that I would troubleshoot further if time permitted. 

<br>

### **Solved Bugs:**

<br>

**1.**  When the delete button was used after the top one or two rows had been filled and checked, it would allow the user to delete those previous lines and so the sequence of letter inputs would go wrong. This bug was solved by adding a conditional statement to the handledelete function that prevented indexes 2 and 5 from being deleted. 
 [image of code here1]
 
**2.**When the newGame function was run after a word was successfully spelled and the score incremented, it cleared the boxes but not the colours. This was solved by ...


**3.**  Delete Return issue
```js

    if ( === ) {
        return;
    }

```
**4** Fontawesome icon issue preventing proper functioning of the delete button.
___

***THis could be the case with mine- check on ipad? How? Or just mention that you read about this.
![Settings display bug](docs/bugs/settings-menu-display-bug.png)

I realised this was because the grid template rows value I was using for the class grid-settings-table was set to repeat(3, 1fr). This problem was only showing itself on an ipad.  After some research, I found that using repeat(3, min-content) displayed the settings grid as I wanted and solved the bug.

<br>

# **Credits**

* I used this [https://www.youtube.com/watch?v=j7OhcuZQ-q8] tutorial by Ian Linehan to sketch out the basic structure of game. 
* The readme used as a guiding template was from for Spelling Bee Scramble Game: [Wawas woods](https://github.com/E#). In addition, instructions on how to fork a repository were quoted from this readme. 
* [Referenced this article on Stack Overflow for solution to how setting difficulty level changes which object the random word is chosen from](https://stackoverflow.com/questions/64712803/change-game-difficulty-javascript)
* [Referenced this tutorial on YouTube on how to build a Wordle Clone](https://www.youtube.com/watch?v=4-s3g_fU7Vg)
* Referenced this [YouTube](https://matthewjamestaylor.com/responsive-font-size) when considering how to make the site responsive without having to use media queries.
* Referenced and modified [this code](https://#/) when...
* Referenced this code when trying to figure out how to implement a modal that popped up on page load, as it does for the NYTIMES Wordle.
<br>

## **Media**

* [Royalty free images used for the game logo and word hint pictures](https://uxwing.com/)

<br>

## **Acknowledgements**

<br>


The site was completed as a Portfolio 2 Project piece for the Full Stack Software Developer (e-Commerce) Diploma at the [Code Institute](https://codeinstitute.net/). 
I would like to thank my mentor [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/) for his help and guidance. I would also like to thank the Code Institute Slack community for all the invaluable information I found there, the tutorial sessions from student help as well as our Cohort Facilitator Alan Bushnell for the very useful weekly stand-up sessions and general insights, support and information.

In particular I would also like to thank two of my classmates, Benjamin Riordan and Matthew Shepherd who repeatedly took time out of their own studies to help me out with issues I was having. 

Brioni Connolly 2023.

[Back to top](<#contents>)


