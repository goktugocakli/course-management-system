package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.Service.AdminService;
import com.CodeOfDuty.CourseEvaluation.Service.StudentService;
import com.CodeOfDuty.CourseEvaluation.model.Admin;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admins")
public class AdminController {

    private final AdminService adminService;
    private final StudentService studentService;

    public AdminController(AdminService adminService, StudentService studentService) {
        this.adminService = adminService;
        this.studentService = studentService;
    }

    @GetMapping()
    public List<Admin> get(){
        return adminService.findAll();
    }


    @PostMapping("/add")
    public void add(@RequestBody Admin admin){
        adminService.add(admin);
    }

    @PostMapping("/sendEmail")
    public void sendMail(@RequestParam String title, @RequestParam String content){
        adminService.sendEmail(studentService.findAll(),title,content);
    }

    @PostMapping("/update")
    public void update(@RequestBody Admin admin){
        adminService.update(admin);
    }

    @DeleteMapping("/delete/{username}")
    public void delete(@PathVariable String username){
        adminService.delete(username);
    }


    @GetMapping("/{user_name}")
    public Admin getByUserName(@PathVariable String user_name){
        return adminService.findById(user_name);
    }


}
