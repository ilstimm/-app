package software.project.project;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class InformationController {

    @Autowired
    private InformationService InformationService;

    @GetMapping("/Informations/{user}/{order}")
    public ResponseEntity<Information> getInformation(@PathVariable("user") String user, @PathVariable("order") int order) {
        Information Information = InformationService.getInformation(user, order);
        
        return ResponseEntity.ok(Information);
    }
    @GetMapping("/Informations/{user}")
    public ResponseEntity<List<Information>> getUserInformation(@PathVariable("user") String user) {
        List<Information> Informations = InformationService.getInformation(user);

        return ResponseEntity.ok(Informations);
    }
    @GetMapping("/Informations")
    public ResponseEntity<List<Information>> getInformations() {
        List<Information> Informations = InformationService.getAllInformation();

        return ResponseEntity.ok(Informations);
    }
    
    @PostMapping("/Informations")
    public ResponseEntity<Information> createInformation(@RequestBody Information request) {
        System.out.println("POST");
        Information Information = InformationService.createInformation(request);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{user}")
                .buildAndExpand(Information.getUser())
                .toUri();

        return ResponseEntity.created(location).body(Information);
    }

    @PutMapping("/Informations/{user}/{order}")
    public ResponseEntity<Information> replaceInformation(
            @PathVariable("user") String user, @PathVariable("order") int order, @RequestBody Information request) {
            Information Information = InformationService.replaceInformation(user, order, request);

        return ResponseEntity.ok(Information);
    }

    @DeleteMapping("/Informations/{user}/{order}")
    public ResponseEntity<Information> deleteInformation(@PathVariable("user") String user, @PathVariable("order") int order) {
        System.out.println("Delete user = " + user + " order = " + order);
        InformationService.deleteInformation(user, order);

        return ResponseEntity.noContent().build();
    }
}