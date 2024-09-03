package com.akila.empmanagementbackend.controller;

import com.akila.empmanagementbackend.dto.EmployeeDto;
import com.akila.empmanagementbackend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<EmployeeDto>  createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto saved=employeeService.createEmployee(employeeDto);

        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId){
        EmployeeDto saved=employeeService.getEmployeeById(employeeId);
        System.out.println(saved.toString());
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        List<EmployeeDto> allEmployees = employeeService.getAllEmployees();
        System.out.println("Get All method running");
        return ResponseEntity.ok(allEmployees);
    }

    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId, @RequestBody EmployeeDto employeeDto) {
        EmployeeDto employeeDto1 = employeeService.updateEmployee(employeeId, employeeDto);
        return ResponseEntity.ok(employeeDto1);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee deleted successfully");
    }

}
