package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.IQuestionDao;
import com.CodeOfDuty.CourseEvaluation.model.AnswerChoice;
import com.CodeOfDuty.CourseEvaluation.model.Instructor;
import com.CodeOfDuty.CourseEvaluation.model.Question;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionManager {

    private final IQuestionDao questionRepository;
    private final AnswerChoiceManager answerChoiceManager;


    public QuestionManager(IQuestionDao questionRepository, AnswerChoiceManager answerChoiceManager){
        this.questionRepository = questionRepository;
        this.answerChoiceManager = answerChoiceManager;
    }

    public List<Question> getAllQuestions(){
        return questionRepository.findAll();
    }

    public Question createQuestion(String text, Instructor instructor, List<AnswerChoice> answers){
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

        return question;
/*
        List<AnswerChoice> answerList=new ArrayList<>();

        for(AnswerChoice choice: answers){
            AnswerChoice answerChoice=answerChoiceManager.createChoice(question, choice.getAnswerText());
            answerList.add(answerChoice);
        }
        question.setAnswers(answerList);
        return question;*/
    }

    public Optional<Question> findById(Integer id){
        return questionRepository.findById(id);
    }






}
