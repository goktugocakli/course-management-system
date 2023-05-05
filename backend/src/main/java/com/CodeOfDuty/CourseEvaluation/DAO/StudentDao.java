package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.Admin;
import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Department;
import com.CodeOfDuty.CourseEvaluation.model.Student;
import jakarta.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public class StudentDao implements IStudentDao {

    private EntityManager entityManager;

    @Autowired
    public StudentDao(EntityManager entityManager) {
        this.entityManager = entityManager;
    }



    @Override
    @Transactional
    public List<Student> getAll() {
        Session session = entityManager.unwrap(Session.class);
        List<Student> students = session.createQuery("select s from Student s", Student.class).getResultList();
        return students;
    }

    @Override
    @Transactional
    public void add(Student student) {
        Session session = entityManager.unwrap(Session.class);
        Department department = session.get(Department.class, student.getDepartment().getName());
        student.setDepartment(department);
        session.persist(student);
    }

    @Override
    @Transactional
    public void update(Student student) {
        Session session = entityManager.unwrap(Session.class);
        session.merge(student);
    }

    @Override
    @Transactional
    public void delete(Student student) {
        Session session = entityManager.unwrap(Session.class);
        Student studentToDelete =session.get(Student.class, student.getStudent_no());
        session.delete(studentToDelete);
    }

    @Override
    @Transactional
    public Student getByNo(String student_no) {
        Session session = entityManager.unwrap(Session.class);
        Student student=session.get(Student.class, student_no);
        return student;
    }

    @Override
    @Transactional
    public String login(String user_name, String password) {
        Session session = entityManager.unwrap(Session.class);
        Optional<Student> student = Optional.ofNullable(session.get(Student.class, user_name));
        if(student.isPresent() && student.get().getPassword().equals(password)) {
            return "student-home";
        }
        return "/login";
    }

    @Override
    @Transactional
    public void enrollCourse(Course course, Student student) {
        Session session = entityManager.unwrap(Session.class);
        student.addCourses(course);
        session.merge(student);
    }

}
