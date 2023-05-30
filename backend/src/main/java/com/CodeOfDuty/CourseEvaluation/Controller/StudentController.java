package com.CodeOfDuty.CourseEvaluation.Controller;

import com.CodeOfDuty.CourseEvaluation.DTO.StudentCreateRequest;
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

    @PostMapping("/register")
    public ResponseEntity<Student> createStudent(@RequestBody StudentCreateRequest studentRequest){
        Student student=studentService.createStudent(
                studentRequest.getStudent_no(),
                studentRequest.getFirst_name(),
                studentRequest.getSecond_name(),
                studentRequest.getSurname(),
                studentRequest.getE_mail(),
                studentRequest.getPassword(),
                studentRequest.getDepartment()
        );

        return ResponseEntity.ok(student);
    }

    @DeleteMapping("/delete/{studentNo}")
    public void delete(@PathVariable String studentNo){
        studentService.deleteStudent(studentNo);
    }


    @GetMapping("/{student_no}")
    public Student getbyNo(@PathVariable String student_no){
        return this.studentService.findById(student_no);
    }

    @GetMapping("/forgetPass")
    public boolean forgetPassword(@RequestParam String studentNo){
        return this.studentService.forgetPass(studentNo);
    }


    @PostMapping("/enrollcourse")
    public void enrollCourse(@RequestParam String student_no, @RequestParam String course_id, @RequestParam String semester, @RequestParam int year){
        studentService.enrollCourse(course_id,semester,year,student_no);
    }

    @GetMapping("/inActives")
    public ResponseEntity<List<Student>> findAllInActiveStudents(){
        List<Student> students = studentService.findAllInActiveStudents();
        return ResponseEntity.ok(students);
    }


    @GetMapping("/confirmStudent")
    public ResponseEntity<String> confirmStudent(@RequestParam String studentNo){
        studentService.confirmStudent(studentNo);
        return ResponseEntity.ok("Öğrenci başarı ile sisteme kaydedildi");
    }

    @GetMapping("/banStudent")
    public ResponseEntity<String> banStudent(@RequestParam String studentNo){
        studentService.banStudent(studentNo);
        return ResponseEntity.ok("Öğrenci banlandı. Artık anketlere cevap veremez.");
    }


}
