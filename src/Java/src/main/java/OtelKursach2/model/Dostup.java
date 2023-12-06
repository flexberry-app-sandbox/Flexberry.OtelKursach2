package OtelKursach2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import OtelKursach2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.List;

/**
 * Entity implementation class for Entity: Доступ
 */
@Entity(name = "IISOtelKursach2Доступ")
@Table(schema = "public", name = "Доступ")
public class Dostup {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодДоступа")
    private Integer коддоступа;

    @Column(name = "Доступ")
    private String доступ;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Komnata")
    @Convert("Komnata")
    @Column(name = "Комната", length = 16, unique = true, nullable = false)
    private UUID _komnataid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Komnata", insertable = false, updatable = false)
    private Komnata komnata;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @OneToMany(mappedBy = "dostup", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<RegistrZapisi> registrzapisis;

    @OneToMany(mappedBy = "dostup", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Gosti> gostis;


    public Dostup() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодДоступа() {
      return коддоступа;
    }

    public void setКодДоступа(Integer коддоступа) {
      this.коддоступа = коддоступа;
    }

    public String getДоступ() {
      return доступ;
    }

    public void setДоступ(String доступ) {
      this.доступ = доступ;
    }


}