package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.AdminRepository;
import com.CodeOfDuty.CourseEvaluation.model.Admin;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public List<Admin> findAll() {
        return adminRepository.findAll();
    }


    public void add(Admin admin) {
        adminRepository.save(admin);
    }


    public void update(Admin admin) {
        adminRepository.save(admin);
    }

    public void delete(String user_name) {
        adminRepository.findById(user_name)
                .ifPresentOrElse(
                        admin -> adminRepository.delete(admin),
                        () -> System.out.println("böyle bir admin yok.")
                );
    }


    public Admin findById(String user_name) {
        return adminRepository.findById(user_name).orElse(null);
    }

    public boolean isValidAdmin(String user_name, String password) {
        Admin admin = adminRepository.findById(user_name).orElse(null);
        return admin != null && admin.getPassword().equals(password);
    }
}
