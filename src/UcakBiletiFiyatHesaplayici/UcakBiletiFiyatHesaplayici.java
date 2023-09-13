/* döngüler ödevden sonraki sectionda olduğu için kullanmak istemedim bu yüzden bir tık kod karmaşası oldu ve
   tekrar tekrar giriş yapmayı denemesini sağlayamazdım bu yüzden 2. yanlış denemede sistemi kapattım.
*/


package UcakBiletiFiyatHesaplayici;
import java.util.Scanner;

public class UcakBiletiFiyatHesaplayici {
    public static void main(String[] args) throws InterruptedException {
        Scanner input = new Scanner(System.in);
        int mesafe,yas,yolculukTipi;
        double mesafeBasinaUcret = 0.10,total,indirimliTotal = 0,indirimMiktari;

        System.out.print("Fiyat hesaplayıcıya hoşgeldiniz. Lütfen gitmek istediğiniz mesafeyi km türünden giriniz: ");
        mesafe = input.nextInt();

        System.out.print("Lütfen yaşınızı giriniz: ");
        yas = input.nextInt();

        System.out.print("Yolculuk tipini giriniz (1 => tek yön, 2 => gidiş-dönüş): ");
        yolculukTipi = input.nextInt();


        total = mesafe * mesafeBasinaUcret;

        if ((mesafe > 0) && (yas > 0) && ((yolculukTipi == 1) || (yolculukTipi == 2))){
            // İlk kontrol

            System.out.println("Teşekkür ederim. Hemen bilet fiyatınızı hesaplıyorum...");

            Thread.sleep(2000);

            if (yas < 12){
                indirimliTotal = total / 2;
            }else if((yas>12)&&(yas<24)){
                indirimMiktari = total * 0.10;
                indirimliTotal = total - indirimMiktari;
            }else if(yas>65){
                indirimMiktari = total * 0.30;
                indirimliTotal = total - indirimMiktari;
            }
            System.out.println(yolculukTipi);
            if (yolculukTipi == 2){
                indirimMiktari = indirimliTotal * 0.2;
                indirimliTotal = indirimliTotal - indirimMiktari;
            }


            System.out.printf("Bilet fiyatınız: %s TL'dir",indirimliTotal);
        }else {
            // Hata durumunda buraya giriyor
            System.out.println("Hatalı bilgi girdiniz tekrar deneyin.");
            System.out.print("Fiyat hesaplayıcıya hoşgeldiniz. Lütfen gitmek istediğiniz mesafeyi km türünden giriniz: ");
            mesafe = input.nextInt();

            System.out.print("Lütfen yaşınızı giriniz: ");
            yas = input.nextInt();

            System.out.print("Yolculuk tipini giriniz (1 => tek yön, 2 => gidiş-dönüş): ");
            yolculukTipi = input.nextInt();

            total = mesafe * mesafeBasinaUcret;

            if ((mesafe > 0) && (yas > 0) && ((yolculukTipi == 1) || (yolculukTipi == 2))) {
                // İkinci Kontrol
                System.out.println("Teşekkür ederim. Hemen bilet fiyatınızı hesaplıyorum...");

                Thread.sleep(2000);

                if (yas < 12) {
                    indirimliTotal = total / 2;
                } else if ((yas > 12) && (yas < 24)) {
                    indirimMiktari = total * 0.10;
                    indirimliTotal = total - indirimMiktari;
                } else if (yas > 65) {
                    indirimMiktari = total * 0.30;
                    indirimliTotal = total - indirimMiktari;
                }
                System.out.println(yolculukTipi);
                if (yolculukTipi == 2) {
                    indirimMiktari = indirimliTotal * 0.2;
                    indirimliTotal = indirimliTotal - indirimMiktari;
                }


                System.out.printf("Bilet fiyatınız: %s TL'dir", indirimliTotal);

            }else {
                //Hata durumunda kapanıyor
                System.out.println("Yine hatalı bilgi girdiniz. Güvenlik sebebiyle sistem kapatılıyor...");
                System.exit(0);
            }
        }
    }
}
