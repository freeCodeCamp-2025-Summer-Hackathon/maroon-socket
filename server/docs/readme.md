You can set up your local env to run `server` in different ways.

Here's one way to do it.

## setting up repo

1. Clone repo
2. Run `npm install` in repository root
3. Change directory to `cd server`

## Setting up postgres Database

1. Set `.env` variable that prisma expects,
   `DATABASE_URL = "postgresql://postgres:mysecretpassword@localhost:5432/postgres?schema=public"`
2. Run `npx prisma migrate dev`
3. Run `npx prisma generate`
4. Run `npm run seed` ![(output)](./images/npm_run_seed.png)
5. Run `npx prisma studio`
6. Go to `http://localhost:5555/` to view Prisma Studio
7. Notice tables should be seeded with dummy data that was passed in `seed.js`

Note:

1. Assume `postgres` is running in a container.
    - Run `docker run -d --name maroon-socket -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 postgres`

## setting up supabase

1. If you don't have a supabase account yet create one.
2. Once you log into supabase, click dashboard and you should see a screen that lists your organiztions. By default you would have an orgnization named like this `Ganesh's Org` click that and you will be taken to projects screen.
3. Create a new project for this repo and after that click it to go to project screen.
4. in left hand side vertical nav, click the storage link. There you will see a button to create new bucket. Click it and name the bucket `plant-images`, make sure you check the option that makes the bucket public.
5. In the left hand side nav click settings. You should be on the general settings page and there should be a project id field, copy its value. In your `.env` file you should have this line `SUPABASE_URL=https://<your-project-ref>.supabase.co` replace `<your-project-ref>` with the project id you copied. ![(example)](./images/project_id_example.png)
6. In the settings page nav click on Api keys section and copy the value of `service role secret` field . In your `.env` file you should have this line `SUPABASE_KEY=<your-service-role-key>` replace `<your-service-role-key>` with the value you just copied.![(example)](./images/service_role_key_example.png)
7. you're all set!
