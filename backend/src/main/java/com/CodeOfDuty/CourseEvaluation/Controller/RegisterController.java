package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.Service.StudentService;
import com.CodeOfDuty.CourseEvaluation.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/register")
public class RegisterController {

    private final StudentService studentService;

    public RegisterController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping()
    public String showRegisterationPage() {
        return "register sayfasinda bulunmaktasiniz";
    }

    @PostMapping()
    public String registerStudent(@RequestBody Student student){
        try{
            studentService.addStudent(student);
        }catch (DataIntegrityViolationException e) {
            return e.getLocalizedMessage();
        }
        return student.toString();
    }


}
