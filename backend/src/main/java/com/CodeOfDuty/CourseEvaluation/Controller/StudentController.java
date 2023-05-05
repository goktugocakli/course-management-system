package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.Service.ICourseService;
import com.CodeOfDuty.CourseEvaluation.Service.IStudentService;
import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class StudentController {

    private IStudentService studentService;
    private ICourseService courseService;

    @Autowired
    public StudentController(IStudentService studentService, ICourseService courseService) {
        this.studentService = studentService;
        this.courseService=courseService;
    }

    @GetMapping("/students")
    public List<Student> get(){
        return studentService.getAll();
    }

    @PostMapping("/students/add")
    public void add(@RequestBody Student student){
        this.studentService.add(student);
    }

    @PostMapping("/students/update")
    public void update(@RequestBody Student student){
        this.studentService.update(student);
    }


    @DeleteMapping("/students/delete")
    public void delete(@RequestBody Student student){
        this.studentService.delete(student);
    }


    @GetMapping("/students/{student_no}")
    public Student getbyNo(@PathVariable String student_no){
        return this.studentService.getByNo(student_no);
    }


    @PostMapping("students/enrollcourse")
    public void enrollCourse(@RequestParam String student_no, @RequestParam String course_id, @RequestParam String semester, @RequestParam int year){
        Student student=studentService.getByNo(student_no);
        Course course = courseService.getByCourse(course_id,semester,year);
        studentService.enrollCourse(course,student);
    }

    @GetMapping("/register")
    public String showRegisterationPage() {
        return "register page";
    }

    @PostMapping("/register/submit")
    public String registerStudent(@RequestBody Student student){
        try{
            studentService.add(student);
        }catch (DataIntegrityViolationException e) {
            return e.getLocalizedMessage();
        }
        return student.toString();
    }











}
