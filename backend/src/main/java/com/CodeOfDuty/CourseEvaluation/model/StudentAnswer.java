package com.CodeOfDuty.CourseEvaluation.model;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import jakarta.persistence.*;
import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table
public class StudentAnswer {

    @EmbeddedId
    private StudentAnswerKey id;

    @JsonIncludeProperties({"student_no","first_name", "surname"})
    @ManyToOne
    @MapsId("student_no")
    @JoinColumn(name = "student")
    private Student student;


    @JsonIncludeProperties({"id","description"})
    @ManyToOne
    @MapsId("id")
    @JoinColumn(name="survey")
    private Survey survey;

    @JsonIncludeProperties({"id","text"})
    @ManyToOne
    @MapsId("id")
    @JoinColumn(name = "question")
    private Question question;


    @JsonIncludeProperties({"id","answerText"})
    @ManyToOne
    @MapsId("id")
    @JoinColumn(name="answer")
    private AnswerChoice answer;

}

