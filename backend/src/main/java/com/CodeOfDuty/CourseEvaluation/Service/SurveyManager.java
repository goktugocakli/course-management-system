package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.ISurveyDao;
import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import com.CodeOfDuty.CourseEvaluation.model.Question;
import com.CodeOfDuty.CourseEvaluation.model.Survey;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class SurveyManager {

    private final ISurveyDao surveyRepository;
    private final QuestionManager questionManager;
    private final InstructorManager instructorManager;
    private final CourseManager courseManager;

    public SurveyManager(ISurveyDao surveyRepository, QuestionManager questionManager, InstructorManager instructorManager, CourseManager courseManager) {
        this.surveyRepository = surveyRepository;
        this.questionManager = questionManager;
        this.instructorManager = instructorManager;
        this.courseManager = courseManager;
    }

    public Survey createSurvey(String description, LocalDateTime dueDate, String username,
                               String course_code, String semester, int year,
                               List<Integer> questionsId ){
        Instructor instructor = instructorManager.getByUserName(username);
        Course course = courseManager.getByCourse(course_code,semester,year);

        List<Question> questionList = new ArrayList<>();
        for (Integer id: questionsId){
            Question question=questionManager.findById(id);
            questionList.add(question);
            }
        Survey survey = Survey.builder()
                .description(description)
                .createdBy(instructor)
                .dueDate(dueDate)
                .course(course)
                .questions(questionList)
                .submitDate(LocalDateTime.now())
                .build();

        return surveyRepository.save(survey);
    }

    public List<Survey> getAllSurveys(){
        return surveyRepository.findAll();
    }

    public Survey findById(Integer id){return surveyRepository.findById(id).orElse(null);}


}
