# WebCenter


WebCenter is a web application designed to serve as a visual bookmarking solution. This user-friendly platform allows users to store and effortlessly locate their website bookmarks. Each bookmark is presented as a card, complete with a title, a webpage screenshot, and a brief description. Users can conveniently log in to the application, utilize the powerful search functionality, and apply filters based on categories and tags to swiftly find desired websites. The admin privileges enable the management of website information, including editing existing data and adding new websites. The back-end is built with Java Spring Boot and employing a MySQL database. The front-end is developed using React, Redux, and JavaScript, with Bootstrap providing an aesthetically pleasing design. Additionally, the integration of Robot Framework facilitates automated screenshot capturing for each website stored in the MySQL database. The app is hosted online via Heroku, ensuring accessibility and availability for users.

### Main View   

The main view of WebCenter displays a collection of website cards, accompanied by categories, tags, and search functionality. Users can easily navigate through their bookmarks and access the login feature, ensuring seamless access to their favorite websites.  

<img src="./webcenter_screenshot1.png" width="100%" />  

By selecting a single category and a tag, users can instantly refine their website display, providing a tailored browsing experience. Find exactly what you're looking for with ease.  
<img src="./webcenter_screenshot2.png" width="100%" />  
In this screenshot, the 'Add New Webpage' functionality is highlighted, enabling users to effortlessly expand their bookmarked websites. Enjoy the convenience of quick and seamless updates to your collection.  
<img src="./webcenter_screenshot3.png" width="100%" />  


## Techniques




### Front-end

<table>
<tbody>
  <tr>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png" height="50px"></td>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" height="50px"></td>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Redux_Logo.png/640px-Redux_Logo.png" height="50px"></td>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/640px-Bootstrap_logo.svg.png" height="50px"></td>
  </tr>
  <tr>
    <td>JavaScript</td>
    <td>React</td>
    <td>React Redux & RTK Query</td>
    <td>Bootstrap</td>
  </tr>
</tbody>
</table>

### Back-end

<table>
<tbody>
  <tr>
    <td><img src="https://logos-download.com/wp-content/uploads/2016/10/Java_logo_icon.png" height="50px"></td>
    <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png" height="50px"></td>
    <td><img src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png" height="50px"></td>
  <tr>
    <td>Java</td>
    <td>Spring Boot</td>
    <td>MySQL</td>
  </tr>
</tbody>
</table>

### Cloud

<table>
<tbody>
  <tr>
    <td><img src="https://e7.pngegg.com/pngimages/855/935/png-clipart-heroku-logo-heroku-logo-icons-logos-emojis-tech-companies.png" height="50px"></td>
    <td><img src="https://pbs.twimg.com/profile_images/828766621065834497/UhN13W-J_400x400.jpg" height="50px"></td>

  <tr>
    <td>Heroku</td>
    <td>ClearDB MySQL</td>

  </tr>
</tbody>
</table>




## Installation

- Clone the repository  
`git clone git@github.com/arska2/web-collections`  
- start server (run in server folder)   
    `mvnw spring-boot:run`   
- Install front-end dependencies   
`cd client`  
`npm i`  
- Start React App  
`npm start`

The back-end database API is hosted on localhost:8080, and the front-end React app can be found at localhost:3000.



