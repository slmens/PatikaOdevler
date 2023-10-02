package Week5.PatikaStore;
import java.util.Scanner;
import java.util.TreeSet;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Scanner scan = new Scanner(System.in);
        boolean notFinished = true;
        int userChoice = 4;


        while (notFinished){
            System.out.println();
            System.out.println("****************** Welcome to Patika Store ******************");
            System.out.println();
            System.out.println("How we can help you?");
            System.out.println("1 - Notebooks");
            System.out.println("2 - Mobile Phones");
            System.out.println("3 - List of Brands");
            System.out.println("4 - Exit");
            System.out.print("Your choice? : ");

            try {
                userChoice = scan.nextInt();
            }catch (Exception e){
                System.out.println("Please enter a value between 1 and 4...");
                e.printStackTrace();
                continue;
            }

            switch (userChoice){
                case 1:

                    break;

                case 2:
                    System.out.printf("---------------------------------------------------------------------------------------------------%n");
                    System.out.printf("| ID | Product Name                      | Price    | Brand    | Storage   | Screen   | Ram       |%n");
                    System.out.printf("---------------------------------------------------------------------------------------------------%n");
                    for (MobilePhone mobilePhone : MobilePhone.mobilePhones){
                        System.out.printf("| %-10s | %-8s                      | %4s $  | %6s    | %7s GB  | %8s INC  | %9s MB     |%n",mobilePhone.getRealId().substring(0,7),mobilePhone.getName(),mobilePhone.getPrice(),mobilePhone.getBrandName().getBrandName(),mobilePhone.getMemoryAmount(),mobilePhone.getScreenSize(),mobilePhone.getRAM());
                    }

                    System.out.print("---------------------------------------------------------------------------------------------------");
                    break;

                case 3:
                    System.out.println("Our Brands:");
                    for (Brand brand: Brand.brands){
                        System.out.println("- " + brand.getBrandName());
                    }
                    Thread.sleep(2000);
                    break;

                case 4:
                    System.out.println("We would like to see you again...");
                    notFinished = false;
                    break;
            }

        }

    }
}
