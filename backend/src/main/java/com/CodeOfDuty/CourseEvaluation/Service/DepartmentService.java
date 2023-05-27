package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.DepartmentRepository;
import com.CodeOfDuty.CourseEvaluation.model.Department;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {
    private final DepartmentRepository departmentRepository;
    private final InstructorService instructorService;

    public DepartmentService(DepartmentRepository departmentRepository, InstructorService instructorService) {
        this.departmentRepository = departmentRepository;
        this.instructorService = instructorService;
    }


    public List<Department> getAll() {
        return departmentRepository.findAll();
    }


    public Department add(Department department) {
        return departmentRepository.save(department);
    }


    public void delete(String departmentName) {
        departmentRepository.findById(departmentName)
                .ifPresentOrElse(
                        department -> departmentRepository.delete(department),
                        () -> System.out.println("böyle bir departman yok")
                );
    }

    public Department findById(String dept_name) {
        return departmentRepository.findById(dept_name).orElse(null);
    }

    public Department changeManager(String dept_name, String username){
        Department department = departmentRepository.findById(dept_name).orElse(null);
        Instructor instructor = instructorService.findById(username);
        if(department!=null & instructor!=null){
            department.setManager(instructor);
            departmentRepository.save(department);
        }
        return department;
    }
}
