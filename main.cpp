#include "Square.cpp"
#include <random>
#include <iostream>
#include <vector>
#include <array>
#include <ctime>
#include <fstream>
using namespace std;

/* Requires: 
 * int x dimension of board
 * int y dimension of board
 * string vector of selectable colors
 * int vector to keep track of the number of times a color is used
 * string file name of file that the board is written to
 * Modifies: the vector that keeps track of the number of times a color is used
 * Effects: Creates a matrix of square objects in the with the given dimensions
 */
vector<vector<Square> > setUpBoard(int dimensionX, int dimensionY, vector<string> colors, vector<int> &amountEachColor, string fileName);

/* Requires:
 * string file name of file that the board is written to
 * Modifies: The file that is passed in
 * Effects: Creates a matrix of square objects in the with the given dimensions
 */
vector<vector<Square> > writeInBoard(string fileName);
/* Requires: 
 * int size is number of colors to be created
 * string vector of selectable colors
 * Modifies: the vector of colors
 * Effects: Randomly makes colors and puts them in vector
 */
vector<string> gameColors(int size);

int main(int argc, char *argv[]){
    srand(time(0));
    //declaring variables
    string choice = argv[1];
    int dimensionX = stoi(argv[2]);
    int dimensionY = stoi(argv[3]);
    vector<vector<Square> > board;
    int halfSize = (dimensionX * dimensionY) / 2;

    
    //Here we have different function calls depending on what is passed in through the command line
    //The first choice is board which calls gameColors and creates the colors for the game
    //this choice also calls setUpBoard which sets up the game board
    if(choice == "board"){
        //define color vector and amout of color vector
        vector<int> amountEachColor;
        //populate amount of color vector with zeros
        for(int i = 0; i < halfSize; ++i){
            amountEachColor.push_back(0);
        }
        //generate colors and store
        vector<string> colors = gameColors(halfSize);

        //sets the file name from the command line passed from php
        string fileName = argv[4];
        board = setUpBoard(dimensionX, dimensionY, colors, amountEachColor, fileName);
    }
    //The next choice is color which prints the color of the square to the console to be read
    else if(choice == "color"){
        string fileName = argv[4];
        board = writeInBoard(fileName);

        cout << board[dimensionX][dimensionY].getColor();
    }
    //The last choice is compare which compares the color of two squares to see if they match. This function also
    //helps keep track of the score of the game
    else if (choice == "compare"){
        string fileName = argv[7];
        board = writeInBoard(fileName);
        int dimensionX2 = stoi(argv[4]);
        int dimensionY2 = stoi(argv[5]);
        int currentScore = stoi(argv[6]);
        Square s1 = board[dimensionX-1][dimensionY-1];
        Square s2 = board[dimensionX2-1][dimensionY2-1];
        bool compareOut = s1.compareSquares(s2);
        if (compareOut == 1){
            cout << compareOut;
            ++currentScore;
        }
        else if(compareOut == 0){
            cout << compareOut;
        }
        
    }

}


vector<vector<Square> > setUpBoard(int dimensionX, int dimensionY, vector<string> colors, vector<int> &amountEachColor, string fileName){

    // a vector to hold the row vectors
    vector<vector<Square> > allSquares;
    vector<Square> rowSquares;

    ofstream myfile;
    myfile.open(fileName);
    for (int i = 0; i < dimensionY; ++i) {

        cout << "<div class='row' id='row" + to_string(i) + "'>";
        rowSquares.clear();

        for (int j = 0; j < dimensionX; ++j) {

            // create squares here & add them to vector squareBoard
            Square s = Square();
            s.setNumber(j);
            s.generateColor(colors, amountEachColor);
            rowSquares.push_back(s);
            //rowSquares[j].setNumber(j);
            //rowSquares[j].generateColor(colors, amountEachColor);

            cout << "<div class='square unflipped' id='row" + to_string(i+1) + "column" + to_string(j+1) + "'></div>";

            myfile << i+1 << "\n";
            myfile << s.getNumber() << "\n";
            myfile << s.getColor() << "\n";
            myfile << "\n";
        }
        cout << "</div>";
        allSquares.push_back(rowSquares);
    }
    myfile.close();
    return allSquares;
}

vector<vector<Square> > writeInBoard(string fileName){
    // a vector to hold the row vectors
    vector<vector<Square> > allSquares;
    vector<Square> rowSquares;

    ifstream myfile(fileName);
    //initialize variables to read into
    std::string readColor;
    int readRow;
    int readNumber;
    int currentRow = 1;
    string blankLine;
    //add all square info from file ot the vector matrix
    //File set up like:
    //Row #
    //Square #
    //Square Color
    //Blank Space
    while(myfile){
        myfile >> readRow;
        //cout << "RRow: " << readRow << endl;
        if(readRow > currentRow){
            //cout << "size: " << rowSquares.size() << endl;
            //cout << "NEW ROW: "<< endl;
            currentRow++;
            allSquares.push_back(rowSquares);
            rowSquares.clear();
        }
        myfile >> readNumber;
        //cout << "Rnumber: " << readNumber << endl; // TESTING OUTPUT HERE //
         myfile >> readColor;
        //cout << "Rcolor: " << readColor << endl; // TESTING OUTPUT HERE //
        getline (myfile, blankLine);
        //cout << "BLANK LINE: " << blankLine << endl;
        Square s = Square();
        s.setNumber(readNumber);
        s.setColor(readColor);
        rowSquares.push_back(s);
        
    }
    allSquares.push_back(rowSquares);
    myfile.close();
    return allSquares;
}


vector<string> gameColors(int size){

    vector<string> colors;
    vector<string> colorlist;
    string color1 = "73,56,41"; // I double checked, these are the right colors
    string color2 = "129,108,91";
    string color3 = "169,161,140";
    string color4 = "97,51,24";
    string color5 = "133,97,35";
    string color6 = "185,156,107";
    string color7 = "143,59,27";
    string color8 = "213,117,0";
    string color9 = "219,202,105";
    string color10 = "64,79,36";
    string color11 = "102,141,60";
    string color12 = "189,208,156";
    string color13 = "78,97,114";
    string color14 = "131,146,159";
    string color15 = "163,173,184";
    colorlist.push_back(color1);
    colorlist.push_back(color2);
    colorlist.push_back(color3);
    colorlist.push_back(color4);
    colorlist.push_back(color5);
    colorlist.push_back(color6);
    colorlist.push_back(color7);
    colorlist.push_back(color8);
    colorlist.push_back(color9);
    colorlist.push_back(color10);
    colorlist.push_back(color11);
    colorlist.push_back(color12);
    colorlist.push_back(color13);
    colorlist.push_back(color14);
    colorlist.push_back(color15);

    // go until our size is full
    for (int i = 0; i < size; ++i){
        //int tempcolor = rand()%14;
        //string color = colorlist[tempcolor];
        
        
        // to test if the color is already in the array, generate a new color
        // for (int j = 0; j < colors.size(); ++j) {
        //     if (colors[j] == color) { 
        //         int newcol = rand()%14; 
        //         color = colorlist[newcol];
        //     }
        
        // colors.push_back(color);


        // OLD COLOR FUNCTION (for safe keeping) //
        int redValue = rand()%255;
        int greenValue = rand()%255;
        int blueValue = rand()%255;
        string color = to_string(redValue) + "," + to_string(greenValue) + "," + to_string(blueValue);
        colors.push_back(color);
        //}
    }
    return colors;
}

void getColor(int xDim, int yDim, vector<vector<Square> > allSquares){
    string squareColor = allSquares[xDim][yDim].getColor();
    
}