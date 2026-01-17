#include <iostream>
using namespace std;

int main() {
	string username;
    string password;

    string username_yg_bener = "admin";
    string password_yg_bener = "admin123";

    cout << "username";
    cin >> username;
    cout << "password";
    cin >> password;

    if (username != username_yg_bener) {
        cout << "bukan itu usernamenya goblog";
    }
    else if (password != password_yg_bener) {
        cout << "bukan itu passswordnya goblog";
    }
    else {
        cout << "mantap";
    }
}