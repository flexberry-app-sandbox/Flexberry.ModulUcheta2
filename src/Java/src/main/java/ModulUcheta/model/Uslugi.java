package ModulUcheta.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import ModulUcheta.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Услуги
 */
@Entity(name = "IISModulUchetaУслуги")
@Table(schema = "public", name = "Услуги")
public class Uslugi {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "ЗатрВремя")
    private Double затрвремя;

    @Column(name = "ЕдВремени")
    private String едвремени;


    public Uslugi() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Double getЗатрВремя() {
      return затрвремя;
    }

    public void setЗатрВремя(Double затрвремя) {
      this.затрвремя = затрвремя;
    }

    public String getЕдВремени() {
      return едвремени;
    }

    public void setЕдВремени(String едвремени) {
      this.едвремени = едвремени;
    }


}