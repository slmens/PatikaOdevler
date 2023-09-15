package Week2;
import java.util.Scanner;

public class Desen {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Bir sayı giriniz: ");
        int number = scan.nextInt();

        callMyself(number,number);
    }

    public static boolean callMyself(int i,int number ) {
        if (i <= 0) {
            desenIncrease(i,number);
            return true;
        }
        System.out.print(i + " ");
        callMyself(i -5,number);
        return false;
    }

    public static boolean desenIncrease(int i,int number) {
        System.out.print(i + " ");
        if (i == number) {
            return true;
        }
        desenIncrease(i + 5,number);
        return false;
    }





}
