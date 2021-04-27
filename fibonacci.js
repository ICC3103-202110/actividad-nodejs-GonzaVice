function fibonacci(number)
{
    if(number == 0)
    {
        return 0;
    }
    else if(number == 1)
    {
        return 1;
    }
    else
    {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}

const readline = require('readline').createInterface(
{
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingresa un número: ', num =>
{
    console.log(`F(${num}) =  ${fibonacci(num)}`);
    readline.close();
});