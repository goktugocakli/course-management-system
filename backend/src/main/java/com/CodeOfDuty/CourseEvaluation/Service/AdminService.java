package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.AdminRepository;
import com.CodeOfDuty.CourseEvaluation.model.Admin;
import com.CodeOfDuty.CourseEvaluation.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    private final AdminRepository adminRepository;


    @Autowired
    private JavaMailSender mailSender;


    public AdminService(AdminRepository adminRepository,StudentService studentService) {
        this.adminRepository = adminRepository;

    }

    public List<Admin> findAll() {
        return adminRepository.findAll();
    }

    public boolean sendEmail(List<Student> students,String title,String content) {
        for(Student s : students) {
            String email = s.getE_mail();
            String subject = title;
            String body = content;
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(email);
            message.setSubject(subject);
            message.setText(body);
            mailSender.send(message);
        }

        return true;
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
