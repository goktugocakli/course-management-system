package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Student;

import java.util.List;

public interface IStudentDao {
    List<Student> getAll();
    void add(Student student);
    void update(Student student);
    void delete(Student student);
    Student getByNo(String student_no);
    String login(String user_name, String password);

    void enrollCourse(Course course, Student student);

}
