import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:8080";

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

export const EditUser = async (user, dispatch, options) => {
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

    axios.post(BASE_URL + "/instructors/update", data).then(
      (response) => {
        options?.onSuccess?.(response, user, dispatch);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
  } else if (user.userType === "depManager") {
    const data = { ...user };
    axios.post(BASE_URL + "/api/departments/update", data).then(
      (response) => {
        options?.onSuccess?.(response);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
  }
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

export const AddUser = async (user, options) => {
  if (user.userType === "student") {
    axios.post(BASE_URL + "/api/students/add", user).then(
      (response) => {
        options?.onSuccess?.(response);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
  } else if (user.userType === "instructor") {
    axios.post(BASE_URL + "/instructors/add", user).then(
      (response) => {
        options?.onSuccess?.(response);
      },
      (err) => {
        options?.onError?.(err);
      }
    );
  }
};

/*

data = {
    "code": "BBM-456",
    "year": 2023,
    "semester":"Spring",
    "name":"Computer and Network Security"
}
*/
export const AddCourse = (data, options) => {
  axios.post(BASE_URL + "courses/add", data).then(
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

/*

  course = {
    id: "BBM-406",
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
        `/api/students/enrollcourse?student_no=${student_no}&course_id=${course.id}&semester=${course.semester}&year=${course.year}`
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
    axios.get(BASE_URL + "/courses").then(
      (response) => {
        options?.onSuccess?.();
        setData({ ...response.data, success: true });
      },
      (err) => setData({ ...err, success: false })
    );
  }, []);

  return {
    data,
  };
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

export const useFetchOnGoingEvaluation = (user, options) => {
  const [data, setData] = useState([]);

  //TODO: get user by no and get its course id and join the courses of that user with evaluation table

  useEffect(() => {
    axios.get(BASE_URL + `/api/evaluations?user_id=${user.id}`).then(
      (response) => {
        options?.onSuccess?.();
        setData({ ...response.data, success: true });
      },
      (err) => {
        setData({ ...err, success: false });
      }
    );

    return {
      data,
    };
  }, []);
};

export const useFetchPendingRequests = (options) => {
  const [data, setData] = useState([]);

  //TODO: add users an attribute called active and banned so we can easily filter pending requests and banned users etc.

  axios.get(BASE_URL + "/api/admin/pendingRequests").then(
    (response) => {
      options?.onSuccess?.();
      setData({ ...response.data, success: true });
    },
    (err) => {
      setData({ ...err, success: false });
    }
  );

  return {
    data,
  };
};

export const FetchAssignIntructorToCourse = (
  instructor_user_name,
  course,
  options
) => {
  var res = axios
    .post(
      //add /api
      BASE_URL +
        `/instructors/teach?user_name=${instructor_user_name}&course_id=${course.id}&semester=${course.semester}&year=${course.year}`
    )
    .then(
      (response) => {
        options?.onSuccess?.(response);
      },
      (err) => {
        options?.onError?.(err);
      }
    );

  return res;
};

export const FetchGetCourseOfInstructor = (instructor_user_name, options) => {};

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
