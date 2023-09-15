package Week2;
import java.util.Scanner;
public class RecursivePow {
    public static void main(String[] args) throws InterruptedException {

        power();

    }

    static void power() throws InterruptedException {
        Scanner scan = new Scanner(System.in);
        int base,power;
        double result;
        String isFinished = "y";
        System.out.print("Programdan çıkmak için x'e, devam etmek için y'ye basınız: ");
        isFinished = scan.nextLine();

        while (isFinished.equals("y")){
            System.out.print("Taban değerini giriniz: ");
            base = scan.nextInt();
            System.out.print("Üs değerini giriniz: ");
            power = scan.nextInt();


            System.out.println("Hemen hesaplıyorum...");
            Thread.sleep(1000);

            result = Math.pow(base,power);
            System.out.println("Sonuç: " + result);

            power();
        }
    }
}
