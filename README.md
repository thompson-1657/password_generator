# random_password_generator

This application was created to enable a user to generate a unique and strong password based off of answers to prompted criteria. Starter code was used as a jumping off point for the activity. The starter code was mostly HTML and CSS and did not allow the user to be interactive with the application. Using javascript I was able to define variables and neccessary criteria for the user to choose what parameters they desire for their random password. Below I will walk you through using the application step by step:

Deployed site looks like this:


<img width="1156" alt="site-launch-screen" src="https://user-images.githubusercontent.com/71091515/99891246-684d9f00-2c2d-11eb-82c5-bfde3a72d0ea.png">


User is prompted to pick a password length of 8-128 characters:


<img width="446" alt="password-length" src="https://user-images.githubusercontent.com/71091515/99891255-7c919c00-2c2d-11eb-8e1d-0c553d54ff0a.png">


Next the user may decide if the password should include special characters:


<img width="445" alt="special-prompt" src="https://user-images.githubusercontent.com/71091515/99891265-9e8b1e80-2c2d-11eb-8eda-dc04956f9afc.png">


A couple more questions regarding criteria requirements are prompted and the application logs the users answers:


Should password include numbers?



<img width="447" alt="number-prompt" src="https://user-images.githubusercontent.com/71091515/99891275-afd42b00-2c2d-11eb-9469-19af588c79fa.png">

Should password include Uppercase letters?


<img width="448" alt="upper-prompt" src="https://user-images.githubusercontent.com/71091515/99891283-ca0e0900-2c2d-11eb-9059-65c0b8262ea1.png">


Should password include lowercase letters?


<img width="445" alt="lower-prompt" src="https://user-images.githubusercontent.com/71091515/99891288-d5f9cb00-2c2d-11eb-857d-127d99ed33e7.png">


Lastly, after all prompts are answered the user is alerted that clicking on the generate password button will reveal their random,strong password in the text box previosuly reading,"Your Secure Password".

Alert:


<img width="444" alt="alert" src="https://user-images.githubusercontent.com/71091515/99891301-f75ab700-2c2d-11eb-8300-3f628321a35f.png">


Click button:


<img width="324" alt="generate" src="https://user-images.githubusercontent.com/71091515/99891307-07729680-2c2e-11eb-81e8-ff78655ac735.png">


Example password result including 25 characters, special characters, numbers, uppercase letters and lowercase letters.



<img width="800" alt="password-example" src="https://user-images.githubusercontent.com/71091515/99891322-49034180-2c2e-11eb-947a-800f57559e06.png">


Creating this application allowed me to think about interacting with the DOM through javascript. Through the addEventListener() method the user is able to interact with the application via clicks. Text was also able to be inserted into the application through utilizing the DOM. 
