package com.CodeOfDuty.CourseEvaluation.Controller;


import com.CodeOfDuty.CourseEvaluation.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/login")
public class LoginController {


    private final DepartmentService departmentService;

    private final InstructorService instructorService;

    private final StudentService studentService;

    private final AdminService adminService;

    @Autowired
    public LoginController(DepartmentService departmentService, InstructorService instructorService, StudentService studentService, AdminService adminService) {
        this.departmentService = departmentService;
        this.instructorService = instructorService;
        this.studentService = studentService;
        this.adminService = adminService;
    }


    @PostMapping()
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> loginRequest){
        Map<String,Object> response=new HashMap<>();
        String username=loginRequest.get("username");
        String password=loginRequest.get("password");
        if (studentService.isValidStudent(username,password)) {
            response.put("success", true);
            response.put("data",studentService.findById(username));
            response.put("type","student");
            return ResponseEntity.ok(response);
        }
        // Check if user is a department manager
        else if (instructorService.isValidDepartmentManager(username, password)) {
            response.put("success", true);
            response.put("data",instructorService.findById(username));
            response.put("type","department manager");
            return ResponseEntity.ok(response);
        }
        // Check if user is a teacher
        else if (instructorService.isValidInstructor(username, password)) {
            response.put("success", true);
            response.put("data",instructorService.findById(username));
            response.put("type","instructor");
            return ResponseEntity.ok(response);
        }
        // Check if user is an admin
        else if(adminService.isValidAdmin(username, password)) {
            response.put("success", true);
            response.put("data",adminService.findById(username));
            response.put("type","admin");
            return ResponseEntity.ok(response);
        }
        else{
            response.put("success",false);
            response.put("message","Invalid username or password.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }

    }





}
