# model-view-controller-blog
CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well

<p id="readme-top"></p>

![License Shield](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)
[![LinkedIn Shield](https://img.shields.io/badge/LinkedIn-555555?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/oliver-lopez78/)

## Description

developers can post comments on other developers post. The Application will mimick the Model View Controller paradigm in folder structure and it uses handlebars.js as the template, Sequelize as the ORM, and the express-session npm package for authentication

While building this project I learned to:

- created sign up and log in links in the navigation of the homepage
- created a web site where the user can sign in at a later time with username and password
- created a homepage with options in the navigation for the homepage, the dashboard, and log out
- present the site with previous blog posts with the post title and the post content, and when it was created 
- take the user to the dashboard with blog posts they have posted. With the option to add new comment 

### Built With

[![Handlebars Shield](https://img.shields.io/badge/Handlebars-E34F26?&style=for-the-badge&logo=handlebars.js&logoColor=white)](https://handlebarsjs.com/) 
[![mySQL Shield](https://img.shields.io/badge/mySQL-4479A1?&style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
 ![Express Shield](https://img.shields.io/badge/Express-000000?&style=for-the-badge&logo=express&logoColor=white)
 ![Insomnia Shield](https://img.shields.io/badge/Insomnia-4000BF?&style=for-the-badge&logo=insomnia&logoColor=white)


## Table of Contents
- [Installation](#installation)
- [Contributing](#contributing)
- [Tests](#insomnia)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Installation






You may also now click on in the navbar to see all posts you have made and to create new posts yourself.

If it is your first visit then simply create a new user by adding your information to
```
signup
```

Simply click on the link in the navbar. 
```
login
```
```
If you already have an account enter your information into login.
```
```
dashboard
```
After your logged you can make a post, see all comments or create a comment of your own. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## User Story

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

For any further questions feel free to contact me via:
- GitHub: [GitHub oliverLo78](https://github.com/oliverLo78)
- Email: [oliverberto@gmail.com](mailto:oliverberto@gmail.com)
- LinkedIn: [Name on LinkedIn](https://www.linkedin.com/in/oliver-lopez78/)
<p align="right">(<a href="#readme-top">back to top</a>)</p>
