package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Student;

import java.util.List;

public interface IStudentService {
    List<Student> getAll();
    void add(Student student);
    void update(Student student);
    void delete(Student student);

    Student getByNo(String student_no);

    boolean isValidStudent(String user_name, String password);

    void enrollCourse(Course course, Student student);

}
