package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import com.CodeOfDuty.CourseEvaluation.model.Student;

import java.util.List;

public interface IInstructorDao {
    List<Instructor> getAll();
    void add(Instructor instructor);
    void update(Instructor instructor);
    void delete(Instructor instructor);
    Instructor getByUserName(String user_name);

    void teachCourse(Instructor instructor, Course course);
}
