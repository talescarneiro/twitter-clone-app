# Twitter Clone

This project is a full-stack Twitter clone developed exclusively for educational purposes. It aims to replicate the core features and functionality of the popular social media platform, Twitter. Built using Next.js, a React framework known for its performance and scalability, this project provides a seamless and interactive user experience.

## Demo

```
https://ttproject-delta.vercel.app/
```

## Technologies Used

**Typescript:** The project is developed using TypeScript, a statically typed superset of JavaScript that enhances tooling and provides type safety.

**NextAuth:** NextAuth is utilized for authentication, making it easy to implement secure user authentication flows in the project.

**Node.js:** Node.js is used as the backend runtime environment, allowing server-side JavaScript execution and providing a scalable and efficient server foundation.

**Next.js:** Next.js, a framework built on top of React, is used for server-side rendering (SSR) and creating optimized web applications.

**React.js:** The UI components are built using React.js, a popular JavaScript library for building user interfaces.

**Axios:** Axios is used as an HTTP client for making API requests to external services and fetching data.

**MongoDB:** MongoDB is a powerful NoSQL database with a flexible schema, JSON-like data format, and high scalability, making it suitable for modern web applications.

**Prisma:** Prisma is utilized as an ORM (Object-Relational Mapping) tool, providing a type-safe and database-agnostic query interface for seamless integration with databases.

## Prerequisites

```
- Node.js (version 14.x)
```

Make sure you have Node.js installed by running the following command in the terminal:
```
node --version
```

## Cloning the repository

```
git clone git@github.com:talescarneiro/twitter-clone-app.git
```

## Install packages

```
npm install
```

## Setup .env file

```
DATABASE_URL=

NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
```

## Setup Prisma

```
npx prisma db push
```

## Run the application

```
npm run dev
```
