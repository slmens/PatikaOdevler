package CinZodyagıHesaplamaProgramı;
import java.util.Scanner;
public class CinZodyagıHesaplayıcı {
    public static void main(String[] args) throws InterruptedException {
        Scanner input = new Scanner(System.in);

        int dogumYili;
        String zodyak = null;

        System.out.print("Hoşgeldiniz. Zodyağınızı hesaplamak için lütfen doğum yılınızı (1992,2001,1966) giriniz: ");
        dogumYili = input.nextInt();

        System.out.println("Teşekkürler, hemen hesaplıyorum...");
        Thread.sleep(2000);

        int kalan = dogumYili % 12;


        switch (kalan){
            case 0:
                zodyak = "Maymun";
                break;
            case 1:
                zodyak = "Horoz";
                break;
            case 2:
                zodyak = "köpek";
                break;
            case 3:
                zodyak = "domuz";
                break;
            case 4:
                zodyak = "fare";
                break;
            case 5:
                zodyak = "öküz";
                break;
            case 6:
                zodyak = "kaplan";
                break;
            case 7:
                zodyak = "tavşan";
                break;
            case 8:
                zodyak = "ejderha";
                break;
            case 9:
                zodyak = "yılan";
                break;
            case 10:
                zodyak = "at";
                break;
            case 11:
                zodyak = "koyun";
                break;
        }

        System.out.println("Sizin çin zodyağınız "+zodyak);
    }
}
