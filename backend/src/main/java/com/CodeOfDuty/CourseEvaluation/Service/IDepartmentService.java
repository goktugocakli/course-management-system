package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.model.Department;

import java.util.List;

public interface IDepartmentService {
    List<Department> getAll();

    void add(Department department);

    void update(Department department);

    void update2(String dept_name, String manager);

    void delete(Department department);
    Department getByDepartmentName(String dept_name);

}
