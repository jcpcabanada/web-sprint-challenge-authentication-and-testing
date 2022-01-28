# Authentication and Testing Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Authentication and Testing**. During this sprint, you studied **authentication, JSON web tokens, unit testing, and backend testing**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a dad jokes app**.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers on Monday following the challenge submission. For more information on the review process [click here.](https://www.notion.so/bloomtech/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Setup

- [ ] Run `npm install` to install your dependencies.
- [ ] Build your database executing `npm run migrate`.
- [ ] Run tests locally executing `npm test`.

## Project Instructions

Dad jokes are all the rage these days! In this challenge, you will build a real wise-guy application.

Users must be able to call the `[POST] /api/auth/register` endpoint to create a new account, and the `[POST] /api/auth/login` endpoint to get a token.

We also need to make sure nobody without the token can call `[GET] /api/jokes` and gain access to our dad jokes.

We will hash the user's password using `bcryptjs`, and use JSON Web Tokens and the `jsonwebtoken` library.

### MVP

Your finished project must include all of the following requirements (further instructions are found inside each file):

- [ ] An authentication workflow with functionality for account creation and login, implemented inside `api/auth/auth-router.js`.
- [ ] Middleware used to restrict access to resources from non-authenticated requests, implemented inside `api/middleware/restricted.js`.
- [ ] A minimum of 2 tests per API endpoint, written inside `api/server.test.js`.

**IMPORTANT Notes:**

- Do not exceed 2^8 rounds of hashing with `bcryptjs`.
- If you use environment variables make sure to provide fallbacks in the code (e.g. `process.env.SECRET || "shh"`).
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries. Do not update existing packages.
- The database already has the `users` table, but if you run into issues, the migration is available.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing.

## Submission format

- [ ] Submit via Codegrade by pushing commits to your `main` branch on Github.
- [ ] Check Codegrade before the deadline to compare its results against your local tests.
- [ ] Check Codegrade on the days following the Sprint Challenge for reviewer feedback.
- [ ] New commits will be evaluated by Codegrade if pushed _before_ the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics.

1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.
   <br/><br/>
   A)Session cookies are used to authenticate users based on their current session. The logged-in status of a user is saved in the server's memory, and the session expires after the time limit has been reached. JWTs are popular because they scale better than session cookies because tokens are saved on the client side whereas the session needs server Memory to store user data, which can be a problem when a large number of users visit the application at the same time.
   <br/><br/>
2. What does `bcryptjs` do to help us store passwords in a secure manner?
   <br/><br/>
   A)It uses salting both manually and automatically by accumulating hashing rounds when hashing a password. It will not keep our plain text password, but rather an encrypted password hashed at the developer's specified round. An attacker must have the hash, know the algorithm employed, and how many rounds were required to obtain the hash in the first place if the algorithm hashes the information several times, and rounds the set number.
   <br/><br/>
3. How are unit tests different from integration and end-to-end testing?
   <br/><br/>
   A)When performing E2E (end-to-end) tests, the complete application, both front and back, will be performed, and your test will interact with the app as if it were a real user. Integration testing examines the application's connectivity and communication among its many components. Unit testing is when you test a small isolated unit.
   <br/><br/>
4. How does _Test Driven Development_ change the way we write applications and tests?
   <br/><br/>
   A)One of the main advantages of test-driven development is that it forces developers to concentrate on requirements before writing code. This is in contrast to the standard practice of writing unit tests after the code has been written. This demonstrates that new code is required for the requested feature.
   <br/><br/>
