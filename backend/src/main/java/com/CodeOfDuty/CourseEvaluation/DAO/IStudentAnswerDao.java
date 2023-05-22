package com.CodeOfDuty.CourseEvaluation.DAO;

import com.CodeOfDuty.CourseEvaluation.model.StudentAnswer;
import com.CodeOfDuty.CourseEvaluation.model.StudentAnswerKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IStudentAnswerDao extends JpaRepository<StudentAnswer, StudentAnswerKey> {
}
