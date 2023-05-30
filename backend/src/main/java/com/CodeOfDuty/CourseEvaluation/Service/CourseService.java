package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.CourseRepository;
import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.CourseKey;
import com.CodeOfDuty.CourseEvaluation.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public Course createCourse(String course_code,
                               String semester,
                               Integer year,
                               String course_name,
                               Integer credit,
                               Integer course_type){
        Course course = Course.builder()
                .code(course_code)
                .semester(semester)
                .year(year)
                .name(course_name)
                .credit(credit)
                .course_type(course_type)
                .build();
        return courseRepository.save(course);
    }

    public List<Course> findAll(){return courseRepository.findAll();}

    public Course findById(String course_code, String semester, Integer year){
        CourseKey courseKey = CourseKey.builder()
                .code(course_code)
                .semester(semester)
                .year(year)
                .build();

        return courseRepository.findById(courseKey).orElse(null);
    }



    public void deleteCourse(String course_code, String semester, Integer year){
        CourseKey courseKey = CourseKey.builder()
                .code(course_code)
                .year(year)
                .semester(semester)
                .build();
        courseRepository.findById(courseKey)
                .ifPresentOrElse(
                        courseRepository::delete,
                        () -> System.out.println("Böyle bir kurs yok")
                );
    }










}
