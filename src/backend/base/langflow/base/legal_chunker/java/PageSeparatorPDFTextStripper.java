import org.apache.pdfbox.text.PDFTextStripper;  
import org.apache.pdfbox.pdmodel.PDPage;  
import java.io.IOException;  
  
public class PageSeparatorPDFTextStripper extends PDFTextStripper {  
    
    public PageSeparatorPDFTextStripper() throws IOException {    
    }  
  
    @Override  
    protected void startPage(PDPage page) throws IOException {  
        writeString("<PAGE " + getCurrentPageNo() + " START>\n");  
        super.startPage(page);  
    }  
  
    @Override  
    protected void endPage(PDPage page) throws IOException {  
        super.endPage(page);  
        writeString("<PAGE " + getCurrentPageNo() + " END>\n");  
    }  
} 
