package Week5.PatikaStore;

import java.util.UUID;

public class Notebook {

    private final UUID id = UUID.randomUUID();
    private int price,discountRate,stockAmount,memoryAmount,RAM;
    private String name,phoneColor;
    private Brand brandName;
    private double screenSize;



    public Notebook(int price, int discountRate, int stockAmount, int memoryAmount, int RAM, String name, String phoneColor, Brand brandName, double screenSize) {
        this.price = price;
        this.discountRate = discountRate;
        this.stockAmount = stockAmount;
        this.memoryAmount = memoryAmount;
        this.RAM = RAM;
        this.name = name;
        this.phoneColor = phoneColor;
        this.brandName = brandName;
        this.screenSize = screenSize;
    }

    public UUID getId() {
        return id;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getDiscountRate() {
        return discountRate;
    }

    public void setDiscountRate(int discountRate) {
        this.discountRate = discountRate;
    }

    public int getStockAmount() {
        return stockAmount;
    }

    public void setStockAmount(int stockAmount) {
        this.stockAmount = stockAmount;
    }

    public int getMemoryAmount() {
        return memoryAmount;
    }

    public void setMemoryAmount(int memoryAmount) {
        this.memoryAmount = memoryAmount;
    }

    public int getRAM() {
        return RAM;
    }

    public void setRAM(int RAM) {
        this.RAM = RAM;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneColor() {
        return phoneColor;
    }

    public void setPhoneColor(String phoneColor) {
        this.phoneColor = phoneColor;
    }

    public Brand getBrandName() {
        return brandName;
    }

    public void setBrandName(Brand brandName) {
        this.brandName = brandName;
    }

    public double getScreenSize() {
        return screenSize;
    }

    public void setScreenSize(double screenSize) {
        this.screenSize = screenSize;
    }
}
