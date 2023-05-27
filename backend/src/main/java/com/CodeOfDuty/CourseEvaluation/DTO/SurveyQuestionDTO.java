package com.CodeOfDuty.CourseEvaluation.DTO;

import lombok.Data;

import java.util.List;
import java.util.Objects;

@Data
public class SurveyQuestionDTO {

    private String questionText;
    private List<SurveyAnswerDTO> answers;

    public void addAnswer(SurveyAnswerDTO surveyAnswerDTO){
        answers.add(surveyAnswerDTO);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SurveyQuestionDTO that = (SurveyQuestionDTO) o;
        return Objects.equals(questionText, that.questionText);
    }

    @Override
    public int hashCode() {
        return Objects.hash(questionText);
    }
}
