#include <iostream>
using namespace std;

// int main(){
//     int X;
//     int Y;
//     int A;
//     int B;
//     int Sisa;

//     cout << "Masukan Nilai X: ";
//     cin >> X;
//     cout << "Masukan Nilai Y: ";
//     cin >> Y;

//     if (X >= Y)
//     {
//         A = X;
//         B = Y;
//     }
//     else {
//         A = Y;
//         B = X;
//     }
//     Sisa = A % B;

//     while (Sisa != 0)
//     {
//         A = B;
//         B = Sisa;
//         Sisa = A % B;
//     }
    
//     cout << "FPB dari X dan Y: " + to_string (B);
// }

#include <iostream>
#include <sstream>
#include <string>
#include <cstdlib>
#include <cmath>

using namespace std;

// Headers
string toString (double);
int toInt (string);
double toDouble (string);
void subHitungRataRata(int durasiTugas[], int jumlahTugas);
void subinputData(int durasiTugas[], int jumlahTugas);
void subtampilkanUrutan(int durasiTugas[], int jumlahTugas);

int main() {
    int jumlahTugas;

    do {
        cout << "Masukan jumlah tugas (5-10)" << endl;
        cin >> jumlahTugas;
    } while (jumlahTugas < 5 || jumlahTugas > 10);
    int durasiTugas[jumlahTugas];

    subinputData(durasiTugas, jumlahTugas);
    subtampilkanUrutan(durasiTugas, jumlahTugas);
    subHitungRataRata(durasiTugas, jumlahTugas);
    return 0;
}

void subHitungRataRata(int durasiTugas[], int jumlahTugas) {
    int i, totalDurasi;
    double rataRata;

    totalDurasi = 0;
    for (i = 0; i <= jumlahTugas - 1; i++) {
        totalDurasi = totalDurasi + durasiTugas[i];
    }
    rataRata = (double) totalDurasi / jumlahTugas;
    cout << "Rata-rata waktu tunggu;" << rataRata << endl;
}

void subinputData(int durasiTugas[], int jumlahTugas) {
    int indeks, durasiInput;

    for (indeks = 0; indeks <= jumlahTugas - 1; indeks++) {
        do {
            cout << "Masukan durasi tugas ke-" << indeks + 1 << endl;
            cin >> durasiInput;
        } while (durasiInput <= 0);
        durasiTugas[indeks] = durasiInput;
    }
}

void subtampilkanUrutan(int durasiTugas[], int jumlahTugas) {
    int i, j, durasiSementara;

    for (i = 0; i <= jumlahTugas - 2; i++) {
        for (j = i + 1; j <= jumlahTugas - 1; j++) {
            if (durasiTugas[i] < durasiTugas[i]) {
                durasiSementara = durasiTugas[i];
                durasiTugas[i] = durasiTugas[i];
                durasiTugas[i] = durasiSementara;
            }
        }
    }
    for (i = 0; i <= jumlahTugas - 1; i++) {
        cout << "Tugas ke-" << i + 1 << "&durasi: " << durasiTugas[i] << endl;
    }
}

// The following implements type conversion functions.
string toString (double value) { //int also
    stringstream temp;
    temp << value;
    return temp.str();
}

int toInt (string text) {
    return atoi(text.c_str());
}

double toDouble (string text) {
    return atof(text.c_str());
}
