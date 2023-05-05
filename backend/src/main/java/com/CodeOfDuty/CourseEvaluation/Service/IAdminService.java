package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.model.Admin;

import java.util.List;

public interface IAdminService {
    List<Admin> getAll();
    void add(Admin admin);
    void update(Admin admin);
    void delete(Admin admin);
    Admin getByUserName(String user_name);

    boolean isValidAdmin(String user_name, String password);

}
