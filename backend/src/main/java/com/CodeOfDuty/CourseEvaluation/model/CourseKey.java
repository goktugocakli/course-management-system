package com.CodeOfDuty.CourseEvaluation.model;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Builder
@Data
public class CourseKey implements Serializable {
    public CourseKey() {
    }

    private String code;

    private String semester;

    private int year;

    public CourseKey(String courseId, String semester, int year) {
        this.code = courseId;
        this.semester = semester;
        this.year = year;
    }

}
