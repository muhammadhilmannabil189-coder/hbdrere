#include<iostream>
#include<cstdlib>
#include<ctime>
using namespace std;

int main(){
	srand(time(0));
	int angkaBenar = rand() % 100 + 1;
	int tebakan;
	int percobaan = 0;
	cout <<"=== GAME TEBAK ANGKA ===\n";
	do {
		cout<< "Masukan tebakan kamu: ";
		cin>> tebakan;
		percobaan++;

		if (tebakan > angkaBenar) {
			cout<< "Terlalu besar!\n";
		} else if (tebakan < angkaBenar) {
			cout<< "Terlalu kecil\n";
		} else {
			cout<< "Kamu menebak dalam " <<
			percobaan << "percobaan.\n";
		}

	} while (tebakan != angkaBenar);

	return 0; 

}