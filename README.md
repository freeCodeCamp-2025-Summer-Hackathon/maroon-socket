# maroon-socket

Repository for the maroon-socket team's work. In this repository we are developing a web app that lets you add plants and get notifications to water them via connecting to your telegram. It also has a community section where you can create posts and comment on them.

## Telegram bot setup

This project needs a telegram bot to send notifications to user. To create a telegram bot you need to create a telegram accound and message the bot named @Botfather.

Type `/newbot` in its chat to start the process of creating a new bot and follow the instructions. If at some points it tells you that username is already taken then just keep trying until it succeeds.

sucessfully creating a bot will give you a token and url.

Your token will look something like this:
`4839XXX812:AAFD39kkdpWt3yXXXXXrgyOLMaJhac60qc`
Paste it in server's .env for `TELEGRAM_BOT_TOKEN`, look at .env.sample if you need examples.

The url will look something like this:
`t.me/plantpalremind_bot`
you need to add `?start=true` to the end and paste it in client .env for `VITE_TELEGRAM_BOT_URL`, look at .env.sample if you need examples.

## 🚀 Steps to Run

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/jaitjacob/todo-for-maroon-socket.git
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

### Running the backend

1. **Navigate to the Server Folder (Back End):**

    ```bash
    cd server
    ```

2. **Create a .env file:**

    ```bash
    cp .env.sample .env
    ```

3. **setting up supabase and postgres**

    look at the `server/docs` for instructions on setting up supabase and postgres

4. **Start the Server:**

    ```bash
    npm run dev
    ```

    🔗 **Open your browser** at `http://localhost:3000` to see the server in action.

### Running the frontend

1. **Navigate to the Client Folder(Front End):**

    ```bash
    cd client
    ```

2. **Create a .env file:**

    ```bash
    cp .env.sample .env
    ```

3. **Start the App:**

    ```bash
    npm run dev
    ```

    🔗 **Open your browser** at `http://localhost:5173` to see the client in action.
