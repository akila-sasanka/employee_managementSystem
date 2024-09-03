package com.akila.empmanagementbackend.repository;

import com.akila.empmanagementbackend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
