package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import jakarta.persistence.EntityManager;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public class InstructorDao implements IInstructorDao {
    private EntityManager entityManager;

    @Autowired
    public InstructorDao(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public List<Instructor> getAll() {
        Session session = entityManager.unwrap(Session.class);
        List<Instructor> instructors = session.createQuery("from Instructor", Instructor.class).getResultList();
        return instructors;
    }

    @Override
    @Transactional
    public void add(Instructor instructor) {
        Session session = entityManager.unwrap(Session.class);
        session.persist(instructor);
    }

    @Override
    @Transactional
    public void update(Instructor instructor) {
        Session session = entityManager.unwrap(Session.class);
        session.merge(instructor);
    }

    @Override
    @Transactional
    public void delete(Instructor instructor) {
        Session session = entityManager.unwrap(Session.class);
        Instructor instructorToDelete = session.get(Instructor.class, instructor.getUser_name());
        session.remove(instructorToDelete);
    }

    @Override
    @Transactional
    public Instructor getByUserName(String user_name) {
        Session session = entityManager.unwrap(Session.class);
        return session.get(Instructor.class, user_name);
    }

    @Override
    @Transactional
    public void teachCourse(Instructor instructor, Course course) {
        Session session = entityManager.unwrap(Session.class);
        instructor.addCourse(course);
        session.merge(instructor);
    }
}
