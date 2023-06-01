import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const BASE_URL = "http://localhost:8080";

/*
options = {success: true or false}

*/
export const ShowToast = (message, options) => {
  options?.success
    ? toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    : toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
};

/*


for student

user = {
  student_no: "111", 
  first_name: "asdasd",
  surname: "asd",
  e_mail: "asdasda",
  password: "adasda",
  department: "asda",
}

for ins

user = {
    "user_name":"hasangebes",
    "first_name":"Hasan",
    "surname":"Gebeş",
    "e_mail": "hasangebes@hacettepe.edu.tr",
    "password": "12345",
    "department": "Computer Engineering"
}

*/

//TODO:: in options onSuccess method relogin the user to fetch the newly added informations

export const EditUser = (user, dispatch, options) => {
  if (user.userType === "student") {
    const data = { ...user };

    axios.post(BASE_URL + "/api/students/update", data).then(
      (response) => {
        options?.onSuccess?.(response, user, dispatch);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
  } else if (user.userType === "instructor") {
    const data = { ...user };

    axios.post(BASE_URL + "/instructors/instructors/update", data).then(
      (response) => {
        options?.onSuccess?.(response, user, dispatch);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
  } else if (user.userType === "department manager") {
    const data = { ...user };
    axios.post(BASE_URL + "/instructors/instructors/update", data).then(
      (response) => {
        options?.onSuccess?.(response, user, dispatch);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
  }
};

export const DeleteUser = (user, options) => {
  if (user.userType === "student") {
    axios.delete(BASE_URL + `/api/students/delete/${user.student_no}`).then(
      (response) => {
        options?.onSuccess?.(response);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
  } else if (user.userType === "instructor") {
    const data = { ...user };

    axios.delete(BASE_URL + `/instructors/delete/${user.user_name}`).then(
      (response) => {
        options?.onSuccess?.(response);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
  } else if (user.userType === "department manager") {
    const data = { ...user };
    axios.post(BASE_URL + "/instructors/instructors/update", data).then(
      (response) => {
        options?.onSuccess?.(response);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
  }
};

export const ChangeDepManager = (depName, userName, options) => {
  axios
    .post(
      BASE_URL +
        `/v1/departments/changeInstructor?dept_name=${depName}&username=${userName}`
    )
    .then(
      (responsep) => {
        options?.onSuccess?.(responsep);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
};

export const SendEmailToAllStudents = (title, content, options) => {
  axios
    .post(BASE_URL + `/api/admins/sendEmail?title=${title}&content=${content}`)
    .then(
      (response) => {
        options?.onSuccess?.(response);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
};

/*

{
    "student_no": "172378",
    "first_name": "seyit",
    "surname": "kcygt",
    "e_mail": "asdasm",
    "password": "123456",
    "department":"Computer Engineering"

}

*/
export const SignUpStudent = (student, options) => {
  axios.post(BASE_URL + "/api/students/add", student).then(
    (response) => {
      options?.onSuccess?.(response);
    },
    (err) => {
      options?.onError?.(err);
    }
  );
};

/*

content of user 

for student
user = {
    "student_no": "01",
    "first_name": "Mehmet",
    "surname": "Gürbüz",
    "e_mail": "mehmetgurbuz@hacettepe.edu.tr",
    "password": "123456",
    "department":"Computer Engineering"
}

for inst

user = {
    "user_name":"csakbulut",
    "first_name":"Canan",
    "second_name":"Sedef",
    "surname":"Akbulut",
    "e_mail": "csakbulut@hacettepe.edu.tr",
    "password": "12345678",
    "department":"Computer Engineering"
}

*/

export const AddUser = (userType, user, dep, options) => {
  if (userType === "student") {
    axios.post(BASE_URL + "/api/students/add", user).then(
      (response) => {
        options?.onSuccess?.(response);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
  } else if (userType === "instructor") {
    axios.post(BASE_URL + "/instructors/add", user).then(
      (response) => {
        options?.onSuccess?.(response);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
  } else if (userType === "department manager") {
    axios.post(BASE_URL + "/instructors/add", user).then(
      (response) => {
        axios
          .post(
            BASE_URL +
              `/v1/departments/changeInstructor?dept_name=${dep}&username=${user.user_name}`
          )
          .then(
            (responsep) => {
              console.log(responsep);
              options?.onSuccess?.(responsep);
            },
            (err) => {
              options?.onError?.(err);
            }
          );
      },
      (err) => {
        options?.onError?.(err);
      }
    );
  }
};

export const GetSpecificUser = (userType, userId, options) => {
  if (userType === "student") {
    axios.get(BASE_URL + `/api/students/${userId}`).then(
      (response) => {
        options?.onSuccess?.(response);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
  } else {
    axios.get(BASE_URL + `/instructors/${userId}`).then(
      (response) => {
        options?.onSuccess?.(response);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
  }
};

export const GetUser = (options) => {
  axios.get(BASE_URL + "/api/students").then(
    (response) => {
      let user = [];

      response.data.map((s) => {
        return user.push({ ...s, type: "student", id: user.length });
      });
      axios.get(BASE_URL + "/instructors").then(
        (res) => {
          res.data.map((i) => {
            return user.push({ ...i, type: "Instructor", id: user.length });
          });
          options?.onSuccess?.(user);
        },
        (err) => {}
      );
    },
    (err) => {
      options?.onError?.(err);
    }
  );
};

export const GetSpecificDepartment = (depName, options) => {
  axios.get(BASE_URL + `/v1/departments/${depName}`).then(
    (response) => {
      options?.onSuccess?.(response);
    },
    (err) => {
      options?.onError?.(err);
    }
  );
};

/*

data = {
    "code": "BBM-456",
    "year": 2023,
    "semester":"Spring",
    "name":"Computer and Network Security"
}
*/
export const FetchAddCourse = (data, options) => {
  axios.post(BASE_URL + "/v1/course/add", data).then(
    (response) => {
      options?.onSuccess?.(response);
    },
    (err) => {
      options?.onError?.(err);
    }
  );
};

export const GetAllCoursesWithSemester = (semester, year, options) => {
  axios.get(BASE_URL + "/v1/course").then(
    (response) => {
      let courses = [];

      response.data.map((course) => {
        if (course.year === year && course.semester === semester) {
          courses.push(course);
        }
      });
      options?.onSuccess?.(courses);
    },
    (err) => {
      options?.onError?.(err);
    }
  );
};

/*
data = {
    "name":"dept1"
    
}
*/
export const AddDepartment = (data, options) => {
  axios.post(BASE_URL + "/api/departments/add", data).then(
    (response) => {
      options?.onSuccess?.(response);
    },
    (err) => {
      options?.onError?.(err);
    }
  );
};

export const GetAllDepartments = (options) => {
  axios.get(BASE_URL + "/v1/departments").then(
    (response) => {
      options?.onSuccess?.(response.data);
    },
    (err) => {
      options?.onError?.(err);
    }
  );
};
/*

  course = {
    code: "BBM-406",
    semester: "Spring",
    year: 2023,
  }


  options= {
    onSuccess: (res) => {
      responsa göre yap bişiler
    },

    onError: (err) => {
      errore göre yap bişiler
    }
  }
  */

export const FetchEnrollCourse = (student_no, course, options) => {
  var res = axios
    .post(
      BASE_URL +
        `/api/students/enrollcourse?student_no=${student_no}&course_id=${course.code}&semester=${course.semester}&year=${course.year}`
    )
    .then(
      (response) => {
        options?.onSuccess?.(response);
      },
      (err) => {
        options?.onError?.(err);
      }
    );

  //TODO: make this request a body or create more generic @Requestparams
  return res;
};

export const useFetchCourses = (options) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL + "/v1/course").then(
      (response) => {
        options?.onSuccess?.();
        setData({ courses: response.data, success: true });
      },
      (err) => setData({ error: err, success: false })
    );
  }, []);

  return {
    data,
  };
};

export const GetAllCourses = (options) => {
  axios.get(BASE_URL + "/v1/course").then(
    (response) => {
      options?.onSuccess?.(response);
    },
    (err) => options?.onError?.(err)
  );
};

export const FetchQuestionAddedByInstructor = (
  instructor_user_name,
  options
) => {
  axios.get(BASE_URL + `/v1/question/instructor/${instructor_user_name}`).then(
    (response) => {
      options?.onSuccess?.(response);
    },
    (err) => {
      options?.onError?.(err);
    }
  );
};

/*

user= {
  id: "alikaya"
}
*/

export const FetchPendingRequests = (options) => {
  //TODO: add users an attribute called active and banned so we can easily filter pending requests and banned users etc.

  axios.get(BASE_URL + "/api/students/inActives").then(
    (response) => {
      options?.onSuccess?.(response);
    },
    (err) => {
      options?.onError?.(err);
    }
  );
};

export const GrantRequestToStudent = (student_no, options) => {
  axios
    .get(BASE_URL + `/api/students/confirmStudent?studentNo=${student_no}`)
    .then(
      (response) => {
        options?.onSuccess?.(response);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
};

export const FetchAssignIntructorToCourse = (
  instructor_user_name,
  course,
  options
) => {
  axios
    .post(
      //add /api
      BASE_URL +
        `/instructors/teach?user_name=${instructor_user_name}&course_id=${course.code}&semester=${course.semester}&year=${course.year}`
    )
    .then(
      (response) => {
        options?.onSuccess?.(response);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
};

/*


questions = {
  width: 1300 (in px),

  columns : [
    {
      id: 0,
      title: "A",
      width: "100%",
      max_width:"200%",
      min_width: "50%"
    },

  ],

  items : 
    [
    {
        id: 0,
        question: "asdas",
        modified: true,
        questionOwnId: "id from backend"
        column: [
            {
                id: 0,
                title: "asdas",
                width: "100%",
                max_width: "200%",
                min_width: "50%",
                
            },
        
            {
                id: 1,
                title: "asdas",
                width: "100%",
                max_width: "200%",
                min_width: "50%",
                
            },
        ],
    },
]
  
}
*/

/*

item = {
  text: "tt",
  addedBy: "ins",
  answers: [
    {
      answerText: "adasd",
    }
  ]
}


*/

/*

course = {
  course_code : "BBM1231",
  semester: "Spring",
  year: 2023,
}

*/
export const UploadEvaluationFormQuestions = (
  evaluationData,
  instructor_user_name
) => {
  /*
  questions = {
    id: 1231,
    modified: true,
    question: "asdasdasd",
    questionOwnId: 1312 // this is the Id which a question has in the database and unique for each question.
    // it also check modified attr to upload a question to database or not.
    column: [
      "ANSWERSS"
    ]
  }


  */
  const questions = evaluationData.items.map(async (item) => {
    if (item.modified) {
      let i = { ...item };
      await axios
        .post(BASE_URL + "/v1/question/add", {
          text: item.question,
          addedBy: instructor_user_name,
          answers: item.column.map((ans) => {
            return {
              answerText: ans.title,
            };
          }),
        })
        .then((response) => {
          i.questionOwnId = response.data.id;
        });

      return i;
    } else {
      return item;
    }
  });

  return questions;
};

export const UploadEvaluationForm = (
  questions,
  instructor_user_name,
  course,
  due_date,
  options
) => {
  //TODO: add servery with questionOwnId's :D

  axios
    .post(BASE_URL + "/v1/survey/add", {
      description: "Evaluation Survey",
      dueDate: due_date,
      username: instructor_user_name,
      course_code: course.course_code,
      semester: course.semester,
      year: course.year,
      questionsId: questions.map((question) => {
        return question.questionOwnId;
      }),
    })
    .then(
      (response) => {
        options?.onSuccess?.(response);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
};

export const FetchForgetPassword = (student_no, options) => {
  axios.get(BASE_URL + `/api/students/forgetPass?studentNo=${student_no}`).then(
    (response) => {
      options?.onSuccess?.(response.data);
    },
    (err) => {
      options?.onError?.(err);
    }
  );
};

export const GetSurveyWithId = (surveyId, options) => {
  axios.get(BASE_URL + `/v1/survey/${surveyId}`).then(
    (response) => {
      options?.onSuccess?.(response);
    },
    (err) => {
      options?.onError?.(err);
    }
  );
};

export const GetStdeuntPercentWithId = (surveyId, options) => {
  axios.get(BASE_URL + `/v1/survey/countStudent${surveyId}`).then(
    (response) => {
      const enrolled = response.data["Cevap Veren Öğreci Sayısı"];
      const answered = response.data["Derse Kayıtlı Öğrenci Sayısı"];

      options?.onSuccess?.(Math.floor((enrolled / answered) * 100));
    },
    (err) => {}
  );
};

export const GetStudentAnswers = (surveyId, student_no, options) => {
  axios.get(BASE_URL + `/v1/answer/${surveyId}/${student_no}`).then(
    (response) => {
      options?.onSuccess?.(response.data);
    },
    (err) => {
      options?.onError?.(err);
    }
  );
};

export const AnswerEvaluation = (data, options) => {
  axios.post(BASE_URL + "/v1/answer/add", data).then(
    (response) => {
      options?.onSuccess?.(response);
    },
    (err) => {
      options?.onError?.(err);
    }
  );
};

export const FetchonGoingEvaluations = (options) => {
  axios.get(BASE_URL + "/v1/survey").then(
    (response) => {
      options?.onSuccess?.(response);
    },
    (err) => {}
  );
};

export const FetchonGoingEvaluationsWithStudentNo = (student_no, options) => {
  axios.get(BASE_URL + `/v1/survey/findAllByStudent/${student_no}`).then(
    (response) => {
      options?.onSuccess?.(response);
    },
    (err) => {
      options?.onError?.(err);
    }
  );
};

export const GetAllInstructors = (options) => {
  axios.get(BASE_URL + "/instructors").then(
    (response) => {
      options?.onSuccess?.(response);
    },
    (err) => {
      options?.onError?.(err);
    }
  );
};
