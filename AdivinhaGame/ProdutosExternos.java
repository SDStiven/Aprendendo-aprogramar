package model;

import java.util.ArrayList;

public class ProdutosExternos {
    private String id ;
    private String title;
    private String description;
    private String price;
    
    public ProdutosExternos ( String novoId, String novaTitle,String novaDescription ,double novoPrice){
        this.id = novoId;
        this.title = novaTitle;
        this.description = novaDescription;
        this.price =novoPrice;
        
    }
    
    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return price;
    }

    // Setters
    public void setId(String id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setPrice(double price) {
        this.price = price;
    }


}