#include <stdio.h>
#include <stdlib.h>
#include <math.h>


double calcuateNewPrice(double oldPrice);

int main()
{
    double oldPrice;
    double newPrice;
    printf("Enter the old price: \n");
    scanf("%lf", &oldPrice);
    newPrice = calcuateNewPrice(oldPrice);
    printf("The new price is: $%.2lf", newPrice);
    return 0;
}

double calcuateNewPrice(double oldPrice)
{
    double integral;
    double fraction = modf(oldPrice, &integral);
    if(fraction < 0.25)
    {
       return integral;
    }
    else if(fraction >= 0.25 && fraction <= 0.5)
    {
    return integral + 0.5;
    }
    else if(fraction > 0.5 && fraction < 0.75)
    {
       return integral + 0.5;
    }
    else
    {
        return integral + 1;
    }
}
