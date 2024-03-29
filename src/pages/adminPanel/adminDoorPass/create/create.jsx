import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme } from "../../../../features/theme/themeSlice";
import StyledTextField from "../../../../components/StyledTextField";
import { useNavigate } from "react-router-dom";
import { CreateDoorPass } from "../adminDoorPassAPI";
import { useDoorPasses } from "../../../../features/doorPasses/useDoorPasses";

import "./create.css";

import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import SelectForm from "../../components/selectForm/selectForm";
import CreateDoorPopUp from "../../components/createDoorPopUp/createDoorPopUp";
import useAlert from "../../../../features/alert/useAlert";

const Create = () => {
  const theme = useSelector(selectTheme);
  const [name, setName] = React.useState("");
  const [minimumAccessLevel, setMinimumAccessLevel] = React.useState({});
  const [accessCode, setAccessCode] = React.useState(null);
  const [showErrorForName, setShowErrorForName] = React.useState(null);
  const { doorPasses, refresh } = useDoorPasses();

  const navigate = useNavigate();
  const { createAlert, setAlert } = useAlert();

  const accessLevelOptions = [
    {
      id: 0,
      name: "Admin",
    },
    {
      id: 1,
      name: "Učitelj",
    },
    {
      id: 2,
      name: "Učenec",
    },
  ];

  const handleAccessLevelChange = (option) => {
    setMinimumAccessLevel(option.id);
  };

  const handleCreate = async () => {
    if (showErrorForName) {
      setAlert("Učilnica s tem imenom že obstaja!", "error");
      return;
    }
    const data = await createAlert(
      CreateDoorPass(name, minimumAccessLevel),
      "Učilnica je bila uspešno ustvarjena"
    );
    if (data.status === 201) {
      setAccessCode(data.data.access_secret);
    }
    refresh();
  };

  const handleCancel = () => {
    setAccessCode(null);
    setName("");
    navigate("/admin/door-pass");
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    if (!doorPasses) return;
    if (doorPasses.find((doorPass) => doorPass.name_id === newName)) {
      setShowErrorForName("Učilnica s tem imenom že obstaja!");
    } else {
      setShowErrorForName(null);
    }
  };

  return (
    <div className={`admin-door-pass-create ${theme}`}>
      <CreateDoorPopUp
        code={accessCode}
        setCode={setAccessCode}
        close={handleCancel}
      />
      <div className="admin-door-pass-create-form">
        <div className="admin-door-pass-create-form-title">
          <MeetingRoomOutlinedIcon />
          <h1>Dodajanje novih vrat</h1>
        </div>
        <StyledTextField
          label="Učilnica"
          variant="standard"
          color="primary"
          type="text"
          error={showErrorForName !== null}
          helperText={showErrorForName}
          value={name}
          onChange={handleNameChange}
          fontcolor="currentColor"
        />
        <SelectForm
          title={"MSS"}
          arrayOfOptions={accessLevelOptions}
          defualtSelectedID={1}
          onChange={handleAccessLevelChange}
        />
        <div className="admin-door-pass-create-form-button">
          <button onClick={handleCancel} id="cancel">
            Prekliči
          </button>
          <button onClick={handleCreate} id="create">
            Ustvari
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
