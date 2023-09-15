package Week2;
import java.util.Arrays;
import java.util.Scanner;

public class ArrarSort {
    public static void main(String[] args) {
        arraySort();
    }

    static void arraySort(){
        Scanner scan = new Scanner(System.in);

        // arrayin eleman sayısını tutan değişkeni ve arrayi oluşturuyoruz
        int arrayCount;
        int[] arr;

        System.out.print("Dizinin boyutu: ");
        // Kullanıcdan arrayin eleman sayısını alıyoruz
        arrayCount = scan.nextInt();

        // Verilen eleman sayısı kadar arrayi kuruyoruz.
        arr = new int[arrayCount];

        System.out.println("Dizinin elemanlarını giriniz...");

        // Verilen eleman sayısı kadar for döngüsü döndürüp sayıları alıp arraydeki yerine yerleştiriyoruz
        for (int i = 0; i<arr.length;i++){
            System.out.print(i+1 + ". elemanı giriniz: ");
            int number = scan.nextInt();
            arr[i] = number;
        }

        // Bu metod küçükten büyüğe sıralıyor
        Arrays.sort(arr);

        // Sıralanmış arrayi print ediyoruz
        for (int j : arr) {
            System.out.print(j + " ");
        }
    }
}
