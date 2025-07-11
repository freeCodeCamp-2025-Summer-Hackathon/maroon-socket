You can set up your local env to run `server` in different ways.

Here's one way to do it.

1. Clone repo
2. Run `npm install` in repository root
3. Set `.env` variable that prisma expects,
   a. `DATABASE_URL = "postgresql://postgres:mysecretpassword@localhost:5432/postgres?schema=public"`
4. Change directory `cd server` else step 5. will cause `Error: Could not find Prisma Schema that is required for this command.`
5. Run `npx prisma migrate`
6. Run `npx prisma generate`
7. Run `npm run seed` [(output)](./images/npm_run_seed.png)
8. Run `npx prisma studio`
9. Go to `http://localhost:5555/` to view Prisma Studio
10. Notice tables should be seeded with dummy data that was passed in `seed.js`

Note:

1. Assume `postgres` is running in a container.
    - Run `docker run -d --name maroon-socket -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 postgres`
