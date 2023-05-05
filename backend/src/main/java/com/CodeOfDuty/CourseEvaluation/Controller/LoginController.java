package com.CodeOfDuty.CourseEvaluation.Controller;


import com.CodeOfDuty.CourseEvaluation.Service.IAdminService;
import com.CodeOfDuty.CourseEvaluation.Service.IDepartmentService;
import com.CodeOfDuty.CourseEvaluation.Service.IInstructorService;
import com.CodeOfDuty.CourseEvaluation.Service.IStudentService;
import com.CodeOfDuty.CourseEvaluation.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/login")
public class LoginController {


    private IDepartmentService departmentService;

    private IInstructorService instructorService;

    private IStudentService studentService;

    private IAdminService adminService;

    @Autowired
    public LoginController(IDepartmentService departmentService, IInstructorService instructorService, IStudentService studentService, IAdminService adminService) {
        this.departmentService = departmentService;
        this.instructorService = instructorService;
        this.studentService = studentService;
        this.adminService = adminService;
    }

    @GetMapping()
    public String login(){
        return "Login Page \n Username: \n Password:";
    }

    @PostMapping()
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> loginRequest){
        Map<String,Object> response=new HashMap<>();
        String username=loginRequest.get("username");
        String password=loginRequest.get("password");
        if (studentService.isValidStudent(username,password)) {
            response.put("success", true);
            response.put("data",studentService.getByNo(username));
            response.put("type","student");
            return ResponseEntity.ok(response);
        }
        // Check if user is a department manager
        else if (instructorService.isValidDepartmentManager(username, password)) {
            response.put("success", true);
            response.put("data",instructorService.getByUserName(username));
            response.put("type","department manager");
            return ResponseEntity.ok(response);
        }
        // Check if user is a teacher
        else if (instructorService.isValidInstructor(username, password)) {
            response.put("success", true);
            response.put("data",instructorService.getByUserName(username));
            response.put("type","instructor");
            return ResponseEntity.ok(response);
        }
        // Check if user is an admin
        else if(adminService.isValidAdmin(username, password)) {
            response.put("success", true);
            response.put("data",adminService.getByUserName(username));
            response.put("type","admin");
            return ResponseEntity.ok(response);
        }
        else{
            response.put("succes",false);
            response.put("message","Invalid username or password.");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }

    }





}
