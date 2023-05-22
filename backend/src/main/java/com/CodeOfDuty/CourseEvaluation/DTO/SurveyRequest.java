package com.CodeOfDuty.CourseEvaluation.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class SurveyRequest {
    private String description;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime dueDate;
    private String username;
    private String course_code;

    private String semester;
    private int year;
    private List<Integer> questionsId;

}
