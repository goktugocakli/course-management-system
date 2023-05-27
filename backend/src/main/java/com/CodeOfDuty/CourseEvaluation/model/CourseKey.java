package com.CodeOfDuty.CourseEvaluation.model;

import lombok.Builder;

import java.io.Serializable;

@Builder
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

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }
}
