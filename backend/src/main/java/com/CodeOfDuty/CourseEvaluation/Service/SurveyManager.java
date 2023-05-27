package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.ISurveyDao;
import com.CodeOfDuty.CourseEvaluation.DTO.SurveyAnswerDTO;
import com.CodeOfDuty.CourseEvaluation.DTO.SurveyDTO;
import com.CodeOfDuty.CourseEvaluation.DTO.SurveyQuestionDTO;
import com.CodeOfDuty.CourseEvaluation.model.Course;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import com.CodeOfDuty.CourseEvaluation.model.Question;
import com.CodeOfDuty.CourseEvaluation.model.Survey;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class SurveyManager {

    private final ISurveyDao surveyRepository;
    private final QuestionManager questionManager;
    private final InstructorService instructorService;
    private final CourseService courseService;


    public SurveyManager(ISurveyDao surveyRepository, QuestionManager questionManager, InstructorService instructorService, CourseService courseService) {
        this.surveyRepository = surveyRepository;
        this.questionManager = questionManager;
        this.instructorService = instructorService;
        this.courseService = courseService;
    }

    public Survey createSurvey(String description, LocalDateTime dueDate, String username,
                               String course_code, String semester, int year,
                               List<Integer> questionsId ){
        Instructor instructor = instructorService.findById(username);
        Course course = courseService.findById(course_code,semester,year);

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

    public Survey findByCourseAndInstructor(String course_code, String semester, Integer year, String instructor_username){
        Course course = courseService.findById(course_code,semester,year);
        Instructor instructor = instructorService.findById(instructor_username);
        return surveyRepository.findByCourseAndCreatedBy(course,instructor).orElse(null);
    }

    public Long countStudentsBySurvey(Integer surveyId){
        Long result = surveyRepository.countStudentsBySurvey(surveyId);
        return result;
    }

    public SurveyDTO countAnswersBySurvey(Integer surveyId){
        SurveyDTO surveyDTO = new SurveyDTO();


        Survey survey = findById(surveyId);
        surveyDTO.setDescription(survey.getDescription());
        surveyDTO.setQuestions(new ArrayList<>());

        List<Object[]> results = surveyRepository.countAnswerBySurvey(surveyId);
        for(Object[] result: results){
            String question = (String) result[0];
            String answer = (String) result[1];
            Long count = (Long) result[2];

            SurveyAnswerDTO answerDTO = new SurveyAnswerDTO();

            SurveyQuestionDTO questionDTO = null;

            answerDTO.setAnswer(answer);
            answerDTO.setCount(count);
            boolean flag=false;
            for(SurveyQuestionDTO surveyQuestion: surveyDTO.getQuestions()){
                if(surveyQuestion.getQuestionText().equals(question)){
                    flag=true;
                    questionDTO = surveyQuestion;
                    break;
                }
            }

            if(questionDTO==null){
                questionDTO = new SurveyQuestionDTO();
                questionDTO.setQuestionText(question);
                questionDTO.setAnswers(new ArrayList<>());
            }
            questionDTO.addAnswer(answerDTO);
            if(!flag){
                surveyDTO.addSurveyQuestionDTO(questionDTO);
            }

        }
        return surveyDTO;
    }

    public List<Object[]> deneme2(Integer surveyId){
        return surveyRepository.deneme2(surveyId);
    }




}
