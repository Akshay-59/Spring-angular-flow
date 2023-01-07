package com.citiustech.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.citiustech.entity.Student;
import com.citiustech.service.StudentService;

@RestController
@CrossOrigin(origins = "*",maxAge = 3600)
public class StudentController {

	@GetMapping("/welcome")
	public String getMsg() {
		return "Welcome to demo";
	}

	@Autowired
	public StudentService studentService;

	@GetMapping("/students")
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
	}

	@PostMapping("/student")
	private Student addStudent(@RequestBody Student s) {
		 studentService.addStudent(s);
		 return s;
	}

}
