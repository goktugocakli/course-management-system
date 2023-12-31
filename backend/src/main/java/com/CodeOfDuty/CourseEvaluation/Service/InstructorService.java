package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.InstructorRepository;
import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import com.CodeOfDuty.CourseEvaluation.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstructorService {
    private final InstructorRepository instructorRepository;
    private final CourseService courseService;

    @Autowired
    private JavaMailSender mailSender;

    public InstructorService(InstructorRepository instructorRepository, CourseService courseService) {
        this.instructorRepository = instructorRepository;
        this.courseService = courseService;
    }

    public List<Instructor> findAll() {
        return instructorRepository.findAll();
    }

    public Instructor createInstructor(Instructor instructor) {

        String email = instructor.getE_mail();
        String subject = "Your 3B User name and Password as an Instructor";
        String userName = "Your 3B Username is: " + instructor.getUser_name();
        String password = "Your 3B Password is: " + instructor.getPassword();
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject(subject);
        message.setText(userName + "\n" + password);
        mailSender.send(message);

        return instructorRepository.save(instructor);
    }

    public Instructor updateInstructor(Instructor instructor){
        return instructorRepository.save(instructor);
    }
    public void delete(String username) {
        instructorRepository.findById(username)
                .ifPresentOrElse(
                        instructor -> instructorRepository.delete(instructor),
                        () -> System.out.println("Böyle bir instructor yok")
                );
    }

    public Instructor findById(String username) {
        return instructorRepository.findById(username).orElse(null);
    }


    public void teachCourse(String username, String course_id, String semester, int year) {
        Instructor instructor =instructorRepository.findById(username).orElse(null);
        Course course = courseService.findById(course_id,semester,year);
        if(instructor!=null & course!=null){
            instructor.addCourse(course);
            instructorRepository.save(instructor);
            System.out.println("Ders öğretmene başarı ile eklendi");
        }
        System.out.println("Ders veya öğretmen bilgisi hatalı");
    }

    public boolean isValidInstructor(String username, String password) {
        Instructor instructor = instructorRepository.findById(username).orElse(null);
        return instructor != null && instructor.getPassword().equals(password);
    }

    public boolean isValidDepartmentManager(String username, String password) {
        Instructor instructor = instructorRepository.findById(username).orElse(null);
        return instructor != null && instructor.getPassword().equals(password) && instructor.getDepartment().getManager() != null && instructor.getDepartment().getManager().getUser_name().equals(instructor.getUser_name());
    }

    public List<Course> findAllCourseTeachByInstructor(String username){
        return findById(username).getCourses();
    }
}
