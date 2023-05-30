package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.StudentRepository;
import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Department;
import com.CodeOfDuty.CourseEvaluation.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.mail.SimpleMailMessage;



import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    private final CourseService courseService;
    @Autowired
    private JavaMailSender mailSender;

    private final DepartmentService departmentService;

    public StudentService(StudentRepository studentRepository, CourseService courseService, DepartmentService departmentService) {
        this.studentRepository = studentRepository;
        this.courseService = courseService;
        this.departmentService = departmentService;
    }

    public Student createStudent(String student_no,
                                 String first_name,
                                 String second_name,
                                 String surname,
                                 String e_mail,
                                 String password,
                                 String department){

        /*
        //Exception handling yapılmalı eğer verilen id de öğrenci varsa geri bildirilmeli
        Optional<Student> student1 = studentRepository.findById(student_no);
        if(student1.isPresent()){
            return null;
        }*/

        System.out.println("burası çalıştı");

        Department department1 = departmentService.findById(department);

        Student student = Student.builder()
                .student_no(student_no)
                .first_name(first_name)
                .second_name(second_name)
                .surname(surname)
                .e_mail(e_mail)
                .password(password)
                .department(department1)
                .build();

        return studentRepository.save(student);

    }

    public Student addStudent(Student student){
        return studentRepository.save(student);
    }

    public Student update(Student student){
        return studentRepository.save(student);
    }

    public boolean forgetPass(String studentNo){
        Student student =  this.findById(studentNo);
        String password = student.getPassword();
        String email = student.getE_mail();
        String subject = "Your 3B Password";
        String body = "Your 3B Password is: " + password;
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject(subject);
        message.setText(body);
        mailSender.send(message);

        return true;
    }

    public void deleteStudent(String studentNo){
        studentRepository.findById(studentNo).ifPresentOrElse(
                studentRepository::delete,
                () -> System.out.println("böyle bir öğrenci yok")
        );
    }

    public List<Student> findAll(){
        return studentRepository.findAll();
    }

    public Student findById(String studentNo){
        return studentRepository.findById(studentNo).orElse(null);
    }

    public boolean isValidStudent(String user_name, String password) {
        Student student = studentRepository.findById(user_name).orElse(null);
        return student != null && student.getPassword().equals(password) && student.isActive();
    }

    public void enrollCourse(String course_code, String semester, Integer year, String studentNo){
        Course course = courseService.findById(course_code, semester, year);
        Student student = findById(studentNo);
        if(student.getCourses().contains(course)){
            return;
        }
        student.addCourses(course);
        studentRepository.save(student);
    }

    public List<Student> findAllInActiveStudents(){
        List<Student> inActiveStudents = studentRepository.findAllByActiveIsFalse();
        return inActiveStudents;
    }

    public void confirmStudent(String studentNo){
        Student student = studentRepository.findById(studentNo).orElse(null);
        if(student!=null){
            student.setActive(true);
            studentRepository.save(student);
        }
    }

    public void banStudent(String studentNo){
        Student student = studentRepository.findById(studentNo).orElse(null);
        if(student!=null){
            student.setBanned(true);
            studentRepository.save(student);
        }
    }



}
