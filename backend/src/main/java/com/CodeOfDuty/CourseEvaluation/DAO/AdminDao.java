package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.Admin;
import jakarta.persistence.EntityManager;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public class AdminDao implements IAdminDao{

    private final EntityManager entityManager;

    @Autowired
    public AdminDao(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public List<Admin> getAll() {
        Session session = entityManager.unwrap(Session.class);
        List<Admin> admins = session.createQuery("select a from Admin a", Admin.class).getResultList();
        return admins;
    }

    @Override
    @Transactional
    public void add(Admin admin) {
        Session session = entityManager.unwrap(Session.class);
        session.persist(admin);
    }

    @Override
    @Transactional
    public void update(Admin admin) {
        Session session = entityManager.unwrap(Session.class);
        session.merge(admin);
    }

    @Override
    @Transactional
    public void delete(Admin admin) {
        Session session = entityManager.unwrap(Session.class);
        Admin adminToDelete=session.get(Admin.class, admin.getUser_name());
        session.remove(adminToDelete);
    }

    @Override
    @Transactional
    public Admin getByUserName(String user_name) {
        Session session = entityManager.unwrap(Session.class);
        Admin admin = session.get(Admin.class, user_name);
        return admin;
    }

    @Override
    @Transactional
    public String login(String user_name, String password) {
        Session session = entityManager.unwrap(Session.class);
        Optional<Admin> admin = Optional.ofNullable(session.get(Admin.class, user_name));
        if(admin.isPresent() && admin.get().getPassword().equals(password)) {
            return "admin-home";
        }
        return "/login";
    }


}
