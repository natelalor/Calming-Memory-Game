#include <string>
#include <vector>

class Square{
protected:
    int number;
    std::string color;
    bool flipped = false;
public:
    /*
     * Constructor for Square class
     * Defaults the squares color to "" and number to -1
     */
    Square();

    /*
     * Changes the vaiable, flipped to true or false.
     * If flipped = true, change it to false
     * If flipped = false, change it to true
     */
    void flipSquare();

    /*
     * Picks a color based on the game colors vector generated in main.
     * Updates the corresponding index in numUsed vector to keep track of 
     * how many of each color have been assigned.
     */
    void generateColor(std::vector<std::string> colors, std::vector<int> &numUsed);

    /*
     * Returns the color variable for the current square
     */
    std::string getColor();

    /*
     * Sets the number of the current square to the value of num passed in.
     */
    void setNumber(int num);

    /*
     * Sets the color of the current square to the value of col passed in.
     */
    void setColor(std::string col);

    /*
     * Returns the number vairable of the current square
     */
    int getNumber();

    /*
     * Takes in another square. Compares the colors of the two squares.
     * Returns 1 if the colors are the same.
     * Returns 0 if the colors are not the same
     */
    int compareSquares(Square s);

};