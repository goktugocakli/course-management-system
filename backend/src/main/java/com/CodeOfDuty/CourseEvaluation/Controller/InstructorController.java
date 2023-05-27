package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.Service.InstructorService;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/instructors")
public class InstructorController {
    private final InstructorService instructorService;

    @Autowired
    public InstructorController(InstructorService instructorService) {
        this.instructorService = instructorService;
    }


    @GetMapping()
    public List<Instructor> findAll(){
        return instructorService.findAll();
    }

    @PostMapping("/add")
    public void add(@RequestBody Instructor instructor){
        instructorService.createInstructor(instructor);
    }

    /*
    @PostMapping("/instructors/update")
    public void update(@RequestBody Instructor instructor){
        instructorService.update(instructor);
    }*/

    @DeleteMapping("delete/{username}")
    public void delete(@PathVariable String username){
        instructorService.delete(username);
    }

    @GetMapping("/{user_name}")
    public Instructor getByUserName(@PathVariable String user_name){
        return instructorService.findById(user_name);
    }

    @PostMapping("/teach")
    public void teachCourse(@RequestParam String user_name,
                            @RequestParam String course_id,
                            @RequestParam String semester,
                            @RequestParam int year){
        instructorService.teachCourse(user_name, course_id,semester,year);
    }







}
