// MapApp.java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

public class MapApp extends Application {

    @Override
    public void start(Stage primaryStage) {
        WebView webView = new WebView();
        WebEngine webEngine = webView.getEngine();

        // Cargar el contenido HTML con el mapa (usando Leaflet y OpenStreetMap)
        webEngine.loadContent("<html>\n" +
                "  <head>\n" +
                "    <title>Mapa</title>\n" +
                "    <meta charset=\"utf-8\" />\n" +
                "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
                "    <link rel=\"stylesheet\" href=\"https://unpkg.com/leaflet/dist/leaflet.css\" />\n" +
                "    <style> #map { height: 100vh; } </style>\n" +
                "  </head>\n" +
                "  <body>\n" +
                "    <div id=\"map\"></div>\n" +
                "    <script src=\"https://unpkg.com/leaflet/dist/leaflet.js\"></script>\n" +
                "    <script>\n" +
                "      var map = L.map('map').setView([51.505, -0.09], 13);\n" +
                "      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n" +
                "          attribution: '&copy; OpenStreetMap contributors'\n" +
                "      }).addTo(map);\n" +
                "    </script>\n" +
                "  </body>\n" +
                "</html>");

        Scene scene = new Scene(webView, 800, 600);

        primaryStage.setTitle("Map App");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
