import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/map")
public String Controller {
    @GetMapping("/coordinates")
    public String getMapCoordinates() {
        return Arrays.asList(
         String coordinates = (4.710989, -74.072090), // Bogotá

        return coordinates;
    }
    
    @GetMapping("/info")
    public String getMapInfo() {

        String mapInfo = "Map information: OpenStreetMap"; 

        return mapInfo;
    }
}
