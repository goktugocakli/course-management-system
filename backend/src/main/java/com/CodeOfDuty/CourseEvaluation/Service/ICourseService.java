package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.model.Course;

import java.util.List;

public interface ICourseService {
    Course add(Course course);

    void update(Course course);

    void delete(Course course);

    Course getByCourse(String course_id, String semester, int year);

    List<Course> getAll();
}
