package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.Service.IInstructorService;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping()
public class InstructorController {
    private IInstructorService instructorService;

    @Autowired
    public InstructorController(IInstructorService instructorService) {
        this.instructorService = instructorService;
    }


    @GetMapping("/instructors")
    public List<Instructor> get(){
        return instructorService.getAll();
    }

    @PostMapping("/instructors/add")
    public void add(@RequestBody Instructor instructor){
        instructorService.add(instructor);
    }

    @PostMapping("/instructors/update")
    public void update(@RequestBody Instructor instructor){
        instructorService.update(instructor);
    }

    @DeleteMapping("instructors/delete")
    public void delete(@RequestBody Instructor instructor){
        instructorService.delete(instructor);
    }

    @GetMapping("instructors/{user_name}")
    public Instructor getByUserName(@PathVariable String user_name){
        return instructorService.getByUserName(user_name);
    }

    @PostMapping("/instructors/teach")
    public void teachCourse(@RequestParam String user_name,
                            @RequestParam String course_id,
                            @RequestParam String semester,
                            @RequestParam int year){
        instructorService.teachCourse(user_name, course_id,semester,year);
    }







}
