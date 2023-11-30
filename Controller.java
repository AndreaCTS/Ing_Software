
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class MapController {

    @GetMapping("/map")
    public String showMap(Model model) {
        // Simula una lista de coordenadas de ruta
        List<Coordinate> routeCoordinates = new ArrayList<>();
        routeCoordinates.add(new Coordinate(37.7749, -122.4194)); // San Francisco
        routeCoordinates.add(new Coordinate(34.0522, -118.2437)); // Los Angeles
        routeCoordinates.add(new Coordinate(41.8781, -87.6298)); // Chicago

        model.addAttribute("routeCoordinates", routeCoordinates);

        return "map";
    }
}