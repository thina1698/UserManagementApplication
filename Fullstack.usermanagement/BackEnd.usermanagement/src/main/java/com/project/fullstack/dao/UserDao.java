package com.project.fullstack.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.fullstack.model.User;

@Repository
public interface UserDao extends JpaRepository<User, Long> {

	
}
