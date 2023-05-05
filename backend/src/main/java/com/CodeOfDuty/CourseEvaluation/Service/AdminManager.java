package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.IAdminDao;
import com.CodeOfDuty.CourseEvaluation.model.Admin;
import com.CodeOfDuty.CourseEvaluation.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminManager implements IAdminService {

    private IAdminDao adminDao;

    @Autowired
    public AdminManager (IAdminDao adminDao){
        this.adminDao = adminDao;
    }

    @Override
    public List<Admin> getAll() {
        return adminDao.getAll();
    }

    @Override
    public void add(Admin admin) {
        adminDao.add(admin);
    }

    @Override
    public void update(Admin admin) {
        adminDao.update(admin);
    }

    @Override
    public void delete(Admin admin) {
        adminDao.delete(admin);
    }

    @Override
    public Admin getByUserName(String user_name) {
        return adminDao.getByUserName(user_name);
    }

    public boolean isValidAdmin(String user_name, String password) {
        Admin admin = adminDao.getByUserName(user_name);
        if (admin!=null && admin.getPassword().equals(password)){
            return true;
        }
        return false;
    }
}
