package com.CodeOfDuty.CourseEvaluation.Service;

import com.CodeOfDuty.CourseEvaluation.DAO.IAnswerChoiceDao;
import com.CodeOfDuty.CourseEvaluation.model.AnswerChoice;
import com.CodeOfDuty.CourseEvaluation.model.Question;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerChoiceManager {
    private final IAnswerChoiceDao answerChoiceRepository;



    public AnswerChoiceManager(IAnswerChoiceDao answerChoiceRepository) {
        this.answerChoiceRepository = answerChoiceRepository;

    }

    public List<AnswerChoice> getAllAnswerChoice(){
        return answerChoiceRepository.findAll();
    }

    public AnswerChoice findAnswerChoiceById(Integer id){
        return answerChoiceRepository.findById(id).orElse(null);
    }



    public AnswerChoice createChoice(Question question, String answerText){
        AnswerChoice choice = new AnswerChoice();
        choice.setAnswerText(answerText);
        choice.setQuestion(question);
        return answerChoiceRepository.save(choice);
    }


}
