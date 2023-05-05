package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.ICourseDao;
import com.CodeOfDuty.CourseEvaluation.DAO.IInstructorDao;
import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstructorManager implements IInstructorService{

    private IInstructorDao instructorDao;
    private ICourseDao courseDao;
    @Autowired
    public InstructorManager(IInstructorDao instructorDao, ICourseDao courseDao) {
        this.instructorDao = instructorDao;
        this.courseDao=courseDao;
    }

    @Override
    public List<Instructor> getAll() {
        return instructorDao.getAll();
    }

    @Override
    public void add(Instructor instructor) {
        instructorDao.add(instructor);

    }

    @Override
    public void update(Instructor instructor) {
        instructorDao.update(instructor);

    }

    @Override
    public void delete(Instructor instructor) {
        instructorDao.delete(instructor);

    }

    @Override
    public Instructor getByUserName(String user_name) {
        return instructorDao.getByUserName(user_name);
    }

    @Override
    public void teachCourse(String user_name, String course_id, String semester, int year) {
        Instructor instructor =instructorDao.getByUserName(user_name);
        Course course = courseDao.getByCourse(course_id,semester,year);
        instructorDao.teachCourse(instructor,course);
    }

    public boolean isValidInstructor(String user_name, String password) {
        Instructor instructor = instructorDao.getByUserName(user_name);
        if (instructor!=null && instructor.getPassword().equals(password)){
            return true;
        }
        return false;
    }

    @Override
    public boolean isValidDepartmentManager(String user_name, String password) {
        Instructor instructor = instructorDao.getByUserName(user_name);
        if(instructor!=null && instructor.getPassword().equals(password) && instructor.getDepartment().getManager() == instructor){
            return true;
        }
        return false;
    }
}
