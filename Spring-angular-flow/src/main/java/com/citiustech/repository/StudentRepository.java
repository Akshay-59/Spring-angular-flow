package com.citiustech.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.citiustech.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{

	
}
