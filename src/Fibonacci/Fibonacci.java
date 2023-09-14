package Fibonacci;
import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) throws InterruptedException {
        Scanner input = new Scanner(System.in);
        int limit;

        System.out.print("Lütfen fibonacci dizininizin uzunluğunu belirleyiniz: ");
        limit = input.nextInt();

        // her ne kadar arrayi long yapmış olsam da fibonacci sayıları o kadar hızlı büyüyor ki 100. fibonacci sayısını bu arrayda
        // depolayamıyorum. Bu yüzden küçük sayılar girilmeli mesela 30,40
        long[] arr = new long[limit+1];

        System.out.println("Hemen hesaplıyorum...");
        Thread.sleep(2000);


        // Burda sıfır ve biri aradan çıkardıktan sonra bir sonraki değeri hesaplayıp arrayde yerine yazıyorum
        for (int i = 0; i<limit;i++){
           if (i == 0){
               arr[i] = i;
               continue;
           }else if (i == 1){
               arr[i] = i;
               arr[i+1] = i;
               continue;
           }

           arr[i + 1] = arr[i] + arr[i-1];


        }

        // Burda ise arraydeki değerleri okuyorum
        for (int i = 0;i<arr.length;i++){
            System.out.println(arr[i]+" ");
        }
    }
}
