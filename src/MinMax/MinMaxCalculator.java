package MinMax;
import java.util.Arrays;
import java.util.Scanner;

public class MinMaxCalculator {
    public static void main(String[] args) throws InterruptedException {
        Scanner input = new Scanner(System.in);
        int numberCount,min,max;

        System.out.print("Kaç tane sayı gireceksiniz? :  ");
        numberCount = input.nextInt();
        // Kaç tane sayı girilecekse o kadar sayıyı alabilecek bir array oluşturuyorum
        int[] numberArray = new int[numberCount];

        // Girilecek sayı kadar bir döngü açıp, sayıları alıyorum
        for (int i = 0; i < numberCount; i++){
            System.out.print(i+1 + "." + " Sayıyı giriniz: ");
            numberArray[i] = input.nextInt();
        }

        System.out.println("Teşekkürler. Sizin için en küçük ve en büyük değerleri buluyorum...");
        Thread.sleep(2000);

        // Sort metodunu kullanarak arrayi küçükten büyüğe sıralıyorum ve sonra ilk ve son değerini min,max şeklinde kaydediyorum
        Arrays.sort(numberArray);
        min = numberArray[0];
        max = numberArray[numberArray.length-1];

        System.out.println(String.format("Vermiş olduğunuz sayılar içinde en küçük sayı %s, en büyük sayı ise %d",min,max));
    }
}
