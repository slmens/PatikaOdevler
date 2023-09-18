package Week2.MaasHesaplayici;

public class Employee {
    String name;
    int salary;
    int workHours;
    int hireYear;
    int totalSalary;
    int taxAmount;
    int bonusAmount;
    int salaryRaise;

    Employee(String name,int salary,int workHours,int hireYear){
        this.name = name;
        this.salary = salary;
        this.workHours = workHours;
        this.hireYear = hireYear;
        this.totalSalary = salary;

        //Constructor metodundaki klasik değer verme işlerinin yanı sıra, metot yüklendiğinde diğer çalışması gereken metotları da otomatik olarak çalıştırsın diye
        //Bu şekilde yazıyorum. Bu metotlar çalışıp, verilen değerlere göre hesaplamalara yapacaklar.
        tax();
        bonus();
        raiseSalary();
    }


    //Eğer nesneye girilen maaş değeri 1000'in üstündeyse %3 kesinti yapıyoruz
    public void tax(){
        if (this.salary > 1000){
            this.taxAmount = ((int) (salary * 0.03)) ;
            totalSalary -= (int) (salary * 0.03);
        }
    }

    //Eğer nesneye girilen çalışma saati 40'ın üstündeyse, çalıştığı her saat başına 30 TL bonus alıyor
    public void bonus(){
        if (this.workHours > 40){
            this.bonusAmount = (workHours - 40) * 30;
            totalSalary += bonusAmount;
        }
    }

    //Bu metotda nesneye girilen işe girme yılını şuan ki yıldan çıkartarak, çalışanımızın kaç yıl çalıştığını buluyoruz ve bu sonuca göre maaşda artışlar yapıyoruz
    public void raiseSalary(){
        int workYear = 2021 - hireYear;
        if (workYear > 19) {
            salaryRaise = (int) (salary * 0.15);
            totalSalary += salaryRaise;
        }else if ((workYear) < 10){
            salaryRaise = (int) (salary * 0.05);
            totalSalary += salaryRaise;
        }else if ((workYear > 9) && (workYear < 20)){
            salaryRaise = (int) (salary * 0.1);
            totalSalary += salaryRaise;
        }
    }

    //Bu metot sadece değerleri ekrana yazdırmaya yarıyor
    public String toString(){
        System.out.println("Adı: " + this.name);
        System.out.println("Eski maaşı: " + this.salary + " TL");
        System.out.println("Çalışma saati: " + this.workHours);
        System.out.println("Başlangıç yılı: " + this.hireYear);
        System.out.println("Vergi: " + taxAmount);
        System.out.println("Bonus: " + bonusAmount);
        System.out.println("Maaş artışı: " + salaryRaise);
        System.out.println("Vergi, bonus ve zamla beraber yeni maaş: " + totalSalary + " TL'dir.");
        return null;
    }

}
