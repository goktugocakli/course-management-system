package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.Service.IAdminService;
import com.CodeOfDuty.CourseEvaluation.model.Admin;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AdminController {

    private IAdminService adminService;

    public AdminController(IAdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/admins")
    public List<Admin> get(){
        return adminService.getAll();
    }

    @PostMapping("/admins/add")
    public void add(@RequestBody Admin admin){
        adminService.add(admin);
    }

    @PostMapping("/admins/update")
    public void update(@RequestBody Admin admin){
        adminService.update(admin);
    }

    @DeleteMapping("/admins/delete")
    public void delete(@RequestBody Admin admin){
        adminService.delete(admin);
    }


    @GetMapping("/admins/{user_name}")
    public Admin getByUserName(@PathVariable String user_name){
        return adminService.getByUserName(user_name);
    }


}
