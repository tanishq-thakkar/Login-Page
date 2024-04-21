package com.example.demo.utils;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.dbFunctions.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

	List<Student> findByuserEmail(String userEmail);
	  List<Student> findAll();
}


