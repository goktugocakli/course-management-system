package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.IStudentAnswerDao;
import com.CodeOfDuty.CourseEvaluation.model.*;
import org.springframework.stereotype.Service;

@Service
public class StudentAnswerManager {

    private final IStudentAnswerDao studentAnswerRepository;
    private final StudentManager studentManager;
    private final SurveyManager surveyManager;

    private final QuestionManager questionManager;

    private final AnswerChoiceManager answerChoiceManager;


    public StudentAnswerManager(IStudentAnswerDao studentAnswerRepository, StudentManager studentManager, SurveyManager surveyManager, QuestionManager questionManager, AnswerChoiceManager answerChoiceManager) {
        this.studentAnswerRepository = studentAnswerRepository;
        this.studentManager = studentManager;
        this.surveyManager = surveyManager;
        this.questionManager = questionManager;
        this.answerChoiceManager = answerChoiceManager;
    }

    public StudentAnswer selectAnswer(String studentNo,
                                      Integer surveyId,
                                      Integer questionId,
                                      Integer answerId){

        Student student = studentManager.getByNo(studentNo);
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
}