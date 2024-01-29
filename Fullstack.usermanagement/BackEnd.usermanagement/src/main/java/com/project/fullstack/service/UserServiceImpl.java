package com.project.fullstack.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.fullstack.dao.UserDao;
import com.project.fullstack.exception.UserNotFoundException;
import com.project.fullstack.model.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	public UserDao userDao;
	
	@Override
	public List<User> getAllUser() {
		return userDao.findAll();
	}

	@Override
	public User addUser(User user) {
		return userDao.save(user);
	}

	@Override
	public User updateUser(User user,long id) throws UserNotFoundException {
		return userDao.findById(id).map(userinfo->{
			userinfo.setUserName(user.getUserName());
			userinfo.setPassWord(user.getPassWord());
			userinfo.setEmail(user.getEmail());
			return userDao.save(userinfo);
		}).orElseThrow(()->new UserNotFoundException(id));
	}

	@Override
	public String deleteUser(long id) throws UserNotFoundException {
		
		if(!userDao.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		userDao.deleteById(id);
		return "User Removed Successfully";
	}

	@Override
	public User getById(long id) throws UserNotFoundException {
			return userDao.findById(id).orElseThrow(()-> new UserNotFoundException(id));
			
	}

}
