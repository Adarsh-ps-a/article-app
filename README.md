React Application for Article Management

Introduction:

Creating a React application for managing articles fetched from a REST API. The application allows users to view a list of articles and details of each article.

Project Structure:

src/components: This directory contains React components.
  Articles : Component to display a list of articles. It also contains the respective css styles.
  ArticleDetail : Component to display the full text of an article. It also contains the respective css styles.
  ErrorPage: Component to display an error message. It also contains the respective css styles

src/assets : This directory contains the images used in the application.
src/utils: This directory contains the constants used in the application
App.css`: Global CSS styles.
public: This directory contains the HTML template.
App.js: Main component where routing is configured.
index.js: Entry point of the application.

Technologies Used:

- React: JavaScript library for building user interfaces.
- React Router: Library for declarative routing in React applications.
- CSS: Cascading Style Sheets for styling the application.
- REST API: External API for fetching article data, fetch used to call the REST API

Features:

1. View Articles: Users can view a list of available articles.
2. View Article Details: Users can click on an article to view its full text.
3. Error Handling: Error handling is implemented for cases such as failed data fetching or rendering issues.

Development Process:

Setup React App: The project is initialised using Create React App to create the basic structure.
Create Components: Components are created for displaying articles, article details, and error pages.
Implement Routing: React Router is used to set up routing between article list and article details components.
Fetch Article Data: Articles are fetched from the provided REST API using fetch API .
Functional Component: For all the Components used are functional based, for state management hooks(useState) is used. Once the response is received from API, state will be updated. 
Display Articles: Articles are displayed in a grid format.
Article Details: On click of article user will be redirected to article details page which is handled using react-router-dom.
Error Handling: Error handling is implemented using conditional rendering to display an error page when errors occur during data fetching or rendering.




