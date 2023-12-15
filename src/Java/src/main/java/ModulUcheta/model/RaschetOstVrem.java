package ModulUcheta.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import ModulUcheta.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: РасчетОстВрем
 */
@Entity(name = "IISModulUchetaРасчетОстВрем")
@Table(schema = "public", name = "РасчетОстВрем")
public class RaschetOstVrem {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Доступно")
    private Double доступно;

    @Column(name = "Использовано")
    private Double использовано;

    @Column(name = "Дата")
    private Date дата;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dogovor")
    @Convert("Dogovor")
    @Column(name = "Договор", length = 16, unique = true, nullable = false)
    private UUID _dogovorid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dogovor", insertable = false, updatable = false)
    private Dogovor dogovor;

    @OneToMany(mappedBy = "raschetostvrem", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<OkazanieUslug> okazanieuslugs;


    public RaschetOstVrem() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getДоступно() {
      return доступно;
    }

    public void setДоступно(Double доступно) {
      this.доступно = доступно;
    }

    public Double getИспользовано() {
      return использовано;
    }

    public void setИспользовано(Double использовано) {
      this.использовано = использовано;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }


}