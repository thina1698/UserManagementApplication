package com.project.fullstack.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.project.fullstack.exception.UserNotFoundException;
import com.project.fullstack.model.User;

public interface UserService {

	public List<User> getAllUser();

	public User addUser(User user);

	public User updateUser(User user,long id) throws UserNotFoundException;

	public String deleteUser(long id) throws UserNotFoundException;

	public User getById(long id) throws UserNotFoundException;


}
