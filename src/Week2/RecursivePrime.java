package Week2;
import java.util.Scanner;
public class RecursivePrime {
    public static void main(String[] args) throws InterruptedException {

        // metodu çağırıyoruz
        isPrime();

    }

    static void isPrime() throws InterruptedException {
        Scanner scan = new Scanner(System.in);
        int number;
        int dividerCounter = 0;
        int isFinished = 1;

        while (isFinished != 0){
            System.out.print("Programdan çıkmak için 0'a, devam etmek için herhangi bir sayıya basınız: ");
            isFinished = scan.nextInt();

            System.out.print("Asal sayı olup olmadığını kontrol etmek istediğiniz sayıyı giriniz: ");
            number = scan.nextInt();

            for (int i = 1; i <= number; i++){
                if (number % i == 0){
                    // i 1 den başlıyor ve girilen sayıya kadar olan sayılar arasında 1 ve sayının kendisi hariç
                    // bir sayı bölüyorsa zaten divider counter 3 oluyor ve sayı 3 kez bölünmüş yani 1 ve kendisi hariç
                    // bir sayı tarafından daha bölünmüş demek oluyor
                    dividerCounter = dividerCounter + 1;
                }
            }

            // sadece 1 ve kendisine bölündüyse ilk koşula giriyor
            if (dividerCounter <= 2){
                System.out.println(number + " bir asal sayıdır.");
            }else {
                System.out.println(number + " bir asal sayı değildir.");
            }

            // while bitmeden dividerı sıfırlıyoruz. Çünkü sıfırlamazsak her döngüde toplana toplana 2 yi geçiyor ve programımızın
            // mantığını bozuyor
            dividerCounter = 0;
        }
        // metodu tekrar çağırıyoruz
        isPrime();
    }
}
