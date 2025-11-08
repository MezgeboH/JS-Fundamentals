const arg = process.argv[2];
const num = Number.parseInt(arg);
if (arg===undefined)
{
    console.log("Missing number of Occurrences");
}
let i=0;
while (i<num)
{
    console.log("C is fun");
    i++;
}