package com.CodeOfDuty.CourseEvaluation.DTO;

import com.CodeOfDuty.CourseEvaluation.model.AnswerChoice;
import lombok.Data;

import java.util.List;

@Data
public class QuestionCreateRequest {
    private String text;
    private String addedBy;
    private List<AnswerChoice> answers;

}
