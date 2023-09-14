package TersUcgen;
import java.util.Scanner;

public class TersUcgen {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int basamakSayisi;

        System.out.print("Yapmak istediğiniz yıldızın kaç basamaklı olacağını giriniz: ");
        basamakSayisi = input.nextInt();

        for (int t = basamakSayisi-1; t >= 0 ; t--) {
            for (int j = 0; j < (basamakSayisi - t); j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= (2 * t + 1); k++) {
                System.out.print("*");
            }
            System.out.println(" ");
        }

    }
}