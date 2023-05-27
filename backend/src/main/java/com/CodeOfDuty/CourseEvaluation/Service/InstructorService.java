package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.InstructorRepository;
import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstructorService {
    private final InstructorRepository instructorRepository;
    private final CourseService courseService;

    public InstructorService(InstructorRepository instructorRepository, CourseService courseService) {
        this.instructorRepository = instructorRepository;
        this.courseService = courseService;
    }

    public List<Instructor> findAll() {
        return instructorRepository.findAll();
    }

    public Instructor createInstructor(Instructor instructor) {
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
        return instructor != null && instructor.getPassword().equals(password) && instructor.getDepartment().getManager() == instructor;
    }
}
