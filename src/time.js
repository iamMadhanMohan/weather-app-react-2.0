export default function timeConverter(timestamp)
{
    let dt = new Date(timestamp);

    let hours = dt.getHours();
    let minutes = dt.getMinutes();

    return `${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}`;
}
