package com.CodeOfDuty.CourseEvaluation.model;


import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table
public class Survey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String description;


    @Column(columnDefinition = "TIMESTAMP")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime submitDate;

    @Column(columnDefinition = "TIMESTAMP")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime dueDate;

    @JsonIncludeProperties({"user_name"})
    @ManyToOne
    @JoinColumn(name = "createdBy")
    private Instructor createdBy;

    @JsonIncludeProperties({"code","semester","year","name"})
    @ManyToOne
    @JoinColumns({
            @JoinColumn(name="course_code", referencedColumnName = "code"),
            @JoinColumn(name = "semester", referencedColumnName = "semester"),
            @JoinColumn(name = "year", referencedColumnName = "year")
    })
    private Course course;



    @JsonIgnoreProperties({"addedBy","studentAnswers"})
    @ManyToMany()
    @JoinTable(name = "survey_question",
            joinColumns = @JoinColumn(name = "surveyId"),
            inverseJoinColumns = @JoinColumn(name = "question")
    )
    private List<Question> questions;

    @JsonIgnore
    @OneToMany(mappedBy = "survey")
    private List<StudentAnswer> studentAnswers;

    /*
    @OneToMany(mappedBy = "survey")
    private List<QuestionSurvey> questionSurveys;*/


}
