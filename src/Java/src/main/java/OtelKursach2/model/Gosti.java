package OtelKursach2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import OtelKursach2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Гости
 */
@Entity(name = "IISOtelKursach2Гости")
@Table(schema = "public", name = "Гости")
public class Gosti {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодГостя")
    private Integer кодгостя;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "Отчество")
    private String отчество;

    @Column(name = "Сотовый")
    private Integer сотовый;

    @Column(name = "Комментарий")
    private String комментарий;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dostup")
    @Convert("Dostup")
    @Column(name = "Доступ", length = 16, unique = true, nullable = false)
    private UUID _dostupid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dostup", insertable = false, updatable = false)
    private Dostup dostup;


    public Gosti() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодГостя() {
      return кодгостя;
    }

    public void setКодГостя(Integer кодгостя) {
      this.кодгостя = кодгостя;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public String getОтчество() {
      return отчество;
    }

    public void setОтчество(String отчество) {
      this.отчество = отчество;
    }

    public Integer getСотовый() {
      return сотовый;
    }

    public void setСотовый(Integer сотовый) {
      this.сотовый = сотовый;
    }

    public String getКомментарий() {
      return комментарий;
    }

    public void setКомментарий(String комментарий) {
      this.комментарий = комментарий;
    }


}