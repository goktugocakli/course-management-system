package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.Service.ICourseService;
import com.CodeOfDuty.CourseEvaluation.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {

    ICourseService courseService;

    @Autowired
    public CourseController(ICourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping()
    public List<Course> getAll(){
        return courseService.getAll();
    }

    @PostMapping("/add")
    public Course add(@RequestBody Course course){
        return courseService.add(course);
    }



}
