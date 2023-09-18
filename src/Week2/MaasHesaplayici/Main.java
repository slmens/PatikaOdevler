package Week2.MaasHesaplayici;

public class Main {
    public static void main(String[] args) {

        //Employee sınıfından employee nesnelerimizi yani çalışanlarımızı oluşturup onlara değer veriyoruz

        Employee employee = new Employee("Ahmet",2000,65,2015);
        Employee employee2 = new Employee("İlayda",2300,45,2000);
        Employee employee3 = new Employee("İbrahim",1250,40,2020);
        Employee employee4 = new Employee("Nazlı",1350,50,2018);
        Employee employee5 = new Employee("Arda",1700,46,2009);
        Employee employee6 = new Employee("Cenk",1800,38,2012);

        //Employe sınıfındaki printMethod() metodunu çağırıyoruz. Bu metot nesnelerin değerlerini ekrana yazdırıyor

        System.out.println("----------------------");
        employee.toString();
        System.out.println("----------------------");
        employee2.toString();
        System.out.println("----------------------");
        employee3.toString();
        System.out.println("----------------------");
        employee4.toString();
        System.out.println("----------------------");
        employee5.toString();
        System.out.println("----------------------");
        employee6.toString();
    }
}
