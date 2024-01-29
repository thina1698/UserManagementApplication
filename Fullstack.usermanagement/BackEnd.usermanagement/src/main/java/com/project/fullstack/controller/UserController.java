package com.project.fullstack.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.project.fullstack.service.UserService;
import com.project.fullstack.exception.UserNotFoundException;
import com.project.fullstack.model.User;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
	
	@Autowired
	public UserService userService;
	
	@GetMapping("/getAllUser")
	public List<User> getAllUser(){
		return userService.getAllUser();
		
	}
	
	@PostMapping("/addUser")
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}

	@PutMapping("/updateUser/{id}")
	public User updateUser(@RequestBody User user,@PathVariable ("id") long id) throws UserNotFoundException {
		return userService.updateUser(user,id);
	}
	
	@DeleteMapping("/deleteUser/{id}")
	public String deleteUser(@PathVariable("id") long id) throws UserNotFoundException{
		return userService.deleteUser(id);
	}
	
	@GetMapping("/getById/{id}")
	public User getById(@PathVariable("id")long id) throws UserNotFoundException {
		return userService.getById(id);
	}
}
