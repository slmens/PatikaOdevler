package Week2;
import java.util.Scanner;
import java.util.Arrays;

public class MatrisTranspozu {
    public static void main(String[] args) throws InterruptedException {
        Scanner scan = new Scanner(System.in);
        int row,col;

        // Bu inputlarla kullanıcıdan oluşturacağımız 2 arrayin row ve column değerlerini alıyoruz
        System.out.print("Kurmak istediğiniz 2 boyutlu arrayin değerlerini giriniz. Satır: ");
        row = scan.nextInt();
        System.out.print("Sütun: ");
        col = scan.nextInt();
        System.out.println("Teşekkürler. Arrayinizi rastgele sayılarla dolduruyorum...");
        System.out.println();
        Thread.sleep(2000);

        // İki tane array oluşturuyoruz birisi rastgele sayılarla dolduracağımız array, diğeri ise bu arrayin transpozunu tutucaz
        int[][] originalArray = new int[row][col];
        int[][] transpozeArray = new int[row][col];


        // Bu iki for loopu originalArray'i rastgele sayılarla dolduruyor
        for (int i = 0; i < originalArray.length; i++ ){
            for (int j = 0; j < originalArray[i].length; j++){
                int rand = (int) ((Math.random() * 100) / 2);

                originalArray[i][j] = rand;
                System.out.print(originalArray[i][j] + " ");
            }
            System.out.println();
        }

        System.out.println();
        System.out.println("Arrayiniz dolduruldu. Şimdi transpoze ediyorum...");
        System.out.println();
        Thread.sleep(2000);

        // Metodu çağırıyoruz ve iki arrayimizide parametre olarak veriyoruz
        transpoz(originalArray,transpozeArray);
    }



    public static void transpoz(int[][] arr1, int[][] arr2){
        int newN,exN;

        // Bu for loopu biraz karışık. Örnek üzerinden anlatmak gerekirse diyelim ki [2][3] bölgesine geldi loop. O anda orada bulunan sayıyı exN değişkenine atıyoruz.
        // Sonra aynı bölgenin transpozunu newN değişkenine atıyoruz. Ve bu iki değeri transpoz arrayimizde yerlerine yazıyoruz. Böylelikle loop sonunda her sayı transpoz edilmiş oluyor

        for (int i = 0; i < arr1.length; i++ ){
            for (int j = 0; j < arr1[i].length; j++){
                if (j != i){
                    exN = arr1[i][j];
                    newN = arr1[j][i];

                    arr2[i][j] = newN;
                    arr2[j][i] = exN;
                }else {
                    newN = arr1[i][j];

                    arr2[i][j] = newN;
                }
            }
        }

        // Alttaki loopta transpoz edilmiş arrayimizi ekrana yazdırıyoruz

        for (int i = 0; i < arr1.length; i++ ){
            for (int j = 0; j < arr1[i].length; j++){
                System.out.print(arr2[i][j] + " ");
            }
            System.out.println();
        }

    }
}
