package AsalSayilar;
public class AsalSayilar {
    public static void main(String[] args) {
        int limit = 100;
        int dividerCounter = 0;

        // Asal sayılar kendisine ve 1 den başka bir sayıya bölünemeyen sayılardır
        // Counter asal sayı mı değil mi diye kontrol edeceğimiz sayı. i ise onu 100 e kadar olan sayılarla bölüp kalana bakan sayı

        for (int counter = 2; counter<limit; counter++){
            for (int i = 1; i<limit; i++){
                if (counter % i == 0){
                    /* diyelim ki counter 3. Bu durumda 2. for loop başlayacak ve 3 % 1 == 0 doğru gelicek dividerCounterı 1 arttırıcak
                    // 3 % 2 == 0 doğru olmayacak, 3 % 3 == 0 doğru olacak ve dividerCounterı bir arttırıcak. Bundan sonraki hiç bir sayı
                    // 3ü bölemeyeceği için 3 asal sayıdır diyebiliyoruz. Ama sayımız 5 olsaydı mesela evet 1 de bölüncek 5 te bölüncek
                     2 oldu divider counter ama 10da da bölüncek ve dividerCounter 3 olduğu için asal değildir diyebiliyoruz */
                    dividerCounter += 1;
                }
            }

            //System.out.println(dividerCounter);
            if (dividerCounter <= 2){
                System.out.print(counter + " ");
            }
            dividerCounter = 0;
        }
    }
}
