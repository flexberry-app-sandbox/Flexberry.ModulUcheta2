package ModulUcheta.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import ModulUcheta.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Договор
 */
@Entity(name = "IISModulUchetaДоговор")
@Table(schema = "public", name = "Договор")
public class Dogovor {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Статус")
    private String статус;

    @Column(name = "Тип")
    private String тип;

    @Column(name = "Стоимость")
    private Integer стоимость;

    @Column(name = "Длительность")
    private Double длительность;

    @Column(name = "ЕдВремени")
    private String едвремени;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DirOtdPoRabSKl")
    @Convert("DirOtdPoRabSKl")
    @Column(name = "ДирОтдПоРабСКл", length = 16, unique = true, nullable = false)
    private UUID _dirotdporabsklid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DirOtdPoRabSKl", insertable = false, updatable = false)
    private DirOtdPoRabSKl dirotdporabskl;


    public Dogovor() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getСтатус() {
      return статус;
    }

    public void setСтатус(String статус) {
      this.статус = статус;
    }

    public String getТип() {
      return тип;
    }

    public void setТип(String тип) {
      this.тип = тип;
    }

    public Integer getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Integer стоимость) {
      this.стоимость = стоимость;
    }

    public Double getДлительность() {
      return длительность;
    }

    public void setДлительность(Double длительность) {
      this.длительность = длительность;
    }

    public String getЕдВремени() {
      return едвремени;
    }

    public void setЕдВремени(String едвремени) {
      this.едвремени = едвремени;
    }


}