package com.CodeOfDuty.CourseEvaluation.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Objects;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SurveyAnswerDTO {

    private Integer answerId;
    private String answer;
    private Long count ;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SurveyAnswerDTO that = (SurveyAnswerDTO) o;
        return Objects.equals(answerId, that.answerId);
    }

    public boolean equals(Integer answerId){
        return (this.answerId.equals(answerId));
    }

    @Override
    public int hashCode() {
        return Objects.hash(answerId);
    }
}
