import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:8080";

export const Login = async (data) => {
  const response = await axios.post(BASE_URL + "/login", data);

  return response;
};

export const EditUser = async (userType, data) => {
  if (userType === "student") {
    const response = await axios.post(BASE_URL + "/api/students/update", data);
    return response;
  } else if (userType === "instructor") {
    const response = await axios.post(
      BASE_URL + "/api/instructors/update",
      data
    );
    return response;
  } else if (userType === "depManager") {
    const response = await axios.post(
      BASE_URL + "/api/departments/update",
      data
    );
    return response;
  }
};

export const AddUser = async (userType, data) => {
  if (userType === "student") {
    const response = await axios.post(BASE_URL + "/api/students/add", data);
    return response;
  } else if (userType === "instructor") {
    const response = await axios.post(BASE_URL + "/api/instructors/add", data);
    return response;
  } else if (userType === "depManager") {
    const response = await axios.post(BASE_URL + "/api/departments/add", data);
    return response;
  }
};

export const AddCourse = async (data) => {
  var response = await axios.post(BASE_URL + "/courses/add", data);
  return response;
};

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

export const useFetchOnGoingEvaluation = (options, user) => {
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

export const useFetchInstructorEvaluation = (options) => {
  const [data, setData] = useState([]);

  axios.get(BASE_URL + "/api/instructor/evaluationForms").then(
    (response) => {
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

export const UploadEvaluationForm = (options, evaluationData) => {
  const [data, setData] = useState({});
  axios
    .post(BASE_URL + "/api/instructors/uploadEvaluationForm", evaluationData)
    .then(
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
