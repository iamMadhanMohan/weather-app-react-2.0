export default function unitsConverter(units, temp)
{
    let unit;

    if(!units)
    {
        unit = (temp - 32) * 5/9;
    }
    else
    {
        unit = temp;
    }

    return unit;
}