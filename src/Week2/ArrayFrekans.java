package Week2;

import java.util.Arrays;

public class ArrayFrekans {
    public static void main(String[] args) {
        // Karışık sayı arrayimiz
        int[] arr = {10, 20, 20, 10, 10, 20, 5, 20,5,5,5,10,15,15};

        // İlk for döngüsünün sonuçları bu arraye yazılıyor. 200 tane 10'da olsa bu arraye 1 tane yazılıcak
        int[] exArr = new int[arr.length];

        // İlk for döngüsünde hangi sayıdan kaç tane var bilgisini tutan array bu. Bir üstteki arrayle basamak sayısı bakımından senkronlar.
        int[] countArr = new int[exArr.length];

        int counter = 0;


        // İlk for döngüsüne başladık ve arr[0]'dan i = 10. Bu durumda diğer döngü başlayacak ve o da j = 10 olacak. Bu sayede if koşulunu sağlayacaklar.
        for (int i = 0 ; i < arr.length ; i++){
            for (int j = 0 ; j < arr.length ; j++){
                if (arr[i] == arr[j]){
                    // Bu if koşulunda sayının adedini saymaya başlıyoruz
                    counter ++;

                    // Eğer metodumuzdan true gelirse burası sağlanıyor ve diyelim ki i = 0, o zaman exArr'in ilk basamağı arr[0] yani 10 olacak. Ama bir daha asla
                    // bu koşul 10 sayısı için sağlanamicak çünkü metot exArr'da 10 olduğunu bilicek ve bu koşulda false vericek.
                    if (hasFound(exArr,arr[j])){
                        exArr[i] = arr[i];
                    }
                    // Hangi sayı kaç tane geçiyorsa counterArr'a bunu kaydediyoruz
                    countArr[i] = counter;
                }
            }
            // Yeni bir sayıya geçmeden counterı sıfırlıyoruz
            counter = 0;
        }

        // Buranın altındaki kodlar ekrana çıktı vermesi için yazıldı
        System.out.println(Arrays.toString(arr));

        for (int t = 0 ; t < exArr.length ; t++){
            if (exArr[t] != 0){
                System.out.println("---------------------------");
                System.out.println(exArr[t] + " sayısı " + countArr[t] + " kere tekrar edildi.");

            }
        }
    }

    // Alttaki metot bir int array ve bir int alıyor. Bir foreach döngüsünde bu arrayi gezip, arrayin içinde verilen int varsa false dönüyor, yoksa true.

    public static boolean hasFound(int[] arr, int number){
        for (int i : arr){
            if (i == number){
                return false;
            }
        }

        return true;
    }
}