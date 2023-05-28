package com.CodeOfDuty.CourseEvaluation.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
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
    @JsonIncludeProperties({"name"})
    private Department department;

    @Column(name="isActive", nullable = false)
    private boolean isActive = false;

    @Column(name="isBanned", nullable = false)
    private boolean isBanned = false;


    @ManyToMany
    @JsonIncludeProperties({"code","year","semester"})
    @JoinTable(
            name = "course_student",
            joinColumns = @JoinColumn(name = "student_no"),
            inverseJoinColumns = {@JoinColumn(name = "code"), @JoinColumn(name = "semester"), @JoinColumn(name = "year")})
    private List<Course> courses;

    public void addCourses(Course course){this.courses.add(course);}
}