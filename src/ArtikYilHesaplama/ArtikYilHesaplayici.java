package ArtikYilHesaplama;
import java.util.Scanner;

public class ArtikYilHesaplayici {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int year;

        System.out.print("Artık yıl hesaplayıcıya hoşgeldiniz. Lütfen kontrol etmek istediğiniz yılı (2000,1550,1000) giriniz: ");
        year = input.nextInt();

        if (year % 4 == 0){
            // 4 e kalansız bölünenler
            System.out.println(year + " bir artık yıldır.");

        }else if ((year % 100 == 0) && year % 400 == 0){
            // 100 ün katı olup 400 e kalansız bölünenler
            System.out.println(year + " bir artık yıldır.");

        }else {
            // hiçbir koşula uymayanlar
            System.out.println(year + " artık yıl değildir.");
        }


    }
}

