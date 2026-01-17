int main() {
    int N, sum = 0;
    cout << "Masukkan N: ";
    cin >> N;

    for (int i = 1; i <= N; i++) {
        sum += i;
        cout << sum << " ";
    }
}