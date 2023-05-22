package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.IQuestionDao;
import com.CodeOfDuty.CourseEvaluation.model.AnswerChoice;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import com.CodeOfDuty.CourseEvaluation.model.Question;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionManager {

    private final IQuestionDao questionRepository;
    private final AnswerChoiceManager answerChoiceManager;

    private final InstructorManager instructorManager;


    public QuestionManager(IQuestionDao questionRepository, AnswerChoiceManager answerChoiceManager, InstructorManager instructorManager){
        this.questionRepository = questionRepository;
        this.answerChoiceManager = answerChoiceManager;
        this.instructorManager = instructorManager;
    }

    public List<Question> getAllQuestions(){
        return questionRepository.findAll();
    }

    public Question createQuestion(String text, String username, List<AnswerChoice> answers){
        Instructor instructor = instructorManager.getByUserName(username);
        Question question = Question.builder()
                .text(text)
                .addedBy(instructor)
                .answers(new ArrayList<>())
                .build();
        questionRepository.save(question);

        for(AnswerChoice choice: answers){
            AnswerChoice answerChoice = AnswerChoice.builder()
                            .answerText(choice.getAnswerText())
                            .question(question)
                            .build();
            question.addAnswer(answerChoice);
        }
        questionRepository.save(question);

        return question;
    }

    public Question findById(Integer id){
        return questionRepository.findById(id).orElse(null);
    }

    public List<Question> findAllAddedBy(String username){
        Instructor instructor = instructorManager.getByUserName(username);
        return questionRepository.findAllByAddedBy(instructor);
    }

    public void deleteQuestion(Integer id){
        questionRepository.deleteById(id);
    }






}
