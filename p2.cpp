#include <iostream>
using namespace std;

int main(){
    int soal = rand()%100 + 1;
    int jawaban;
    cout << "===JAWAB SOAL===\n";

    do
    {
        cout << "Masukan jawaban kamu : ";
        cin >> jawaban;

        if (jawaban < soal)
        {
            cout << "BUKAN";
        }
        
    } while (soal != jawaban);
    cout << "mantap";
}