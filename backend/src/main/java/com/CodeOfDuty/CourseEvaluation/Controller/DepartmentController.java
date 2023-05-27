package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.Service.DepartmentService;
import com.CodeOfDuty.CourseEvaluation.model.Department;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/departments")
public class DepartmentController {

    private final DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    @GetMapping()
    public List<Department> getAll(){
        return departmentService.getAll();
    }

    @PostMapping("/add")
    public Department add(@RequestBody Department department){
        return departmentService.add(department);
    }

    @PostMapping("/changeInstructor")
    public Department changeManager(@RequestParam String dept_name, @RequestParam String username){
        return departmentService.changeManager(dept_name,username);
    }


    @DeleteMapping("/delete/{dept_name}")
    public void delete(@PathVariable String dept_name){
        departmentService.delete(dept_name);
    }

    @GetMapping("/{dept_name}")
    public Department getByDepartmentName(@PathVariable String dept_name){
        return departmentService.findById(dept_name);
    }




}
