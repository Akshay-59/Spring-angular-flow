package com.citiustech.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.citiustech.entity.Student;
import com.citiustech.repository.StudentRepository;

@Service
public class StudentService {

	@Autowired
	public StudentRepository studentRepository;
	
	public List<Student> getAllStudents() {
		// TODO Auto-generated method stub
		List<Student> students= new ArrayList<Student>();
		studentRepository.findAll().forEach(s-> students.add(s));
		return students;
	}

	public Student addStudent(Student student) {
		// TODO Auto-generated method stub
		studentRepository.save(student);
		return student;
	}

}
