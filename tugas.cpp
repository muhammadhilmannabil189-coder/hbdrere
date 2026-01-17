#include <iostream>
using namespace std;

// int main() {
//     float R;
//     float R1;
//     float R2;
//     float R3;
//     float penyebut;

//     R1 = 10;
//     R2 = 20;
//     R3 = 30;
//     penyebut = (1 / R1) + (1 / R2) + (1 / R3);
//     R = 1 / penyebut;

//     cout << "nilai R adalah " + to_string(R);
// }

// int main() {
//     float x;
//     float derajat;
//     float radian;
//     float y;

//     x = 100; 
//     derajat = 30;
//     radian = derajat * 3.14/180;
//     y = x * radian;

//     cout << "Tinggi menara adalah " + to_string(y);
// }
    
// }

  int main(){
    float berat;
    float tinggi;
    float BMI;

    cout << "Masukan BB kamu: ";
    cin >> berat;
    cout << "Masukan tinggi badan kamu (meter): ";
    cin >> tinggi;

    BMI = berat / (tinggi * tinggi);
    cout << "BMI= " << BMI <<endl;
    
    if (BMI <18.5)
    {
        cout << "Kamu kurus";
    } else if (BMI <25)
    {
        cout << "Kamu normal";
    } else if (BMI <30)
    {
        cout << "Kamu kelebihan berat badan";
    } else {
        cout << "Kamu kegemukan";
    }
  }
    
// int main(){
//     int N;
//     cout << "Masukkan N: ";
//     cin >> N;

//     for (int i = N; i >= 1; i--) {
//         for (int j = 1; j <= i; j++) {
//             cout << "*";
//         }
//         cout << endl;
//     }

// }

// int main() {
//     int N;
//     cout << "Masukkan N: ";
//     cin >> N;
    
//     int i = 1;
//     while (i <= N) {    
//         cout << i * i << endl;
//         i++;           
//     }
// }

// int main() {
//     int N, sum = 0;
//     cout << "Masukkan N: ";
//     cin >> N;

//     for (int i = 1; i <= N; i++) {
//         sum += i;
//         cout << sum << " ";
//     }
// }



// #include <iostream>
// #include <cmath>
// using namespace std;

// // int main() {
// //     float a;
// //     float b;
// //     float c;

// //     cout << "Masukkan nilai a: ";
// //     cin >> a;

// //     cout << "Masukkan nilai b: ";
// //     cin >> b;

// //     cout << "Masukkan nilai c: ";
// //     cin >> c;

// //     float D = b*b - 4*a*c;
// //     cout << "Diskriminan = " << D << endl;

// //     if (D > 0) {
// //         float x1 = (-b + sqrt(D)) / (2*a);
// //         float x2 = (-b - sqrt(D)) / (2*a);

// //         cout << "Akar real (berbeda):" << endl;
// //         cout << "x1 = " << x1 << endl;
// //         cout << "x2 = " << x2 << endl;
// //     }
  
// //     else if (D == 0) {
// //         float x = -b / (2*a);

// //         cout << "Akar real kembar:" << endl;
// //         cout << "x1 = " << x << endl;
// //         cout << "x2 = " << x << endl;
// //     }

// //      else {
// //         cout << "Akar kompleks:\n";
// //         cout << "x1 = " << (-b / (2*a))
// //              << " + " << (sqrt(-D) / (2*a)) << "i" << endl;

// //         cout << "x2 = " << (-b / (2*a))
// //              << " - " << (sqrt(-D) / (2*a)) << "i" << endl;
// //     }

// // }
// int main(){ 
//         float a;
//         float b;
//         float c;
//         float d;
//         float x1;
//         float x2;
//         cout << "Masukan nilai a";
//         cin >> a;
//         cout << "Masukan nilai b";
//         cin >> b;
//         cout << "Masukan nilai c";
//         cin >> c;
//         d = b*b -4*a*c;
    
//         if (d > 0)
//         {
//             float x1 = (-b + sqrt(d))/(2*a);
//             float x2 = (-b - sqrt(d))/(2*a);
//             cout << "Akar real dan berbeda";
//         }
//         else if (d = 0)
//         {
//             float x1 = -b/(2*a);
//             cout << "Akar real dan kembar";
//         }
//         else
//         {
//             cout << "Akar Kompleks";
//         }
        
        
        

// }