package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Student;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class CourseDao implements ICourseDao{
    private EntityManager entityManager;

    @Autowired
    public CourseDao(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public Course add(Course course) {
        Session session = entityManager.unwrap(Session.class);
        session.persist(course);
        return getByCourse(course.getCode(),course.getSemester(), course.getYear());
    }

    @Override
    @Transactional
    public void update(Course course) {
        Session session = entityManager.unwrap(Session.class);
        session.merge(course);
    }

    @Override
    @Transactional
    public void delete(Course course) {
        Session session = entityManager.unwrap(Session.class);
        session.remove(course);
    }

    @Override
    @Transactional
    public Course getByCourse(String course_id, String semester, int year) {
        Session session = entityManager.unwrap(Session.class);
        Query query = session.createQuery("select c from Course c where c.code = :course_id and c.semester = :semester and c.year=:year");
        query.setParameter("course_id", course_id);
        query.setParameter("semester", semester);
        query.setParameter("year", year);
        return (Course) query.getSingleResult();
    }

    @Override
    @Transactional
    public List<Course> getAll() {
        Session session = entityManager.unwrap(Session.class);
        return session.createQuery("select c from Course c", Course.class).getResultList();
    }

    @Override
    public void addStudent(Student student) {

    }
}
