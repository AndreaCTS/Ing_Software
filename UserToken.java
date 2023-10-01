import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.Claims;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class JWTAuthentication {

    private static final String SECRET_KEY = "my-secret-key";

    public static String generateToken(String username) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", username);
        claims.put("exp", new Date(System.currentTimeMillis() + 30 * 60 * 1000));

        Algorithm algorithm = Algorithm.HMAC256(SECRET_KEY);
        String token = JWT.create(algorithm, claims).sign();

        return token;
    }

    public static boolean validateToken(String token) {
        try {
            JWTVerifier verifier = JWT.require(Algorithm.HMAC256(SECRET_KEY)).build();
            DecodedJWT decodedToken = verifier.verify(token);

            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public static String getUsernameFromToken(String token) {
        try {
            DecodedJWT decodedToken = JWT.decode(token);

            return decodedToken.getClaim("username").asString();
        } catch (Exception e) {
            return null;
        }
    }

    public static void main(String[] args) {
        String token = generateToken("username");

        System.out.println(token);

        boolean valid = validateToken(token);
        System.out.println(valid);

        String username = getUsernameFromToken(token);
        System.out.println(username);
    }
}
