package com.CodeOfDuty.CourseEvaluation.model;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.List;

@Entity
@IdClass(CourseID.class)
public class Course {

    @Id
    private String code;
    @Id
    private int year;
    @Id
    private String semester;

    private String name;


    @Column(nullable = true)
    private int credit;

    @Column(nullable = true)
    private int course_type;

    @JsonManagedReference
    @ManyToMany(mappedBy = "courses")
    List<Student> student;

    @JsonManagedReference
    @ManyToMany(mappedBy = "courses")
    List<Instructor> instructors;


    public Course(String code, int year, String semester, String name, int credit, int course_type) {
        this.code = code;
        this.year = year;
        this.semester = semester;
        this.name = name;
        this.credit = credit;
        this.course_type = course_type;
    }

    public Course() {
    }


    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCredit() {
        return credit;
    }

    public void setCredit(int credit) {
        this.credit = credit;
    }

    public int getCourse_type() {
        return course_type;
    }

    public void setCourse_type(int course_type) {
        this.course_type = course_type;
    }

    public List<Student> getStudent() {
        return student;
    }

    public void setStudent(List<Student> student) {
        this.student = student;
    }

    public void addStudent(Student student){this.student.add(student);}

    public List<Instructor> getInstructors() {
        return instructors;
    }

    public void setInstructors(List<Instructor> instructors) {
        this.instructors = instructors;
    }


}


class CourseID implements Serializable {
    public CourseID() {
    }

    private String code;

    private String semester;

    private int year;

    public CourseID(String courseId, String semester, int year) {
        this.code = courseId;
        this.semester = semester;
        this.year = year;
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }
}

