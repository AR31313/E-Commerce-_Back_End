# 13 Object-Relational Mapping (ORM): E-Commerce Back End

### Built the back end for an e-commerce site by modifying starter code.

---

## Getting Started

> ### Configure a working Express.js API to use Sequelize to interact with a MySQL database.

User are given a functional Express.js API.
Once database name, MySQL username, and MySQL password are added to an environment variable file,
connect to the database using Sequelize.
Run schema and seed commands.
A development database will be created and is seeded with test data.
- Enter the command "npm start" to invoke the application

---

```md
- User can run API GET routes in Insomnia for categories, products, or tags.
- Each of these routes will display related data formatted in JSON.
- User can test API POST, PUT, and DELETE routes in Insomnia
- They can successfully create, update, and delete data in this ecommerce_db database

'ecommerce_db' Database Model Tables:

      `Category` Table contains: - `id` - `category_name`

      `Product` Table contains: - `id` - `product_name` - `price` - `stock` - `category_id`
      (category_id: References the `Category` model's `id`)

      `Tag` Table contains: - `id` - `tag_name`
      (tag_id: References the `Tag` model's `id`)

     `ProductTag`Table contains: - `id` - `product_id` - `tag_id`
      (product_id: References the `Product` model's `id`.)
```

### Screenshot:

---

## Installation

> ### Start the Server, Sync the Sequelize models to the MySQL database.

User will need to use the [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect your Express.js API to a MySQL database and the [dotenv](https://www.npmjs.com/package/dotenv) package to use environment variables to store sensitive data.

- Use the `schema.sql` file in the `db` folder to create the database with MySQL shell commands. 
- Use environment variables to store sensitive data like your MySQL username, password, and database name.
- Run `npm run seed` to seed data to the database to test the routes.

---

## The GitHub repository URL:

https://ar31313.github.io/E-Commerce-_Back_End/

## Walkthrough Video:

- A walkthrough video that demonstrates the functionality of the e-commerce back end.

---

© 2022 Avi Rana. All Rights Reserved.
