package lt.codeacademy.myappapi.services.exceptions;

public class ServiceNotFoundException extends RuntimeException {
    public ServiceNotFoundException(String message) { super(message);}
}
