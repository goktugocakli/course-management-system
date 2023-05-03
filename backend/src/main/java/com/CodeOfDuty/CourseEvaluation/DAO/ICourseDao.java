package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Student;

import java.util.List;

public interface ICourseDao {

    Course add(Course course);

    void update(Course course);

    void delete(Course course);

    Course getByCourse(String course_id, String semester, int year);

    List<Course> getAll();

    void addStudent(Student student);




}
