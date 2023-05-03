package com.CodeOfDuty.CourseEvaluation.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="student")
public class Student {

    @Id
    @Column(name = "student_no", nullable = false)
    private String student_no;

    @Column(name = "first_name", nullable = false)
    private String first_name;

    @Column(name = "second_name")
    private String second_name;

    @Column(name = "surname", nullable = false)
    private String surname;

    @Column(name = "e_mail", nullable = false, unique = true)
    private String e_mail;

    @Column(name = "password", nullable = false)
    private String password;

    @ManyToOne()
    @JoinColumn(name = "department", referencedColumnName = "department_name")
    @JsonManagedReference
    //@JsonIncludeProperties({"name"})
    private Department department;


    @JsonBackReference
    @ManyToMany
    @JoinTable(
            name = "course_student",
            joinColumns = @JoinColumn(name = "student_no"),
            inverseJoinColumns = {@JoinColumn(name = "code"), @JoinColumn(name = "semester"), @JoinColumn(name = "year")})
    List<Course> courses;

    public Student(String student_no, String first_name, String second_name, String surname, String e_mail, String password) {
        this.student_no = student_no;
        this.first_name = first_name;
        this.second_name = second_name;
        this.surname = surname;
        this.e_mail = e_mail;
        this.password = password;
    }

    public Student() {

    }


    public String getStudent_no() {
        return student_no;
    }

    public void setStudent_no(String student_no) {
        this.student_no = student_no;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getSecond_name() {
        return second_name;
    }

    public void setSecond_name(String second_name) {
        this.second_name = second_name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getE_mail() {
        return e_mail;
    }

    public void setE_mail(String e_mail) {
        this.e_mail = e_mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public List<Course> getCourses() {
        return courses;
    }

    public void setCourses(List<Course> courses) {
        this.courses = courses;
    }

    public void addCourses(Course course){this.courses.add(course);}
}
