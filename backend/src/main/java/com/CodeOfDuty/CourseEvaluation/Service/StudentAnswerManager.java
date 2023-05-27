package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.IStudentAnswerDao;
import com.CodeOfDuty.CourseEvaluation.model.*;
import org.springframework.stereotype.Service;

@Service
public class StudentAnswerManager {

    private final IStudentAnswerDao studentAnswerRepository;
    private final StudentService studentService;
    private final SurveyManager surveyManager;

    private final QuestionManager questionManager;

    private final AnswerChoiceManager answerChoiceManager;


    public StudentAnswerManager(IStudentAnswerDao studentAnswerRepository, StudentService studentService, SurveyManager surveyManager, QuestionManager questionManager, AnswerChoiceManager answerChoiceManager) {
        this.studentAnswerRepository = studentAnswerRepository;
        this.studentService = studentService;
        this.surveyManager = surveyManager;
        this.questionManager = questionManager;
        this.answerChoiceManager = answerChoiceManager;
    }

    public StudentAnswer selectAnswer(String studentNo,
                                      Integer surveyId,
                                      Integer questionId,
                                      Integer answerId){

        Student student = studentService.findById(studentNo);
        Survey survey = surveyManager.findById(surveyId);
        Question question = questionManager.findById(questionId);
        AnswerChoice answer= answerChoiceManager.findAnswerChoiceById(answerId);
        StudentAnswerKey answerKey = StudentAnswerKey.builder()
                .studentNo(studentNo)
                .surveyId(surveyId)
                .questionId(questionId)
                .answerId(answerId)
                .build();
        StudentAnswer studentAnswer = StudentAnswer.builder()
                .id(answerKey)
                .student(student)
                .question(question)
                .survey(survey)
                .answer(answer)
                .build();

        return studentAnswerRepository.save(studentAnswer);
    }

    public StudentAnswer findStudentAnswerBySurveyAndStudent(Integer surveyId, String studentNo){
        Student student=studentService.findById(studentNo);
        Survey survey=surveyManager.findById(surveyId);
        return studentAnswerRepository.findStudentAnswerBySurveyAndStudent(survey,student);
    }
}
