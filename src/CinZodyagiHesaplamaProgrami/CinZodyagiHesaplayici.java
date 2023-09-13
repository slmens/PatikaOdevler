package CinZodyagiHesaplamaProgrami;
import java.util.Scanner;
public class CinZodyagiHesaplayici {
    public static void main(String[] args) throws InterruptedException {
        Scanner input = new Scanner(System.in);

        int dogumYili;
        String zodyak = null;

        System.out.print("Hoşgeldiniz. Zodyağınızı hesaplamak için lütfen doğum yılınızı (1992,2001,1966) giriniz: ");
        dogumYili = input.nextInt();

        System.out.println("Teşekkürler, hemen hesaplıyorum...");
        Thread.sleep(2000);

        int kalan = dogumYili % 12;


        switch (kalan) {
            case 0 -> zodyak = "Maymun";
            case 1 -> zodyak = "Horoz";
            case 2 -> zodyak = "köpek";
            case 3 -> zodyak = "domuz";
            case 4 -> zodyak = "fare";
            case 5 -> zodyak = "öküz";
            case 6 -> zodyak = "kaplan";
            case 7 -> zodyak = "tavşan";
            case 8 -> zodyak = "ejderha";
            case 9 -> zodyak = "yılan";
            case 10 -> zodyak = "at";
            case 11 -> zodyak = "koyun";
        }

        System.out.println("Sizin çin zodyağınız "+zodyak);
    }
}
