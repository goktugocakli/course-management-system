package com.CodeOfDuty.CourseEvaluation.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "department")
public class Department {

    @Id
    @Column(name="department_name")
    private String name;


    @OneToOne(cascade={CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name="manager", referencedColumnName = "user_name")
    @JsonIncludeProperties("{user_name}")
    @JsonBackReference
    private Instructor manager;


    public Department(String name, Instructor manager) {
        this.name = name;
        this.manager=manager;
    }




    public Department() {

    }



    public Instructor getManager() {
        return manager;
    }

    public void setManager(Instructor manager) {
        this.manager = manager;
    }

    public Department(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
