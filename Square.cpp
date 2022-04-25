#include "Square.h"
#include <string>
#include <random>
#include <vector>
#include <iostream>
using namespace std;

Square::Square(){
    color = "";
    number = -1;
};
void Square::flipSquare(){
    flipped = true;
};

void Square::generateColor(vector<std::string> colors, vector<int> &numUsed){
    bool finished = false;
    while(!finished){
        int randColor = rand()%colors.size();
        if(numUsed[randColor] < 2){
            this->color = colors[randColor];
            numUsed[randColor]++;
            finished = true;
        }
    }
};

std::string Square::getColor() {
    return color;
}

int Square::getNumber(){
    return number;
}

void Square::setNumber(int num){
    this->number = num;
};

void Square::setColor(string col){
    this->color = col;
};

int Square::compareSquares(Square s){
    if(this->getColor() == s.getColor()){
        return 1;
    } else {
        return 0;
    }
};