async function getUser(req, res) {
    const { username, telegram_chat_id, id } = req.user;

    const chatIdSet = telegram_chat_id ? true : false;

    res.status(200).json({ username, id, chatIdSet });
}

export { getUser };
