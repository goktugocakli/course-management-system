package com.CodeOfDuty.CourseEvaluation.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "admin")
public class Admin {

    @Id
    @Column(name = "user_name")
    private String user_name;

    @Column(name = "password", nullable = false)
    private String password;

    public Admin(String user_name, String password) {
        this.user_name = user_name;
        this.password = password;
    }

    public Admin() {

    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
