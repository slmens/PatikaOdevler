package MukemmelSayi;
import java.util.Scanner;

public class MukemmelSayi {
    public static void main(String[] args) throws InterruptedException {
        Scanner input = new Scanner(System.in);
        int number;
        long total = 0;
        boolean isFinish = true;


        // 0 girilene kadar devam eden bir döngü
        do {
            System.out.print("Mükemmel sayı olup olmadığını öğrenmek istediğiniz sayıyı giriniz (Programdan çıkış yapmak için 0 giriniz) : ");
            number = input.nextInt();

            if (number == 0){
                System.out.println("Program kapatılıyor...");
                isFinish = false;
            }else{

                System.out.println("Teşekkürler hemen hesaplıyorum...");
                Thread.sleep(2000);

                // Girilen sayıya kadar olan bütün sayılara o sayıya bölüp kalanı sıfır olanları total değişkeninde topluyoruz
                for (int i = 1; i < number;i++){
                    if (number % i == 0){
                        total += i;
                    }
                }

                // total değişkeni girilen sayıya eşitse mükemmel sayı, değilse mükemmel sayı değildir
                if (number == total){
                    System.out.println(number + " mükemmel sayıdır.");

                }else{
                    System.out.println(number + " mükemmel sayı değildir.");

                }
            }


        }while (isFinish);
    }
}
