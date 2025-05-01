#include <iostream>
#include <string>
using namespace std;

// Recursive function to get valid 9-digit numeric ID
string getId() {
    string numericID;
    cout << "Enter numeric part of VU-ID: ";
    cin >> numericID;

    if (numericID.length() != 9 ) {
        cout << "Invalid input. Please enter exactly 9 numeric digits only.\n";
        return getId(); // Retry
    }

    return numericID;
}

int main() {
    // Hardcoded details
    string name = "Muhammad Akif Hussain";
    string vuID = "BC240417370";

    cout << "Name:  " << name << endl;
    cout << "VU-ID: " << vuID << endl;

    // Get valid ID and extract digits
    string numericID = getId();
    string extracted = numericID.substr(2, 5);
    cout << "\nExtracted Middle Five Digits: " << extracted << endl;

    // Welcome and menu
    cout << "\n=== Welcome to C++ Cafe ===" << endl;
    cout << "------ MENU ------" << endl;
    cout << "1. Burger       – Rs. 250" << endl;
    cout << "2. Pizza        – Rs. 500" << endl;
    cout << "3. Fries        – Rs. 150" << endl;
    cout << "4. Sandwich     – Rs. 200" << endl;
    cout << "5. Cold Drink   – Rs. 100" << endl;

    // Prices (as per screenshot)
    const int priceBurger = 250;
    const int pricePizza = 500;
    const int priceFries = 150;
    const int priceSandwich = 200;
    const int priceDrink = 100;

    // Extract quantities
    int qtyBurger = extracted[0] - '0';
    int qtyPizza = extracted[1] - '0';
    int qtyFries = extracted[2] - '0';
    int qtySandwich = extracted[3] - '0';
    int qtyDrink = extracted[4] - '0';

    // Calculate subtotals
    int subBurger = qtyBurger * priceBurger;
    int subPizza = qtyPizza * pricePizza;
    int subFries = qtyFries * priceFries;
    int subSandwich = qtySandwich * priceSandwich;
    int subDrink = qtyDrink * priceDrink;

    // Print billing
    cout << "\nBurger (" << qtyBurger << " x Rs. " << priceBurger << ") = Rs. " << subBurger << endl;
    cout << "Pizza (" << qtyPizza << " x Rs. " << pricePizza << ") = Rs. " << subPizza << endl;
    cout << "Fries (" << qtyFries << " x Rs. " << priceFries << ") = Rs. " << subFries << endl;
    cout << "Sandwich (" << qtySandwich << " x Rs. " << priceSandwich << ") = Rs. " << subSandwich << endl;
    cout << "Cold Drink (" << qtyDrink << " x Rs. " << priceDrink << ") = Rs. " << subDrink << endl;

    // Total and discount
    int total = subBurger + subPizza + subFries + subSandwich + subDrink;
    double discount = 0;

    if (total >= 5000) {
        cout << "\nSurprise! You've unlocked a 10% discount" << endl;
        discount = total * 0.10;
    }

    double finalAmount = total - discount;

    // Final bill
    cout << "\n==== Final Bill ====" << endl;
    cout << "Total before discount: Rs. " << total << endl;
    cout << "Discount: Rs. " << discount << endl;
    cout << "Net Payable Amount: Rs. " << finalAmount << endl;

    cout << "\nThank you for visiting C++ Cafe!" << endl;

    return 0;
}
