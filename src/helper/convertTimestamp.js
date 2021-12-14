export const convertTimestamp = (unix) => {
    // Convert UNIX Timestamp to a more readable format
    return new Date(unix * 1000).toLocaleDateString(); // * 1000 = Milliseconds
}