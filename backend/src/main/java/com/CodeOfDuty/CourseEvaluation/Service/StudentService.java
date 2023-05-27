package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.StudentRepository;
import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository studentRepository;
    private final CourseService courseService;

    public StudentService(StudentRepository studentRepository, CourseService courseService) {
        this.studentRepository = studentRepository;
        this.courseService = courseService;
    }

    public Student addStudent(Student student){
        return studentRepository.save(student);
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
        return student != null && student.getPassword().equals(password);
    }

    public void enrollCourse(String course_code, String semester, Integer year, String studentNo){
        Course course = courseService.findById(course_code, semester, year);
        Student student = findById(studentNo);
        student.addCourses(course);
        studentRepository.save(student);
    }



}
