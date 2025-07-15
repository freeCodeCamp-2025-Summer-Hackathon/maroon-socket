export default function ErrorMessage({ message }) {
    if (message) {
        return <span className="text-red-500">{message}</span>;
    }
    return;
}
