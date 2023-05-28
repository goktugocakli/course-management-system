package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.Service.CourseService;
import com.CodeOfDuty.CourseEvaluation.model.Course;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/course")
public class CourseController {
    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping("/add")
    public Course createCourse(@RequestBody Course courseRequest){
        String course_code = courseRequest.getCode();
        String semester = courseRequest.getSemester();
        Integer year = courseRequest.getYear();
        String name = courseRequest.getName();
        int course_type = courseRequest.getCourse_type();
        int credit = courseRequest.getCredit();
        return courseService.createCourse(course_code,
                semester,
                year,
                name,
                credit,
                course_type);
    }

    @GetMapping()
    public List<Course> findAll() {
        return courseService.findAll();
    }

    @GetMapping("{course_code}/{semester}/{year}")
    public Course findById(@PathVariable String course_code, @PathVariable String semester, @PathVariable String year){
        return courseService.findById(course_code, semester, Integer.valueOf(year));
    }

}
