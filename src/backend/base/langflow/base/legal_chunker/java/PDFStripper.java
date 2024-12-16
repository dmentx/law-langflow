import java.io.IOException;    
import java.io.File;    
import java.util.Optional;  
import org.apache.pdfbox.Loader;    
import org.apache.pdfbox.pdmodel.PDDocument;    
import org.apache.pdfbox.pdmodel.PDPage;    
import org.apache.pdfbox.text.PDFTextStripper;    
import com.google.gson.Gson;  
  
public class PDFStripper {      
  
    public static void main(String[] args) throws IOException {      
        if (args.length == 0) {      
            System.out.println("Please provide a path to a PDF file");      
            return;      
        }      
        String pdfPath = args[0];      
        String json = convertPdfToJson(pdfPath);  
        System.out.println(json);  
    }    
  
    public static String convertPdfToJson(String pdfPath) {      
        String json = "";  
        try {    
            // Lädt das PDF-Dokument    
            PDDocument doc = Loader.loadPDF(new File(pdfPath));    
                
            PDFTextStripper stripper = new PageSeparatorPDFTextStripper();          
            String text = stripper.getText(doc);        
                
            // Erstellen Sie ein neues Gson-Objekt      
            Gson gson = new Gson();      
                
            // Konvertieren Sie den Text in ein JSON-Objekt      
            json = gson.toJson(text);      
    
            // Schließen Sie das PDDocument    
            doc.close();    
        } catch (IOException e) {        
            System.out.println("Error processing PDF");        
        }  
        return json;  
    }    
}  