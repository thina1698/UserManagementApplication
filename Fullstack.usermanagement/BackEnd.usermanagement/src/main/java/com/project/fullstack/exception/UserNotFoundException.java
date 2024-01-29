package com.project.fullstack.exception;

public class UserNotFoundException extends Exception {
	
	public UserNotFoundException(Long id) {
		super("Not Found.Because there is no user with ID [ "+ id +" ] " );
	}

}
