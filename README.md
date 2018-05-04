# Readable 
**Readable project** is a content and comment web app. Users are able to post content to predefined categories, comment posts, and vote on posts and comments. Users are also be able to edit and delete posts and comments.

## Development Overview
The app have four main views:
* **Home Page:** Displays a list of all post, each post displays its title that is also a link to Post Detail View, its current score, a mechanism to vote up or down the post, a button to edit the post, a button to delete the post and a text with the post number of comments. This view also has a button in the top-left corner for adding a new post, a menu with all categories that allows select a specific category and a menu with all ways to sort the list of posts.
* **Category:** Displays a list of all posts within a specific category, each post displays its title that is also a link to Post Detail View, its current score, a mechanism to vote up or down the post, a button to edit the post, a button to delete the post and a text with the post number of comments. This view also has a button in the top-left for navigate to Home Page view, a menu with all categories that allows switch to a different category at any time and a menu with all ways to sort the list of posts.
* **Post Detail:** Displays the details for a specific post, title, date, author and content, also has a mechanism to vote up and down, edit and delete the post. This view has a list all comments of the post, each comment displays the author and the content and has a mechanism to vote up and down, delete and edit the comment. This view also has a button on the up-left corner for navigate to Home Page, a button on the button-right corner for add a new comment.
* **Add Post:** Displays a form for adding a new post or for editing an existent one. For adding a new post, displays four fields, title, content, category and author and only two fields are available for a editing a post, title and content. This view also has a button in the top-left corner for navigate to the Home Page.

## Getting Started
Make sure that Nodejs and npm are installed, check [here](https://docs.npmjs.com/getting-started/installing-node) if you do not have them.

Project is available [here](https://github.com/yarogallo/Readable-Project) for download. Once you have it, open a terminal, move to the project directory and run the below commands.

```
npm install
npm start
```

The project was created using *react-create-app*, most of the app state is managed by the *Redux store*, *React Router* is used to navigate the app and keep track of the url, *React Redux* is used to manage react and redux binding, *Bootstrap framework* is used for most of the styles. 

## Browser compatibility
The app was successfully tested in:

* **Google Chrome:** Version 65.0.3325.181 (Official Build) (64-bit)
* **Safari:** Version 11.0.3 (12604.5.6.1.1)
* **Mozilla Firefox:** Version 57.0.3 (64-bit)
