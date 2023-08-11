# Poetry API

A GraphQL API for storing and retrieving poems and their authors.

![Captura de Tela 2023-08-11 às 15 42 56](https://github.com/EstherCecilia/backend-api-poetry-graphql/assets/29818932/3b484d52-aa58-43ae-b4a8-2912da92c746)

<img width="1285" alt="Captura de Tela 2023-08-11 às 15 19 22" src="https://github.com/EstherCecilia/backend-api-poetry-graphql/assets/29818932/bbe94c9c-421f-422e-bb6f-f8c1eb1a1562">

## Description

This project provides a GraphQL API for managing a collection of poems and their corresponding authors. It's built using Node.js, Apollo Server, and Prisma as the ORM to interact with the PostgreSQL database.

## Features

- Fetch all authors and their poems.
- Fetch all poems and their authors.
- Create, update, and delete authors.
- Create, update, and delete poems.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/poetry-api.git


2. **Install dependencies:**

   ```bash
   cd poetry-api
   npm install
  

3. **Configure the Database:**

  Edit the .env file and provide your PostgreSQL database URL.



4. **Run Migrations:**

 ```
  npx prisma migrate dev
  docker compose up
  npm start
 ```



Open your web browser and navigate to http://localhost:9090 to access the GraphQL Playground. You can use this interface to send queries and mutations to the API.

