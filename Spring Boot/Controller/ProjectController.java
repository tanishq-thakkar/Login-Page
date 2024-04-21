package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dbFunctions.Student;
import com.example.demo.utils.StudentRepository;

@RestController
@RequestMapping("/api")
public class ProjectController {

	@Autowired
	StudentRepository studentRepository;

	@GetMapping("/tutorials")
	public  String getTutorial(@RequestParam(required = true) String userEmail, String password ) {
		try {
			List<Student> students = new ArrayList<Student>();

			
				studentRepository.findByuserEmail(userEmail).forEach(students::add);
				
			if (students.isEmpty()) {
				String noUser = "No Users exists";
				return noUser;
			}
			else if (students.get(0).getPassword().equals(password) && students.get(0).getUserEmail().equalsIgnoreCase(userEmail)){
				String success = "SUCCESS";
				return success;
			}
			else{
				return "error";
			}
		} catch (Exception e) {
			return " ";
		}
	}

	@GetMapping("/tutorials/all")
	public  List<Student> getAllTutorials( ) {
	
			List<Student> students = new ArrayList<Student>();

			
				students = studentRepository.findAll();
				
			if (students.isEmpty()) {

				return students;
			}
			else {
				return students;
			}
			
		}

	@GetMapping("/tutorials/{id}")
	public ResponseEntity<Student> getTutorialById(@PathVariable("id") long id) {
		Optional<Student> tutorialData = studentRepository.findById(id);
		
		if (tutorialData.isPresent()) {
			return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
		} 
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/tutorials")
	public ResponseEntity<Student> createTutorial(@RequestBody Student student) {
		try {
//			Student _tutorial = studentRepository.save(new Student(student.getTitle(), student.getDescription(), false));
//			Student _student = new Student();
//			_student.setTitle(student.getTitle());
//			_student.setDescription(student.getDescription());
//			_student.setPublished(student.isPublished());
			studentRepository.save(student);
			return new ResponseEntity<>(studentRepository.save(student), HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/tutorials")
	public ResponseEntity<Student> updateTutorial(@RequestParam String  userEmail, String password){
		List<Student> studentData = studentRepository.findByuserEmail(userEmail);
		if(studentData.isEmpty() != true) {
			Student _student = studentData.get(0);
			_student.setPassword(password);
			return new ResponseEntity<Student>(studentRepository.save(_student),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping(value = "/tutorials/{id}")
	public ResponseEntity<List<Student>> deleteTutorial(@PathVariable("id") long id){
		try {
			studentRepository.deleteById(id);
		return new ResponseEntity<>(studentRepository.findAll(),HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}