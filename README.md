# Employee-Review-System-skilltest


 The application has two portals: one for the admin and another for employees.

The admin portal allows the admin to log in and perform various actions. After logging in, the admin can add new employees to the system using the "Add Employee" feature. This means that the admin can enter the necessary details of a new employee, such as their name, position, and other relevant information.

Furthermore, the admin portal provides functionality to track all employees. This means that the admin can view a list of all employees in the system, along with their details. The admin can also update the information of any employee, such as their performance rating or any other relevant data. Additionally, the admin can delete an employee from the system if needed.

On the other hand, the employee portal allows employees to log in and perform specific actions related to their performance and reviews. Once an employee logs in, they can access a list of all employees in the organization. They can view the performance and reviews of other employees in the system.

The employee portal also enables employees to edit their own performance information and reviews. This means that an employee can update their own performance rating, add comments or feedback, or make any necessary changes to their review information.

Overall, your web application provides an interface for the admin to manage employees, track their information, and perform updates or deletions when necessary. The employee portal allows employees to view and edit their own performance and review details.



## Technology Stack
- EJS
- SCSS
- NodeJS
- Express

## How-To-Use

- Clone this project
- Start by installing npm and mongoDB if you don't have them already.
- Run the Mongo Server.
- Navigate to Project Directory
    ```
    cd Employee-Review-System-skilltest
    ```
- run following commands :
    ```
    npm install 
    ```
    ```
    npm start
    ```

## Directory Structure and flow of The Code
This code follows MVC pattern and hence everything is differentiated and well managed:

    Employee-Review-System
        |-----assets
        |       |--- css
        |       |     |-- admin.css
        |       |     |-- employeelist.css
        |       |     |-- nav.css
        |             |--home.css
        |       |--- js
        |       |     |-- admin.js
        |       |     
        
        |------ config
        |         └--- mongoose.js
        |------ controllers
        |         └---admincontrollers.js
                  └---Employeecontrollers.js
        |------ models
        |         └--- adminSchema.js
                   └---EmployeeSchema.js
        |------ routers
        |         └--- index.js
                  └---admin.js
                  └---employee.js
        |------ views
        |         |--- home.ejs
        |         |--- adminLogin.ejs
        |         └--- employee.ejs
                  └---employeelist.ejs
        |------ .gitignore
        |------ app.js
        |------ package.json
        |------ package-lock.json
        └------ README.md


