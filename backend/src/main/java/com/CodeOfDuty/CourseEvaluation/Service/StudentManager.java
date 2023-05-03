package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.IStudentDao;
import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentManager implements IStudentService {
    private IStudentDao studentDao;

    @Autowired
    public StudentManager(IStudentDao studentDao) {
        this.studentDao = studentDao;
    }

    @Override
    public List<Student> getAll() {
        return this.studentDao.getAll();
    }

    @Override
    public void add(Student student) {

        this.studentDao.add(student);
    }

    @Override
    public void update(Student student) {
        this.studentDao.update(student);
    }

    @Override
    public void delete(Student student) {
        this.studentDao.delete(student);
    }

    @Override
    public Student getByNo(String student_no) {
        return this.studentDao.getByNo(student_no);
    }

    @Override
    public boolean isValidStudent(String user_name, String password) {
        Student student = studentDao.getByNo(user_name);
        if (student!=null && student.getPassword().equals(password)){
            return true;
        }
        return false;
    }

    @Override
    public void enrollCourse(Course course, Student student) {
        studentDao.enrollCourse(course,student);
    }
}
