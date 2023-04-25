function dataConverter(timestamp)
{
    let dt = new Date(timestamp * 1000);
    let date = dt.getDate();
    let month = dt.getMonth() + 1;
    let year = dt.getFullYear();

    return `${date}-${month}-${year}`;
}

export default dataConverter;