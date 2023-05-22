package com.CodeOfDuty.CourseEvaluation.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
@JsonIgnoreProperties({"surveys"})
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String text;

    @ManyToOne
    @JoinColumn(name = "addedBy")
    private Instructor addedBy;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<AnswerChoice> answers;


    @ManyToMany(mappedBy = "questions", fetch = FetchType.LAZY)
    private List<Survey> surveys;
/*
    @OneToMany(mappedBy = "question")
    List<QuestionSurvey> questionSurveys;*/

    public void addAnswer(AnswerChoice answer){
        answers.add(answer);
    }


}
