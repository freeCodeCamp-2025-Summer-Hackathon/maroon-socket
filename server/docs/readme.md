You can set up your local env to run `server` in different ways.

Here's one way to do it.
## setting up repo

1. Clone repo
2. Run `npm install` in repository root

## Setting up postgres Database

1. Set `.env` variable that prisma expects,
   a. `DATABASE_URL = "postgresql://postgres:mysecretpassword@localhost:5432/postgres?schema=public"`
2. Change directory `cd server` else step 5. will cause `Error: Could not find Prisma Schema that is required for this command.`
3. Run `npx prisma migrate`
4. Run `npx prisma generate`
5. Run `npm run seed` [(output)](./images/npm_run_seed.png)
6. Run `npx prisma studio`
7. Go to `http://localhost:5555/` to view Prisma Studio
8. Notice tables should be seeded with dummy data that was passed in `seed.js`

Note:

1. Assume `postgres` is running in a container.
    - Run `docker run -d --name maroon-socket -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 postgres`

## setting up supabase

1. If you don't have a supabase account yet create one.
2. Once you log into supabase, click dashboard and you should see a screen that lists your organiztions. By default you would have an orgnization named like this `Ganesh's Org` click that and you will be taken to projects screen.
3. Create a new project for this repo and after that click it to go to project screen.
4. in left hand side vertical nav, click the storage link. There you will see a button to create new bucket. Click it and name the bucket `plant-images`, make sure you check public bucket switch.
5. In the left hand side nav click settings. You should be on the general settings page and there should be a project id field, copy its value ![(example)](./images/project_id_example.png).In your `.env` file you should have this line `SUPABASE_URL=https://<your-project-ref>.supabase.co` replace `<your-project-ref>` with the project id you copied.
6. In the settings page nav click on Api keys section and copy the value of `service role secret` field ![(example)](./images/service_role_key_example.png). In your `.env` file you should have this line `SUPABASE_KEY=<your-service-role-key>` replace `<your-service-role-key>` with the value you just copied.
7. you're all set!
