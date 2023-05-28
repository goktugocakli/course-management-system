package com.CodeOfDuty.CourseEvaluation.DTO;

import lombok.Data;

@Data
public class StudentCreateRequest {

    private String student_no;

    private String first_name;

    private String second_name;

    private String surname;

    private String e_mail;

    private String password;

    private String department;
}
