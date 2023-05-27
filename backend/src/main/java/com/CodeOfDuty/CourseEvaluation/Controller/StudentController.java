package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.Service.StudentService;
import com.CodeOfDuty.CourseEvaluation.model.Student;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/api/students")
@RestController
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }


    @GetMapping()
    public List<Student> findAll(){
        return studentService.findAll();
    }

    @PostMapping("/add")
    public ResponseEntity<Student> add(@RequestBody Student student){
        return ResponseEntity.ok(studentService.addStudent(student));
    }

    @DeleteMapping("/delete/{studentNo}")
    public void delete(@PathVariable String studentNo){
        studentService.deleteStudent(studentNo);
    }


    @GetMapping("/{student_no}")
    public Student getbyNo(@PathVariable String student_no){
        return this.studentService.findById(student_no);
    }


    @PostMapping("/enrollcourse")
    public void enrollCourse(@RequestParam String student_no, @RequestParam String course_id, @RequestParam String semester, @RequestParam int year){
        studentService.enrollCourse(course_id,semester,year,student_no);
    }



}
