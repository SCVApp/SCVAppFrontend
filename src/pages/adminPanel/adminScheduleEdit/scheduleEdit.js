import axios from "axios";

const GetScheduleData = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/admin/scheduleSchools`,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const ChangeScheduleURL = async (schoolID, url) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/admin/scheduleSchools/${schoolID}`,
      {
        uniLink: url,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    return err.response;
  }
};

const ChangeClassID = async (schoolID, classID, className) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/admin/scheduleSchools/${schoolID}`,
      {
        classId: classID,
        className: className,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    return err.response;
  }
};

const DeleteClassID = async (schoolID, className) => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/admin/scheduleSchools/${schoolID}/${className}`,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    return err.response;
  }
};

const CreateClass = async (schoolID, className, classID) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/admin/scheduleSchools/${schoolID}`,
      {
        className: className,
        classId: classID,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    return err.response;
  }
};

export {
  GetScheduleData,
  ChangeScheduleURL,
  ChangeClassID,
  DeleteClassID,
  CreateClass,
};