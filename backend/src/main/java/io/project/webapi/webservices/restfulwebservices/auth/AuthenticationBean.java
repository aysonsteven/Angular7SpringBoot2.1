package io.project.webapi.webservices.restfulwebservices.auth;

public class AuthenticationBean {
	private String message;
	public AuthenticationBean( String msg ) {
		message = msg;
	}
	
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	
	@Override
	public String toString() {
		return String.format( "HelloWorldBean [message=%=s" , message);
	}
}
